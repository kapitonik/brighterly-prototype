const aiTasks = [
  {
    label: "Общий знаменатель",
    prompt: "Какой общий знаменатель подойдёт для 1/3 + 1/4?",
    answer: "12",
    reason: "На уроке ученик пытался складывать дроби без приведения к одинаковым частям."
  },
  {
    label: "Сложение дробей",
    prompt: "Реши: 1/3 + 1/4",
    answer: "7/12",
    reason: "Проверяем, переносит ли ученик найденный знаменатель в вычисление."
  },
  {
    label: "Поиск ошибки",
    prompt: "Ученик написал: 1/2 + 2/5 = 3/7. Почему это неверно?",
    answer: "Нельзя складывать знаменатели. Сначала нужен общий знаменатель.",
    reason: "Это была главная ошибка в конце урока."
  },
  {
    label: "Текстовая задача",
    prompt: "Mia used 2/3 cup of oats and 1/4 cup of nuts. How many cups did she use in total?",
    answer: "11/12 cup",
    reason: "Тот же навык в школьном контексте США."
  },
  {
    label: "Вычитание",
    prompt: "Заверши шаг: 3/4 - 1/6 = 9/12 - ?/12",
    answer: "2",
    reason: "Готовит к смешанным задачам недели."
  }
];

let reviewTasks = aiTasks.map((task) => ({ ...task }));

const weekPlan = [
  {
    day: "Пн",
    focus: "Общий знаменатель",
    tasks: ["2/5 + 1/10", "3/8 + 1/4"],
    status: "Открыто"
  },
  {
    day: "Вт",
    focus: "Вычитание",
    tasks: ["5/6 - 1/3", "7/10 - 1/5"],
    status: "Откроется завтра"
  },
  {
    day: "Ср",
    focus: "Текстовые задачи",
    tasks: ["3/4 cup - 1/3 cup", "2/3 mile + 1/6 mile"],
    status: "2–3 задачи"
  },
  {
    day: "Чт",
    focus: "Смешанные числа",
    tasks: ["1 1/2 + 2/3", "2 1/4 - 5/6"],
    status: "2–3 задачи"
  },
  {
    day: "Пт",
    focus: "Итог недели",
    tasks: ["Найди ошибку", "Реши задачу", "Объясни шаг"],
    status: "Финальная тренировка"
  }
];

const warmupExamples = [
  {
    title: "Правило",
    body: "Чтобы складывать дроби, части должны быть одинакового размера. Поэтому сначала ищем общий знаменатель."
  },
  {
    title: "Пример",
    body: "1/3 + 1/4 = 4/12 + 3/12 = 7/12"
  },
  {
    title: "Новый шаг",
    body: "2 × 3/4 можно представить как 3/4 + 3/4. Это мостик к умножению дроби на целое число."
  }
];

const features = {
  practice: {
    kicker: "Функция 01",
    title: "Неделя закрепления",
    description:
      "ИИ готовит практику по итогам урока, преподаватель проверяет задачи, ученик проходит три коротких этапа между занятиями.",
    roles: [
      {
        id: "teacher",
        label: "Преподаватель",
        path: "teacher/practice-week",
        nav: ["Урок", "ИИ-задачи", "Неделя", "Разогрев"],
        screens: [
          {
            type: "teacher-ai-review",
            title: "Проверка ИИ-подборки",
            caption: "До отправки ученику",
            action: "Подтвердить 5 задач",
            notes: [
              "ИИ генерирует задачи из ошибок урока",
              "Преподаватель подтверждает или правит",
              "Ученик видит задания как продолжение урока"
            ]
          },
          {
            type: "teacher-week-plan",
            title: "План практики на неделю",
            caption: "2–3 задачи в день",
            action: "Сохранить план",
            notes: [
              "Та же сущность, но другой режим",
              "Жизни ограничивают попытки в дневной сессии",
              "Пропуск дня защищает серию"
            ]
          },
          {
            type: "teacher-before-lesson",
            title: "Сигнал перед уроком",
            caption: "За 10 минут до занятия",
            action: "Открыть план урока",
            notes: [
              "Видно, как ученик разогрелся",
              "Ошибки недели попадают в начало урока",
              "Преподаватель начинает с данных, а не с догадок"
            ]
          }
        ]
      },
      {
        id: "student",
        label: "Ученик",
        path: "student/practice-week",
        nav: ["Сегодня", "Неделя", "Разогрев", "Серия"],
        screens: [
          {
            type: "student-recap",
            title: "Быстрое закрепление",
            caption: "В течение 24 часов после урока",
            action: "Ответить",
            notes: [
              "До 5 задач на самые слабые места",
              "5–7 минут без ощущения большой домашки",
              "ИИ объясняет ошибку простыми шагами"
            ]
          },
          {
            type: "student-week",
            title: "Практика в течение недели",
            caption: "2–3 задачи в день",
            action: "Начать день",
            notes: [
              "Дневная сессия короткая",
              "Жизни работают внутри попытки",
              "Заряд тратится на подробные подсказки"
            ]
          },
          {
            type: "student-warmup",
            title: "Разогрев перед уроком",
            caption: "За 10 минут до занятия",
            action: "Я готов к уроку",
            notes: [
              "Шпаргалка по нужным правилам",
              "План следующего урока",
              "Простые примеры для ознакомления"
            ]
          }
        ]
      }
    ]
  },
  summary: {
    kicker: "Функция 02",
    title: "Итоги урока для родителей",
    description:
      "Родитель видит, что происходило на уроке, какой прогресс сделал ребёнок и что будет закрепляться дальше.",
    roles: [
      {
        id: "parent",
        label: "Родитель",
        path: "parent/lesson-summary",
        nav: ["Итоги", "Прогресс", "Задания", "Оплата"],
        screens: [
          {
            type: "parent-summary",
            title: "Итоги урока",
            caption: "Ключевые моменты и темы",
            action: "Открыть прогресс",
            notes: ["Меньше чёрного ящика", "Понятная ценность для родителя", "Связь с домашней практикой"]
          },
          {
            type: "parent-progress",
            title: "Прогресс ребёнка",
            caption: "Динамика по темам",
            action: "Посмотреть задания",
            notes: ["Фокус на результате", "Без микроконтроля", "Основание для продления подписки"]
          }
        ]
      },
      {
        id: "teacher",
        label: "Преподаватель",
        path: "teacher/parent-summary",
        nav: ["Урок", "Итоги", "Правки", "Отправка"],
        screens: [
          {
            type: "teacher-summary-check",
            title: "Проверка итогов",
            caption: "Перед отправкой родителю",
            action: "Отправить родителю",
            notes: ["Контроль тона", "Без лишней нагрузки", "Родитель получает проверенную информацию"]
          }
        ]
      }
    ]
  },
  parent: {
    kicker: "Функция 03",
    title: "Панель достижений",
    description:
      "Родитель видит прогресс ребёнка, выполненные задания, серии и динамику без лишнего контроля.",
    roles: [
      {
        id: "parent",
        label: "Родитель",
        path: "parent/achievements",
        nav: ["Обзор", "Предметы", "Серии", "Турнир"],
        screens: [
          {
            type: "parent-achievements",
            title: "Обзор достижений",
            caption: "Состояние недели",
            action: "Открыть детали",
            notes: ["Родитель как болельщик", "Видимый прогресс", "Меньше тревожности"]
          },
          {
            type: "parent-subjects",
            title: "Динамика по предметам",
            caption: "Математика и английский",
            action: "Посмотреть историю",
            notes: ["Динамика за месяц", "Понятные предметные зоны", "Связь с итогами уроков"]
          }
        ]
      }
    ]
  },
  game: {
    kicker: "Функция 04",
    title: "Игровые механики",
    description:
      "Серии дней, жизни, заряд подсказок и пропуски дня поддерживают практику, но не наказывают ребёнка слишком жёстко.",
    roles: [
      {
        id: "student",
        label: "Ученик",
        path: "student/streaks",
        nav: ["Сегодня", "Серия", "Турнир", "Награды"],
        screens: [
          {
            type: "student-game",
            title: "Серия и жизни",
            caption: "Регулярность без лишнего давления",
            action: "Продолжить серию",
            notes: ["Жизни на день", "Заряд для подсказок", "Пропуск защищает серию"]
          },
          {
            type: "student-tournament",
            title: "Еженедельный турнир",
            caption: "Очки за полезную практику",
            action: "Посмотреть рейтинг",
            notes: ["Сравнение без давления", "Очки за полезные действия", "Итог недели"]
          }
        ]
      }
    ]
  },
  ai: {
    kicker: "Функция 05",
    title: "Настройки ИИ",
    description:
      "В первой версии ИИ генерирует задачи и объяснения, но преподаватель проверяет подборку до отправки ученику.",
    roles: [
      {
        id: "teacher",
        label: "Преподаватель",
        path: "teacher/ai-settings",
        nav: ["Правила", "Сложность", "Проверка", "История"],
        screens: [
          {
            type: "teacher-ai-settings",
            title: "Правила генерации",
            caption: "Что ИИ может делать сам",
            action: "Сохранить правила",
            notes: [
              "ИИ не отправляет задания без подтверждения",
              "Уровень: 5 класс США",
              "Тема: дроби с разными знаменателями"
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
          <div class="task-answer">Ожидаемый ответ: <strong>${task.answer}</strong></div>
          <div class="task-actions">
            <button type="button" data-ai-action="keep" data-task-index="${index}">Оставить</button>
            <button type="button" data-ai-action="simplify" data-task-index="${index}">Упростить через ИИ</button>
            <button type="button" data-ai-action="alternative" data-task-index="${index}">Заменить через ИИ</button>
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
      <strong>Макет будет добавлен здесь</strong>
      <small>Каркас поддерживает разные роли и несколько экранов внутри функции.</small>
    </div>
  `;

  const templates = {
    "teacher-ai-review": `
      <div class="prototype-screen">
        <section class="insight-strip">
          <div>
            <span class="ai-badge">Сгенерировано ИИ</span>
            <h4>5 задач по теме «дроби с разными знаменателями»</h4>
            <p>Уровень: 5 класс США · Common Core 5.NF.A.1 / 5.NF.A.2</p>
          </div>
          <button class="secondary-action" type="button" data-ai-action="generate-set">Сгенерировать заново</button>
          <div class="confidence-card">
            <strong>86%</strong>
            <span>уверенность в подборке</span>
          </div>
        </section>
        <div class="ai-status" id="ai-status">Режим ИИ: ${window.BrighterlyAI?.getMode?.() || "mock"}. В демо-режиме ответы имитируются без запроса к API.</div>
        <section class="diagnostic-grid">
          <div>
            <p class="panel-label">Ошибки с урока</p>
            <div class="tag-cloud">
              <span>складывает знаменатели</span>
              <span>теряет числитель</span>
              <span>не проверяет разумность ответа</span>
            </div>
          </div>
          <div>
            <p class="panel-label">Решение преподавателя</p>
            <div class="approval-box">Проверить задачи, поправить формулировки и отправить ученику в первые 24 часа.</div>
          </div>
        </section>
        <section class="task-review-list">${taskRows()}</section>
      </div>
    `,
    "teacher-week-plan": `
      <div class="prototype-screen">
        <section class="stage-banner">
          <span>Этап 2</span>
          <div>
            <h4>Практика в течение недели</h4>
            <p>Каждый день открывается 2–3 задачи. Сложность растёт от общего знаменателя к текстовым задачам.</p>
          </div>
        </section>
        <section class="game-settings">
          ${metricCards([
            { value: "3", label: "жизни на день" },
            { value: "2", label: "заряда подсказок" },
            { value: "1", label: "пропуск дня" },
            { value: "5–7 мин", label: "на дневную сессию" }
          ])}
        </section>
        <section class="week-grid">${weekCards()}</section>
      </div>
    `,
    "teacher-before-lesson": `
      <div class="prototype-screen">
        <section class="stage-banner">
          <span>Этап 3</span>
          <div>
            <h4>Перед новым уроком</h4>
            <p>За 10 минут до занятия учитель видит, как ученик повторил материал и попробовал вводные примеры.</p>
          </div>
        </section>
        <section class="teacher-signal">
          <div class="signal-card strong">
            <strong>Готовность: средняя</strong>
            <p>Ученик открыл шпаргалку, решил 1 из 2 примеров и снова ошибся в общем знаменателе.</p>
          </div>
          <div class="signal-card">
            <strong>Рекомендуемое начало урока</strong>
            <p>Начать с 1/3 + 1/4 на визуальной модели, затем перейти к 2 × 3/4.</p>
          </div>
        </section>
        <section class="attempt-table">
          <div><span>Шпаргалка</span><strong>Открыта · 2 мин</strong></div>
          <div><span>Повторение</span><strong>3/5 задач верно</strong></div>
          <div><span>Новые примеры</span><strong>1 попытка</strong></div>
          <div><span>Главный риск</span><strong>общий знаменатель</strong></div>
        </section>
      </div>
    `,
    "student-recap": `
      <div class="prototype-screen">
        <section class="student-task-shell">
          <div class="recap-header">
            <span class="stage-pill">Этап 1 · первые 24 часа</span>
            <h4>Быстрый повтор после урока</h4>
            <p>5 коротких вопросов по тому, что сегодня было сложнее всего.</p>
          </div>
          <div class="task-progress">
            <span class="is-done">1</span>
            <span class="is-done">2</span>
            <span class="is-current">3</span>
            <span>4</span>
            <span>5</span>
          </div>
          <article class="student-problem">
            <span>Задача 3 из 5 · найди ошибку</span>
            <strong>Ученик написал: 1/2 + 2/5 = 3/7. Почему это неверно?</strong>
            <textarea aria-label="Ответ ученика" placeholder="Объясни своими словами"></textarea>
            <div class="hint-box">Подсказка ИИ: проверь, одинакового ли размера части в дробях.</div>
          </article>
        </section>
      </div>
    `,
    "student-week": `
      <div class="prototype-screen">
        <section class="game-settings">
          ${metricCards([
            { value: "3/3", label: "жизни" },
            { value: "2", label: "заряда подсказок" },
            { value: "1", label: "пропуск дня" },
            { value: "4 дня", label: "серия" }
          ])}
        </section>
        <section class="week-grid">${weekCards()}</section>
      </div>
    `,
    "student-warmup": `
      <div class="prototype-screen">
        <section class="stage-banner">
          <span>Этап 3</span>
          <div>
            <h4>Разогрев за 10 минут до урока</h4>
            <p>Можно просто прочитать и попробовать 1–2 лёгких примера. Решать всё не обязательно.</p>
          </div>
        </section>
        <section class="rule-grid">${warmupCards()}</section>
        <section class="lesson-plan">
          <div>
            <p class="panel-label">План урока</p>
            <ol>
              <li>Разобрать ошибки недели.</li>
              <li>Повторить сложение дробей через общие части.</li>
              <li>Перейти к умножению дроби на целое число.</li>
            </ol>
          </div>
          <div>
            <p class="panel-label">Попробуй, если хочешь</p>
            <div class="preview-problem">Два сэндвича делят между 3 детьми. Какая часть достанется каждому?</div>
          </div>
        </section>
      </div>
    `,
    "parent-summary": `
      <div class="prototype-screen simple-dashboard">
        <section class="stage-banner">
          <span>После урока</span>
          <div>
            <h4>Сегодня работали с дробями</h4>
            <p>Главная цель недели: уверенно складывать дроби с разными знаменателями.</p>
          </div>
        </section>
        <section class="game-settings">
          ${metricCards([
            { value: "3/5", label: "задачи верно" },
            { value: "1", label: "главная ошибка" },
            { value: "5 мин", label: "практика после урока" }
          ])}
        </section>
      </div>
    `,
    "teacher-summary-check": `
      <div class="prototype-screen simple-dashboard">
        <section class="insight-strip">
          <div>
            <span class="ai-badge">Черновик ИИ</span>
            <h4>Итоги урока для родителя</h4>
            <p>Преподаватель проверяет тон, факты и следующий шаг перед отправкой.</p>
          </div>
        </section>
        <article class="summary-draft">Сегодня Lily тренировалась складывать дроби с разными знаменателями. Ей уже удаётся находить общий знаменатель, но нужно закрепить проверку ответа.</article>
      </div>
    `,
    "teacher-ai-settings": `
      <div class="prototype-screen">
        <section class="settings-list ai-settings-form">
          <label>
            Режим запросов
            <select id="ai-mode-select">
              <option value="mock">Демо без API</option>
              <option value="direct">Прямой запрос из браузера</option>
            </select>
          </label>
          <label>
            Временный OpenAI API key
            <input id="ai-key-input" type="password" placeholder="sk-...">
            <small>Для одноразовой локальной демки. Можно также вставить ключ прямо в js/ai-service.js в поле browserApiKey.</small>
          </label>
          <button class="primary-action" type="button" id="save-ai-settings">Сохранить настройки</button>
          <div class="ai-status" id="ai-settings-status">Модель: ${window.BrighterlyAI?.config?.model || "gpt-5-nano"}</div>
          <label class="setting-check"><input type="checkbox" checked> ИИ может предлагать задачи после урока</label>
          <label class="setting-check"><input type="checkbox" checked> Отправка ученику только после проверки преподавателем</label>
          <label class="setting-check"><input type="checkbox" checked> Генерировать объяснение ошибки простыми словами</label>
          <label class="setting-check"><input type="checkbox"> Разрешить автоматическую отправку лёгких задач</label>
        </section>
        <section class="diagnostic-grid">
          <div class="approval-box">Уровень: 5 класс США</div>
          <div class="approval-box">Текущая тема: дроби с разными знаменателями</div>
        </section>
      </div>
    `,
    "student-game": `
      <div class="prototype-screen">
        <section class="game-settings">
          ${metricCards([
            { value: "4", label: "дня серии" },
            { value: "3/3", label: "жизни сегодня" },
            { value: "2", label: "заряда подсказок" },
            { value: "1", label: "пропуск дня" }
          ])}
        </section>
        <section class="stage-banner">
          <span>Как работает</span>
          <div>
            <h4>Серия сохраняется за дневной минимум</h4>
            <p>Ученик не обязан решать много: достаточно 2–3 задач, но важно возвращаться регулярно.</p>
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
    button.textContent = "ИИ думает...";
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
      setAiStatus("Задача оставлена без изменений. Преподаватель подтвердил этот пункт.", "success");
      return;
    }

    if (action === "simplify") {
      setAiStatus("Отправляем задачу в OpenAI API на упрощение...", "loading");
      reviewTasks[taskIndex] = await window.BrighterlyAI.simplifyTask(task);
      renderSelectedScreen();
      setAiStatus("ИИ упростил задачу. Проверь формулировку перед отправкой ученику.", "success");
      return;
    }

    if (action === "alternative") {
      setAiStatus("Отправляем запрос на альтернативную задачу...", "loading");
      reviewTasks[taskIndex] = await window.BrighterlyAI.generateAlternativeTask(task);
      renderSelectedScreen();
      setAiStatus("ИИ предложил альтернативу. Преподаватель всё ещё должен её проверить.", "success");
      return;
    }

    if (action === "generate-set") {
      setAiStatus("Генерируем новый набор из 5 задач...", "loading");
      const result = await window.BrighterlyAI.generatePracticeSet(getPracticeContext());
      reviewTasks = result.tasks.map((item) => ({ ...item }));
      renderSelectedScreen();
      setAiStatus("Новый набор задач готов. Проверь каждую задачу перед отправкой.", "success");
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
    setAiStatus(`Настройки сохранены. Режим: ${modeSelect.value}.`, "success");
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

  appRoleLabel.textContent = role.label;
  browserUrl.textContent = `app.brighterly.com/${role.path}`;
  screenRole.textContent = role.label;
  screenTitle.textContent = screen.title;
  screenAction.textContent = screen.action;
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
