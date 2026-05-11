const AI_SERVICE_CONFIG = {
  model: "gpt-5-nano",
  endpoint: "https://api.openai.com/v1/responses",
  mode: localStorage.getItem("brighterly_ai_mode") || "mock",
  // Paste a temporary demo key here if you want direct API calls in the browser.
  // Do not use this for anything beyond a private one-off demo.
  browserApiKey: ""
};

const TASK_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    label: { type: "string" },
    prompt: { type: "string" },
    answer: { type: "string" },
    reason: { type: "string" }
  },
  required: ["label", "prompt", "answer", "reason"]
};

const TASK_SET_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    tasks: {
      type: "array",
      minItems: 5,
      maxItems: 5,
      items: TASK_SCHEMA
    }
  },
  required: ["tasks"]
};

const SYSTEM_PROMPT = `
You are an expert US Grade 5 math curriculum assistant for Brighterly.
Create short practice tasks for a student learning Common Core 5.NF.A.1 and 5.NF.A.2:
adding and subtracting fractions with unlike denominators, including word problems.

Rules:
- Output only valid JSON matching the requested schema.
- Keep language age-appropriate for a US 5th grader.
- Do not solve by giving multi-step explanations unless the schema asks for an answer.
- Use simple numbers and realistic school contexts.
- Keep the teacher in control: generated tasks are drafts for teacher validation.
- Avoid trick wording and avoid advanced topics outside Grade 5.
`;

function getApiKey() {
  return AI_SERVICE_CONFIG.browserApiKey || localStorage.getItem("OPENAI_API_KEY") || "";
}

function getMode() {
  return localStorage.getItem("brighterly_ai_mode") || AI_SERVICE_CONFIG.mode;
}

function saveBrowserConfig({ mode, apiKey }) {
  if (mode) localStorage.setItem("brighterly_ai_mode", mode);
  if (apiKey !== undefined) {
    if (apiKey) localStorage.setItem("OPENAI_API_KEY", apiKey);
    else localStorage.removeItem("OPENAI_API_KEY");
  }
}

function buildResponsePayload({ userPrompt, schema, schemaName }) {
  return {
    model: AI_SERVICE_CONFIG.model,
    input: [
      {
        role: "system",
        content: [{ type: "input_text", text: SYSTEM_PROMPT.trim() }]
      },
      {
        role: "user",
        content: [{ type: "input_text", text: userPrompt }]
      }
    ],
    text: {
      format: {
        type: "json_schema",
        name: schemaName,
        schema,
        strict: true
      }
    }
  };
}

function extractOutputText(responseJson) {
  if (responseJson.output_text) return responseJson.output_text;

  const textItem = responseJson.output
    ?.flatMap((item) => item.content || [])
    ?.find((content) => content.type === "output_text" || content.text);

  return textItem?.text || "";
}

async function callOpenAI(payload) {
  const mode = getMode();

  if (mode !== "direct") {
    return mockOpenAI(payload);
  }

  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error("OpenAI API key is empty. Add a temporary demo key in AI settings or in js/ai-service.js.");
  }

  const response = await fetch(AI_SERVICE_CONFIG.endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`OpenAI request failed: ${response.status} ${message}`);
  }

  return response.json();
}

async function requestJson({ userPrompt, schema, schemaName }) {
  const payload = buildResponsePayload({ userPrompt, schema, schemaName });
  const responseJson = await callOpenAI(payload);

  if (getMode() === "mock") {
    return responseJson;
  }

  const outputText = extractOutputText(responseJson);
  if (!outputText) throw new Error("OpenAI response did not contain output text.");
  return JSON.parse(outputText);
}

async function simplifyTask(task) {
  return requestJson({
    schema: TASK_SCHEMA,
    schemaName: "simplified_math_task",
    userPrompt: `
Simplify this Grade 5 fraction task while preserving the same misconception.
Make it easier, shorter, and suitable for a quick post-lesson check.

Current task:
${JSON.stringify(task, null, 2)}
`
  });
}

async function generateAlternativeTask(task) {
  return requestJson({
    schema: TASK_SCHEMA,
    schemaName: "alternative_math_task",
    userPrompt: `
Generate one alternative Grade 5 task for the same skill and misconception.
Do not reuse the same numbers. Keep it solvable in under 90 seconds.

Current task:
${JSON.stringify(task, null, 2)}
`
  });
}

async function generatePracticeSet(context) {
  return requestJson({
    schema: TASK_SET_SCHEMA,
    schemaName: "practice_task_set",
    userPrompt: `
Generate exactly 5 short practice tasks for the first 24 hours after a live lesson.
The teacher will validate the tasks before sending them to the student.

Context:
${JSON.stringify(context, null, 2)}

Task mix:
1 common denominator question
1 direct addition problem
1 find-the-mistake question
1 US school word problem
1 subtraction or missing-number step
`
  });
}

function mockOpenAI(payload) {
  const prompt = JSON.stringify(payload).toLowerCase();

  if (prompt.includes("practice_task_set")) {
    return {
      tasks: [
        {
          label: "Общий знаменатель",
          prompt: "Какой общий знаменатель подойдёт для 1/2 + 1/3?",
          answer: "6",
          reason: "Упрощённая проверка выбора одинаковых частей."
        },
        {
          label: "Сложение дробей",
          prompt: "Реши: 1/2 + 1/3",
          answer: "5/6",
          reason: "Проверяем перенос общего знаменателя в вычисление."
        },
        {
          label: "Поиск ошибки",
          prompt: "Ученик написал: 1/3 + 1/3 = 2/6. Почему это неверно?",
          answer: "Знаменатель остаётся 3, потому что части уже одинаковые.",
          reason: "Показывает, что знаменатель не всегда меняется."
        },
        {
          label: "Текстовая задача",
          prompt: "A student read 1/2 hour on Monday and 1/3 hour on Tuesday. How many hours did she read?",
          answer: "5/6 hour",
          reason: "Тот же навык в простом школьном контексте."
        },
        {
          label: "Вычитание",
          prompt: "Заверши шаг: 3/4 - 1/2 = 3/4 - ?/4",
          answer: "2",
          reason: "Готовит к вычитанию с общим знаменателем."
        }
      ]
    };
  }

  if (prompt.includes("simplified_math_task")) {
    return {
      label: "Упрощённая задача",
      prompt: "Реши: 1/2 + 1/4",
      answer: "3/4",
      reason: "Упрощено: один знаменатель уже является кратным второго."
    };
  }

  return {
    label: "Альтернативная задача",
    prompt: "Реши: 2/3 + 1/6",
    answer: "5/6",
    reason: "Новая задача на тот же навык без повторения исходных чисел."
  };
}

window.BrighterlyAI = {
  config: AI_SERVICE_CONFIG,
  saveBrowserConfig,
  getApiKey,
  getMode,
  simplifyTask,
  generateAlternativeTask,
  generatePracticeSet
};
