const aiTasks = [
  {
    label: "Common denominator",
    prompt: "Which common denominator works for 1/3 + 1/4?",
    answer: "12",
    reason: "During the lesson, the student tried to add fractions without converting them to equal-sized parts."
  },
  {
    label: "Adding fractions",
    prompt: "Solve: 1/3 + 1/4",
    answer: "7/12",
    reason: "Checks whether the student can use the common denominator in the calculation."
  },
  {
    label: "Find the mistake",
    prompt: "A student wrote: 1/2 + 2/5 = 3/7. Why is this incorrect?",
    answer: "You cannot add denominators. First, find a common denominator.",
    reason: "This was the main mistake at the end of the lesson."
  },
  {
    label: "Word problem",
    prompt: "Mia used 2/3 cup of oats and 1/4 cup of nuts. How many cups did she use in total?",
    answer: "11/12 cup",
    reason: "The same skill in a familiar US school context."
  },
  {
    label: "Subtraction",
    prompt: "Complete the step: 3/4 - 1/6 = 9/12 - ?/12",
    answer: "2",
    reason: "Prepares the student for mixed practice during the week."
  }
];

let reviewTasks = aiTasks.map((task) => ({ ...task }));

const weekPlan = [
  {
    day: "Mon",
    focus: "Common denominator",
    tasks: ["2/5 + 1/10", "3/8 + 1/4"],
    status: "Available"
  },
  {
    day: "Tue",
    focus: "Subtraction",
    tasks: ["5/6 - 1/3", "7/10 - 1/5"],
    status: "Opens tomorrow"
  },
  {
    day: "Wed",
    focus: "Word problems",
    tasks: ["3/4 cup - 1/3 cup", "2/3 mile + 1/6 mile"],
    status: "2-3 tasks"
  },
  {
    day: "Thu",
    focus: "Mixed numbers",
    tasks: ["1 1/2 + 2/3", "2 1/4 - 5/6"],
    status: "2-3 tasks"
  },
  {
    day: "Fri",
    focus: "Weekly check",
    tasks: ["Find the mistake", "Solve a problem", "Explain one step"],
    status: "Final practice"
  }
];

const warmupExamples = [
  {
    title: "Rule",
    body: "To add fractions, the parts must be the same size. That is why we find a common denominator first."
  },
  {
    title: "Example",
    body: "1/3 + 1/4 = 4/12 + 3/12 = 7/12"
  },
  {
    title: "Next step",
    body: "2 x 3/4 can be shown as 3/4 + 3/4. This connects repeated addition to multiplying a fraction by a whole number."
  }
];

const lessonSummary = {
  studentName: "Lily",
  topic: "adding fractions with unlike denominators",
  duration: "45 min",
  totalTasks: 8,
  independentTasks: 5,
  guidedTasks: 2,
  repeatTasks: 1,
  aiDraftReady: "2 min",
  parentDelivery: "within 5 min",
  strengths: [
    "finds common denominators quickly in simple examples",
    "connects visual models to written fraction work"
  ],
  focusAreas: [
    "sometimes adds denominators directly",
    "needs to check whether the answer is reasonable"
  ],
  nextPractice: [
    "5 short tasks in the first 24 hours after the lesson",
    "2-3 tasks per day before the next lesson"
  ]
};

const features = {
  practice: {
    kicker: "Функція 01",
    title: "Тиждень закріплення",
    description:
      "ШІ готує практику за підсумками уроку, викладач перевіряє завдання, учень проходить три короткі етапи між заняттями.",
    roles: [
      {
        id: "teacher",
        label: "Викладач",
        appLabel: "Teacher",
        path: "teacher/practice-week",
        nav: ["Lesson", "AI Tasks", "Week", "Warm-up"],
        screens: [
          {
            type: "teacher-ai-review",
            title: "Перевірка добірки ШІ",
            caption: "До відправлення учню",
            appTitle: "Review AI Practice Drafts",
            appAction: "Approve 5 Tasks",
            notes: [
              "AI drafts tasks from lesson mistakes",
              "Teacher approves or edits every task",
              "The student sees practice as a continuation of the lesson"
            ]
          },
          {
            type: "teacher-week-plan",
            title: "План практики на тиждень",
            caption: "2-3 завдання на день",
            appTitle: "Weekly Practice Plan",
            appAction: "Save Plan",
            notes: [
              "Same task pool, different practice mode",
              "Lives limit retries inside one daily session",
              "A day pass protects the learning streak"
            ]
          },
          {
            type: "teacher-before-lesson",
            title: "Сигнал перед уроком",
            caption: "За 10 хвилин до заняття",
            appTitle: "Pre-Lesson Signal",
            appAction: "Open Lesson Plan",
            notes: [
              "Teacher sees how the student warmed up",
              "Weekly mistakes feed into the next lesson opening",
              "The lesson starts with data, not guesses"
            ]
          }
        ]
      },
      {
        id: "student",
        label: "Учень",
        appLabel: "Student",
        path: "student/practice-week",
        nav: ["Today", "Week", "Warm-up", "Streak"],
        screens: [
          {
            type: "student-recap",
            title: "Швидке закріплення",
            caption: "Протягом 24 годин після уроку",
            appTitle: "Quick Review",
            appAction: "Answer",
            notes: [
              "Up to 5 tasks focused on weak spots",
              "5-7 minutes without feeling like heavy homework",
              "AI explains mistakes in simple steps"
            ]
          },
          {
            type: "student-week",
            title: "Практика протягом тижня",
            caption: "2-3 завдання на день",
            appTitle: "Weekly Practice",
            appAction: "Start Today",
            notes: [
              "Daily sessions stay short",
              "Lives apply only inside one practice attempt",
              "Hint charges are spent on deeper help"
            ]
          },
          {
            type: "student-warmup",
            title: "Розігрів перед уроком",
            caption: "За 10 хвилин до заняття",
            appTitle: "Pre-Lesson Warm-Up",
            appAction: "I'm Ready",
            notes: [
              "Short cheat sheet with needed rules",
              "Next lesson plan",
              "Simple preview examples"
            ]
          }
        ]
      }
    ]
  },
  summary: {
    kicker: "Функція 02",
    title: "Підсумки уроку для батьків",
    description:
      "ШІ збирає короткі підсумки уроку, викладач перевіряє факти й тон, батьки швидко бачать прогрес дитини та наступний крок.",
    roles: [
      {
        id: "parent",
        label: "Батьки",
        appLabel: "Parent",
        path: "parent/lesson-summary",
        nav: ["Summary", "Progress", "Tasks", "Billing"],
        screens: [
          {
            type: "parent-summary",
            title: "Підсумки уроку",
            caption: "Ключові моменти й теми",
            appTitle: "Lesson Summary",
            appAction: "Open Progress",
            notes: ["Reviewed by the teacher", "Parent receives the summary within 5 minutes", "Connected to post-lesson practice"]
          },
          {
            type: "parent-progress",
            title: "Прогрес дитини",
            caption: "Динаміка за темами",
            appTitle: "Child Progress",
            appAction: "View Tasks",
            notes: ["Focused on outcomes", "No micromanagement", "Clear value for subscription renewal"]
          }
        ]
      },
      {
        id: "teacher",
        label: "Викладач",
        appLabel: "Teacher",
        path: "teacher/parent-summary",
        nav: ["Lesson", "Summary", "Edits", "Send"],
        screens: [
          {
            type: "teacher-summary-check",
            title: "Перевірка підсумків",
            caption: "Перед відправленням батькам",
            appTitle: "Summary Review",
            appAction: "Send to Parent",
            notes: ["AI prepares a draft in a few minutes", "Teacher verifies facts", "Parent receives a clear next step"]
          }
        ]
      }
    ]
  },
  parent: {
    kicker: "Функція 03",
    title: "Панель досягнень",
    description:
      "Батьки бачать прогрес дитини, виконані завдання, серії та динаміку без зайвого контролю.",
    roles: [
      {
        id: "parent",
        label: "Батьки",
        appLabel: "Parent",
        path: "parent/achievements",
        nav: ["Overview", "Subjects", "Streaks", "Challenge"],
        screens: [
          {
            type: "parent-achievements",
            title: "Огляд досягнень",
            caption: "Стан тижня",
            appTitle: "Achievement Overview",
            appAction: "Open Details",
            notes: ["Parent acts as a supporter", "Progress is visible", "Less anxiety between lessons"]
          },
          {
            type: "parent-subjects",
            title: "Динаміка за предметами",
            caption: "Математика й англійська",
            appTitle: "Subject Progress",
            appAction: "View History",
            notes: ["Monthly progress", "Clear subject areas", "Connected to lesson summaries"]
          }
        ]
      }
    ]
  },
  game: {
    kicker: "Функція 04",
    title: "Ігрові механіки",
    description:
      "Серії днів, життя, заряд підказок і пропуски дня підтримують практику, але не карають дитину надто жорстко.",
    roles: [
      {
        id: "student",
        label: "Учень",
        appLabel: "Student",
        path: "student/streaks",
        nav: ["Today", "Streak", "Challenge", "Rewards"],
        screens: [
          {
            type: "student-game",
            title: "Серія та життя",
            caption: "Регулярність без зайвого тиску",
            appTitle: "Streaks and Lives",
            appAction: "Continue Streak",
            notes: ["Daily lives", "Hint charges", "Day pass protects the streak"]
          },
          {
            type: "student-tournament",
            title: "Щотижневе змагання",
            caption: "Бали за корисну практику",
            appTitle: "Weekly Challenge",
            appAction: "View Ranking",
            notes: ["Comparison without pressure", "Points for useful effort", "Weekly wrap-up"]
          }
        ]
      }
    ]
  },
  ai: {
    kicker: "Функція 05",
    title: "Налаштування ШІ",
    description:
      "У першій версії ШІ генерує завдання та пояснення, але викладач перевіряє добірку до відправлення учню.",
    roles: [
      {
        id: "teacher",
        label: "Викладач",
        appLabel: "Teacher",
        path: "teacher/ai-settings",
        nav: ["Rules", "Difficulty", "Review", "History"],
        screens: [
          {
            type: "teacher-ai-settings",
            title: "Правила генерації",
            caption: "Що ШІ може робити сам",
            appTitle: "Generation Rules",
            appAction: "Save Rules",
            notes: [
              "AI cannot send tasks without approval",
              "Level: US Grade 5",
              "Topic: fractions with unlike denominators"
            ]
          }
        ]
      }
    ]
  }
};

const featureTabs = document.querySelectorAll(".feature-tab");
const roleSwitcher = document.querySelector("#role-switcher");
const screenList = document.querySelector("#screen-list");
const featureKicker = document.querySelector("#feature-kicker");
const featureTitle = document.querySelector("#feature-title");
const featureDescription = document.querySelector("#feature-description");
const appRoleLabel = document.querySelector("#app-role-label");
const browserUrl = document.querySelector("#browser-url");
const screenRole = document.querySelector("#screen-role");
const screenTitle = document.querySelector("#screen-title");
const screenAction = document.querySelector("#screen-action");
const screenNotes = document.querySelector("#screen-notes");
const appNav = document.querySelector(".app-nav nav");
const mockMain = document.querySelector("#mock-main");

const state = {
  featureId: "practice",
  roleIndex: 0,
  screenIndex: 0
};

function getCurrentFeature() {
  return features[state.featureId];
}

function getCurrentRole() {
  return getCurrentFeature().roles[state.roleIndex];
}

function getCurrentScreen() {
  return getCurrentRole().screens[state.screenIndex];
}

function taskRows() {
  return reviewTasks
    .map(
      (task, index) => `
        <article class="task-review-card">
          <div class="task-review-head">
            <span class="task-index">${index + 1}</span>
            <div>
              <strong>${task.label}</strong>
              <small>${task.reason}</small>
            </div>
          </div>
          <p class="task-prompt">${task.prompt}</p>
          <div class="task-answer">Expected answer: <strong>${task.answer}</strong></div>
          <div class="task-actions">
            <button type="button" data-ai-action="keep" data-task-index="${index}">Keep</button>
            <button type="button" data-ai-action="simplify" data-task-index="${index}">Simplify with AI</button>
            <button type="button" data-ai-action="alternative" data-task-index="${index}">Replace with AI</button>
          </div>
        </article>
      `
    )
    .join("");
}

function weekCards() {
  return weekPlan
    .map(
      (day, index) => `
        <article class="week-card${index === 0 ? " is-current" : ""}">
          <div class="week-day">${day.day}</div>
          <strong>${day.focus}</strong>
          <small>${day.status}</small>
          <ul>
            ${day.tasks.map((task) => `<li>${task}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function warmupCards() {
  return warmupExamples
    .map(
      (item) => `
        <article class="rule-card">
          <span>${item.title}</span>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");
}

function listItems(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function metricCards(metrics) {
  return metrics
    .map(
      (metric) => `
        <div class="metric-card">
          <strong>${metric.value}</strong>
          <span>${metric.label}</span>
        </div>
      `
    )
    .join("");
}

function renderMock(screen) {
  const fallback = `
    <div class="mock-empty">
      <span class="empty-icon" aria-hidden="true"></span>
      <strong>The web screen will appear here</strong>
      <small>This frame supports multiple roles and screens inside one feature.</small>
    </div>
  `;

  const templates = {
    "teacher-ai-review": `
      <div class="prototype-screen">
        <section class="insight-strip">
          <div>
            <span class="ai-badge">Generated by AI</span>
            <h4>5 tasks on fractions with unlike denominators</h4>
            <p>Grade: US Grade 5 · Common Core 5.NF.A.1 / 5.NF.A.2</p>
          </div>
          <button class="secondary-action" type="button" data-ai-action="generate-set">Regenerate</button>
          <div class="confidence-card">
            <strong>86%</strong>
            <span>match confidence</span>
          </div>
        </section>
        <div class="ai-status" id="ai-status">AI mode: ${window.BrighterlyAI?.getMode?.() || "mock"}. In demo mode, responses are mocked without API calls.</div>
        <section class="diagnostic-grid">
          <div>
            <p class="panel-label">Lesson mistakes</p>
            <div class="tag-cloud">
              <span>adds denominators</span>
              <span>drops the numerator</span>
              <span>skips reasonableness check</span>
            </div>
          </div>
          <div>
            <p class="panel-label">Teacher decision</p>
            <div class="approval-box">Review tasks, edit wording, and send to the student in the first 24 hours.</div>
          </div>
        </section>
        <section class="task-review-list">${taskRows()}</section>
      </div>
    `,
    "teacher-week-plan": `
      <div class="prototype-screen">
        <section class="stage-banner">
          <span>Stage 2</span>
          <div>
            <h4>Weekly practice</h4>
            <p>Each day unlocks 2-3 tasks. Difficulty grows from common denominators to word problems.</p>
          </div>
        </section>
        <section class="game-settings">
          ${metricCards([
            { value: "3", label: "lives per day" },
            { value: "2", label: "hint charges" },
            { value: "1", label: "day pass" },
            { value: "5-7 min", label: "per daily session" }
          ])}
        </section>
        <section class="week-grid">${weekCards()}</section>
      </div>
    `,
    "teacher-before-lesson": `
      <div class="prototype-screen">
        <section class="stage-banner">
          <span>Stage 3</span>
          <div>
            <h4>Before the next lesson</h4>
            <p>10 minutes before class, the teacher sees what the student reviewed and which preview examples they tried.</p>
          </div>
        </section>
        <section class="teacher-signal">
          <div class="signal-card strong">
            <strong>Readiness: medium</strong>
            <p>The student opened the cheat sheet, solved 1 of 2 examples, and still missed the common denominator.</p>
          </div>
          <div class="signal-card">
            <strong>Recommended lesson opening</strong>
            <p>Start with 1/3 + 1/4 on a visual model, then move to 2 x 3/4.</p>
          </div>
        </section>
        <section class="attempt-table">
          <div><span>Cheat sheet</span><strong>Opened · 2 min</strong></div>
          <div><span>Review</span><strong>3/5 tasks correct</strong></div>
          <div><span>Preview</span><strong>1 attempt</strong></div>
          <div><span>Main risk</span><strong>common denominator</strong></div>
        </section>
      </div>
    `,
    "student-recap": `
      <div class="prototype-screen">
        <section class="student-task-shell">
          <div class="recap-header">
            <span class="stage-pill">Stage 1 · first 24 hours</span>
            <h4>Quick review after the lesson</h4>
            <p>5 short questions focused on what felt hardest today.</p>
          </div>
          <div class="task-progress">
            <span class="is-done">1</span>
            <span class="is-done">2</span>
            <span class="is-current">3</span>
            <span>4</span>
            <span>5</span>
          </div>
          <article class="student-problem">
            <span>Task 3 of 5 · find the mistake</span>
            <strong>A student wrote: 1/2 + 2/5 = 3/7. Why is this incorrect?</strong>
            <textarea aria-label="Student answer" placeholder="Explain in your own words"></textarea>
            <div class="hint-box">AI hint: check whether the fraction parts are the same size.</div>
          </article>
        </section>
      </div>
    `,
    "student-week": `
      <div class="prototype-screen">
        <section class="game-settings">
          ${metricCards([
            { value: "3/3", label: "lives" },
            { value: "2", label: "hint charges" },
            { value: "1", label: "day pass" },
            { value: "4 days", label: "streak" }
          ])}
        </section>
        <section class="week-grid">${weekCards()}</section>
      </div>
    `,
    "student-warmup": `
      <div class="prototype-screen">
        <section class="stage-banner">
          <span>Stage 3</span>
          <div>
            <h4>Warm-up 10 minutes before class</h4>
            <p>The student can read a quick note and try 1-2 easy examples. Solving everything is optional.</p>
          </div>
        </section>
        <section class="rule-grid">${warmupCards()}</section>
        <section class="lesson-plan">
          <div>
            <p class="panel-label">Lesson plan</p>
            <ol>
              <li>Review the week's mistakes.</li>
              <li>Practice adding fractions through equal-sized parts.</li>
              <li>Move to multiplying a fraction by a whole number.</li>
            </ol>
          </div>
          <div>
            <p class="panel-label">Try if you want</p>
            <div class="preview-problem">Two sandwiches are shared among 3 children. What fraction does each child get?</div>
          </div>
        </section>
      </div>
    `,
    "parent-summary": `
      <div class="prototype-screen simple-dashboard">
        <section class="stage-banner">
          <span>Reviewed by teacher</span>
          <div>
            <h4>Lesson summary is ready</h4>
            <p>Today ${lessonSummary.studentName} worked on ${lessonSummary.topic}. The next goal is to strengthen answer checks.</p>
          </div>
        </section>
        <section class="game-settings summary-metrics">
          ${metricCards([
            { value: lessonSummary.totalTasks, label: "tasks covered" },
            { value: lessonSummary.independentTasks, label: "solved independently" },
            { value: lessonSummary.guidedTasks, label: "with hints" },
            { value: lessonSummary.repeatTasks, label: "needs review" }
          ])}
        </section>
        <section class="lesson-summary-grid">
          <article class="lesson-summary-card is-positive">
            <p class="panel-label">Strengths</p>
            <ul class="compact-list">${listItems(lessonSummary.strengths)}</ul>
          </article>
          <article class="lesson-summary-card">
            <p class="panel-label">Needs practice</p>
            <ul class="compact-list">${listItems(lessonSummary.focusAreas)}</ul>
          </article>
        </section>
        <section class="parent-note">
          <p class="panel-label">Parent note</p>
          <strong>There is progress: Lily understands why a common denominator matters.</strong>
          <p>This week, Brighterly will give short practice based on the mistakes from the lesson. The teacher has already reviewed the plan.</p>
        </section>
        <section class="summary-timeline">
          <div><strong>${lessonSummary.aiDraftReady}</strong><span>AI drafted summary</span></div>
          <div><strong>${lessonSummary.parentDelivery}</strong><span>parent receives it</span></div>
          <div><strong>5 tasks</strong><span>quick review today</span></div>
        </section>
      </div>
    `,
    "teacher-summary-check": `
      <div class="prototype-screen simple-dashboard">
        <section class="insight-strip">
          <div>
            <span class="ai-badge">AI draft · ready in ${lessonSummary.aiDraftReady}</span>
            <h4>Lesson summary for parent</h4>
            <p>The system collected lesson tasks, mistakes, hints, and the next step. The teacher verifies facts before sending.</p>
          </div>
          <div class="send-window">
            <strong>${lessonSummary.parentDelivery}</strong>
            <span>after the lesson ends</span>
          </div>
        </section>
        <section class="game-settings summary-metrics">
          ${metricCards([
            { value: lessonSummary.duration, label: "lesson length" },
            { value: lessonSummary.totalTasks, label: "tasks covered" },
            { value: lessonSummary.independentTasks, label: "independently" },
            { value: lessonSummary.guidedTasks, label: "with hints" }
          ])}
        </section>
        <section class="summary-review-grid">
          <article class="summary-draft">
            <p class="panel-label">Parent-facing text</p>
            <strong>Today ${lessonSummary.studentName} practiced adding fractions with unlike denominators.</strong>
            <p>She is already finding common denominators in simple examples. Over the next few days, we will strengthen answer checks and review cases where denominators are tempting to add directly.</p>
          </article>
          <aside class="validation-panel">
            <p class="panel-label">Teacher review</p>
            <div class="validation-step is-done"><strong>Facts</strong><span>8 tasks, 5 solved independently</span></div>
            <div class="validation-step is-current"><strong>Tone</strong><span>supportive, no pressure</span></div>
            <div class="validation-step"><strong>Next step</strong><span>weekly practice</span></div>
            <div class="validation-actions">
              <button class="secondary-action" type="button">Edit Text</button>
              <button class="primary-action" type="button">Send to Parent</button>
            </div>
          </aside>
        </section>
        <section class="lesson-summary-grid">
          <article class="lesson-summary-card is-positive">
            <p class="panel-label">Strengths</p>
            <ul class="compact-list">${listItems(lessonSummary.strengths)}</ul>
          </article>
          <article class="lesson-summary-card">
            <p class="panel-label">Practice plan</p>
            <ul class="compact-list">${listItems(lessonSummary.nextPractice)}</ul>
          </article>
        </section>
      </div>
    `,
    "teacher-ai-settings": `
      <div class="prototype-screen">
        <section class="settings-list ai-settings-form">
          <label>
            Request mode
            <select id="ai-mode-select">
              <option value="mock">Demo without API</option>
              <option value="direct">Direct browser request</option>
            </select>
          </label>
          <label>
            Temporary OpenAI API key
            <input id="ai-key-input" type="password" placeholder="sk-...">
            <small>For a one-off local demo. You can also paste the key directly into js/ai-service.js in browserApiKey.</small>
          </label>
          <button class="primary-action" type="button" id="save-ai-settings">Save Settings</button>
          <div class="ai-status" id="ai-settings-status">Model: ${window.BrighterlyAI?.config?.model || "gpt-5-nano"}</div>
          <label class="setting-check"><input type="checkbox" checked> AI can suggest tasks after the lesson</label>
          <label class="setting-check"><input type="checkbox" checked> Send to student only after teacher review</label>
          <label class="setting-check"><input type="checkbox" checked> Generate mistake explanations in simple language</label>
          <label class="setting-check"><input type="checkbox"> Allow automatic sending for very easy tasks</label>
        </section>
        <section class="diagnostic-grid">
          <div class="approval-box">Level: US Grade 5</div>
          <div class="approval-box">Current topic: fractions with unlike denominators</div>
        </section>
      </div>
    `,
    "student-game": `
      <div class="prototype-screen">
        <section class="game-settings">
          ${metricCards([
            { value: "4", label: "day streak" },
            { value: "3/3", label: "lives today" },
            { value: "2", label: "hint charges" },
            { value: "1", label: "day pass" }
          ])}
        </section>
        <section class="stage-banner">
          <span>How it works</span>
          <div>
            <h4>The streak continues after a daily minimum</h4>
            <p>The student does not need to solve a lot: 2-3 tasks are enough, but regular return matters.</p>
          </div>
        </section>
      </div>
    `
  };

  mockMain.innerHTML = templates[screen.type] || fallback;
  bindScreenInteractions(screen);
}

function getPracticeContext() {
  return {
    grade: "US Grade 5",
    commonCore: ["5.NF.A.1", "5.NF.A.2"],
    topic: "Adding and subtracting fractions with unlike denominators",
    lessonErrors: [
      "student adds denominators directly",
      "student forgets to scale the numerator",
      "student does not estimate whether the answer is reasonable"
    ],
    timeWindow: "within 24 hours after the lesson",
    maxTasks: 5,
    teacherValidationRequired: true
  };
}

function setAiStatus(message, tone = "neutral") {
  const status = document.querySelector("#ai-status") || document.querySelector("#ai-settings-status");
  if (!status) return;
  status.textContent = message;
  status.dataset.tone = tone;
}

function setButtonLoading(button, isLoading) {
  if (!button) return;
  button.disabled = isLoading;
  if (isLoading) {
    button.dataset.originalText = button.textContent;
    button.textContent = "AI is thinking...";
  } else if (button.dataset.originalText) {
    button.textContent = button.dataset.originalText;
    delete button.dataset.originalText;
  }
}

async function handleAiTaskAction(action, taskIndex, button) {
  const task = reviewTasks[taskIndex];
  if (!task && action !== "generate-set") return;

  try {
    setButtonLoading(button, true);

    if (action === "keep") {
      setAiStatus("Task kept as-is. The teacher approved this item.", "success");
      return;
    }

    if (action === "simplify") {
      setAiStatus("Sending the task to the OpenAI API for simplification...", "loading");
      reviewTasks[taskIndex] = await window.BrighterlyAI.simplifyTask(task);
      renderSelectedScreen();
      setAiStatus("AI simplified the task. Review the wording before sending it to the student.", "success");
      return;
    }

    if (action === "alternative") {
      setAiStatus("Requesting an alternative task...", "loading");
      reviewTasks[taskIndex] = await window.BrighterlyAI.generateAlternativeTask(task);
      renderSelectedScreen();
      setAiStatus("AI suggested an alternative. The teacher still needs to review it.", "success");
      return;
    }

    if (action === "generate-set") {
      setAiStatus("Generating a new set of 5 tasks...", "loading");
      const result = await window.BrighterlyAI.generatePracticeSet(getPracticeContext());
      reviewTasks = result.tasks.map((item) => ({ ...item }));
      renderSelectedScreen();
      setAiStatus("New task set is ready. Review each task before sending.", "success");
    }
  } catch (error) {
    setAiStatus(error.message, "error");
  } finally {
    setButtonLoading(button, false);
  }
}

function bindAiSettings() {
  const modeSelect = document.querySelector("#ai-mode-select");
  const keyInput = document.querySelector("#ai-key-input");
  const saveButton = document.querySelector("#save-ai-settings");

  if (!modeSelect || !saveButton) return;

  modeSelect.value = window.BrighterlyAI.getMode();
  keyInput.value = window.BrighterlyAI.getApiKey();

  saveButton.addEventListener("click", () => {
    window.BrighterlyAI.saveBrowserConfig({
      mode: modeSelect.value,
      apiKey: keyInput.value.trim()
    });
    setAiStatus(`Settings saved. Mode: ${modeSelect.value}.`, "success");
  });
}

function bindScreenInteractions(screen) {
  if (screen.type === "teacher-ai-settings") {
    bindAiSettings();
  }

  mockMain.querySelectorAll("[data-ai-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const taskIndex = Number(button.dataset.taskIndex);
      handleAiTaskAction(button.dataset.aiAction, taskIndex, button);
    });
  });
}

function syncNestedScreenHeight() {
  const shell = document.querySelector(".browser-shell");
  const bar = document.querySelector(".browser-bar");
  const appFrame = document.querySelector(".app-frame");
  if (!shell || !bar || !appFrame) return;

  requestAnimationFrame(() => {
    const barHeight = bar.getBoundingClientRect().height;
    const appHeight = appFrame.getBoundingClientRect().height;
    shell.style.height = `${Math.ceil(barHeight + appHeight)}px`;
  });
}

function renderFeatureTabs() {
  featureTabs.forEach((tab) => {
    const isActive = tab.dataset.feature === state.featureId;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

function renderRoles() {
  const feature = getCurrentFeature();
  roleSwitcher.innerHTML = "";

  feature.roles.forEach((role, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `role-button${index === state.roleIndex ? " is-active" : ""}`;
    button.textContent = role.label;
    button.addEventListener("click", () => {
      state.roleIndex = index;
      state.screenIndex = 0;
      render();
    });
    roleSwitcher.append(button);
  });
}

function renderScreens() {
  const role = getCurrentRole();
  screenList.innerHTML = "";

  role.screens.forEach((screen, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `screen-button${index === state.screenIndex ? " is-active" : ""}`;
    button.innerHTML = `
      <span class="screen-number">${String(index + 1).padStart(2, "0")}</span>
      <span>
        <strong>${screen.title}</strong>
        <small>${screen.caption}</small>
      </span>
    `;
    button.addEventListener("click", () => {
      state.screenIndex = index;
      render();
    });
    screenList.append(button);
  });
}

function renderNav() {
  const role = getCurrentRole();
  appNav.innerHTML = "";

  role.nav.forEach((item, index) => {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = item;
    if (index === 0) link.classList.add("is-active");
    appNav.append(link);
  });
}

function renderSelectedScreen() {
  const role = getCurrentRole();
  const screen = getCurrentScreen();
  const appLabel = role.appLabel || role.label;

  appRoleLabel.textContent = appLabel;
  browserUrl.textContent = `app.brighterly.com/${role.path}`;
  screenRole.textContent = appLabel;
  screenTitle.textContent = screen.appTitle || screen.title;
  screenAction.textContent = screen.appAction || screen.action;
  renderMock(screen);

  screenNotes.innerHTML = "";
  screen.notes.forEach((note) => {
    const item = document.createElement("li");
    item.textContent = note;
    screenNotes.append(item);
  });

  syncNestedScreenHeight();
}

function renderSummary() {
  const feature = getCurrentFeature();
  featureKicker.textContent = feature.kicker;
  featureTitle.textContent = feature.title;
  featureDescription.textContent = feature.description;
}

function render() {
  renderFeatureTabs();
  renderSummary();
  renderRoles();
  renderScreens();
  renderNav();
  renderSelectedScreen();
}

featureTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    state.featureId = tab.dataset.feature;
    state.roleIndex = 0;
    state.screenIndex = 0;
    render();
  });
});

render();

window.addEventListener("resize", syncNestedScreenHeight);
