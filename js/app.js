const practiceTasks = [
  {
    label: "Unit rate",
    prompt: "A pack of 6 granola bars costs $9. What is the cost per bar?",
    answer: "$1.50 per bar",
    reason: "The student found equivalent ratios but sometimes forgot to divide down to 1 unit."
  },
  {
    label: "Discount",
    prompt: "A hoodie costs $40 and is 25% off. What is the sale price?",
    answer: "$30",
    reason: "Checks whether the student can connect percents to a business math context."
  },
  {
    label: "Sales tax",
    prompt: "A game costs $24 before tax. Sales tax is 8%. Which expression gives the total?",
    answer: "24 x 1.08",
    reason: "Builds the connection between percent increase and total cost."
  },
  {
    label: "Missing value",
    prompt: "Trail mix costs $6 for 1.5 lb. How much would 4 lb cost at the same rate?",
    answer: "$16",
    reason: "Uses proportional reasoning in a real shopping context."
  },
  {
    label: "Expression bridge",
    prompt: "A photo booth charges $4 per strip plus a $3 fee. Which expression shows the total for s strips?",
    answer: "4s + 3",
    reason: "Prepares the next worksheet topic: algebraic expressions."
  }
];

const weekPlan = [
  {
    day: "Mon",
    focus: "Unit rate",
    tasks: ["$9 for 6 bars", "18 miles in 2 hours"],
    status: "Available"
  },
  {
    day: "Tue",
    focus: "Discounts",
    tasks: ["25% off $40", "sale price from percent"],
    status: "Opens tomorrow"
  },
  {
    day: "Wed",
    focus: "Tax and tip",
    tasks: ["8% tax", "15% tip"],
    status: "2-3 tasks"
  },
  {
    day: "Thu",
    focus: "Compare deals",
    tasks: ["price per ounce", "best value"],
    status: "2-3 tasks"
  },
  {
    day: "Fri",
    focus: "Expression bridge",
    tasks: ["4s + 3", "combine like terms"],
    status: "Next lesson prep"
  }
];

const warmupExamples = [
  {
    title: "Next topic",
    body: "Algebraic expressions use letters for unknown amounts, like s for the number of photo strips."
  },
  {
    title: "Expression",
    body: "If each strip costs $4 and there is a $3 fee, the total can be written as 4s + 3."
  },
  {
    title: "Simplify",
    body: "Combine like terms: 3x + 2x = 5x."
  }
];

const lessonSummary = {
  studentName: "Lily",
  topic: "business math: unit prices, discounts, and sales tax",
  duration: "50 min",
  totalTasks: 10,
  independentTasks: 7,
  guidedTasks: 2,
  repeatTasks: 1,
  aiDraftReady: "2 min",
  parentDelivery: "within 5 min",
  strengths: [
    "finds unit prices accurately in simple shopping contexts",
    "understands that discounts make the final price lower"
  ],
  focusAreas: [
    "sometimes confuses discount amount with final price",
    "needs more practice turning a pricing rule into an expression"
  ],
  nextPractice: [
    "5 short business math questions in the first 24 hours",
    "2-3 daily tasks before previewing algebraic expressions"
  ]
};

const features = {
  practice: {
    kicker: "Функція 01",
    title: "Тиждень підготовки",
    description:
      "Сценарій для Grade 7: після уроку з Business Math учень закріплює ціни, знижки й податки, а перед наступним заняттям готується до Algebraic Expressions.",
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
            appTitle: "Review Practice Drafts",
            appAction: "Approve 5 Tasks",
            navIndex: 1,
            notes: [
              "Practice is based on lesson mistakes",
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
            navIndex: 2,
            notes: [
              "Same task pool, different practice mode",
              "Batteries protect the streak after missed days",
              "A day pass protects the learning streak"
            ]
          },
          {
            type: "teacher-before-lesson",
            title: "Сигнал перед уроком",
            caption: "За 10 хвилин до заняття",
            appTitle: "Pre-Lesson Signal",
            appAction: "Open Lesson Plan",
            navIndex: 3,
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
            type: "student-recap-processing",
            title: "Рекап готується",
            caption: "Перші хвилини після уроку",
            appTitle: "Preparing Lesson Recap",
            appAction: "Notify Me",
            navIndex: 0,
            notes: [
              "General lesson sheet is available first",
              "Transcript is still processing",
              "Personalized checks unlock after teacher review"
            ]
          },
          {
            type: "student-recap",
            title: "Швидке закріплення",
            caption: "Протягом 24 годин після уроку",
            appTitle: "Lesson Recap",
            appAction: "Done",
            navIndex: 0,
            notes: [
              "One calm lesson card after class",
              "No open input, only tap-friendly checks",
              "The student sees progress without a score report"
            ]
          },
          {
            type: "student-week",
            title: "Практика протягом тижня",
            caption: "2-3 завдання на день",
            appTitle: "Weekly Practice",
            appAction: "Start Today",
            navIndex: 1,
            notes: [
              "Daily sessions stay short",
              "Batteries protect the streak without punishing the student too hard",
              "Hint charges are spent on deeper help"
            ]
          },
          {
            type: "student-warmup",
            title: "Розігрів перед уроком",
            caption: "За 10 хвилин до заняття",
            appTitle: "Pre-Lesson Warm-Up",
            appAction: "I'm Ready",
            navIndex: 2,
            notes: [
              "Short cheat sheet for the next worksheet topic",
              "Next lesson plan",
              "Simple algebraic expression examples"
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
      "Батьки швидко бачать прогрес за темою Business Math, сильні місця, прогалини та наступну тему в підготовці.",
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
            navIndex: 0,
            notes: ["Reviewed by the teacher", "Parent receives the summary within 5 minutes", "Connected to post-lesson practice"]
          },
          {
            type: "parent-progress",
            title: "Прогрес дитини",
            caption: "Динаміка за темами",
            appTitle: "Child Progress",
            appAction: "View Tasks",
            navIndex: 1,
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
            navIndex: 1,
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
            navIndex: 0,
            notes: ["Parent acts as a supporter", "Progress is visible", "Less anxiety between lessons"]
          },
          {
            type: "parent-subjects",
            title: "Динаміка за предметами",
            caption: "Математика й англійська",
            appTitle: "Subject Progress",
            appAction: "View History",
            navIndex: 1,
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
      "Серії днів, батарейки, заряд підказок і пропуски дня підтримують регулярну практику без зайвого тиску на учня.",
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
            title: "Серія та батарейки",
            caption: "Регулярність без зайвого тиску",
            appTitle: "Streaks and Batteries",
            appAction: "Continue Streak",
            navIndex: 1,
            notes: ["Daily set", "Streak batteries", "Day pass protects the streak"]
          },
          {
            type: "student-tournament",
            title: "Щотижневе змагання",
            caption: "Бали за корисну практику",
            appTitle: "Weekly Challenge",
            appAction: "View Ranking",
            navIndex: 2,
            notes: ["Comparison without pressure", "Points for useful effort", "Weekly wrap-up"]
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
  return practiceTasks
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
            <button type="button">Approve</button>
            <button type="button">Edit wording</button>
            <button type="button">Move to weekly practice</button>
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

function rateTableModel() {
  return `
    <div class="learning-model" aria-label="Unit-rate visual model">
      <div class="model-card">
        <p class="panel-label">Unit rate</p>
        <div class="ratio-stack">
          <div class="ratio-row">
            <span>6 bars</span>
            <div class="rate-bar"><i style="width: 100%"></i></div>
            <strong>$9</strong>
          </div>
          <div class="ratio-row">
            <span>1 bar</span>
            <div class="rate-bar"><i style="width: 17%"></i></div>
            <strong>$1.50</strong>
          </div>
        </div>
      </div>
      <div class="model-steps">
        <div><span>1</span><strong>Find the total</strong><small>$9 for 6 bars</small></div>
        <div><span>2</span><strong>Divide by 6</strong><small>make one unit</small></div>
        <div><span>3</span><strong>Name the rate</strong><small>dollars per bar</small></div>
      </div>
      <div class="model-equation">$9 / 6 = $1.50 per bar</div>
    </div>
  `;
}

function dealComparisonModel() {
  return `
    <div class="learning-model" aria-label="Compare unit prices visual model">
      <div class="deal-cards">
        <article class="deal-card">
          <span>Deal A</span>
          <strong>12 oz for $3.60</strong>
          <small>$0.30 per oz</small>
        </article>
        <article class="deal-card is-better">
          <span>Deal B</span>
          <strong>20 oz for $5.00</strong>
          <small>$0.25 per oz</small>
        </article>
      </div>
      <div class="model-steps">
        <div><span>1</span><strong>Same unit</strong><small>price per ounce</small></div>
        <div><span>2</span><strong>Compare</strong><small>lower unit price wins</small></div>
        <div><span>3</span><strong>Explain</strong><small>use the rate, not size</small></div>
      </div>
      <div class="model-equation">unit price = total price / amount</div>
    </div>
  `;
}

function expressionPreviewModel() {
  return `
    <div class="learning-model" aria-label="Algebraic expression visual model">
      <div class="expression-card">
        <div class="expression-token">
          <span>$4 each</span>
          <strong>4s</strong>
        </div>
        <div class="expression-plus">+</div>
        <div class="expression-token is-fixed">
          <span>fixed fee</span>
          <strong>3</strong>
        </div>
      </div>
      <div class="model-steps">
        <div><span>1</span><strong>Choose a variable</strong><small>s = strips</small></div>
        <div><span>2</span><strong>Write each part</strong><small>4 per strip, 3 fee</small></div>
        <div><span>3</span><strong>Evaluate</strong><small>try s = 5</small></div>
      </div>
      <div class="model-equation">total cost = 4s + 3</div>
    </div>
  `;
}

function answerChoices(choices, selectedIndex) {
  return `
    <div class="answer-options" role="list">
      ${choices
        .map(
          (choice, index) => `
            <button class="answer-choice${index === selectedIndex ? " is-selected" : ""}" type="button">
              <span>${String.fromCharCode(65 + index)}</span>
              <strong>${choice}</strong>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function batteryRow(total = 3, charged = 3) {
  return `
    <div class="battery-row" aria-label="${charged} of ${total} streak batteries left">
      ${Array.from({ length: total })
        .map((_, index) => `<span class="battery-icon${index < charged ? " is-charged" : ""}"></span>`)
        .join("")}
    </div>
  `;
}

function dailyTrack() {
  const days = [
    { label: "Mon", state: "done", points: "+30" },
    { label: "Tue", state: "current", points: "+30" },
    { label: "Wed", state: "", points: "Locked" },
    { label: "Thu", state: "", points: "Locked" },
    { label: "Fri", state: "", points: "Review" }
  ];

  return `
    <div class="daily-track">
      ${days
        .map(
          (day) => `
            <div class="daily-track-card ${day.state}">
              <strong>${day.label}</strong>
              <span>${day.points}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
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
            <span class="ai-badge">Draft prepared</span>
            <h4>5 practice tasks from a 50-minute Grade 7 lesson</h4>
            <p>Grade: US Grade 7 · Business Math worksheet · unit price, discounts, sales tax</p>
          </div>
          <div class="confidence-card">
            <strong>86%</strong>
            <span>fit to lesson gaps</span>
          </div>
        </section>
        <section class="diagnostic-grid">
          <div>
            <p class="panel-label">Lesson gaps</p>
            <div class="tag-cloud">
              <span>reverses the rate</span>
              <span>divides only one column</span>
              <span>forgets context units</span>
            </div>
          </div>
          <div>
            <p class="panel-label">Teacher decision</p>
            <div class="approval-box">Review the tasks, adjust wording, and send the first 24-hour check after the lesson.</div>
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
            <p>Each day unlocks 2-3 tasks. Difficulty grows from unit prices and discounts to a light algebraic-expression bridge.</p>
          </div>
        </section>
        <section class="game-settings">
          ${metricCards([
            { value: "3", label: "streak batteries" },
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
            <p>10 minutes before class, the teacher sees how the student reviewed business math and previewed the next algebraic expressions topic.</p>
          </div>
        </section>
        <section class="teacher-signal">
          <div class="signal-card strong">
            <strong>Readiness: medium</strong>
            <p>The student solved the unit-price review, opened the expression preview, and still needs help turning fixed fees into + terms.</p>
          </div>
          <div class="signal-card">
            <strong>Recommended lesson opening</strong>
            <p>Start with a photo booth rule: $4 per strip plus a $3 fee. Ask the student to write the expression before calculating.</p>
          </div>
        </section>
        <section class="attempt-table">
          <div><span>Expression preview</span><strong>Opened · 3 min</strong></div>
          <div><span>Review</span><strong>3/5 tasks correct</strong></div>
          <div><span>Preview</span><strong>2 attempts</strong></div>
          <div><span>Main risk</span><strong>expression setup</strong></div>
        </section>
      </div>
    `,
    "student-recap-processing": `
      <div class="prototype-screen">
        <section class="student-task-shell lesson-recap-screen">
          <div class="recap-header recap-hero">
            <div>
              <span class="stage-pill">Just finished · processing</span>
              <h4>Preparing your lesson card</h4>
              <p>The lesson sheet is ready now. Personal notes and practice checks will unlock after the transcript is processed and reviewed.</p>
            </div>
            <div class="recap-time is-processing">
              <strong>62%</strong>
              <span>transcript ready</span>
            </div>
          </div>

          <section class="processing-grid">
            <article class="available-card">
              <p class="panel-label">Available now</p>
              <strong>Business Math quick sheet</strong>
              <div class="mini-rule-list">
                <span>Unit price = total price / amount</span>
                <span>Discount makes the final price lower</span>
                <span>Sales tax is added after the item price</span>
              </div>
            </article>

            <article class="processing-card">
              <p class="panel-label">Still processing</p>
              <div class="processing-step is-done"><strong>Lesson plan</strong><span>ready</span></div>
              <div class="processing-step is-current"><strong>Voice transcript</strong><span>about 2 min left</span></div>
              <div class="processing-step"><strong>Personal mistakes</strong><span>waiting for transcript</span></div>
              <div class="processing-step"><strong>Teacher review</strong><span>not started yet</span></div>
            </article>
          </section>

          <section class="transcript-panel">
            <div>
              <p class="panel-label">Lesson recording</p>
              <strong>50 min class · saved</strong>
              <div class="audio-wave" aria-hidden="true">
                <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
              </div>
            </div>
            <div class="transcript-preview">
              <p class="panel-label">Transcript preview</p>
              <p><strong>Teacher:</strong> Let's compare the unit price first.</p>
              <p><strong>Student:</strong> So I divide the price by the ounces?</p>
              <p class="is-muted">More transcript lines are still being processed...</p>
            </div>
          </section>

          <section class="recap-checks is-locked">
            <article class="student-problem">
              <span>Unlocks after review</span>
              <strong>Personal check questions will appear here.</strong>
              <div class="locked-options">
                <button type="button" disabled>A</button>
                <button type="button" disabled>B</button>
                <button type="button" disabled>C</button>
                <button type="button" disabled>D</button>
              </div>
            </article>
            <article class="student-problem">
              <span>Why wait?</span>
              <strong>The system needs the transcript to avoid guessing what was hard for you.</strong>
              <div class="hint-box">The teacher can approve the final version before the recap becomes active.</div>
            </article>
          </section>
        </section>
      </div>
    `,
    "student-recap": `
      <div class="prototype-screen">
        <section class="student-task-shell lesson-recap-screen">
          <div class="recap-header recap-hero">
            <div>
              <span class="stage-pill">Stage 1 · after class</span>
              <h4>Today's Lesson Card</h4>
              <p>A calm recap of what we practiced today. Two quick tap questions at the end help lock it in.</p>
            </div>
            <div class="recap-time">
              <strong>3 min</strong>
              <span>no streak pressure</span>
            </div>
          </div>

          <section class="lesson-card-sheet">
            <article class="lesson-card-main">
              <p class="panel-label">Today we learned</p>
              <div class="topic-grid">
                <div class="topic-tile"><strong>Unit price</strong><span>Divide total price by amount to compare fairly.</span></div>
                <div class="topic-tile"><strong>Discount</strong><span>The sale price is lower than the original price.</span></div>
                <div class="topic-tile"><strong>Sales tax</strong><span>Tax is added after the item price.</span></div>
                <div class="topic-tile"><strong>Total cost</strong><span>Read the story before choosing the operation.</span></div>
              </div>
            </article>

            <article class="lesson-example-card">
              <p class="panel-label">Example from class</p>
              <strong>A hoodie costs $40 and is 25% off.</strong>
              <ol>
                <li>25% of $40 is $10.</li>
                <li>$40 - $10 = $30.</li>
                <li>The sale price is $30.</li>
              </ol>
            </article>
          </section>

          <section class="recap-reflection">
            <article class="reflection-card is-positive">
              <p class="panel-label">What clicked today</p>
              <strong>You found unit prices in simple shopping examples.</strong>
            </article>
            <article class="reflection-card">
              <p class="panel-label">What we will practice</p>
              <strong>Discounts, tax, and turning price rules into expressions.</strong>
            </article>
          </section>

          <section class="recap-checks">
            <article class="student-problem">
              <span>Check 1 · choose the answer</span>
              <strong>A $20 item is 10% off. What happens to the final price?</strong>
              ${answerChoices(["It is more than $20", "It is less than $20", "It stays $20", "It becomes $30"], 1)}
            </article>
            <article class="student-problem">
              <span>Check 2 · choose the expression</span>
              <strong>A photo booth charges $4 per strip plus a $3 fee. Which expression fits s strips?</strong>
              ${answerChoices(["4s + 3", "4 + 3s", "7s", "s + 43"], 0)}
            </article>
          </section>
        </section>
      </div>
    `,
    "student-week": `
      <div class="prototype-screen">
        <section class="quest-hero">
          <div>
            <span class="stage-pill">Daily set</span>
            <h4>Finish 3 practice tasks to keep the streak</h4>
            <p>Complete the daily set to earn points. If a day is missed, one battery protects the streak.</p>
          </div>
          <div class="quest-reward">
            <strong>+30</strong>
            <span>points today</span>
          </div>
        </section>
        <section class="battery-panel">
          <div>
            <p class="panel-label">Streak batteries</p>
            ${batteryRow(3, 2)}
          </div>
          <div>
            <p class="panel-label">Today</p>
            <strong>2 of 3 tasks done</strong>
          </div>
          <div>
            <p class="panel-label">Hint charges</p>
            <strong>2 left</strong>
          </div>
        </section>
        <section class="visual-question">
          ${dealComparisonModel()}
          <article class="student-problem">
            <span>Daily task · 60 seconds</span>
            <strong>Which deal has the lower price per ounce?</strong>
            ${answerChoices(["12 oz for $3.60", "20 oz for $5.00", "They are equal", "Need more information"], 1)}
          </article>
        </section>
        ${dailyTrack()}
      </div>
    `,
    "student-warmup": `
      <div class="prototype-screen">
        <section class="stage-banner">
          <span>Stage 3</span>
          <div>
            <h4>Warm-up 10 minutes before class</h4>
            <p>Preview the next worksheet topic, try one algebraic expression, and let the teacher see the warm-up result before class.</p>
          </div>
        </section>
        <section class="rule-grid">${warmupCards()}</section>
        <section class="visual-question">
          ${expressionPreviewModel()}
          <article class="student-problem">
            <span>Preview example · optional</span>
            <strong>A photo booth charges $4 per strip plus a $3 fee. Which expression shows the total for s strips?</strong>
            ${answerChoices(["4 + 3s", "4s + 3", "7s", "s + 43"], 1)}
          </article>
        </section>
        <section class="lesson-plan">
          <div>
            <p class="panel-label">Lesson plan</p>
            <ol>
              <li>Open the next worksheet topic.</li>
              <li>Review the week's business math mistakes.</li>
              <li>Write pricing rules as algebraic expressions.</li>
            </ol>
          </div>
          <div>
            <p class="panel-label">Teacher sees</p>
            <div class="preview-problem">Warm-up opened · 1 optional expression attempted · fixed-fee rule reviewed</div>
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
            <p>Today ${lessonSummary.studentName} worked on ${lessonSummary.topic}. The next goal is to set up the rate before calculating.</p>
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
          <strong>There is progress: Lily can find unit rates in simple tables.</strong>
          <p>This week, Brighterly will give short practice on the exact rate-setting mistakes from the lesson. The teacher has already reviewed the plan.</p>
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
            <p>The system collected lesson tasks, rate mistakes, hints, and the next practice step. The teacher verifies facts before sending.</p>
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
            <strong>Today ${lessonSummary.studentName} practiced Business Math: unit prices, discounts, and sales tax.</strong>
            <p>She is already finding simple unit prices. Over the next few days, we will practice discounts, tax, and the bridge into algebraic expressions.</p>
          </article>
          <aside class="validation-panel">
            <p class="panel-label">Teacher review</p>
            <div class="validation-step is-done"><strong>Facts</strong><span>10 tasks, 7 solved independently</span></div>
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
    "student-game": `
      <div class="prototype-screen">
        <section class="quest-hero is-game">
          <div>
            <span class="stage-pill">Daily Quest</span>
            <h4>Do today's set. Earn points. Keep the streak.</h4>
            <p>A daily set is 2-3 short tasks. Missing a day spends one battery instead of breaking the streak.</p>
          </div>
          <div class="quest-reward">
            <strong>4</strong>
            <span>day streak</span>
          </div>
        </section>
        <section class="battery-panel">
          <div>
            <p class="panel-label">Batteries</p>
            ${batteryRow(3, 2)}
          </div>
          <div>
            <p class="panel-label">Today's reward</p>
            <strong>+30 points</strong>
          </div>
          <div>
            <p class="panel-label">Daily set</p>
            <strong>3 short tasks</strong>
          </div>
        </section>
        <section class="reward-grid">
          <article class="reward-card is-active"><strong>1</strong><span>Warm-up task</span></article>
          <article class="reward-card is-active"><strong>2</strong><span>Unit-rate check</span></article>
          <article class="reward-card"><strong>3</strong><span>Final check</span></article>
          <article class="reward-card"><strong>+10</strong><span>bonus for no hints</span></article>
        </section>
      </div>
    `
  };

  mockMain.innerHTML = templates[screen.type] || fallback;
}

function syncNestedScreenHeight() {
  const shell = document.querySelector(".browser-shell");
  const bar = document.querySelector(".browser-bar");
  const appFrame = document.querySelector(".app-frame");
  if (!shell || !bar || !appFrame) return;

  requestAnimationFrame(() => {
    const barHeight = bar.getBoundingClientRect().height;
    const scale = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nested-screen-scale")) || 1;
    const appHeight = Math.max(appFrame.getBoundingClientRect().height, appFrame.scrollHeight * scale);
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
  const screen = getCurrentScreen();
  const activeNavIndex = screen.navIndex ?? 0;
  appNav.innerHTML = "";

  role.nav.forEach((item, index) => {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = item;
    if (index === activeNavIndex) link.classList.add("is-active");
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const matchingScreenIndex = role.screens.findIndex((candidate) => (candidate.navIndex ?? 0) === index);
      if (matchingScreenIndex >= 0) {
        state.screenIndex = matchingScreenIndex;
        render();
      }
    });
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
