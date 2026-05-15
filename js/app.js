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
    day: "Day 1",
    focus: "After-class recap",
    tasks: ["Open lesson recap", "Review today's mistakes"],
    status: "Done · recap",
    why: "Locks in the ideas from the live lesson while they are still fresh.",
    isDone: true, isToday: false
  },
  {
    day: "Day 2",
    focus: "Unit rate",
    tasks: [
      "$9 for 6 granola bars — cost per bar?",
      "4-bottle juice pack $3.20 — price per bottle?",
      "3 pairs of shoes for $48 — one pair?"
    ],
    status: "Done · ~8 min",
    why: "Keeps the strongest topic active with 3 short drills. Rate → divide-by-quantity habit.",
    isDone: true, isToday: false
  },
  {
    day: "Day 3",
    focus: "Discounts",
    tasks: [
      "25% off a $40 hoodie — sale price?",
      "20% off a $60 jacket — how much do you pay?",
      "30% off a $15 book — discount amount?"
    ],
    status: "Done · ~8 min",
    why: "Three angles on discounts: sale price, amount paid, and the discount itself — closes the main misconception.",
    isDone: true, isToday: false
  },
  {
    day: "Day 4",
    focus: "Sales tax",
    tasks: [
      "$24 game + 8% tax — which expression gives the total?",
      "Headphones $35 + 10% tax — total price?",
      "$50 dinner + 6% tax — total bill?"
    ],
    status: "Today · ~8 min",
    why: "Connects percent increase to a total cost expression. Third task is a straight computation to build fluency.",
    isDone: false, isToday: true
  },
  {
    day: "Day 5",
    focus: "Missing value",
    tasks: [
      "Trail mix $6 / 1.5 lb — cost for 4 lb?",
      "Paint 40 sq ft/L — litres for 140 sq ft?",
      "12 cookies need 2 cups — cups for 30?"
    ],
    status: "~9 min",
    why: "Proportional reasoning across three real-world contexts. Builds the ratio habit before Algebraic Expressions.",
    isDone: false, isToday: false
  },
  {
    day: "Day 6",
    focus: "Expression bridge",
    tasks: [
      "Photo booth $4/strip + $3 fee — write the rule for s strips",
      "Taxi $2.50 base + $1.75/km — expression for k km",
      "Phone plan $20/mo + $0.10/text — expression for t texts"
    ],
    status: "~10 min",
    why: "Three word-to-expression tasks. Prepares for the lesson warm-up without giving away the exact example.",
    isDone: false, isToday: false
  },
  {
    day: "Day 7",
    focus: "Lesson-day prep",
    tasks: ["10-min topic preview", "Join call when open"],
    status: "Before class",
    why: "Connects last week's work to the new lesson opening.",
    isDone: false, isToday: false
  }
];

const nextLessonAgenda = [
  {
    step: "1",
    title: "Translate word rules",
    body: "Turn a repeated price and a one-time fee into a short expression."
  },
  {
    step: "2",
    title: "Substitute values",
    body: "Use the expression to calculate totals for different amounts."
  },
  {
    step: "3",
    title: "Simplify expressions",
    body: "Combine matching terms before calculating."
  },
  {
    step: "4",
    title: "Connect to Business Math",
    body: "Use discounts, tax, and fees inside one pricing rule."
  }
];

const warmupReminders = [
  {
    title: "Variable",
    body: "a letter shows the amount: b = number of tickets"
  },
  {
    title: "Unit price",
    body: "the number before the letter multiplies the amount"
  },
  {
    title: "Fixed fee",
    body: "a separate number is added once"
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
  familyDelivery: "within 5 min",
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

const lessonMeta = {
  student: "Lily",
  teacher: "Ms. Carter",
  date: "May 12, 2026",
  level: "Grade 7",
  topic: "Business Math",
  duration: "50 min"
};

const insightTabOptions = [
  { id: "overall", label: "Overall" },
  { id: "skills", label: "Skills" },
  { id: "mistakes", label: "Mistakes" },
  { id: "practice", label: "Practice" }
];

/* ── Per-day practice sets (3 tasks each, used in student week screen) ── */
const weekPracticeTasks = {
  2: [
    { topic: "Unit rate · 1 / 3", question: "A pack of 6 granola bars costs $9. What is the cost per bar?", choices: ["$0.90", "$1.25", "$1.50", "$2.00"], correct: 2, hint: "Divide total price by the number of items: $9 ÷ 6 = $1.50." },
    { topic: "Unit rate · 2 / 3", question: "A 4-bottle pack of juice costs $3.20. What is the price per bottle?", choices: ["$0.40", "$0.60", "$0.80", "$1.20"], correct: 2, hint: "Divide total by quantity: $3.20 ÷ 4 = $0.80." },
    { topic: "Unit rate · 3 / 3", question: "3 pairs of running shoes are on sale for $48. What is the price for one pair?", choices: ["$14", "$16", "$18", "$24"], correct: 1, hint: "Divide: $48 ÷ 3 = $16 per pair." }
  ],
  3: [
    { topic: "Discounts · 1 / 3", question: "A hoodie costs $40 and is 25% off. What is the sale price?", choices: ["$10", "$25", "$30", "$35"], correct: 2, hint: "25% of $40 = $10. Sale price = $40 − $10 = $30." },
    { topic: "Discounts · 2 / 3", question: "A $60 jacket is 20% off. How much do you pay?", choices: ["$12", "$40", "$48", "$52"], correct: 2, hint: "20% of $60 = $12. Pay $60 − $12 = $48." },
    { topic: "Discounts · 3 / 3", question: "A $15 book is 30% off. What is the discount amount — the money saved?", choices: ["$3.00", "$4.50", "$5.00", "$10.50"], correct: 1, hint: "Find 30% of $15: 0.30 × $15 = $4.50." }
  ],
  4: [
    { topic: "Sales tax · 1 / 3", question: "A game costs $24 before tax. Sales tax is 8%. Which expression gives the total price?", choices: ["24 + 0.08", "24 × 0.08", "24 × 1.08", "24 − 0.08"], correct: 2, hint: "Multiply by (1 + rate): 1.08 means original price plus 8% in one step." },
    { topic: "Sales tax · 2 / 3", question: "Headphones cost $35. The tax rate is 10%. What is the total price?", choices: ["$3.50", "$31.50", "$38.50", "$45.00"], correct: 2, hint: "10% of $35 = $3.50. Total = $35 + $3.50 = $38.50." },
    { topic: "Sales tax · 3 / 3", question: "A $50 dinner has 6% sales tax. What is the total bill including tax?", choices: ["$43.00", "$50.30", "$53.00", "$56.00"], correct: 2, hint: "6% of $50 = $3. Total = $50 + $3 = $53." }
  ],
  5: [
    { topic: "Missing value · 1 / 3", question: "Trail mix costs $6 for 1.5 lb. How much would 4 lb cost at the same rate?", choices: ["$14", "$16", "$18", "$24"], correct: 1, hint: "Rate per lb: $6 ÷ 1.5 = $4/lb. Then $4 × 4 = $16." },
    { topic: "Missing value · 2 / 3", question: "Paint covers 40 sq ft per litre. How many litres are needed for 140 sq ft?", choices: ["2.5 L", "3 L", "3.5 L", "4 L"], correct: 2, hint: "Divide: 140 ÷ 40 = 3.5 litres." },
    { topic: "Missing value · 3 / 3", question: "A recipe for 12 cookies needs 2 cups of flour. How many cups for 30 cookies?", choices: ["4 cups", "4.5 cups", "5 cups", "6 cups"], correct: 2, hint: "Find cups per cookie: 2 ÷ 12. Then multiply by 30. Or: 30 ÷ 12 × 2 = 5." }
  ],
  6: [
    { topic: "Expression · 1 / 3", question: "A photo booth charges $4 per strip plus a $3 fixed fee. Which expression shows the total for s strips?", choices: ["3s + 4", "4s − 3", "4s + 3", "7s"], correct: 2, hint: "The per-strip charge gets the variable: 4s. The fixed fee is added: + 3." },
    { topic: "Expression · 2 / 3", question: "A taxi charges $2.50 as a base fare plus $1.75 per km. Which expression gives the cost for k km?", choices: ["2.50k + 1.75", "4.25k", "1.75k + 2.50", "1.75 + 2.50k"], correct: 2, hint: "Per-km charge gets the variable: 1.75k. Add the fixed base: + 2.50." },
    { topic: "Expression · 3 / 3", question: "A phone plan costs $20 per month plus $0.10 per text. Expression for t texts in one month?", choices: ["20 + 0.10", "20t + 0.10", "0.10t + 20", "20.10t"], correct: 2, hint: "$0.10 per text = 0.10t. Monthly fee $20 is fixed — add it on." }
  ]
};

const insightPracticeTasks = [
  {
    topic: "Discounts",
    question: "A jacket costs $60 and is 25% off. What is the sale price?",
    choices: ["$45", "$15", "$35", "$50"],
    correct: 0,
    hint: "Find the discount amount first: 25% of $60 = $15. Then subtract from $60."
  },
  {
    topic: "Unit price",
    question: "Brand A: 500 ml for $2.50. Brand B: 750 ml for $3.60. Which is the better deal per ml?",
    choices: ["Brand A · $0.0050/ml", "Brand B · $0.0048/ml", "They cost the same", "Not enough info"],
    correct: 1,
    hint: "Divide price ÷ quantity for each brand and compare."
  },
  {
    topic: "Sales tax",
    question: "A book is $18 after a 10% discount. Sales tax is 8%. What is the final price?",
    choices: ["$19.44", "$20.16", "$19.80", "$18.80"],
    correct: 0,
    hint: "Apply tax to the sale price, not the original: $18 × 1.08."
  },
  {
    topic: "Discount + tax",
    question: "A $50 shirt is 20% off. Then 10% sales tax is added. What is the final price?",
    choices: ["$44.00", "$40.00", "$45.00", "$46.00"],
    correct: 0,
    hint: "Step 1: sale price = $50 × 0.8 = $40. Step 2: add tax: $40 × 1.1."
  },
  {
    topic: "Expressions",
    question: "A pet store charges $12 per fish and a one-time $5 bag fee. Which expression gives the total cost for f fish?",
    choices: ["12f + 5", "5f + 12", "12 + 5f", "17f"],
    correct: 0,
    hint: "$12 multiplied by the number of fish, plus the fixed $5 fee."
  }
];

const lessonInsightModel = {
  metrics: [
    { value: "10",   percent: 0,  label: "Tasks covered",  caption: "examples worked through in class", color: "#475467" },
    { value: "70%",  percent: 70, label: "Accuracy",       caption: "7 of 10 tasks answered correctly",  color: "#0f766e" },
    { value: "7/10", percent: 70, label: "Independent",    caption: "solved without any help",            color: "#4338ca" },
    { value: "2/10", percent: 20, label: "Hints used",     caption: "both were discount tasks",           color: "#b45309" },
    { value: "4",    percent: 0,  label: "Skill areas",    caption: "topics covered this lesson",         color: "#0b63ce" }
  ],
  skills: [
    {
      label: "Unit price",
      value: "Strong",
      width: 88,
      tasks: "3/3",
      evidence: "Correctly divided total price by quantity and explained the better deal.",
      action: "Use as confidence-building warm-up."
    },
    {
      label: "Discounts",
      value: "Review",
      width: 54,
      tasks: "1/3",
      evidence: "Mixed up discount amount and final sale price on two attempts.",
      action: "Start next practice with discount amount before sale price."
    },
    {
      label: "Sales tax",
      value: "Solid",
      width: 76,
      tasks: "2/2",
      evidence: "Added tax after the adjusted price when numbers were simple.",
      action: "Combine with discount after one short review."
    },
    {
      label: "Expression bridge",
      value: "Preview",
      width: 48,
      tasks: "1/2",
      evidence: "Understood repeated cost, but needed help separating fixed fee.",
      action: "Preview variables before the next lesson."
    }
  ],
  mistakes: [
    {
      label: "Discount amount vs sale price",
      value: "2 misses",
      width: 100,
      evidence: "$40 at 25% off was first answered as $10 instead of $30.",
      fix: "Ask for the amount saved first, then subtract."
    },
    {
      label: "Writing the expression before calculating",
      value: "1 miss",
      width: 55,
      evidence: "Started substituting numbers before naming the repeated cost.",
      fix: "Underline repeated cost and one-time fee."
    },
    {
      label: "Adding tax after the discount",
      value: "1 miss",
      width: 55,
      evidence: "Tax was calculated from the original price once.",
      fix: "Use the sale price as the tax base."
    }
  ],
  practice: [
    { label: "Discount repair", share: 40, tasks: "4 tasks", reason: "Main misconception from the live lesson." },
    { label: "Tax after discount", share: 25, tasks: "3 tasks", reason: "Connects two Business Math steps." },
    { label: "Unit price fluency", share: 20, tasks: "3 tasks", reason: "Keeps the strongest skill active." },
    { label: "Expression preview", share: 15, tasks: "2 tasks", reason: "Soft bridge into the next topic." }
  ]
};

const features = {
  recap: {
    kicker: "Функція 01",
    title: "Рекап + AI-інсайти",
    description: "Після уроку AI готує підсумок: що пройшли, де помилки, що практикувати далі. Вчитель перевіряє — сім'я отримує звіт упродовж 5 хвилин.",
    roles: [
      {
        id: "teacher",
        label: "Викладач",
        appLabel: "Teacher",
        path: "teacher/lesson-review",
        nav: ["Lesson", "Summary", "Edits", "Send"],
        screens: [
          {
            type: "teacher-ai-review",
            title: "Аналітика уроку",
            caption: "Після уроку",
            appTitle: "Lesson Analytics",
            appAction: "Publish to Student",
            navIndex: 0,
            notes: ["AI готує аналітику за транскриптом уроку", "Вчитель підтверджує або редагує інсайти", "Сім'я отримує підсумок упродовж 5 хвилин"]
          },
        ]
      },
      {
        id: "student",
        label: "Учень / сім'я",
        appLabel: "Student / Family",
        path: "student/lesson-recap",
        nav: ["Today", "Summary", "Progress"],
        screens: [
          {
            type: "student-post-lesson-start",
            title: "Урок завершено",
            caption: "Після уроку",
            appTitle: "Lesson Complete",
            appAction: "Lesson Recap",
            hideToolbarAction: true,
            navIndex: 0,
            notes: ["Відправна точка після розмови з учителем", "Учень відкриває рекап усвідомлено", "Картка уроку починає готуватися після кліку"]
          },
          {
            type: "student-recap-processing",
            title: "Рекап готується",
            caption: "Перші хвилини після уроку",
            appTitle: "Preparing Lesson Recap",
            appAction: "Wait",
            navIndex: 0,
            notes: ["Загальний аркуш уроку доступний першим", "Транскрипт ще обробляється", "Персоналізовані чеки відкриваються після перевірки вчителем"]
          },
          {
            type: "student-recap",
            title: "Рекап уроку",
            caption: "Після підготовки",
            appTitle: "Lesson Recap",
            appAction: "Open Practice Plan",
            navIndex: 1,
            notes: ["Одна спокійна картка після уроку", "Без відкритих полів, тільки tap-friendly чеки", "Учень бачить прогрес без звіту з оцінками"]
          },
        ]
      }
    ]
  },
  practice: {
    kicker: "Функція 02",
    title: "Практика між уроками",
    description: "Учень отримує короткий щоденний набір завдань на 6 днів між уроками. Без ігрових механік — базова перевірка: чи взагалі виконується практика.",
    roles: [
      {
        id: "teacher",
        label: "Викладач",
        appLabel: "Teacher",
        path: "teacher/practice-week",
        nav: ["Lesson"],
        screens: [
          {
            type: "teacher-ai-review",
            title: "Аналітика уроку",
            caption: "Після уроку",
            appTitle: "Lesson Analytics",
            appAction: "Publish to Student",
            navIndex: 0,
            notes: ["Відкрий вкладку Week Plan щоб переглянути й скоригувати завдання", "Вчитель підтверджує або редагує інсайти", "Після публікації учень отримує план і рекап"]
          }
        ]
      },
      {
        id: "student",
        label: "Учень / сім'я",
        appLabel: "Student / Family",
        path: "student/practice-week",
        nav: ["Today", "Week", "Streak"],
        screens: [
          {
            type: "student-week",
            title: "Тижнева практика",
            caption: "6 днів між уроками",
            appTitle: "Weekly Practice",
            appAction: "Start Today",
            navIndex: 1,
            notes: ["Короткі щоденні сесії", "Завдання пов'язані з темою уроку", "Без серій і батарейок — просто практика"]
          }
        ]
      }
    ]
  },
  review: {
    kicker: "Функція 03",
    title: "Повторення перед уроком",
    description: "За 10 хвилин до уроку учень повторює ключові моменти минулої теми. Вчитель бачить де є прогалини і може стартувати без повторного пояснення.",
    roles: [
      {
        id: "teacher",
        label: "Викладач",
        appLabel: "Teacher",
        path: "teacher/before-lesson",
        nav: ["Lesson", "Practice Data", "Open"],
        screens: [
          {
            type: "teacher-before-review",
            title: "Перед уроком",
            caption: "10 хв до заняття",
            appTitle: "Today's Lesson",
            appAction: "Join Call",
            hideToolbarAction: true,
            actionDisabled: true,
            navIndex: 0,
            notes: ["Вчитель бачить результати повторення учня", "Щотижневі помилки формують відкриття уроку", "Урок починається з даними, а не здогадками"]
          }
        ]
      },
      {
        id: "student",
        label: "Учень / сім'я",
        appLabel: "Student / Family",
        path: "student/before-lesson",
        nav: ["Today", "Week", "Streak"],
        screens: [
          {
            type: "student-warmup",
            title: "Підготовка до уроку",
            caption: "10 хв до заняття",
            appTitle: "Today's Lesson",
            appAction: "Join Call",
            hideToolbarAction: true,
            actionDisabled: true,
            navIndex: 0,
            notes: ["Короткий повтор ключових моментів минулої теми", "Один приклад для освіження пам'яті", "Швидка перевірка розуміння перед уроком"]
          }
        ]
      }
    ]
  },
  preview: {
    kicker: "Функція 04",
    title: "Превью нового матеріалу",
    description: "Перед уроком з новою темою учень отримує короткий попередній перегляд: ключові поняття, один приклад. Вчитель стартує не з нуля.",
    roles: [
      {
        id: "teacher",
        label: "Викладач",
        appLabel: "Teacher",
        path: "teacher/preview",
        nav: ["Lesson", "Preview Data", "Open"],
        screens: [
          {
            type: "teacher-before-preview",
            title: "Перед новим уроком",
            caption: "10 хв до заняття",
            appTitle: "Today's Lesson",
            appAction: "Join Call",
            hideToolbarAction: true,
            actionDisabled: true,
            navIndex: 0,
            notes: ["Вчитель бачить рівень знайомства з новою темою", "Може скоригувати вступну частину уроку", "Менше часу на введення поняття з нуля"]
          }
        ]
      },
      {
        id: "student",
        label: "Учень / сім'я",
        appLabel: "Student / Family",
        path: "student/preview",
        nav: ["Today", "Week", "Streak"],
        screens: [
          {
            type: "student-preview",
            title: "Превью нової теми",
            caption: "10 хв до заняття",
            appTitle: "Today's Lesson",
            appAction: "Join Call",
            hideToolbarAction: true,
            actionDisabled: true,
            navIndex: 0,
            notes: ["Шпаргалка по новій темі перед уроком", "Один приклад для першого знайомства", "Інший приклад для швидкої перевірки"]
          }
        ]
      }
    ]
  },
  game: {
    kicker: "Функція 05",
    title: "Геймифікація і прогрес",
    description: "Серії днів, батарейки, очки і тижневі челенджі підтримують регулярну практику. Панель прогресу показує досягнення учню, вчителю і сім'ї.",
    roles: [
      {
        id: "student",
        label: "Учень / сім'я",
        appLabel: "Student / Family",
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
            notes: ["Щоденний набір завдань", "Батарейки захищають серію після пропуску", "День-пасс не скидає мотивацію"]
          },
          {
            type: "student-tournament",
            title: "Щотижневе змагання",
            caption: "Бали за корисну практику",
            appTitle: "Weekly Challenge",
            appAction: "View Ranking",
            navIndex: 2,
            notes: ["Порівняння без тиску", "Бали за якісні зусилля", "Тижневий підсумок"]
          },
          {
            type: "family-achievements",
            title: "Панель прогресу",
            caption: "Досягнення і серії",
            appTitle: "Achievement Overview",
            appAction: "Open Details",
            navIndex: 0,
            notes: ["Прогрес видимий учню, вчителю і сім'ї", "Серії і бейджі без надмірного контролю", "Менше тривоги між уроками"]
          },
          {
            type: "family-subjects",
            title: "Динаміка за предметами",
            caption: "Прогрес по темах",
            appTitle: "Subject Progress",
            appAction: "View History",
            navIndex: 0,
            notes: ["Місячна динаміка", "Чіткі предметні напрями", "Пов'язано з підсумками уроків"]
          }
        ]
      }
    ]
  }
};

const featureHypotheses = {
  recap: {
    metrics: ["Повторне бронювання сім'ї", "Час вчителя на підсумок (↓)", "Відкриття рекапу учнем", "Довіра сім'ї до платформи"],
    complexity: "Висока",
    complexityNote: "AI транскрипція + вчительський review workflow + доставка сім'ї",
    risks: ["AI транскрипт низької якості → підсумок не кращий за усний коментар", "Вчитель ігнорує перевірку → неточний підсумок підриває довіру", "Сім'я не відкриває → цінність невидима"],
    hypotheses: [
      { h: "Сім'ї з підсумком бронюють наступний урок частіше, ніж ті, хто не отримав", signal: "Повторне бронювання на 8% більше (базова ~65%)", test: "Надіслати підсумок вручну 30 сім'ям, порівняти з 30 без підсумку", rollback: "Різниця менше 3% після 4 тижнів" },
      { h: "Учні, що читають рекап у перші 30 хв, починають практику в той же день частіше", signal: "Перша практика в той же день на 30+% вище у групі раннього відкриття", test: "Порівняти групи за часом відкриття рекапу: <30 хв vs >2 год", rollback: "Різниця менше 15%" }
    ],
    tracking: ["lesson_ended → recap_opened", "recap_viewed_full", "summary_delivered → opened", "teacher_review_completed"]
  },
  practice: {
    metrics: ["Виконання завдань між уроками", "Час уроку на повторення (↓)", "Утримання учнів (90 днів)", "Якість знань на наступному уроці"],
    complexity: "Середня",
    complexityNote: "Генерація завдань + тижневий план + підтвердження вчителем",
    risks: ["Учні не виконують — потрібна зовнішня мотивація", "Завдання нерелевантні — вчитель не перевірив", "Занадто довгі сесії — учень кидає"],
    hypotheses: [
      { h: "Учні зі структурованим планом виконують більше завдань між уроками, ніж без плану", signal: "Частка активних учнів вища на 20+% (базова ~15%)", test: "Дати 20 учням план вручну, 20 — нічого. Вчитель фіксує виконання.", rollback: "Різниця менше 10%" },
      { h: "Учні з практикою залишаються на платформі довше, ніж ті, хто нічого не робить між уроками", signal: "90-денне утримання на 15+% (базовий відтік ~30%)", test: "Аналіз наявних даних: будь-яке виконання між уроками vs відсутність", rollback: "Різниця менше 8%" }
    ],
    tracking: ["week_plan_opened", "daily_task_completed", "task_session_duration", "teacher_plan_approved"]
  },
  review: {
    metrics: ["Час вчителя на повторення теми (↓)", "Якість уроку за оцінкою вчителя", "Кількість помилок учня на уроці", "Ефективність вступної частини уроку"],
    complexity: "Середня",
    complexityNote: "Генерація завдань повторення + дашборд для вчителя за 10 хв до уроку",
    risks: ["Учень не робить повторення → дані для вчителя відсутні", "Вчитель не дивиться дашборд → ефект нульовий", "Повторення пересікається з практикою → учень перевантажений"],
    hypotheses: [
      { h: "Вчителі, що бачили дані повторення перед уроком, витрачають менше часу на повторне пояснення, ніж ті, хто не бачив", signal: "Час на вступну частину уроку коротший на 15+% (за оцінкою вчителя)", test: "Дати 10 вчителям таблицю з результатами до уроку, 10 — без. Опитувальник після.", rollback: "Різниця менше 5% або вчителі не відчувають різниці" },
      { h: "Учні, що виконали повторення, роблять менше помилок під час уроку, ніж ті, хто не виконав", signal: "Кількість помилок на уроці нижча у групі з повторенням", test: "Вчитель рахує помилки на вступних задачах: повторення vs без, 20 уроків", rollback: "Різниці в кількості помилок немає" }
    ],
    tracking: ["review_opened", "review_completed", "teacher_dashboard_opened_pre_lesson", "lesson_intro_duration"]
  },
  preview: {
    metrics: ["Швидкість засвоєння нової теми", "Глибина уроку за оцінкою вчителя", "Залученість учня на початку уроку", "Задоволеність учня уроком"],
    complexity: "Середня",
    complexityNote: "Генерація превью-контенту для нових тем + сигнал для вчителя",
    risks: ["Превью занадто складне → учень розгублений до уроку", "Вчитель не коригує план → ефект невидимий", "Превью дублює перші хвилини уроку → нудьга"],
    hypotheses: [
      { h: "Учні з превью нової теми засвоюють ключові поняття швидше, ніж ті, хто прийшов без підготовки", signal: "Вчитель оцінює вступну частину уроку коротшою у групі з превью", test: "Дати превью 15 учням, 15 — без. Вчитель оцінює час і якість засвоєння вступу.", rollback: "Різниці у часі засвоєння немає або учні плутаються" },
      { h: "Вчителі, чиї учні переглянули превью, просуваються далі за план уроку, ніж ті, чиї не переглядали", signal: "Охоплення плану уроку вище на 15+% у групі з превью", test: "Порівняти охоплення тем за урок: превью vs без, 20 уроків", rollback: "Різниця менше 5%" }
    ],
    tracking: ["preview_opened", "preview_completed", "lesson_plan_coverage", "teacher_lesson_rating"]
  },
  game: {
    metrics: ["Активних днів практики на тиждень", "Повернення після пропуску", "Кількість завдань без зниження якості", "Продовження підписки (90 днів)"],
    complexity: "Низька",
    complexityNote: "Ігровий шар поверх вже існуючих завдань — без нових AI-компонентів",
    risks: ["Серія стає єдиною мотивацією → завдання виконуються формально", "Батарейки плутають сім'ю — «навіщо платити за пропуски?»", "Змагання тиснуть на молодших учнів"],
    hypotheses: [
      { h: "Учні з ігровими механіками практикують регулярніше, ніж ті, хто отримує ті самі завдання без механік", signal: "Середня кількість активних днів/тиждень вища на 2+ дні (базова ~2 дні)", test: "Одна група — завдання з серіями і батарейками, інша — без. 4 тижні, 60+ учнів.", rollback: "Різниця менше 1 дня після 4 тижнів" },
      { h: "Сім'ї з видимістю прогресу продовжують підписку частіше, ніж ті, хто не бачить досягнень дитини", signal: "90-денне продовження вище на 10+% у групі з видимістю прогресу", test: "Порівняти renewal: сімейні акаунти з активним переглядом vs пасивні", rollback: "Різниця менше 5%" }
    ],
    tracking: ["daily_task_completed", "streak_protected_by_battery", "tournament_rank_viewed", "family_dashboard_opened", "subscription_renewed"]
  }
};

const featureTabs = document.querySelectorAll(".feature-tab");
const roleSwitcher = document.querySelector("#role-switcher");
const screenList = document.querySelector("#screen-list");
const featureDescription = document.querySelector("#feature-description");
const appRoleLabel = document.querySelector("#app-role-label");
const browserUrl = document.querySelector("#browser-url");
const screenRole = document.querySelector("#screen-role");
const screenTitle = document.querySelector("#screen-title");
const screenAction = document.querySelector("#screen-action");
const appNav = document.querySelector(".app-nav nav");
const appContextPanel = document.querySelector("#app-context-panel");
const mockMain = document.querySelector("#mock-main");

const appOptions = [
  { id: "student", label: "Учень / сім'я", appLabel: "Student / Family", icon: "student" },
  { id: "teacher", label: "Викладач", appLabel: "Teacher", icon: "teacher" }
];

const screenLabels = {
  "teacher-ai-review": { title: "Analytics", caption: "After class" },
  "teacher-before-lesson":  { title: "Lesson",  caption: "Before class" },
  "teacher-before-review":  { title: "Lesson",  caption: "Before class" },
  "teacher-before-preview": { title: "Lesson",  caption: "Before class" },
  "student-post-lesson-start": { title: "Start", caption: "After class" },
  "student-recap-processing": { title: "Preparing", caption: "Recap" },
  "student-recap": { title: "Recap", caption: "Lesson" },
  "student-week": { title: "Week", caption: "Practice" },
  "student-warmup": { title: "Lesson", caption: "Before class" },
  "student-preview": { title: "Lesson", caption: "Before class" },
  "family-progress": { title: "Progress", caption: "Family" },
  "teacher-summary-check": { title: "Перевірка", caption: "Текст" },
  "family-achievements": { title: "Achievements", caption: "Family" },
  "family-subjects": { title: "Subjects", caption: "Family" },
  "student-game": { title: "Серія", caption: "Дні" },
  "student-tournament": { title: "Челендж", caption: "Тиждень" },
  "app-placeholder": { title: "Огляд", caption: "Скоро" }
};

const state = {
  featureId: "recap",
  roleId: "student",
  screenIndex: 0,
  hypothesisMode: false,
  hypothesisSection: "hypotheses",
  hypothesisIndex: 0,
  insightTab: "overall",
  practiceTaskIndex: 0,
  lessonInsightsApproved: false,
  recapRating: { accuracy: 0, usefulness: 0 },
  editingMetricIdx: null   // index of metric being edited, or null
};

let processingTimer = null;

function getCurrentFeature() {
  return features[state.featureId];
}

function getFallbackRole(appOption) {
  return {
    id: appOption.id,
    label: appOption.label,
    appLabel: appOption.appLabel,
    path: `${appOption.id}/${state.featureId}`,
    nav: ["Overview"],
    screens: [
      {
        type: "app-placeholder",
        title: "Огляд",
        caption: "Макет у підготовці",
        appTitle: `${appOption.appLabel} View`,
        appAction: "Preview",
        navIndex: 0
      }
    ]
  };
}

function getFeatureRoles() {
  const roleById = new Map(getCurrentFeature().roles.map((role) => [role.id, role]));
  return appOptions.map((appOption) => roleById.get(appOption.id) || getFallbackRole(appOption));
}

function getCurrentRole() {
  return getFeatureRoles().find((role) => role.id === state.roleId) || getFeatureRoles()[0];
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

function assignedPracticeTasks() {
  return Object.entries(weekPracticeTasks)
    .sort(([a], [b]) => Number(a) - Number(b))
    .flatMap(([dayNumber, tasks]) => {
      const day = weekPlan[Number(dayNumber) - 1];
      return tasks.map((task, index) => ({
        dayNumber: Number(dayNumber),
        focus: day?.focus || task.topic,
        status: day?.status || "",
        taskNumber: index + 1,
        prompt: task.question,
        answer: task.choices[task.correct],
        hint: task.hint
      }));
    });
}

function weekCards() {
  return weekPlan
    .map(
      (day) => {
        const cls = day.isToday ? " is-current" : day.isDone ? " is-done" : "";
        const taskMarks = day.tasks
          .map((_, index) => `
            <span
              class="task-check${day.isDone ? " is-done" : ""}"
              aria-label="Task ${index + 1} ${day.isDone ? "completed" : "not completed"}"
            >${day.isDone ? "&check;" : ""}</span>
          `)
          .join("");
        return `
        <article class="week-card${cls}">
          <div class="week-card-head">
            <div class="week-day">${day.day}</div>
            <span>${day.tasks.length} task${day.tasks.length !== 1 ? "s" : ""}</span>
          </div>
          <strong>${day.focus}</strong>
          <small>${day.status}</small>
          <div class="task-check-row" aria-label="${day.tasks.length} tasks">
            ${taskMarks}
          </div>
        </article>
      `;
      }
    )
    .join("");
}

function todaySessionTasks() {
  const today = weekPlan[3];
  return today.tasks
    .map((task, index) => `
      <div class="session-step${index === 0 ? " is-active" : ""}">
        <span>${index + 1}</span>
        <strong>${task}</strong>
      </div>
    `)
    .join("");
}

function warmupReminderItems() {
  return warmupReminders
    .map(
      (item) => `
        <div class="warmup-reminder-item">
          <strong>${item.title}</strong>
          <span>${item.body}</span>
        </div>
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

function lessonMetaItems() {
  return [
    { label: "Student", value: lessonMeta.student },
    { label: "Teacher", value: lessonMeta.teacher },
    { label: "Date", value: lessonMeta.date },
    { label: "Level", value: lessonMeta.level },
    { label: "Topic", value: lessonMeta.topic },
    { label: "Duration", value: lessonMeta.duration }
  ]
    .map(
      (item) => `
        <div class="lesson-meta-item">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </div>
      `
    )
    .join("");
}

function lessonMetaStrip() {
  const items = [
    lessonMeta.student,
    lessonMeta.teacher,
    lessonMeta.date,
    lessonMeta.level,
    lessonMeta.topic,
    lessonMeta.duration
  ];
  return `<div class="lesson-meta-strip" aria-label="Lesson details">${items.map((v) => `<span>${v}</span>`).join('<i aria-hidden="true">·</i>')}</div>`;
}

function teacherAIFeedback() {
  const approved = state.lessonInsightsApproved;
  const acc = state.recapRating.accuracy;
  const use = state.recapRating.usefulness;

  if (!approved) return "";

  return `
    <section class="teacher-rating-card" aria-label="AI quality feedback">
      <div class="rating-card-head">
        <div>
          <p class="panel-label">Step 2 · For the Brighterly team</p>
          <strong>How well did the AI do this time?</strong>
          <p class="rating-card-desc">This is internal quality feedback — it won't be shown to the student or family. Takes 20 seconds.</p>
        </div>
        ${acc > 0 ? `<span class="rating-summary-pill">Accuracy ${acc}/5 · Usefulness ${use}/5</span>` : ""}
      </div>
      <div class="rating-fields">
        <div class="rating-field">
          <span>Accuracy</span>
          <div class="star-row" data-rating-field="accuracy">
            ${[1, 2, 3, 4, 5].map((n) => `<button type="button" class="star-btn${acc >= n ? " is-active" : ""}" data-score="${n}" aria-label="${n} star">★</button>`).join("")}
          </div>
        </div>
        <div class="rating-field">
          <span>Usefulness</span>
          <div class="star-row" data-rating-field="usefulness">
            ${[1, 2, 3, 4, 5].map((n) => `<button type="button" class="star-btn${use >= n ? " is-active" : ""}" data-score="${n}" aria-label="${n} star">★</button>`).join("")}
          </div>
        </div>
      </div>
      <textarea class="teacher-comment" placeholder="Optional: anything the AI missed or got wrong?" rows="2"></textarea>
    </section>
  `;
}

function weekPlanTaskList() {
  const tasks = assignedPracticeTasks();
  return `
    <div class="weekplan-task-list">
      ${tasks.map((task, i) => `
        <div class="weekplan-task-row">
          <div class="weekplan-task-info">
            <span class="task-index">${i + 1}</span>
            <div>
              <strong>Day ${task.dayNumber} - ${task.focus} - Task ${task.taskNumber}</strong>
              <p>${task.prompt}</p>
              <small>Expected: ${task.answer} | Hint: ${task.hint}</small>
            </div>
          </div>
          <div class="weekplan-task-actions">
            <button type="button" class="task-mod-btn">Replace</button>
            <button type="button" class="task-mod-btn is-simplify">Simplify</button>
            <button type="button" class="task-mod-btn is-harder">Make harder</button>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function insightTabs(audience = "student") {
  const teacherTabs = [
    ...insightTabOptions,
    { id: "weekplan", label: "Week Plan" },
    ...(state.lessonInsightsApproved ? [{ id: "feedback", label: "✦ Feedback" }] : [])
  ];
  const tabs = audience === "teacher" ? teacherTabs : insightTabOptions;
  return tabs
    .map((tab) => `
      <button
        class="insight-tab${tab.id === state.insightTab ? " is-active" : ""}"
        type="button"
        data-insight-tab="${tab.id}"
        aria-pressed="${tab.id === state.insightTab}"
      >${tab.label}</button>
    `)
    .join("");
}

function donutMetric({ value, percent, label, caption, color = "#0f766e" }) {
  return `
    <div class="donut-metric">
      <div class="donut-chart" style="--p:${percent};--c:${color}">
        <strong>${value}</strong>
      </div>
      <div>
        <span>${label}</span>
        <small>${caption}</small>
      </div>
    </div>
  `;
}

function lessonInsightDonuts(metrics = lessonInsightModel.metrics) {
  return metrics.map(donutMetric).join("");
}

function lessonStatCards(metrics = lessonInsightModel.metrics, editable = false) {
  return metrics.map(({ value, percent, label, caption, color }, idx) => {
    const editBtn = editable ? `
      <button class="stat-edit-btn" type="button" data-edit-metric="${idx}" aria-label="Edit ${label}" title="Correct this value">✏</button>
    ` : "";
    const editedBadge = editable && metrics[idx]._edited ? `<span class="stat-edited-badge" title="Manually corrected">✓ corrected</span>` : "";
    return `
      <article class="lesson-stat-card${metrics[idx]?._edited ? " is-edited" : ""}" style="--accent:${color}">
        ${editBtn}
        <p class="stat-label">${label}${editedBadge}</p>
        <p class="stat-value">${value}</p>
        ${percent > 0 ? `
          <div class="stat-bar">
            <div class="stat-bar-fill" style="width:${percent}%"></div>
          </div>` : ""}
        <p class="stat-caption">${caption}</p>
      </article>
    `;
  }).join("");
}

function editMetricPopup() {
  const idx = state.editingMetricIdx;
  if (idx === null || idx === undefined) return "";
  const metric = lessonInsightModel.metrics[idx];
  if (!metric) return "";
  return `
    <div class="edit-metric-overlay" data-metric-overlay>
      <div class="edit-metric-popup" role="dialog" aria-modal="true" aria-label="Edit metric">
        <div class="edit-metric-head">
          <strong>Correct AI value</strong>
          <button class="edit-metric-close" type="button" data-close-edit-metric aria-label="Close">✕</button>
        </div>
        <p class="edit-metric-name">${metric.label}</p>
        <p class="edit-metric-sub">AI generated <em>${metric.value}</em> — enter the correct value if needed</p>
        <input class="edit-metric-input" id="edit-metric-input" type="text" value="${metric.value}"
          placeholder="e.g. 65% or 8/10" autocomplete="off">
        <p class="edit-metric-hint">Your correction will be saved to the student report and logged for AI quality review.</p>
        <div class="edit-metric-actions">
          <button class="edit-metric-btn-cancel" type="button" data-close-edit-metric>Cancel</button>
          <button class="edit-metric-btn-save primary-action" type="button" data-save-edit-metric="${idx}">Save correction</button>
        </div>
      </div>
    </div>
  `;
}

function lessonActivityTimeline(audience = "student") {
  const tasks = [
    ["independent", "Unit price task solved independently"],
    ["independent", "Unit price comparison solved independently"],
    ["guided", "Discount setup reviewed with teacher"],
    ["hint", "Discount task needed a small hint"],
    ["independent", "Discount amount corrected independently"],
    ["independent", "Sales tax task solved independently"],
    ["hint", "Tax after discount needed a small hint"],
    ["independent", "Mixed shopping problem solved independently"],
    ["independent", "Expression bridge solved independently"],
    ["independent", "Exit check solved independently"]
  ];
  const summary = audience === "teacher"
    ? "Independence signal: 7 independent, 2 with small hints, 1 guided reset."
    : "You solved 7 tasks independently and used small hints on 2 discount/tax tasks.";
  const taskIcon = { independent: "✓", hint: "H", guided: "?" };

  return `
    <section class="lesson-timeline-card" aria-label="Lesson activity timeline">
      <div class="timeline-card-head">
        <span>Lesson timeline · 50 min</span>
        <p class="tl-summary">${summary}</p>
      </div>
      <div class="tl-phases" aria-hidden="true">
        <div class="tl-phase is-explain" style="--w:30%">
          <span>Explanation</span>
          <small>~15 min</small>
        </div>
        <div class="tl-phase is-guided" style="--w:20%">
          <span>Guided</span>
          <small>~10 min</small>
        </div>
        <div class="tl-phase is-practice" style="--w:50%">
          <span>Practice</span>
          <small>~25 min</small>
        </div>
      </div>
      <div class="tl-task-strip" aria-label="Task outcomes">
        <span class="tl-strip-label">Tasks</span>
        <div class="tl-task-row">
          ${tasks.map(([type, label], i) => `
            <div class="tl-task is-${type}" title="${i + 1}. ${label}">
              <span>${taskIcon[type]}</span>
              <small>${i + 1}</small>
            </div>
          `).join("")}
        </div>
        <div class="tl-legend">
          <span><i class="tl-key is-independent"></i>Independent</span>
          <span><i class="tl-key is-hint"></i>Hint used</span>
          <span><i class="tl-key is-guided"></i>Guided</span>
        </div>
      </div>
    </section>
  `;
}

function mathPatternRows() {
  return lessonInsightModel.mistakes.map((item) => `
    <div class="mistake-row">
      <span>${item.label}</span>
      <div class="mistake-track"><div style="--w:${item.width}%"></div></div>
      <strong>${item.value}</strong>
    </div>
  `).join("");
}

function skillBreakdownRows() {
  return lessonInsightModel.skills.map((item) => `
    <div class="skill-row">
      <span>${item.label}</span>
      <div class="skill-track"><div style="--w:${item.width}%"></div></div>
      <strong>${item.value}</strong>
    </div>
  `).join("");
}

function skillDetailRows(audience = "student") {
  return lessonInsightModel.skills.map((item) => `
    <tr>
      <td><strong>${item.label}</strong><span>${item.tasks} class tasks</span></td>
      <td><div class="skill-track"><div style="--w:${item.width}%"></div></div></td>
      <td>${audience === "teacher" ? item.evidence : item.action}</td>
      <td><span class="skill-status">${item.value}</span></td>
    </tr>
  `).join("");
}

const skillTone = {
  "Strong":  "strong",
  "Solid":   "solid",
  "Review":  "review",
  "Preview": "preview"
};

function skillInsightCards(audience = "student") {
  return lessonInsightModel.skills.map((item) => {
    const [done, total] = item.tasks.split("/").map(Number);
    const pct = Math.round((done / total) * 100);
    const tone = skillTone[item.value] || "preview";
    return `
    <article class="skill-insight-card is-${tone}">
      <div>
        <strong>${item.label}</strong>
        <em class="skill-status-badge is-${tone}">${item.value}</em>
      </div>
      <div class="skill-bar-row">
        <div class="skill-track is-${tone}"><div style="--w:${pct}%"></div></div>
        <span class="skill-fraction">${item.tasks} tasks</span>
      </div>
      <small>${audience === "teacher" ? item.evidence : item.action}</small>
    </article>
  `;
  }).join("");
}

function mistakeCards() {
  return lessonInsightModel.mistakes.map((item) => `
    <article class="mistake-card">
      <span>${item.value}</span>
      <strong>${item.label}</strong>
      <p>${item.evidence}</p>
      <small>${item.fix}</small>
    </article>
  `).join("");
}

function mistakeFixRows() {
  return lessonInsightModel.mistakes.map((item, index) => `
    <div class="mistake-fix-row">
      <span>${index + 1}</span>
      <strong>${item.label}</strong>
      <small>${item.fix}</small>
    </div>
  `).join("");
}

function practiceMixRows() {
  return lessonInsightModel.practice.map((item) => `
    <div class="practice-mix-row">
      <span>${item.label}</span>
      <div class="skill-track"><div style="--w:${item.share}%"></div></div>
      <strong>${item.share}%</strong>
    </div>
  `).join("");
}

function nextPracticeCards(audience = "student") {
  return lessonInsightModel.practice.map((item) => `
    <article class="practice-next-card">
      <span>${item.tasks}</span>
      <strong>${item.label}</strong>
      <p>${item.reason}</p>
      ${audience === "teacher" ? "<small>Teacher can edit difficulty before publishing.</small>" : ""}
    </article>
  `).join("");
}

function insightEvidenceStrip(audience = "student") {
  const items = audience === "teacher"
    ? [
      ["Transcript signal", "4 pricing tasks were solved aloud; two needed teacher prompts."],
      ["Task source", "Practice recommendations use only reviewed class work."],
      ["Publishing state", state.lessonInsightsApproved ? "Approved and active for the student plan." : "Draft is waiting for teacher approval."]
    ]
    : [
      ["What went well", "Lily compared unit prices accurately."],
      ["What to review", "Discounts need one more short explanation."],
      ["What comes next", "The week plan bridges into Algebraic Expressions."]
    ];

  return items.map(([label, text]) => `
    <div class="insight-evidence-item">
      <span>${label}</span>
      <strong>${text}</strong>
    </div>
  `).join("");
}

function practiceTaskNavigator(tasks = insightPracticeTasks) {
  const total = tasks.length;
  const idx = Math.min(state.practiceTaskIndex, total - 1);
  const task = tasks[idx];
  const dots = tasks.map((_, i) => `
    <button class="practice-dot${i === idx ? " is-active" : ""}" type="button"
      data-practice-nav="${i}" aria-label="Task ${i + 1}"></button>
  `).join("");
  return `
    <div class="practice-nav-bar" data-practice-total="${total}">
      <div class="practice-nav-dots">${dots}</div>
      <span class="practice-counter">${idx + 1} / ${total}</span>
    </div>
    <div class="practice-task-card">
      <div class="practice-task-head">
        <span class="stage-pill">${task.topic}</span>
      </div>
      <strong class="practice-task-q">${task.question}</strong>
      ${answerChoices(task.choices, task.correct)}
      <details class="practice-hint">
        <summary>Show hint</summary>
        <p>${task.hint}</p>
      </details>
    </div>
    <div class="practice-task-nav">
      <button class="practice-nav-btn" type="button" data-practice-nav="${idx - 1}" ${idx === 0 ? "disabled" : ""}>← Previous</button>
      <button class="practice-nav-btn is-next" type="button" data-practice-nav="${idx + 1}" ${idx === total - 1 ? "disabled" : ""}>Next →</button>
    </div>
  `;
}

function lessonInsightTabContent(audience = "student") {
  const activeTab = state.insightTab || "overall";

  if (activeTab === "skills") {
    return `
      <div class="insight-tab-panel">
        <div class="skill-insight-grid">${skillInsightCards(audience)}</div>
      </div>
    `;
  }

  if (activeTab === "mistakes") {
    return `
      <div class="insight-tab-panel mistake-focus-panel">
        <div class="mistake-bars">
          <div class="mistake-bars-head">
            <span>Top patterns</span>
            <strong>What made tasks harder today</strong>
          </div>
          ${mathPatternRows()}
        </div>
        <div class="mistake-fix-list">
          <div class="mistake-bars-head">
            <span>Fast repair plan</span>
            <strong>What to do next</strong>
          </div>
          ${mistakeFixRows()}
        </div>
      </div>
    `;
  }

  if (activeTab === "practice") {
    return `<div class="insight-tab-panel insight-practice-panel-v2">${practiceTaskNavigator()}</div>`;
  }

  if (activeTab === "feedback") {
    const acc = state.recapRating.accuracy;
    const use = state.recapRating.usefulness;
    return `
      <div class="insight-tab-panel insight-feedback-panel">
        <div class="feedback-panel-intro">
          <div>
            <span>For the Brighterly team · internal only</span>
            <strong>How well did the AI do this time?</strong>
            <p>This is quality feedback for us — it won't be shared with the student or family.</p>
          </div>
          <span class="insights-badge is-approved">Published to student</span>
        </div>
        <div class="rating-fields">
          <div class="rating-field">
            <span>Accuracy of the recap</span>
            <div class="star-row" data-rating-field="accuracy">
              ${[1, 2, 3, 4, 5].map((n) => `<button type="button" class="star-btn${acc >= n ? " is-active" : ""}" data-score="${n}" aria-label="${n} star">★</button>`).join("")}
            </div>
          </div>
          <div class="rating-field">
            <span>Usefulness for next lesson</span>
            <div class="star-row" data-rating-field="usefulness">
              ${[1, 2, 3, 4, 5].map((n) => `<button type="button" class="star-btn${use >= n ? " is-active" : ""}" data-score="${n}" aria-label="${n} star">★</button>`).join("")}
            </div>
          </div>
        </div>
        <textarea class="teacher-comment" placeholder="Optional: anything the AI missed or got wrong?" rows="3"></textarea>
        <div class="feedback-submit-row">
          <button class="primary-action" type="button">Send feature feedback</button>
          <small>Your response helps improve AI quality for all teachers.</small>
        </div>
      </div>
    `;
  }

  if (activeTab === "weekplan") {
    return `
      <div class="insight-tab-panel insight-weekplan-panel">
        <div class="weekplan-panel-head">
          <div>
            <span>7-day practice plan</span>
            <strong>Adjust difficulty before publishing to the student</strong>
          </div>
          <small>Changes apply when you approve the lesson insights.</small>
        </div>
        ${weekPlanTaskList()}
      </div>
    `;
  }

  return `
    <div class="insight-tab-panel insight-overall-panel">
      <div class="insight-overview-grid">
        <div class="lesson-stat-grid">${lessonStatCards(lessonInsightModel.metrics, audience === "teacher")}</div>
        ${lessonActivityTimeline(audience)}
      </div>
      ${audience === "teacher" ? editMetricPopup() : ""}
    </div>
  `;
}

function lessonInsightPanel(audience = "student") {
  const teacherView = audience === "teacher";
  const approved = state.lessonInsightsApproved;
  const title = teacherView
    ? "Discounts and expression setup need targeted practice before the next class."
    : "Solid progress in shopping math across 4 skill areas. Discounts need the most follow-up.";
  const badge = teacherView
    ? `<span class="insights-badge ${approved ? "is-approved" : ""}">${approved ? "Published to student" : "Draft · not yet published"}</span>`
    : `<span class="insights-badge">Updated after class</span>`;

  return `
    <div class="lesson-insights-head">
      <div>
        <span>Lesson insights</span>
        <p class="insights-desc">${title}</p>
      </div>
      ${badge}
    </div>
    <div class="insight-tabs">${insightTabs(audience)}</div>
    ${lessonInsightTabContent(audience)}
  `;
}

function nextLessonAgendaCards() {
  return nextLessonAgenda
    .map((item) => `
      <article class="agenda-card">
        <span>${item.step}</span>
        <div>
          <strong>${item.title}</strong>
          <small>${item.body}</small>
        </div>
      </article>
    `)
    .join("");
}

function lessonCallCard(audience = "Student") {
  return `
    <section class="lesson-call-card" aria-label="Upcoming lesson call">
      <div>
        <span>${audience} lesson starts in</span>
        <strong>10:00</strong>
        <small>Join opens automatically at the start time.</small>
      </div>
      <button class="primary-action" type="button" disabled>Join Call</button>
    </section>
  `;
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
    <div class="learning-model warmup-model" aria-label="Algebraic expression visual model">
      <div class="warmup-example-label">Example 1 · learn together</div>
      <h5>A cinema charges $8 for each ticket and a $2 service fee</h5>
      <div class="expression-card">
        <div class="expression-token">
          <span>$8 per ticket</span>
          <strong>8b</strong>
        </div>
        <div class="expression-plus">+</div>
        <div class="expression-token is-fixed">
          <span>one-time fee</span>
          <strong>2</strong>
        </div>
      </div>
      <div class="model-steps">
        <div><span>1</span><strong>Choose a letter</strong><small>b = number of tickets</small></div>
        <div><span>2</span><strong>Multiply the price</strong><small>$8 for each ticket → 8b</small></div>
        <div><span>3</span><strong>Add the fee</strong><small>$2 is added once</small></div>
      </div>
      <div class="model-equation">total cost = 8b + 2</div>
    </div>
  `;
}

function answerChoices(choices, correctIndex) {
  return `
    <div class="answer-options" role="list">
      ${choices
        .map(
          (choice, index) => `
            <button class="answer-choice" type="button" data-correct="${index === correctIndex ? "true" : "false"}">
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

function infoTooltip(label, title, body) {
  return `
    <span class="info-tip">
      <button class="info-trigger" type="button" aria-label="${label}">?</button>
      <span class="info-tooltip" role="tooltip">
        <strong>${title}</strong>
        <small>${body}</small>
      </span>
    </span>
  `;
}

function dailyTrack(days) {
  const trackDays = days || [
    { label: "Mon", state: "done",     points: "+30" },
    { label: "Tue", state: "done",     points: "+30" },
    { label: "Wed", state: "missed",   points: "−🔋" },
    { label: "Thu", state: "today",    points: "+30" },
    { label: "Fri", state: "upcoming", points: ""    },
    { label: "Sat", state: "upcoming", points: ""    },
    { label: "Sun", state: "review",   points: "📖"  }
  ];

  return `
    <div class="day-track">
      ${trackDays
        .map(
          (day) => `
            <div class="day-dot ${day.state}">
              <div class="day-dot-circle">
                ${day.state === "done" ? "✓" : day.state === "missed" ? "✕" : ""}
              </div>
              <span class="day-dot-label">${day.label}</span>
              <span class="day-dot-points">${day.points || ""}</span>
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
      <div class="prototype-screen teacher-lesson-screen">
        <div class="recap-compact-head">
          <div class="recap-compact-title">
            <span class="stage-pill">After class · teacher view</span>
            <h4>Lesson Analytics · <em>Business Math</em></h4>
          </div>
          ${lessonMetaStrip()}
        </div>

        <section class="lesson-insights teacher-insights${state.lessonInsightsApproved ? " is-approved" : ""}" aria-label="Teacher lesson analytics">
          ${lessonInsightPanel("teacher")}
        </section>
      </div>
    `,
    "teacher-before-lesson": `
      <div class="prototype-screen teacher-before-screen">
        ${lessonCallCard("Teacher")}
        <section class="teacher-readiness-grid">
          <article class="readiness-card is-main">
            <span>Weekly preparation</span>
            <strong>11 of 16 tasks completed</strong>
            <p>Lily kept the unit-price skill strong and improved on tax after discount. Discounts still need one guided opening question.</p>
          </article>
          <article class="readiness-card">
            <span>Lesson recap</span>
            <strong>Opened and answered</strong>
            <p>The post-lesson recap check was completed on the first day after class.</p>
          </article>
          <article class="readiness-card">
            <span>Today's warm-up</span>
            <strong>Preview opened - 2 attempts</strong>
            <p>The student saw the expression example but missed the first independent check.</p>
          </article>
        </section>
        <section class="teacher-lesson-brief">
          <div>
            <span>Recommended lesson opening</span>
            <strong>Start with a pricing rule before doing any arithmetic.</strong>
            <p>Ask: "What repeats with each strip, and what happens only once?" Then let Lily write the expression before calculating.</p>
          </div>
          <div class="brief-topic-stack">
            <span>Today</span>
            <strong>Algebraic Expressions</strong>
            <small>Translate word rules, substitute values, simplify terms.</small>
          </div>
        </section>
        <section class="attempt-table">
          <div><span>Practice completed</span><strong>11/16 tasks</strong></div>
          <div><span>Best topic</span><strong>Unit price</strong></div>
          <div><span>Needs opening</span><strong>discounts</strong></div>
          <div><span>Warm-up bonus</span><strong>+10 pts earned</strong></div>
        </section>
      </div>
    `,

    "teacher-before-review": `
      <div class="prototype-screen teacher-before-screen">
        ${lessonCallCard("Teacher")}

        <div class="before-activity-strip">
          <div class="activity-timing">
            <span class="activity-dot is-review"></span>
            <span>Warmup review opened <strong>18 min ago</strong></span>
          </div>
          <div class="activity-meta">
            <span class="activity-chip">⏱ 6 min 20 sec on page</span>
            <span class="activity-chip">2 attempts made</span>
          </div>
        </div>

        <section class="teacher-readiness-grid">
          <article class="readiness-card is-main">
            <span>Weekly preparation</span>
            <strong>6 of 15 practice tasks done</strong>
            <p>Lily completed Days 2 and 3 — unit rate (3/3) and discounts (3/3). Today's sales tax set (Day 4) is the next open day.</p>
          </article>
          <article class="readiness-card">
            <span>Lesson recap</span>
            <strong>Opened on Day 1 · all flagged</strong>
            <p>Post-lesson recap was reviewed the day after class. All mistakes were visible and flagged for the weekly plan.</p>
          </article>
          <article class="readiness-card">
            <span>Today's warm-up</span>
            <strong>1 of 2 questions correct</strong>
            <p>Found the discount amount correctly but gave $10 as the answer instead of the $30 sale price — confuses saving with final cost.</p>
          </article>
        </section>

        <section class="teacher-lesson-brief">
          <div>
            <span>Recommended lesson opening</span>
            <strong>Ask: "What's the difference between the discount and the final price?"</strong>
            <p>Lily finds the discount amount fine but doesn't automatically subtract it from the original. One guided example — price × (1 − rate) — bridges the gap before moving on.</p>
          </div>
          <div class="brief-topic-stack">
            <span>Continuing from</span>
            <strong>Business Math</strong>
            <small>Prices, discounts, sales tax, unit rate, proportional reasoning.</small>
          </div>
        </section>

        <section class="attempt-table">
          <div><span>Practice done</span><strong>6 / 15 tasks</strong></div>
          <div><span>Best topic</span><strong>Unit rate</strong></div>
          <div><span>Warm-up score</span><strong>1 / 2 correct</strong></div>
          <div><span>Gap to address</span><strong>Sale price formula</strong></div>
        </section>
      </div>
    `,

    "teacher-before-preview": `
      <div class="prototype-screen teacher-before-screen">
        ${lessonCallCard("Teacher")}

        <div class="before-activity-strip">
          <div class="activity-timing">
            <span class="activity-dot is-preview"></span>
            <span>New-topic preview opened <strong>12 min ago</strong></span>
          </div>
          <div class="activity-meta">
            <span class="activity-chip">⏱ 4 min 45 sec on page</span>
            <span class="activity-chip">scrolled to bottom · 1 attempt</span>
          </div>
        </div>

        <section class="teacher-readiness-grid">
          <article class="readiness-card is-main">
            <span>Prior exposure</span>
            <strong>First contact with topic</strong>
            <p>Lily had not seen Algebraic Expressions before. The preview was her first encounter — three concept names and one example walked through.</p>
          </article>
          <article class="readiness-card">
            <span>Concepts seen</span>
            <strong>Variable, expression, coefficient</strong>
            <p>All three terms were shown in the preview card. No definition quiz — purely visual familiarisation before class.</p>
          </article>
          <article class="readiness-card">
            <span>Preview attempt</span>
            <strong>Tried example · corrected on 2nd try</strong>
            <p>Wrote "4 + 3s" first for the photo-booth rule. After the hint she corrected it to "4s + 3" — shows the variable-coefficient order is new.</p>
          </article>
        </section>

        <section class="teacher-lesson-brief">
          <div>
            <span>Recommended lesson opening</span>
            <strong>Skip the vocabulary intro — open straight with the photo-booth example.</strong>
            <p>Lily already saw the terms. Ask which part of "4s + 3" changes and which stays fixed — she'll connect faster than a cold start would allow.</p>
          </div>
          <div class="brief-topic-stack">
            <span>Today's topic</span>
            <strong>Algebraic Expressions</strong>
            <small>Translate word rules, substitute values, simplify terms.</small>
          </div>
        </section>

        <section class="attempt-table">
          <div><span>Preview time</span><strong>4 min 45 sec</strong></div>
          <div><span>Concepts seen</span><strong>3 terms</strong></div>
          <div><span>Example attempt</span><strong>Corrected on 2nd try</strong></div>
          <div><span>Entry familiarity</span><strong>Low → ready to explore</strong></div>
        </section>
      </div>
    `,

    "student-post-lesson-start": `
      <div class="prototype-screen post-lesson-screen">
        <div class="recap-compact-head">
          <div class="recap-compact-title">
            <span class="stage-pill">Class just ended</span>
            <h4>Business Math · <em>Lesson complete</em></h4>
          </div>
          ${lessonMetaStrip()}
        </div>
        <section class="post-lesson-cta">
          <p>Open the recap to see what was covered today and what to practice first.</p>
          <button class="primary-action js-open-recap" type="button">View Lesson Recap</button>
        </section>
      </div>
    `,
    "student-recap-processing": `
      <div class="prototype-screen lesson-recap-screen">
        <div class="recap-compact-head">
          <div class="recap-compact-title">
            <span class="stage-pill">After class · processing</span>
            <h4>Business Math · <em>preparing recap…</em></h4>
          </div>
          ${lessonMetaStrip()}
        </div>

        <section class="lesson-insights" aria-label="Lesson insights loading">
          <div class="lesson-insights-head">
            <div>
              <span class="skeleton-line" style="width:5rem;height:.65em"></span>
              <p class="insights-desc"><span class="skeleton-line" style="width:22rem;height:.85em;display:inline-block"></span></p>
            </div>
            <span class="insights-badge">Preparing…</span>
          </div>

          <div class="insight-tabs">
            ${["Overall","Skills","Mistakes","Practice"].map((t, i) => `
              <button class="insight-tab${i === 0 ? " is-active" : ""} is-skeleton-tab" type="button" disabled>${t}</button>
            `).join("")}
          </div>

          <div class="insight-tab-panel insight-overall-panel">
            <div class="insight-overview-grid">

              <div class="lesson-stat-grid">
                ${[68, 52, 80, 44, 56].map(w => `
                  <article class="lesson-stat-card skel-stat-card">
                    <p class="stat-label"><span class="skeleton-line" style="width:${w}%"></span></p>
                    <p class="stat-value"><span class="skeleton-line" style="width:55%;height:1.6em"></span></p>
                    <p class="stat-caption"><span class="skeleton-line" style="width:90%"></span></p>
                  </article>
                `).join("")}
              </div>

              <section class="lesson-timeline-card skel-timeline">
                <div class="timeline-card-head">
                  <span class="skeleton-line" style="width:8rem;height:.7em"></span>
                </div>
                <div class="tl-phases skel-phases">
                  <div class="tl-phase is-explain" style="--w:30%"></div>
                  <div class="tl-phase is-guided"  style="--w:20%"></div>
                  <div class="tl-phase is-practice" style="--w:50%"></div>
                </div>
                <div class="skel-task-strip">
                  ${Array.from({length:10}).map(() => `<span class="skeleton-chip skel-task-chip"></span>`).join("")}
                </div>
              </section>

            </div>
          </div>
        </section>

        <section class="recap-progress-bar">
          <div class="processing-progress">
            <div class="progress-track"><div class="progress-fill" id="progress-fill"></div></div>
            <span class="progress-pct" id="processing-pct">0%</span>
          </div>
          <small>Usually ready 2–3 minutes after class.</small>
        </section>
      </div>
    `,
    "student-recap": `
      <div class="prototype-screen lesson-recap-screen">
        <div class="recap-compact-head">
          <div class="recap-compact-title">
            <span class="stage-pill">After class · lesson recap</span>
            <h4>Lesson Recap · <em>Business Math</em></h4>
          </div>
          ${lessonMetaStrip()}
        </div>

        <section class="lesson-insights" aria-label="Lesson insights">
          ${lessonInsightPanel("student")}
        </section>

        <section class="recap-table-section is-hidden">
          <div class="recap-section-heading">
            <span>Lesson topics</span>
          </div>
          <div class="recap-table-wrap">
            <table class="recap-table">
              <thead>
                <tr>
                  <th>Topic</th>
                  <th>Rule and class example</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr class="is-strong">
                  <td><strong>Unit price</strong></td>
                  <td>
                    <div class="recap-topic-detail">
                      <span>Divide the total price by the amount to compare fairly.</span>
                      <code>$3.60 ÷ 12 = $0.30/oz</code>
                    </div>
                  </td>
                  <td><span class="recap-status is-ok">got it</span></td>
                </tr>
                <tr class="needs-review">
                  <td><strong>Discount</strong></td>
                  <td>
                    <div class="recap-topic-detail">
                      <span>Find the discount amount first, then subtract it from the original price.</span>
                      <code>$40 − $10 = $30</code>
                    </div>
                  </td>
                  <td><span class="recap-status is-review">review</span></td>
                </tr>
                <tr class="is-strong">
                  <td><strong>Sales tax</strong></td>
                  <td>
                    <div class="recap-topic-detail">
                      <span>Tax is added to the price after any discount.</span>
                      <code>$30 + $3 = $33</code>
                    </div>
                  </td>
                  <td><span class="recap-status is-ok">got it</span></td>
                </tr>
                <tr class="needs-review">
                  <td><strong>Expression</strong></td>
                  <td>
                    <div class="recap-topic-detail">
                      <span>Write the price rule with a letter before calculating.</span>
                      <code>$4s + $3</code>
                    </div>
                  </td>
                  <td><span class="recap-status is-review">next-topic bridge</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    `,
    "student-week": `
      <div class="prototype-screen student-week-screen">
        <section class="week-dashboard">
          <div class="week-dash-top">
            <div class="week-dash-streak">
              <span class="streak-flame">🔥</span>
              <div>
                <strong class="streak-big">4</strong>
                <span>day streak</span>
              </div>
            </div>
            <div class="week-dash-meta">
              <div class="week-dash-stat">
                <strong>+40</strong>
                <span>pts today ${infoTooltip(
                  "How points work",
                  "Points unlock useful practice extras.",
                  "Use points for hint charges, streak protection, profile items, and weekly challenge entries."
                )}</span>
              </div>
              <div class="week-dash-stat"><strong>6/15</strong><span>tasks done</span></div>
              <div class="week-dash-stat">
                ${batteryRow(3, 2)}
                <span style="margin-top:4px">batteries ${infoTooltip(
                  "How batteries work",
                  "Miss one day without losing the streak.",
                  "A missed day spends one battery. Completing the next set keeps the week alive."
                )}</span>
              </div>
            </div>
          </div>

          <div class="week-track-wrap">
            <div class="week-track-labels">
              <span>D1</span><span>D2</span><span>D3</span><span>D4</span><span>D5</span><span>D6</span><span>D7</span>
            </div>
            <div class="week-track-bar">
              <div class="wtb-seg done" title="Day 1 — After-class recap"></div>
              <div class="wtb-seg done" title="Day 2 — Unit rate"></div>
              <div class="wtb-seg done" title="Day 3 — Discounts"></div>
              <div class="wtb-seg today" title="Day 4 — Sales tax"></div>
              <div class="wtb-seg upcoming" title="Day 5 — Missing value"></div>
              <div class="wtb-seg upcoming" title="Day 6 — Expression bridge"></div>
              <div class="wtb-seg review" title="Day 7 — Lesson-day prep"></div>
            </div>
            <div class="week-track-progress">
              <div class="wtp-fill" style="width:48%"></div>
            </div>
            <p class="week-track-caption">6 practice days plus lesson-day prep</p>
          </div>
        </section>

        <section class="student-week-plan">
          ${weekCards()}
        </section>

        <section class="daily-session-card">
          <div class="daily-session-head">
            <div>
              <span>Today's set · Day 4 · 3 tasks</span>
              <strong>Sales tax practice</strong>
            </div>
            <small>~8 min</small>
          </div>
          <div class="insight-practice-panel-v2">
            ${practiceTaskNavigator(weekPracticeTasks[4])}
          </div>
        </section>
      </div>
    `,
    "student-warmup": `
      <div class="prototype-screen warmup-screen">
        ${lessonCallCard("Student")}
        <section class="warmup-hero">
          <div class="warmup-topic">
            <span class="stage-pill">Before class · quick review</span>
            <h4>Business Math: Unit Rates &amp; Discounts</h4>
            <p>Refresh what you covered last lesson. Two questions — under 5 minutes.</p>
          </div>
          <div class="warmup-chips" aria-label="Key ideas to remember">
            <span><strong>Unit rate</strong> — price ÷ quantity</span>
            <span><strong>Discount</strong> — subtract % off original</span>
            <span><strong>Sales tax</strong> — add % on top</span>
          </div>
        </section>
        <section class="warmup-path">
          <article class="warmup-learn">
            ${rateTableModel()}
          </article>
          <article class="warmup-check student-problem">
            <span>Review check · your turn</span>
            <strong>Store A sells 4 notebooks for $6.80. Store B sells 3 notebooks for $5.70. Which store has the better unit price?</strong>
            ${answerChoices(["Store A — $1.70 each", "Store B — $1.90 each", "They cost the same", "Store B — $1.70 each"], 0)}
          </article>
        </section>
        <section class="warmup-signal">
          <div>
            <span>Why review this now</span>
            <strong>The teacher will see your answer before the lesson and can skip what you already remember.</strong>
          </div>
          <div class="warmup-status">Focus: divide total by quantity — don't compare sizes directly.</div>
        </section>
      </div>
    `,
    "student-preview": `
      <div class="prototype-screen warmup-screen">
        ${lessonCallCard("Student")}
        <section class="warmup-hero">
          <div class="warmup-topic">
            <span class="stage-pill">Before class · new topic peek</span>
            <h4>Algebraic Expressions</h4>
            <p>First look before the lesson. Earn +10 points and bring one clean attempt into class.</p>
          </div>
          <div class="warmup-chips" aria-label="New concepts to get familiar with">
            <span><strong>Variable</strong> — letter for unknown: b = tickets</span>
            <span><strong>Coefficient</strong> — number that multiplies the variable</span>
            <span><strong>Constant</strong> — fixed number added once</span>
          </div>
        </section>
        <section class="lesson-agenda-preview">
          <div class="recap-section-heading">
            <span>Today's lesson plan</span>
          </div>
          <div class="agenda-grid">${nextLessonAgendaCards()}</div>
        </section>
        <section class="warmup-path">
          <article class="warmup-learn">
            ${expressionPreviewModel()}
          </article>
          <article class="warmup-check student-problem">
            <span>Example 2 · check understanding</span>
            <strong>A photo booth charges $5 for each strip and a $4 entry fee. What expression shows the total cost for s strips?</strong>
            ${answerChoices(["5 + 4s", "5s + 4", "9s", "s + 54"], 1)}
          </article>
        </section>
        <section class="warmup-signal">
          <div>
            <span>Preview reward</span>
            <strong>Finish before the call to earn +10 points and show the teacher your first attempt.</strong>
          </div>
          <div class="warmup-status">Focus: separate the repeated cost from the one-time fee.</div>
        </section>
      </div>
    `,
    "teacher-summary-check": `
      <div class="prototype-screen simple-dashboard">
        <section class="insight-strip">
          <div>
            <span class="ai-badge">AI draft · ready in ${lessonSummary.aiDraftReady}</span>
            <h4>Lesson summary for family</h4>
            <p>The system collected lesson tasks, rate mistakes, hints, and the next practice step. The teacher verifies facts before sending.</p>
          </div>
          <div class="send-window">
            <strong>${lessonSummary.familyDelivery}</strong>
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
            <p class="panel-label">Family-facing text</p>
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
              <button class="primary-action" type="button">Send to Family</button>
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
    "family-achievements": `
      <div class="prototype-screen">
        <section class="ach-hero">
          <div class="ach-streak-stat">
            <span class="streak-flame">🔥</span>
            <div><strong class="streak-big">4</strong><span>day streak</span></div>
          </div>
          <div class="ach-streak-stat">
            <span style="font-size:1.4rem">⭐</span>
            <div><strong class="streak-big">340</strong><span>total pts</span></div>
          </div>
        </section>
        <section>
          <p class="panel-label">Badges earned</p>
          <div class="badge-grid">
            <div class="badge-card is-earned is-new">
              <span class="badge-icon">🏅</span>
              <strong>First Streak</strong>
              <small>3 days in a row</small>
            </div>
            <div class="badge-card is-earned">
              <span class="badge-icon">🎯</span>
              <strong>Perfect Set</strong>
              <small>no hints used</small>
            </div>
            <div class="badge-card is-earned">
              <span class="badge-icon">📚</span>
              <strong>Topic Master</strong>
              <small>Unit Prices 100%</small>
            </div>
            <div class="badge-card is-locked">
              <span class="badge-icon">🔥</span>
              <strong>Week Warrior</strong>
              <small>7-day streak</small>
            </div>
            <div class="badge-card is-locked">
              <span class="badge-icon">🏆</span>
              <strong>Top of Class</strong>
              <small>tournament #1</small>
            </div>
            <div class="badge-card is-locked">
              <span class="badge-icon">⚡</span>
              <strong>Speed Round</strong>
              <small>3 tasks in 60 sec</small>
            </div>
          </div>
        </section>
      </div>
    `,
    "family-subjects": `
      <div class="prototype-screen">
        <section class="subject-list">
          <article class="subject-card">
            <div class="subject-head">
              <strong>Business Math</strong>
              <span class="topic-result is-ok">Active</span>
            </div>
            <div class="topic-progress-row">
              <span>Unit Prices</span>
              <div class="tp-bar"><div class="tp-fill" style="width:100%"></div></div>
              <small>100%</small>
            </div>
            <div class="topic-progress-row">
              <span>Discounts</span>
              <div class="tp-bar"><div class="tp-fill" style="width:60%"></div></div>
              <small>60%</small>
            </div>
            <div class="topic-progress-row">
              <span>Sales Tax</span>
              <div class="tp-bar"><div class="tp-fill" style="width:40%"></div></div>
              <small>40%</small>
            </div>
            <div class="topic-progress-row">
              <span>Expressions</span>
              <div class="tp-bar"><div class="tp-fill" style="width:10%"></div></div>
              <small>10%</small>
            </div>
          </article>
          <article class="subject-card">
            <div class="subject-head">
              <strong>Fractions</strong>
              <span class="topic-result is-review">Review</span>
            </div>
            <div class="topic-progress-row">
              <span>Adding fractions</span>
              <div class="tp-bar"><div class="tp-fill" style="width:75%"></div></div>
              <small>75%</small>
            </div>
            <div class="topic-progress-row">
              <span>Multiplying</span>
              <div class="tp-bar"><div class="tp-fill" style="width:50%"></div></div>
              <small>50%</small>
            </div>
          </article>
        </section>
      </div>
    `,
    "student-game": `
      <div class="prototype-screen">
        <section class="quest-hero is-game">
          <div>
            <span class="stage-pill">Daily Quest</span>
            <h4>4-day streak 🔥</h4>
            <p>Do today's set and keep it going. Miss a day? A battery covers it — no pressure.</p>
          </div>
          <div class="quest-reward">
            <strong>+30</strong>
            <span>points today ${infoTooltip(
              "How points work",
              "Points unlock useful practice extras.",
              "Use points for hint charges, streak protection, profile items, and weekly challenge entries."
            )}</span>
          </div>
        </section>
        <section class="streak-track-panel is-hero">
          <p class="panel-label">Streak this week</p>
          ${dailyTrack()}
        </section>
        <section class="battery-panel">
          <div>
            <p class="panel-label">Miss protection ${infoTooltip(
              "How batteries work",
              "Miss one day without losing the streak.",
              "A missed day spends one battery. Completing the next set keeps the week alive."
            )}</p>
            ${batteryRow(3, 2)}
          </div>
          <div>
            <p class="panel-label">Today's set</p>
            <strong>3 short tasks</strong>
          </div>
          <div>
            <p class="panel-label">Bonus</p>
            <strong>+10 no hints</strong>
          </div>
        </section>
        <section class="reward-grid">
          <article class="reward-card is-active"><strong>1</strong><span>Done ✓</span></article>
          <article class="reward-card is-active"><strong>2</strong><span>Done ✓</span></article>
          <article class="reward-card"><strong>3</strong><span>Up next</span></article>
          <article class="reward-card is-bonus"><strong>+10</strong><span>no hints</span></article>
        </section>
      </div>
    `,
    "student-tournament": `
      <div class="prototype-screen">
        <section class="quest-hero is-tournament">
          <div>
            <span class="stage-pill">Weekly Tournament</span>
            <h4>Business Math · Week 3</h4>
            <p>Complete daily tasks to earn points. Top 3 win a badge — results posted Sunday.</p>
          </div>
          <div class="quest-reward">
            <strong>#4</strong>
            <span>your rank</span>
          </div>
        </section>
        <section>
          <p class="panel-label">Leaderboard · 8 students</p>
          <div class="leaderboard">
            <div class="leaderboard-row is-top"><span class="lb-rank">🥇</span><span class="lb-name">Alex K.</span><div class="lb-bar" style="--w:100%"></div><span class="lb-pts">210 pts</span></div>
            <div class="leaderboard-row is-top"><span class="lb-rank">🥈</span><span class="lb-name">Maya R.</span><div class="lb-bar" style="--w:88%"></div><span class="lb-pts">185 pts</span></div>
            <div class="leaderboard-row is-top"><span class="lb-rank">🥉</span><span class="lb-name">Jordan T.</span><div class="lb-bar" style="--w:81%"></div><span class="lb-pts">170 pts</span></div>
            <div class="leaderboard-row is-self"><span class="lb-rank">4</span><span class="lb-name">Lily (you)</span><div class="lb-bar" style="--w:71%"></div><span class="lb-pts">150 pts</span></div>
            <div class="leaderboard-row"><span class="lb-rank">5</span><span class="lb-name">Sam W.</span><div class="lb-bar" style="--w:62%"></div><span class="lb-pts">130 pts</span></div>
          </div>
        </section>
      </div>
    `,
    "app-placeholder": `
      <div class="prototype-screen simple-dashboard">
        <section class="stage-banner">
          <span>Preview</span>
          <div>
            <h4>${screen.appTitle || "App View"}</h4>
            <p>This demo keeps the application switch visible. A dedicated mock for this role can be added as the next iteration.</p>
          </div>
        </section>
        <section class="game-settings">
          ${metricCards([
            { value: "3", label: "apps always available" },
            { value: "1", label: "selected feature" },
            { value: "0", label: "hidden role switches" }
          ])}
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
  roleSwitcher.innerHTML = "";
  const featureRoleIds = new Set(getCurrentFeature().roles.map((r) => r.id));

  getFeatureRoles().forEach((role) => {
    const hasContent = featureRoleIds.has(role.id);
    const screenCount = hasContent
      ? getCurrentFeature().roles.find((r) => r.id === role.id)?.screens.length ?? 0
      : 0;
    const subLabel = hasContent ? `${screenCount} екран${screenCount === 1 ? "" : "и"}` : "не задіяно";

    const button = document.createElement("button");
    button.type = "button";
    button.disabled = !hasContent;
    button.className = [
      "role-button",
      role.id === state.roleId ? "is-active" : "",
      !hasContent ? "is-disabled" : ""
    ].filter(Boolean).join(" ");
    button.innerHTML = `
      <span class="role-icon role-icon-${role.id}" aria-hidden="true"></span>
      <span>
        <strong>${role.label}</strong>
        <small>${subLabel}</small>
      </span>
    `;
    button.setAttribute("aria-label", hasContent ? `${role.label}, ${subLabel}` : `${role.label} — не задіяно`);
    if (hasContent) {
      button.addEventListener("click", () => {
        state.roleId = role.id;
        state.screenIndex = 0;
        render();
      });
    }
    roleSwitcher.append(button);
  });
}

function renderScreens() {
  const role = getCurrentRole();
  screenList.innerHTML = "";

  const screenIcons = {
    "student-post-lesson-start": `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.4"/><polyline points="4.5,7 6.2,9.2 9.5,4.8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    "student-recap-processing": `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 1.5h7M3.5 12.5h7M4.5 1.5v3.2L7 7l-2.5 2.3v3.2M9.5 1.5v3.2L7 7l2.5 2.3v3.2" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    "student-recap": `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2.5" y="1.5" width="9" height="11" rx="1.2" stroke="currentColor" stroke-width="1.3"/><line x1="4.5" y1="5" x2="9.5" y2="5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><line x1="4.5" y1="7.3" x2="9.5" y2="7.3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><line x1="4.5" y1="9.6" x2="7.5" y2="9.6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`,
    "student-week": `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="2.5" width="11" height="10" rx="1.2" stroke="currentColor" stroke-width="1.3"/><line x1="1.5" y1="5.8" x2="12.5" y2="5.8" stroke="currentColor" stroke-width="1.2"/><line x1="5" y1="1.5" x2="5" y2="3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><line x1="9" y1="1.5" x2="9" y2="3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
    "teacher-ai-review": `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="8" width="2.5" height="4.5" rx="0.6" fill="currentColor"/><rect x="5.75" y="5" width="2.5" height="7.5" rx="0.6" fill="currentColor"/><rect x="10" y="1.5" width="2.5" height="11" rx="0.6" fill="currentColor"/></svg>`,
    "teacher-before-review": `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.3"/><polyline points="7,4 7,7.2 9.2,9" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    "teacher-before-preview": `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2.5a3.8 3.8 0 0 1 3.8 3.8c0 1.5-.9 2.8-2 3.4V11H5.2V9.7C4.1 9.1 3.2 7.8 3.2 6.3A3.8 3.8 0 0 1 7 2.5z" stroke="currentColor" stroke-width="1.3"/><line x1="5.2" y1="12.5" x2="8.8" y2="12.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
    "student-warmup": `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 12.5c-2.8 0-5-2.2-5-5 0-3 2-4.5 2-4.5s-.3 2 1.5 3c0-2 1.5-4.5 1.5-4.5.5 2.5 2.5 3 2.5 5a2.5 2.5 0 0 1-2.5 2.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    "student-preview": `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1.5 7s2-4.5 5.5-4.5S12.5 7 12.5 7s-2 4.5-5.5 4.5S1.5 7 1.5 7z" stroke="currentColor" stroke-width="1.3"/><circle cx="7" cy="7" r="1.8" stroke="currentColor" stroke-width="1.3"/></svg>`,
    "student-game": `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><polygon points="7,2 8.5,5.5 12.5,5.8 9.5,8.5 10.5,12.5 7,10.5 3.5,12.5 4.5,8.5 1.5,5.8 5.5,5.5" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>`,
  };
  const defaultIcon = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2.5" y="2.5" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3"/></svg>`;

  role.screens.forEach((screen, index) => {
    const btn = document.createElement("button");
    btn.className = "screen-btn" + (index === state.screenIndex ? " is-active" : "");
    btn.type = "button";
    const icon = screenIcons[screen.type] || defaultIcon;
    btn.innerHTML = `<span class="screen-btn-icon">${icon}</span><span class="screen-btn-label">${screen.title}</span>`;
    btn.addEventListener("click", () => {
      state.screenIndex = index;
      render();
    });
    screenList.append(btn);
  });
}

function renderAppContext(role) {
  if (!appContextPanel) return;

  const isTeacher = role.id === "teacher";

  appContextPanel.innerHTML = isTeacher
    ? `
      <section class="context-section">
        <span>Today&apos;s calendar</span>
        <button class="context-row is-active" type="button">
          <strong>09:00</strong>
          <small>Lily Carter - Grade 7 Math</small>
        </button>
        <button class="context-row" type="button">
          <strong>10:30</strong>
          <small>Noah Kim - Fractions</small>
        </button>
        <button class="context-row" type="button">
          <strong>14:00</strong>
          <small>Emma Stone - Pre-algebra</small>
        </button>
      </section>
      <section class="context-section">
        <span>Student base</span>
        <button class="context-row is-active" type="button">
          <strong>Lily Carter</strong>
          <small>Business Math - next lesson today</small>
        </button>
        <button class="context-row" type="button">
          <strong>Noah Kim</strong>
          <small>6 lessons - needs review</small>
        </button>
        <button class="context-row" type="button">
          <strong>Emma Stone</strong>
          <small>12 lessons - ready</small>
        </button>
      </section>
    `
    : `
      <section class="context-section">
        <span>Courses</span>
        <button class="context-row is-active" type="button">
          <strong>Math - Grade 7</strong>
          <small>Ms. Carter - 16 lessons</small>
        </button>
        <button class="context-row" type="button">
          <strong>English - A2</strong>
          <small>Mr. Stone - 9 lessons</small>
        </button>
        <button class="context-row" type="button">
          <strong>Coding - Intro</strong>
          <small>Ms. Lee - 5 lessons</small>
        </button>
      </section>
      <section class="context-section">
        <span>Past lessons</span>
        <button class="context-row is-active" type="button">
          <strong>May 12</strong>
          <small>Business Math recap</small>
        </button>
        <button class="context-row" type="button">
          <strong>May 5</strong>
          <small>Ratios and rates</small>
        </button>
        <button class="context-row" type="button">
          <strong>Apr 28</strong>
          <small>Percent basics</small>
        </button>
      </section>
    `;
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

  renderAppContext(role);
}

function startProcessingTimer() {
  if (processingTimer) clearInterval(processingTimer);
  const DURATION = 10000;
  const TICK = 80;
  let elapsed = 0;

  processingTimer = setInterval(() => {
    elapsed += TICK;
    const pct = Math.min(100, Math.round((elapsed / DURATION) * 100));

    const pctEl = document.getElementById("processing-pct");
    const fillEl = document.getElementById("progress-fill");
    if (pctEl) pctEl.textContent = `${pct}%`;
    if (fillEl) fillEl.style.width = `${pct}%`;

    if (elapsed >= DURATION) {
      clearInterval(processingTimer);
      processingTimer = null;
      state.screenIndex += 1;
      render();
    }
  }, TICK);
}

function openPostLessonRecap() {
  const screen = getCurrentScreen();
  if (screen.type !== "student-post-lesson-start") return;
  state.screenIndex += 1;
  render();
}

function approveLessonInsights() {
  state.lessonInsightsApproved = true;
  state.insightTab = "feedback";
  render();
}

function renderScreenHypotheses() {
  // Per-screen hypotheses live in the feature hypothesis list (hypothesis mode)
  const old = document.getElementById("screen-hyp-block");
  if (old) old.remove();
}

function renderSelectedScreen() {
  const role = getCurrentRole();
  const screen = getCurrentScreen();
  const appLabel = role.appLabel || role.label;

  if (processingTimer) {
    clearInterval(processingTimer);
    processingTimer = null;
  }

  appRoleLabel.textContent = appLabel;
  browserUrl.textContent = `app.brighterly.com/${role.path}`;
  screenRole.textContent = appLabel;
  screenTitle.textContent = screen.appTitle || screen.title;
  screenAction.textContent = screen.appAction || screen.action;
  screenAction.style.display = screen.hideToolbarAction ? "none" : "";
  const insightsAlreadyApproved = screen.type === "teacher-ai-review" && state.lessonInsightsApproved;
  screenAction.disabled = Boolean(screen.actionDisabled) || insightsAlreadyApproved;
  if (insightsAlreadyApproved) {
    screenAction.textContent = "Published ✓";
  }
  screenAction.classList.toggle("is-disabled-action", Boolean(screen.actionDisabled) || insightsAlreadyApproved);
  renderMock(screen);

  if (screen.type === "student-recap-processing") {
    startProcessingTimer();
  }

  syncNestedScreenHeight();
}

function renderSummary() {
  const feature = getCurrentFeature();
  featureDescription.textContent = feature.description;
}

function renderHypothesis() {
  const hypothesisViewData = {
    recap: {
      title: "AI-итоги урока",
      summary: "Перевіряємо, чи персональний AI-рекап після уроку збільшує конверсію в першу практику і повторне бронювання — і чи той самий звіт після демо-уроку підвищить конверсію в підписку.",
      stages: ["Урок завершено", "AI генерує рекап", "Вчитель підтверджує", "Учень і сім'я отримують"],
      metrics: [
        ["Конверсія в першу практику", "+40% у перші 24 год", "Учень відкриває першу задачу швидше після отримання рекапу."],
        ["Відкриття рекапу сім'єю", "70%+", "Сім'я читає підсумок, поки урок ще актуальний."],
        ["Повторне бронювання", "+8%", "Рекап переводить прогрес у зрозумілий наступний крок."],
        ["Зусилля вчителя", "<2 хв медіана", "Формат не повинен додавати ручної роботи."],
        ["Конверсія демо → підписка", "+6 пп (базова ~15%)", "AI-інсайт після демо показує цінність продукту до першої оплати, поки мотивація висока. Ринок 1:1 онлайн-репетиторства: медіана ~15%, топ-платформи 20–25%."]
      ],
      hypotheses: [
        ["Рекап з конкретними помилками підвищить конверсію в першу практику.", "конверсія >= 40%", "конверсія < 25%", "Порівняти 30 учнів з рекапом і 30 без; фіксувати відкриття першого завдання за 24 год", "Автоматизувати рекап і встановити SLA перевірки вчителем."],
        ["Сім'ї, що отримали рекап, бронюють наступний урок частіше.", "повторне бронювання +8% (базова ~65%)", "різниця менше 3% після 4 тижнів", "Надіслати рекап вручну 30 сім'ям, порівняти повторне бронювання з 30 без рекапу", "Провести експеримент в одній віковій групі (наприклад Grade 7) щоб зменшити шум — після підтвердження поступово розширити на всі K-12."],
        ["AI здатний зібрати достатньо точний рекап уроку без ручної обробки даних.", "частка рекапів з правками <20%, оцінка точності від вчителя ≥4 з 5 (вторинний сигнал: медіана підтвердження <2 хв)", "правки >40% або оцінка <3 з 5", "15 вчителів оцінюють кожну AI-чернетку за точністю (1–5), фіксуємо частку і характер правок, 3 тижні", "Автоматизувати pipeline, знизити ціну токена через кешування транскрипту."],
        ["AI-інсайт після демо-уроку підвищить конверсію в першу підписку.", "конверсія демо → підписка ≥ 21% (ринкова база ~15%; медіана 1:1 онлайн-репетиторства)", "різниця менше 3 пп після 6 тижнів або відкриття інсайту не корелює з підпискою", "50 демо-уроків з AI-інсайтом, 50 без; фіксувати підписку за 72 год, відкриття інсайту до кліку і час до рішення; ~2 000 демо/міс дають достатній обсяг за 2–3 тижні", "Автоматизувати відправку інсайту після кожного демо як окремий тригер; A/B тест теми email; відстежувати LTV, а не лише першу оплату."],
        ["Накопичені рекапи дозволять оцінити якість роботи вчителя, складність навчальної програми і системно важкі теми для учнів.", "платформа може виявляти: яким темам учні систематично помиляються, які вчителі дають найкращий прогрес, де в програмі є структурна прогалина — і надавати це адміністрації та батькам", "данних менше ніж за 3–6 місяців недостатньо для стат. значимих висновків; вчителі сприймають рейтинг як загрозу → відтік", "агрегат AI-рекапів за 6+ місяців по кожному вчителю: прогрес учнів по темах, частота систематичних помилок, динаміка якості від уроку до уроку, порівняння між вчителями з похожими групами", "аналітичний дашборд для адміністрації платформи; персональний фідбек вчителю щодо сильних і слабких тем; рекомендації вчителів сім'ям на основі об'єктивних даних прогресу, а не лише рейтингів.", "deferred"]
      ],
      monetization: [
        {
          title: "Повторне бронювання через рекап",
          mechanism: "Рекап після уроку переводить увагу сім'ї одразу після заняття у зрозумілий наступний крок, поки мотивація висока.",
          metric: "Міряємо повторне бронювання за 48 год і відкриття рекапу до кліку на бронювання.",
          example: "Якщо підтвердиться +3% уроків: +3 600 уроків/міс × $6 = +$21.6 тис./міс."
        },
        {
          title: "Розширений AI-звіт для сім'ї",
          mechanism: "Детальна аналітика прогресу і персональні рекомендації можуть стати частиною дорожчого сімейного пакета.",
          metric: "Міряємо перехід на пакет і зменшення звернень у підтримку.",
          example: "5% підключень на 30 000 студентів × $4/міс = $6 тис./міс валового доходу."
        },
        {
          title: "Конверсія з демо-уроку в підписку",
          mechanism: "Після безкоштовного демо-уроку сім'я отримує повноцінний AI-інсайт — метрики, прогалини, тижневий план задач — точно так, як виглядатиме кожне наступне заняття за підпискою. Це тріал досвіду, а не просто тріал уроку: сім'я бачить конкретний результат і розуміє, що отримуватиме регулярно. Рішення про підписку приймається на висоті мотивації, поки враження від уроку ще свіже. Ключово: це верх воронки — кожен додатковий відсоток конверсії тут масштабується на весь потік нових лідів.",
          metric: "Міряємо конверсію демо → перший оплачений урок у групі з AI-інсайтом проти контрольної без нього. Додатково: час до рішення, відкриття інсайту до кліку і LTV когорти через 6 міс.",
          example: "Ринок 1:1 онлайн-репетиторства: медіана конверсії демо → підписка ~15%, топ-платформи досягають 20–25%. Brighterly: ~2 000 демо/міс (≈65/день). +6 пп конверсії = +120 нових підписників/міс. При LTV ~$300: +$36 тис. нового LTV щомісяця — без змін у маркетинговому бюджеті."
        }
      ]
    },
    practice: {
      title: "Практика между уроками",
      summary: "Перевіряємо, чи структурований 6-денний план задач збільшує регулярність практики між живими уроками.",
      stages: ["Вчитель затверджує план", "6 днів коротких задач", "Стан і серія"],
      metrics: [
        ["Виконання плану за тиждень", "65%+ учнів завершують план", "Короткі щоденні задачі не відчуваються як велика домашка."],
        ["Активних днів на тиждень", "4+ дні/тиждень (базово ~2)", "Структура збільшує ритм без примусу."],
        ["Повернення після пропуску", "70%+", "Пропуск не повинен ламати мотивацію."],
        ["Утримання 90 днів", "+15%", "Регулярна практика знижує відтік студентів."]
      ],
      hypotheses: [
        ["Учні зі структурованим планом виконують хоча б одне завдання між уроками частіше, ніж ті, кому нічого не дали.", "частка активних учнів у групі з планом на 20+% вища (базова ~15%)", "різниця менше 10% після 2 тижнів", "Дати 20 учням план вручну, 20 — нічого; вчитель фіксує виконання за тиждень", "Будувати систему планів у продукті."],
        ["Учні з практикою між уроками залишаються на платформі довше, ніж ті, хто не практикує.", "90-денне утримання у групі з практикою на 15+% (базовий відтік ~30%)", "різниця менше 8%", "Аналіз наявних даних: будь-яке виконання між уроками проти відсутності — порівняти відтік", "Пріоритизувати активацію першого завдання."],
        ["Батарейки зменшать втрату мотивації після пропуску.", "повернення після пропуску на 20+% ніж без батарейок (базова ~50%)", "різниця менше 10% після 4 тижнів", "Одна група — батарейки, інша — жорстке скидання серії. 60+ учнів, 4 тижні.", "Залишити батарейки, додати пояснення для сім'ї."],
        ["Учні з геймфікованими завданнями практикують регулярніше, ніж ті, хто отримує ті самі завдання без механік.", "середня кількість активних днів на 2+ дні вища за контрольну (базова ~2 дні/тиждень)", "різниця менше 1 дня після 4 тижнів", "Одна група — завдання з серіями, інша — ті самі без механік. 4 тижні, 60+ учнів.", "Залишити механіки, додати пояснення для сім'ї."]
      ],
      monetization: [
        {
          title: "Утримання через регулярну практику",
          mechanism: "Учень повертається підготовленим, сім'я бачить прогрес — відтік знижується без прямої прив'язки до ціни.",
          metric: "Міряємо 90-денне утримання і повторне бронювання у груп з різною активністю між уроками.",
          example: "Якщо підтвердиться +2% уроків: +2 400 уроків/міс × $6 = +$14.4 тис./міс."
        },
        {
          title: "Платний пакет практики",
          mechanism: "Персональний план задач, підтверджений вчителем, може стати додатковим місячним пакетом для сімей, яким потрібна структура між уроками.",
          metric: "Міряємо підключення пакета, завершення плану і оцінку сім'ї.",
          example: "10% підключень на 30 000 студентів × $6/міс = $18 тис./міс валового доходу."
        }
      ]
    },
    review: {
      title: "Повторение перед уроком",
      summary: "Перевіряємо, чи короткий розігрів з повторенням пройденого матеріалу підвищує якість уроку і оцінку вчителя.",
      stages: ["За 10 хв до уроку", "3–5 питань з пройденого", "Вчитель бачить результат"],
      metrics: [
        ["Оцінка якості уроку вчителем", "+0.8 бала (базова ~3.2 з 5)", "Вчитель стартує урок з уже відомою прогалиною."],
        ["Виконання розігріву", "60%+ учнів до початку уроку", "Розігрів має бути коротким і зрозумілим."],
        ["Точність відповідей на уроці", "+10%", "Повторення підвищує готовність до нового матеріалу."]
      ],
      hypotheses: [
        ["Учні, що зробили повторення перед уроком, отримують вищу оцінку від вчителя за якість уроку, ніж ті, хто не робив.", "середня оцінка уроку у групі з повторенням на 0.7+ балів вища (базова ~3.2 з 5)", "різниця менше 0.3 бала", "Попросити 10 вчителів давати 1 питання повторення перед кожним уроком 2 тижні, оцінювати урок після. Порівняти з попередніми уроками без розігріву.", "Вбудувати повторення як обов'язковий крок перед уроком."],
        ["Вчителі, що бачать результати повторення перед уроком, оцінюють якість уроку вище.", "оцінка уроку у групі з даними повторення на 0.8+ балів вища (базова ~3.2 з 5)", "різниця менше 0.3 бала", "Дати 10 вчителям таблицю з результатами повторення до уроку, 10 — без. Опитувальник після кожного уроку.", "Зробити перегляд результатів повторення обов'язковим кроком."],
        ["Учні, що виконали повторення, роблять менше помилок на початку уроку, ніж ті, хто не виконав.", "частка помилок у перших 10 хв уроку на 10+% (базова ~35%)", "різниця менше 5%", "Вчитель позначає помилки перших 10 хв протягом 4 уроків у двох групах", "Масштабувати повторення, якщо покращення стабільне."]
      ],
      monetization: [
        {
          title: "Якість уроку як аргумент утримання",
          mechanism: "Вищий рейтинг уроку і менше помилок на початку — сигнал для сім'ї, що підготовка дає результат, що підтримує продовження підписки.",
          metric: "Міряємо оцінку уроку, 90-денне утримання і повторне бронювання разом.",
          example: "Якщо підтвердиться +2% уроків: +2 400 уроків/міс × $6 = +$14.4 тис./міс."
        },
        {
          title: "Платна підготовка до уроку",
          mechanism: "Адаптивне повторення перед кожним уроком може стати окремим платним доповненням для сімей, орієнтованих на результат.",
          metric: "Міряємо підключення і якість уроків після повторення.",
          example: "8% підключень на 30 000 студентів × $4/міс = $9.6 тис./міс валового доходу."
        }
      ]
    },
    preview: {
      title: "Превью нового материала",
      summary: "Перевіряємо, чи короткий превью ключових понять наступного уроку зменшує час на пояснення і підвищує задоволеність уроком.",
      stages: ["За 10 хв до уроку", "2–3 нові концепції", "Вчитель бачить знайомість"],
      metrics: [
        ["Час вчителя на первинне пояснення", "-15% (базова ~12 хв)", "Менше часу на пояснення — більше на практику."],
        ["Виконання превью", "55%+ учнів до початку уроку", "Превью має бути цікавим, не як домашнє завдання."],
        ["Оцінка уроку учнем", "+0.5 бала (базова ~3.5 з 5)", "Учень відчуває, що вже знає, про що буде урок."]
      ],
      hypotheses: [
        ["Учні, що переглянули превью, потребують менше часу на первинне пояснення від вчителя, ніж ті, хто не переглядав.", "час вчителя на пояснення скорочується на 15%+ (базова ~12 хв)", "різниця менше 2 хв", "Вчитель фіксує час пояснення протягом 4 уроків у групі з превью і без. 20 учнів у кожній.", "Масштабувати превью як обов'язковий крок перед введенням нових тем."],
        ["Учні, що переглянули превью, отримують вищу оцінку уроку, ніж ті, хто не переглядав.", "середня оцінка уроку на 0.5+ балів вища (базова ~3.5 з 5)", "різниця менше 0.2 бала", "Опитувальник після уроку у двох групах: превью vs без. 4 тижні, 40+ учнів.", "Вбудувати превью в стандартний сценарій підготовки до уроку."],
        ["Учні після превью задають більше змістовних питань під час уроку, ніж ті, хто не бачив превью.", "частка учнів, що задають питання, на 15+% вища (базова ~20%)", "різниця менше 5%", "Вчитель рахує кількість питань учня на уроці. 4 уроки, дві групи.", "Додати інтерактивні елементи до превью для стимуляції питань."]
      ],
      monetization: [
        {
          title: "Ефективніший урок як аргумент ціни",
          mechanism: "Вчитель витрачає менше часу на пояснення і більше — на практику з учнем. Це підвищує сприйняту цінність уроку.",
          metric: "Міряємо оцінку уроку, час пояснень і повторне бронювання разом.",
          example: "Якщо підтвердиться +2% уроків: +2 400 уроків/міс × $6 = +$14.4 тис./міс."
        },
        {
          title: "Платний пакет підготовки до уроку",
          mechanism: "Персональний превью ключових понять перед кожним уроком може бути частиною платного пакета разом з повторенням.",
          metric: "Міряємо підключення пакета і час вчителя на пояснення після підключення.",
          example: "8% підключень на 30 000 студентів × $4/міс = $9.6 тис./міс валового доходу."
        }
      ]
    },
    game: {
      title: "Игровая мотивация и прогресс",
      summary: "Перевіряємо, чи очки, серія, батарейки і бейджі підвищують регулярність без тиску і без падіння якості навчання.",
      stages: ["Щоденне завдання", "Серія і батарейки", "Бейджі і тижневий челендж"],
      metrics: [
        ["Активних днів на тиждень", "5+ днів/тиждень (базово ~2)", "Механіка має підтримувати ритм без примусу."],
        ["Використання підказок", "-20%", "Бонус за самостійність зменшує зайві підказки."],
        ["Повернення після пропуску", "70%+", "Пропуск не повинен ламати мотивацію."],
        ["Точність відповідей", "без зниження", "Ігрові механіки не мають шкодити навчанню."]
      ],
      hypotheses: [
        ["Учні з ігровими механіками практикують регулярніше, ніж ті, хто отримує ті самі завдання без механік.", "середня кількість активних днів на 2+ дні вища (базова ~2 дні/тиждень)", "різниця менше 1 дня після 4 тижнів", "Одна група — завдання з серіями і батарейками, інша — без механік. 4 тижні, 60+ учнів.", "Залишити механіки, додати пояснення для сім'ї."],
        ["Батарейки зменшують відтік серії після пропуску без зниження відповідальності.", "повернення після пропуску на 20+% ніж без батарейок (базова ~50%)", "різниця менше 10% або точність падає >5%", "Група з батарейками проти жорсткого скидання. 60+ учнів, 4 тижні.", "Показати пояснення батарейок в застосунку учня."],
        ["Бонус за роботу без підказок підвищить самостійність без падіння виконання.", "використання підказок -20% при збереженні точності", "точність падає більше ніж на 5%", "Відстежувати підказки на виконану задачу і точність відповідей у двох групах", "Давати бонус лише для задач відповідної складності."],
        ["Сім'ї, що бачать прогрес і бейджі учня, рідше відписуються, ніж ті, хто не бачить.", "90-денне утримання у групі з видимим прогресом на 10+% (базова ~70%)", "різниця менше 5%", "Порівняти сім'ї з активними акаунтами сімейного застосунку і пасивними за 90-денним утриманням", "Додати тижневі підсумки прогресу для сімей."]
      ],
      monetization: [
        {
          title: "Вища тижнева активність і утримання",
          mechanism: "Регулярна практика з механіками може підтримати утримання уроків, якщо якість навчання не падає разом з активністю.",
          metric: "Міряємо щоденні сесії, повернення після пропусків і продовження уроків разом.",
          example: "Якщо підтвердиться +2% уроків: +2 400 уроків/міс × $6 = +$14.4 тис./міс."
        },
        {
          title: "Видимість прогресу як аргумент підписки",
          mechanism: "Бейджі і тижневий прогрес для сім'ї можуть посилити дорожчий сімейний пакет без оплати кожної функції окремо.",
          metric: "Міряємо перехід на пакет і оцінку сім'ї після активації прогрес-панелі.",
          example: "4% переходів × 30 000 студентів × $5/міс = $6 тис./міс валового доходу."
        }
      ]
    }
  };

  const data = hypothesisViewData[state.featureId] || featureHypotheses[state.featureId];
  if (!data) return "<p>No hypothesis data.</p>";

  const resultAspectModel = {
    // format: [name, target, why, baseValue, deltaValue, barOptions]
    // baseValue/deltaValue = null for metrics without a compact progress scale.
    recap: [
      ["Конверсія в практику", "~55% у перші 24 год", "Учень відкриває першу задачу швидше після рекапу.", 0, 55],
      ["Відкриття сім'єю", "~70%", "Рекап приходить, поки урок ще актуальний.", 0, 70],
      ["Повторне бронювання", "~73%", "Рекап переводить прогрес у наступний урок.", 65, 8],
      ["Зусилля вчителя", "<2 хв медіана", "Підтвердження рекапу не додає ручної роботи.", null, null],
      ["Конверсія демо → підписка", "~21% (базова ~15%)", "AI-інсайт після демо показує цінність продукту до першої оплати. Ринок 1:1 репетиторства: медіана ~15%, топ ~25%.", 15, 6]
    ],
    practice: [
      ["Виконання плану", "~65% учнів", "Короткі щоденні задачі не відчуваються як велика домашка.", 0, 65],
      ["Активних днів", "2 → 4 дні із 7", "Рахуємо дні, коли учень зробив хоча б одне завдання; базовий рівень — 2 дні на тиждень.", 2, 2, { max: 7, baseline: "База: 2 дні із 7", target: "Ціль: 4 дні із 7" }],
      ["Повернення після пропуску", "~70%", "Батарейки допомагають повернутися без втрати мотивації.", 50, 20],
      ["Утримання 90 днів", "~85%", "Регулярна практика знижує відтік студентів.", 70, 15]
    ],
    review: [
      ["Оцінка уроку вчителем", "~4.0 з 5", "Вчитель стартує з уже відомою прогалиною.", null, null],
      ["Виконання повторення", "~60% учнів", "Повторення коротке і зрозуміле.", 0, 60],
      ["Точність на уроці", "~75%", "Повторення підвищує готовність до нового матеріалу.", 65, 10]
    ],
    preview: [
      ["Час на пояснення", "~10 хв (зараз ~12 хв)", "Менше часу на пояснення — більше на практику.", null, null],
      ["Виконання прев'ю", "~55% учнів", "Прев'ю цікаве, не як домашнє завдання.", 0, 55],
      ["Оцінка уроку учнем", "~4.0 з 5", "Учень відчуває, що вже знає тему уроку.", null, null]
    ],
    game: [
      ["Активних днів", "2 → 5 днів із 7", "Рахуємо дні, коли учень зробив хоча б одне завдання; ціль — регулярна практика у більшість днів тижня.", 2, 3, { max: 7, baseline: "База: 2 дні із 7", target: "Ціль: 5 днів із 7" }],
      ["Використання підказок", "~28% (зараз ~35%)", "Бонус за самостійність зменшує зайві підказки.", null, null],
      ["Повернення після пропуску", "~70%", "Пропуск не повинен ламати мотивацію.", 50, 20],
      ["Точність відповідей", "~70% (не знижується)", "Ігрові механіки не мають шкодити навчанню.", 70, 0]
    ]
  };
  const resultAspects = resultAspectModel[state.featureId] || data.metrics;
  const riceModel = {
    recap: {
      title: "AI-підсумки уроку",
      reachPct: 90,
      reachReason: "майже всі активні учні проходять урок; частина уроків може бути без запису або перевірки",
      impact: 2.5,
      confidence: 0.85,
      effort: 3,
      note: "Торкається кожного уроку і переводить його цінність у повторне бронювання."
    },
    practice: {
      title: "Практика між уроками",
      reachPct: 100,
      reachReason: "базовий сценарій між уроками застосовний майже до всіх активних учнів",
      impact: 3,
      confidence: 0.75,
      effort: 4,
      note: "Найбільше охоплення: впливає на регулярність між уроками і 90-денне утримання."
    },
    review: {
      title: "Повторення перед уроком",
      reachPct: 70,
      reachReason: "потрібне найближче заняття в розкладі і матеріал минулого уроку",
      impact: 2,
      confidence: 0.7,
      effort: 2,
      note: "Мале зусилля, прямий сигнал якості — добре як перша робоча версія розігріву."
    },
    preview: {
      title: "Прев'ю нового матеріалу",
      reachPct: 70,
      reachReason: "працює, коли наступна тема відома заздалегідь і її можна коротко підготувати",
      impact: 1.5,
      confidence: 0.6,
      effort: 2,
      note: "Менша впевненість: потрібне тестування, чи учні взагалі відкривають прев'ю."
    },
    game: {
      title: "Ігрова мотивація і прогрес",
      reachPct: 80,
      reachReason: "підходить більшості учнів, але не всім віковим групам і форматам навчання",
      impact: 2,
      confidence: 0.6,
      effort: 5,
      note: "Може підняти регулярність, але потребує запобіжників якості і перевірки точності."
    }
  };
  const riceItems = Object.entries(riceModel).map(([featureId, item]) => ({
    id: featureId,
    ...item,
    score: (item.reachPct * item.impact * item.confidence) / item.effort
  })).sort((a, b) => b.score - a.score);
  const riceTone = (score) => score >= 50 ? "high" : score >= 30 ? "mid" : "low";
  const ricePercent = (value, max) => Math.max(6, Math.min(100, Math.round((value / max) * 100)));
  const maxRiceScore = Math.max(...riceItems.map(i => i.score));
  const riceComparisonHtml = ``;
  const workPlanModel = {
    recap: {
      title: "Рекап + AI-інсайти",
      totalDays: 10,
      work: [
        ["Запис і транскрипція уроку", "3 дні / до 5 з контекстом", "Базова: аудіозапис → повний текстовий транскрипт. Продвинута: додатково скріншоти слайдів і задач як контекст для AI."],
        ["Набір метрик + AI-промпт", "3 дні", "Визначити набір метрик, які надійно екстрагуються з транскрипту. Скласти і протестувати структурований промпт. +1 день на ітерацію промпту за результатами валідації."],
        ["Валідація якості AI", "2 дні", "Складання скорингової моделі для оцінки якості рекапу. Автоматичний скоринг виходів AI за заздалегідь визначеними критеріями. Паралельна людська оцінка вибірки (15–20 рекапів). Порівняння і калібрування — де машина помиляється."],
        ["Перевірка вчителем + фідбек", "1 день", "Екран перегляду AI-чернетки, форма оцінки якості AI для команди, кнопка публікації учню."],
        ["End-to-end тестування", "1 день", "Повна перевірка всього pipeline на реальних уроках: якість транскрипту, точність AI, своєчасність доставки. Не про промпт окремо — про весь шлях від кінця уроку до публікації учню."]
      ],
      extraNotes: [
        ["Тижневий план задач", "+2 дні · окрема задача", "Складання і валідація персонального плану на 7 днів на базі рекапу. Технічно — продовження цього блоку, але окремий скоуп."],
        ["Онбординг і навчання вчителів", "+2 дні · окрема задача", "Відеотутор по роботі з AI-звітом і ручному коригуванню метрик. Документація по фічі. Проведення онбордингу першої групи вчителів. Продумати умови участі: подяки, бонуси за якісний фідбек, пріоритет підтримки — щоб вчителі були зацікавлені, а не просто зобов'язані."],
        ["Email-розсилка з AI-рекапом", "+1 день · окрема задача", "Верстка HTML-листа з AI-рекапом уроку — метрики, прогалини, план на тиждень. Налаштування тригера: автовідправка після підтвердження вчителем. Окремий тригер для демо-уроку: відправка інсайту сім'ї одразу після демо як конверсійний крок. A/B тест теми листа. Адаптація для мобільного і темної теми."]
      ]
    },
    practice: {
      title: "Практика між уроками",
      totalDays: 7,
      work: [
        ["AI-генерація тижневого плану", "2 дні", "Структурований промпт на основі транскрипту уроку і профілю учня: 5 тем, 3 задачі на день, зростання складності. Валідація виходу AI: чи правильно розбиті теми, чи відповідають задачі рівню, чи немає повторів. Ітерація промпту за результатами тестових запусків на реальних уроках."],
        ["Екран учня: тижневий план і щоденна сесія", "2 дні", "7 карток днів зі статусами (виконано / сьогодні / заблоковано). Day card розгортається у сесію з 3 задачами, dot-навігатором, вибором відповіді, підказкою і поясненням. Streak-смужка нагорі, батарейки захисту, анімація правильної відповіді. Найбільш трудомісткий екран — багато станів і edge cases."],
        ["State machine: серії, батарейки і прогрес", "1.5 дні", "Формальна модель станів задачі: нова / почата / виконана / пропущена / батарейка витрачена. Серія не скидається при одному пропуску — витрачається батарейка. Захист серії не знімає відповідальності: батарейок обмежена кількість. Синхронізація стану між днями, відновлення після перезавантаження."],
        ["Екран вчителя: перегляд і підтвердження плану", "1 день", "Таблиця з 5 днями, 3 задачами в кожному. Вчитель може переглянути кожну задачу, відредагувати текст або замінити задачу. Кнопка 'Опублікувати план' — після цього план стає доступним учню. Попередження, якщо план ще не підтверджено і до уроку менше 24 год."],
        ["End-to-end тестування і edge cases", "0.5 дня", "Перевірка повного циклу: урок → AI → план вчителя → публікація → сесія учня → streak. Тести граничних ситуацій: учень пропустив 2 дні поспіль, батарейки скінчились, план не підтверджено вчасно. Перевірка коректності даних між екранами."]
      ]
    },
    review: {
      title: "Повторення перед уроком",
      totalDays: 4,
      work: [
        ["AI-генерація питань повторення", "1.5 дні", "Промпт на основі транскрипту попереднього уроку і результатів практики учня: 3–5 питань на прогалини і слабкі теми. Баланс між складністю і впевненістю — повторення не повинне лякати. Валідація якості: чи питання відповідають пройденому, чи не надто прості або надто складні. Ітерація промпту за результатами тестових запусків."],
        ["Екран учня: сесія повторення", "1 день", "Вхідний екран з темою і кількістю питань. Quiz-flow: питання з множинним вибором, підказка за запитом, пояснення після відповіді. Підсумковий екран: скільки правильно, які теми провалено, заохочувальне повідомлення. Різні стани: сесія не відкрита / в процесі / завершена."],
        ["Екран вчителя: рапорт перед уроком", "1 день", "Before-lesson панель: результати повторення кожного учня (% правильних, проблемні питання), час відкриття і час на сесії. Підказка AI: 'Зверніть увагу на X — більшість учнів помилилась'. Кнопка коригування плану уроку на основі результатів. Важливо: вчитель бачить рапорт до дзвінка, не під час."],
        ["Тригер і доставка", "0.5 дня", "Автоматичне відправлення завдання учню за N годин до уроку (налаштовується). Push-нотифікація або email. Обробка ситуації, коли учень не відкрив сесію — вчитель бачить це у рапорті."]
      ]
    },
    preview: {
      title: "Прев'ю нового матеріалу",
      totalDays: 4,
      work: [
        ["AI-генерація матеріалу прев'ю", "1.5 дні", "Промпт на основі плану наступного уроку і рівня учня: 2–3 нові концепції у форматі коротких карток. Не переказувати урок — тільки 'розігріти' увагу: знайома аналогія, ключовий термін, просте питання для розмірковування. Валідація: чи не спойлерить зміст, чи відповідає рівню, чи достатньо коротко (читання ≤ 3 хв). Ітерація промпту на реальних темах уроків."],
        ["Екран учня: картки прев'ю", "1 день", "Swipe-картки або scroll: кожна картка — одна концепція з візуальним акцентом, коротким текстом (2–4 речення) і питанням для рефлексії. Прогрес-смужка. Фінальний екран: 'Ти готовий — до зустрічі!' Відстеження: картку відкрито / прочитано до кінця / закрито раніше."],
        ["Екран вчителя: стан знайомості аудиторії", "1 день", "Before-lesson панель (окремий вигляд від review): список учнів зі статусами прев'ю (переглянув / частково / не відкривав). Час відкриття і приблизний час на матеріалі. AI-підказка: 'X учнів ще не переглянули — можливо, варто коротко пояснити тему на початку'. Різниця від review-панелі: не результати тесту, а рівень підготовленості аудиторії."],
        ["Тригер і доставка", "0.5 дня", "Відправка за N годин до уроку (налаштовується окремо від review). Нотифікація учню: 'Завтра урок — 3 хвилини підготовки'. Обробка статусу: не відкрив / відкрив / завершив — синхронізація з панеллю вчителя."]
      ]
    },
    game: {
      title: "Геймифікація і прогрес",
      totalDays: 6,
      work: [
        ["Модель балів і серій", "1.5 дні", "Алгоритм нарахування балів: базові бали за задачу × коефіцієнт складності × бонус за серію. Серія зростає щодня при умові виконання хоча б 1 задачі. Логіка ребалансу: якщо учень отримує бали при низькій точності — система має це помічати. Зберігання стану між сесіями, відновлення після перезавантаження."],
        ["Батарейки захисту серії", "1 день", "Батарейка витрачається замість скидання серії при одному пропуску. Кількість батарейок обмежена (наприклад, 2–3). Батарейки відновлюються при виконанні бонусних задач або щотижневому скиданні. UI-індикатор заряду в профілі учня. Edge case: батарейки скінчились — серія скидається, але без демотивуючих повідомлень."],
        ["Бейджі і досягнення", "1.5 дні", "Система бейджів: перша серія 3 дні / 7 днів / 30 днів, перша ідеальна сесія, топ тижня серед однокласників. Бейджі безпечні: немає 'провалених' бейджів, тільки 'здобуті'. Екран досягнень учня з прогрес-баром до наступного бейджу. Сімейний вигляд: батьки бачать бейджі без доступу до детальних оцінок."],
        ["Запобіжники якості та антизловживання", "1.5 дні", "Детектор 'farming': бали не нараховуються, якщо точність відповідей < 50% або частка підказок > 60%. Алерт вчителю, якщо учень набирає бали, але точність падає — можлива механічна прокрутка. Обмеження: максимум N балів за сесію (щоб не гриндити). Логування підозрілих патернів для ручного огляду."],
        ["Екрани і дашборди прогресу", "0.5 дня", "Міні-дашборд учня: поточна серія, батарейки, бали за тиждень, наступний бейдж. Вчительський вигляд: топ учнів тижня, учні з падаючою точністю при зростанні балів (прапорець якості). Налаштування: вчитель може увімкнути/вимкнути елементи геймифікації для конкретного учня."]
      ]
    }
  };
  const activeWorkPlan = workPlanModel[state.featureId] || workPlanModel.practice;
  const roadmapTotalDays = Object.values(workPlanModel).reduce((sum, item) => sum + item.totalDays, 0);
  const workPlanHtml = `
    <section class="work-plan-board">
      <div class="work-plan-summary">
        <div>
          <span>План роботи</span>
          <strong>${activeWorkPlan.title}</strong>
          <p>Критично важливі частини для першої робочої версії. Оцінка груба, у робочих днях.</p>
        </div>
        <div class="work-total">
          <strong>${activeWorkPlan.totalDays}</strong>
          <span>робочих днів</span>
        </div>
      </div>
      <div class="work-table-wrap">
        <table class="work-table">
          <thead>
            <tr>
              <th>Блок</th>
              <th>Оцінка</th>
              <th>Що має бути готово</th>
            </tr>
          </thead>
          <tbody>
            ${activeWorkPlan.work.map(([title, estimate, scope]) => `
              <tr>
                <td><strong>${title}</strong></td>
                <td><span>${estimate}</span></td>
                <td>${scope}</td>
              </tr>
            `).join("")}
            ${(activeWorkPlan.extraNotes || (activeWorkPlan.extraNote ? [activeWorkPlan.extraNote] : [])).map(([title, estimate, scope]) => `
              <tr class="work-table-note-row">
                <td><strong>${title}</strong></td>
                <td><span>${estimate}</span></td>
                <td>${scope}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
  const comparisonTableHtml = `
    <section class="comparison-matrix">
      <div class="comparison-head">
        <span>Порівняння функцій</span>
        <strong>Усі 5 функцій за ключовими критеріями — відсортовано за RICE</strong>
        <p class="comparison-note">Охоплення — це груба продуктова оцінка частки активних учнів за місяць, округлена до десятків. База для прикладу — 30 000 активних учнів; 100% означає, що сценарій застосовний майже до всіх учнів у звичайному навчальному місяці.</p>
      </div>
      <div class="comparison-table-wrap">
        <table class="comparison-table comp-full-table">
          <thead>
            <tr>
              <th>Функція</th>
              <th>Охоплення учнів</th>
              <th>Вплив</th>
              <th>Впевненість</th>
              <th>Витрати</th>
              <th>RICE</th>
              <th>Ключова метрика</th>
              <th>Перша версія</th>
            </tr>
          </thead>
          <tbody>
            ${riceItems.map((item) => {
              const isActive = item.id === state.featureId;
              const primaryMetric = resultAspectModel[item.id]?.[0];
              const [mName, mTarget, , mBase, mDelta, mOptions] = primaryMetric || ["—", "—", "", null, null];
              const plan = workPlanModel[item.id];
              const tone = riceTone(item.score);
              const riceBarW = ricePercent(item.score, maxRiceScore);
              const hasMetricBar = mBase !== null && mBase !== undefined;
              const metricScaleMax = mOptions?.max || 100;
              const metricBaseWidth = hasMetricBar ? Math.min(100, (mBase / metricScaleMax) * 100) : 0;
              const metricDeltaWidth = hasMetricBar ? Math.min(100 - metricBaseWidth, (mDelta / metricScaleMax) * 100) : 0;
              const metricBaseLabel = mOptions?.baseline || (mBase === 0 ? "Зараз 0%" : `Зараз ~${mBase}%`);
              const metricGoalLabel = mOptions?.target || `Ціль ~${mBase + mDelta}%`;
              const metricCell = hasMetricBar ? `
                <div class="comp-metric-bar">
                  <div class="comp-bar-track">
                    <div class="comp-bar-base" style="width:${metricBaseWidth}%"></div>
                    <div class="comp-bar-delta" style="width:${metricDeltaWidth}%"></div>
                  </div>
                  <div class="comp-bar-labels">
                    <span>${metricBaseLabel}</span>
                    <span class="comp-bar-goal">${metricGoalLabel}</span>
                  </div>
                </div>` : `<span class="comp-bar-text">${mTarget}</span>`;
              return `
                <tr class="comp-row${isActive ? " is-active" : " is-muted"}">
                  <td class="comp-feature-cell">
                    <strong>${item.title}</strong>
                    <span class="rice-badge is-${tone}">RICE ${item.score.toFixed(1)}</span>
                  </td>
                  <td class="comp-reach-cell">
                    <strong>~${item.reachPct}%</strong>
                    <div class="comp-reach-bar">
                      <i style="width:${item.reachPct}%"></i>
                    </div>
                    <small>${item.reachReason}</small>
                  </td>
                  <td class="comp-data-cell">
                    <span class="comp-impact is-${tone}">${item.impact}</span><small class="comp-denom">/3</small>
                  </td>
                  <td class="comp-data-cell">
                    <span class="comp-conf">${Math.round(item.confidence * 100)}%</span>
                  </td>
                  <td class="comp-data-cell">
                    <span class="comp-effort">${item.effort}/5</span>
                    <small>${plan.totalDays} роб. днів</small>
                  </td>
                  <td class="comp-rice-cell">
                    <strong class="comp-rice-score is-${tone}">${item.score.toFixed(1)}</strong>
                    <div class="comp-rice-bar">
                      <div class="comp-rice-fill is-${tone}" style="width:${riceBarW}%"></div>
                    </div>
                  </td>
                  <td class="comp-metric-cell">
                    <span class="comp-metric-name">${mName}</span>
                    ${metricCell}
                  </td>
                  <td class="comp-mvp-cell">
                    <strong>${plan.work[0][0]}</strong>
                    <span>${plan.totalDays} роб. днів загалом</span>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
  const roadmapWeeks = ["18 травня", "25 травня", "1 червня", "8 червня", "15 червня", "22 червня", "29 червня", "6 липня", "13 липня"];
  const roadmapPhases = [
    {
      id: "onboarding",
      dates: "18–24 травня",
      title: "Онбординг і занурення",
      label: "Тиждень 0",
      desc: "Знайомство з кодовою базою, архітектурою екранів і структурою уроків Brighterly. Вивчення економіки ринку і ключових конкурентів.",
      start: 2,
      span: 1,
      tone: "is-onboarding"
    },
    {
      id: "recap",
      dates: "25 травня – 6 червня",
      title: "AI-підсумки уроку",
      label: "Основа",
      desc: "Транскрипція, AI-промпт, перевірка вчителем, публікація учню і сім'ї. Email-звіт після демо-уроку.",
      start: 3,
      span: 2,
      tone: "is-core"
    },
    {
      id: "practice",
      dates: "9–20 червня",
      title: "Тижнева практика",
      label: "Практика",
      desc: "Персональний 7-денний план задач між уроками. Серії, батарейки, екран вчителя для затвердження.",
      start: 5,
      span: 2,
      tone: "is-practice"
    },
    {
      id: "review",
      dates: "23–27 червня",
      title: "Повторення перед уроком",
      label: "Повторення",
      desc: "Короткий розігрів за 10 хв до уроку. Вчитель бачить результати і коригує відкриття заняття.",
      start: 7,
      span: 1,
      tone: "is-lesson"
    },
    {
      id: "preview",
      dates: "30 червня – 4 липня",
      title: "Прев'ю матеріалу",
      label: "Прев'ю",
      desc: "Перший погляд на нову тему до уроку. Вчитель знає рівень знайомства і пропускає базове пояснення.",
      start: 8,
      span: 1,
      tone: "is-quality"
    },
    {
      id: "game",
      dates: "7–18 липня",
      title: "Прогрес і мотивація",
      label: "Мотивація",
      desc: "Бали, серії і захист після пропуску. Бейджі для учня і сім'ї без тиску на оцінки.",
      start: 9,
      span: 2,
      tone: "is-game"
    }
  ];
  const roadmapGridCells = roadmapWeeks
    .map((_, index) => `<span class="roadmap-cell" style="--col:${index + 2}"></span>`)
    .join("");
  const implementationRoadmapHtml = `
    <section class="implementation-roadmap">
      <div class="comparison-head roadmap-head">
        <span>Дорожня карта</span>
        <strong>План реалізації з 18 травня до кінця липня 2026 · Тиждень 0 — онбординг</strong>
      </div>
      <div class="roadmap-calendar">
        <div class="roadmap-calendar-head">
          <span class="roadmap-label-head">Напрям</span>
          ${roadmapWeeks.map((week) => `<span>${week}</span>`).join("")}
        </div>
        <div class="roadmap-lanes">
          ${roadmapPhases.map((phase) => {
            const isActive = phase.id === state.featureId;
            return `
            <div class="roadmap-row ${phase.tone}${isActive ? " is-active" : " is-muted"}">
              <div class="roadmap-row-label">
                <span>${phase.label}</span>
                <strong>${phase.title}</strong>
                ${phase.desc ? `<p class="roadmap-row-desc">${phase.desc}</p>` : ""}
              </div>
              ${roadmapGridCells}
              <div class="roadmap-bar ${phase.tone}${isActive ? " is-active" : " is-muted"}" style="--start:${phase.start};--span:${phase.span}">
                <span>${phase.dates}</span>
              </div>
            </div>
          `;}).join("")}
        </div>
      </div>
    </section>
  `;
  const comparisonHtml = `
    ${riceComparisonHtml}
    ${comparisonTableHtml}
  `;

  const metricCardsHtml = resultAspects.map(([name, target, why, baseValue, deltaValue, barOptions]) => {
    const hasBar = baseValue !== null && baseValue !== undefined;
    const scaleMax = barOptions?.max || 100;
    const baselineWidth = hasBar ? Math.min(100, (baseValue / scaleMax) * 100) : 0;
    const deltaWidth = hasBar ? Math.min(100 - baselineWidth, (deltaValue / scaleMax) * 100) : 0;
    const baselineLabel = barOptions?.baseline || (baseValue === 0 ? "Зараз 0%" : `Зараз ~${baseValue}%`);
    const targetLabel = barOptions?.target || `Ціль ~${baseValue + deltaValue}%`;
    const bar = hasBar ? `
      <div class="hyp-metric-bar">
        <div class="hyp-bar-track">
          <div class="hyp-bar-baseline" style="width:${baselineWidth}%"></div>
          <div class="hyp-bar-delta" style="width:${deltaWidth}%"></div>
        </div>
        <div class="hyp-bar-labels">
          <span>${baselineLabel}</span>
          <span class="hyp-bar-target">${targetLabel}</span>
        </div>
      </div>` : ``;
    return `
    <article class="hyp-metric-card">
      <span>${name}</span>
      <strong>${target}</strong>
      ${bar}
      <p>${why}</p>
    </article>
  `;
  }).join("");
  const stageItems = data.stages.map((stage, i) => `
    <div class="hyp-stage">
      <span>${i + 1}</span>
      <strong>${stage}</strong>
    </div>
  `).join("");
  const hypothesisCards = data.hypotheses.map((item, i) => {
    const metric = resultAspects[i % resultAspects.length] || ["Primary metric", "TBD", ""];
    return `
    <div class="hyp-card">
      <div class="hyp-card-head">
        <span class="hyp-num">H${i + 1}</span>
        <div>
          <strong>${item[0]}</strong>
          <small>${metric[0]} · ${metric[1]}</small>
        </div>
      </div>
      <div class="hyp-card-body">
        <div class="hyp-row is-success"><span class="hyp-label">Успіх</span><span>${item[1]}</span></div>
        <div class="hyp-row is-rollback"><span class="hyp-label">Провал</span><span>${item[2]}</span></div>
        <div class="hyp-row"><span class="hyp-label">Як міряємо</span><span>${item[3]}</span></div>
        <div class="hyp-row"><span class="hyp-label">Після підтвердження</span><span>${item[4]}</span></div>
      </div>
      <div class="hyp-card-impact">
        <span>Очікуваний вплив</span>
        <div class="hyp-impact-track"><i style="--w:${[72, 58, 46][i % 3]}%"></i></div>
        <strong>${i === 0 ? "High" : i === 1 ? "Medium" : "Focused"}</strong>
      </div>
    </div>
  `;
  }).join("");
  const simpleHypothesisModel = {
    recap: [
      ["Сім'ї, що отримали рекап після уроку, бронюють наступний урок частіше, ніж ті, хто не отримав.", "повторне бронювання у групі з рекапом на 8% більше за контрольну (базова ~65%)", "різниця менше 3% після 4 тижнів", "Надіслати рекап вручну 30 сім'ям, порівняти повторне бронювання з 30 без рекапу", "Провести експеримент в одній віковій групі (наприклад Grade 7) щоб зменшити шум — після підтвердження поступово розширити на всі K-12.", "Рекап → бронювання"],
      ["Учні, що отримали рекап з конкретними помилками, виконують першу практику частіше, ніж ті, хто не отримав нічого.", "конверсія в першу практику у групі з рекапом на 25+% вища (базова ~15%)", "різниця менше 10% після 2 тижнів", "Порівняти 30 учнів з рекапом і 30 без; фіксувати відкриття першого завдання за 24 год", "Автоматизувати рекап і встановити SLA перевірки вчителем.", "Рекап → перша практика"],
      ["AI здатний зібрати достатньо точний рекап уроку без ручної обробки даних — тобто якість чернетки достатня для публікації без суттєвих правок.", "частка рекапів з правками вчителя <20% і середня оцінка точності від вчителя ≥4 з 5 (вторинний сигнал: медіана підтвердження <2 хв)", "правки >40% або оцінка точності <3 з 5", "Попросити 15 вчителів оцінювати кожну AI-чернетку за точністю (1–5), фіксувати частку і характер правок протягом 3 тижнів", "Якщо якість підтверджується — автоматизувати pipeline і знизити ціну токена через кешування транскрипту.", "AI → якість рекапу"],
      ["Накопичені AI-рекапи дозволять оцінити якість роботи кожного вчителя, виявити системно складні теми навчальної програми і знайти структурні прогалини в курсі.", "платформа виявляє: по яких темах учні систематично помиляються, які вчителі дають найкращий прогрес, де в програмі є структурна прогалина — і надає це адміністрації та батькам", "даних менше 3–6 місяців недостатньо для статистично значимих висновків; вчителі сприймають рейтинг як загрозу → відтік вчителів", "агрегат AI-рекапів за 6+ місяців по кожному вчителю: прогрес учнів по темах, частота систематичних помилок, динаміка якості від уроку до уроку, порівняння між вчителями зі схожими групами за рівнем", "аналітичний дашборд для адміністрації платформи; персональний фідбек вчителю щодо сильних і слабких тем; рекомендації конкретних вчителів сім'ям на основі об'єктивних даних прогресу, а не лише зірочок.", "Аналітика вчителів", "deferred"]
    ],
    practice: [
      ["Учні зі структурованим планом виконують хоча б одне завдання між уроками частіше, ніж ті, кому нічого не дали.", "частка активних учнів у групі з планом на 20+% вища (базова ~15%)", "різниця менше 10% після 2 тижнів", "Дати 20 учням план вручну, 20 — нічого; вчитель фіксує виконання за тиждень", "Будувати систему планів у продукті.", "План vs без структури"],
      ["Учні з практикою між уроками залишаються на платформі довше, ніж ті, хто не практикує.", "90-денне утримання у групі з практикою на 15+% (базовий відтік ~30%)", "різниця менше 8%", "Аналіз наявних даних: будь-яке виконання між уроками проти відсутності — порівняти відтік", "Пріоритизувати активацію першого завдання після уроку.", "Практика → утримання"],
      ["Батарейки зменшують відтік мотивації після пропуску порівняно з жорстким скиданням серії.", "повернення після пропуску у групі з батарейками на 20+% (базова ~50%)", "різниця менше 10% після 4 тижнів", "Одна група — батарейки, інша — жорстке скидання. 60+ учнів, 4 тижні.", "Залишити батарейки, додати пояснення для сім'ї.", "Батарейки → повернення"],
      ["Учні з ігровими механіками практикують регулярніше, ніж ті, хто отримує ті самі завдання без механік.", "середня кількість активних днів на 2+ дні вища (базова ~2 дні/тиждень)", "різниця менше 1 дня після 4 тижнів", "Одна група — завдання з серіями, інша — ті самі без механік. 4 тижні, 60+ учнів.", "Залишити механіки, додати пояснення для сім'ї.", "Механіки → регулярність"]
    ],
    review: [
      ["Учні, що зробили повторення перед уроком, отримують вищу оцінку вчителя за якість уроку, ніж ті, хто не робив.", "оцінка уроку у групі з повторенням на 0.7+ балів вища (базова ~3.2 з 5)", "різниця менше 0.3 бала", "10 вчителів дають 1 питання повторення перед кожним уроком 2 тижні, оцінюють урок після. Порівняти з попередніми уроками.", "Вбудувати повторення як обов'язковий крок перед уроком.", "Повторення → якість уроку"],
      ["Вчителі, що бачать результати повторення до уроку, оцінюють якість уроку вище, ніж ті, хто не бачив.", "оцінка уроку у групі з даними на 0.8+ балів вища (базова ~3.2 з 5)", "різниця менше 0.3 бала", "Дати 10 вчителям таблицю з результатами повторення до уроку, 10 — без. Опитувальник після кожного уроку.", "Зробити перегляд результатів повторення обов'язковим кроком.", "Дані до уроку → якість"],
      ["Учні, що виконали повторення, роблять менше помилок на початку уроку, ніж ті, хто не виконав.", "частка помилок у перших 10 хв уроку на 10+% (базова ~35%)", "різниця менше 5%", "Вчитель позначає помилки перших 10 хв протягом 4 уроків у двох групах", "Масштабувати повторення, якщо покращення стабільне.", "Повторення → менше помилок"]
    ],
    preview: [
      ["Учні, що переглянули превью, потребують менше часу на первинне пояснення від вчителя, ніж ті, хто не переглядав.", "час вчителя на пояснення скорочується на 15%+ (базова ~12 хв)", "різниця менше 2 хв", "Вчитель фіксує час пояснення у групі з превью і без. 20 учнів у кожній, 4 уроки.", "Масштабувати превью як обов'язковий крок перед новими темами.", "Превью → менше пояснень"],
      ["Учні після превью задають більше змістовних питань під час уроку, ніж ті, хто не бачив превью.", "частка учнів, що задають питання, на 15+% вища (базова ~20%)", "різниця менше 5%", "Вчитель рахує кількість питань учня на уроці. 4 уроки, дві групи.", "Додати інтерактивні елементи до превью для стимуляції питань.", "Превью → питання"],
      ["Учні, що переглянули превью, оцінюють урок вище, ніж ті, хто не переглядав.", "середня оцінка уроку на 0.5+ балів вища (базова ~3.5 з 5)", "різниця менше 0.2 бала", "Опитувальник після уроку у двох групах: превью vs без. 4 тижні, 40+ учнів.", "Вбудувати превью в стандартний сценарій підготовки до уроку.", "Превью → оцінка уроку"]
    ],
    game: [
      ["Учні з ігровими механіками практикують регулярніше, ніж ті, хто отримує ті самі завдання без механік.", "середня кількість активних днів на 2+ дні вища (базова ~2 дні/тиждень)", "різниця менше 1 дня після 4 тижнів", "Одна група — завдання з серіями і батарейками, інша — без механік. 4 тижні, 60+ учнів.", "Залишити механіки, додати пояснення для сім'ї.", "Механіки → регулярність"],
      ["Батарейки зменшують відтік мотивації після пропуску порівняно з жорстким скиданням серії.", "повернення після пропуску у групі з батарейками на 20+% (базова ~50%)", "різниця менше 10% або точність падає >5%", "Група з батарейками проти жорсткого скидання. 60+ учнів, 4 тижні.", "Показати пояснення батарейок в застосунку учня.", "Батарейки → повернення"],
      ["Бонус за роботу без підказок підвищить самостійність без падіння виконання.", "використання підказок -20% при збереженні точності (базова ~35%)", "точність падає більше ніж на 5%", "Відстежувати підказки на виконану задачу і точність у двох групах. 4 тижні.", "Давати бонус лише для задач відповідної складності.", "Бонус → самостійність"],
      ["Сім'ї, що бачать прогрес і бейджі учня, рідше відписуються, ніж ті, хто не бачить.", "90-денне утримання у групі з активною панеллю прогресу на 10+% (базова ~70%)", "різниця менше 5%", "Порівняти сім'ї з активними сімейними акаунтами і пасивними за 90-денним утриманням", "Додати тижневі підсумки прогресу для сімей.", "Прогрес → утримання сім'ї"]
    ]
  };
  const normalizedHypotheses = (simpleHypothesisModel[state.featureId] || data.hypotheses).map((item) => Array.isArray(item)
    ? item
    : [item.h, item.signal, item.rollback, item.test, "Decide whether to ship, adjust, or stop after the test."]);
  const activeHypothesisIndex = Math.min(Math.max(Number(state.hypothesisIndex) || 0, 0), normalizedHypotheses.length - 1);
  const activeHypothesis = normalizedHypotheses[activeHypothesisIndex];
  const activeMetric = resultAspects[activeHypothesisIndex % resultAspects.length] || ["Primary metric", "TBD", ""];
  const activeImpact = [
    { label: "Високий", width: 72, note: "Сильний навчальний сигнал і потенційний бізнес-ефект." },
    { label: "Середній", width: 58, note: "Корисна зміна поведінки, але потрібні запобіжники якості." },
    { label: "Точковий", width: 46, note: "Вузький експеримент, краще як підтримувальна функція." }
  ][activeHypothesisIndex % 3];
  const hypothesisTabs = normalizedHypotheses.map((item, i) => {
    const metric = resultAspects[i % resultAspects.length] || ["Primary metric", "TBD", ""];
    const isDeferred = item[6] === "deferred";
    return `
      <button
        class="hypothesis-tab${i === activeHypothesisIndex ? " is-active" : ""}${isDeferred ? " is-deferred" : ""}"
        type="button"
        data-hyp-index="${i}"
        aria-pressed="${i === activeHypothesisIndex}"
      >
        <span>H${i + 1}</span>
        <strong>${item[5] || item[0].split(" ").slice(0, 4).join(" ")}</strong>
        ${isDeferred ? `<em class="hyp-tab-deferred-label">відкладена</em>` : ""}
      </button>
    `;
  }).join("");
  const hypothesisDetail = `
    <div class="hypothesis-detail-grid">
      <aside class="hypothesis-tabs" aria-label="Hypothesis tabs">
        ${hypothesisTabs}
      </aside>
      <article class="hypothesis-detail-card${activeHypothesis[6] === "deferred" ? " is-deferred" : ""}">
        <div class="hypothesis-detail-head">
          <span class="hyp-num">H${activeHypothesisIndex + 1}</span>
          <div>
            <h5>${activeHypothesis[0]}</h5>
            ${activeHypothesis[6] === "deferred" ? `<span class="hyp-deferred-badge">🔮 Відкладена фіча · потрібен масив даних за 6+ місяців</span>` : ""}
          </div>
        </div>
        <section class="hypothesis-score-grid">
          <div class="hyp-score-card is-success">
            <span>✅ Критерій успіху</span>
            <strong>${activeHypothesis[1]}</strong>
            <small>Масштабуємо тільки якщо сигнал стабільний і не шкодить якості навчання.</small>
          </div>
          <div class="hyp-score-card is-fail">
            <span>🚫 Критерій провалу</span>
            <strong>${activeHypothesis[2]}</strong>
            <small>Зупиняємо або переробляємо сценарій, якщо сигнал нижче межі.</small>
          </div>
        </section>
        <section class="hypothesis-measure-card">
          <span>🔬 Як перевіряємо</span>
          <strong>${activeHypothesis[3]}</strong>
        </section>
        <section class="hypothesis-decision-grid">
          <div class="hyp-decision-card">
            <span>🚀 Після підтвердження</span>
            <strong>${activeHypothesis[4]}</strong>
          </div>
        </section>
      </article>
    </div>
  `;
  const monetizationEffectModel = {
    recap: [
      ["+$21.6 тис./міс", "+3% уроків через швидше повторне бронювання після рекапу."],
      ["$6 тис./міс", "5% сімей підключають розширений AI-звіт за $4/міс."],
      ["+$36 тис. LTV/міс", "+6 пп конверсії × 2 000 демо/міс = +120 підписників × LTV $300. Ринкова база: ~15% (медіана 1:1 репетиторства)."]
    ],
    practice: [
      ["+$14.4 тис./міс", "+2% уроків через регулярну практику і нижчий відтік."],
      ["$18 тис./міс", "10% сімей підключають платний пакет практики між уроками."]
    ],
    review: [
      ["+$14.4 тис./міс", "+2% уроків, якщо оцінка якості уроку стабільно зростає."],
      ["$9.6 тис./міс", "8% підключень платного пакета підготовки до уроку."]
    ],
    preview: [
      ["+$14.4 тис./міс", "+2% уроків через вищу задоволеність учня і вчителя."],
      ["$9.6 тис./міс", "8% підключень пакета підготовки разом з повторенням."]
    ],
    game: [
      ["+$14.4 тис./міс", "+2% уроків, якщо регулярність росте без падіння якості."],
      ["$6 тис./міс", "4% сімей переходять на дорожчий пакет з прогрес-панеллю."]
    ]
  };
  const monetizationEffects = monetizationEffectModel[state.featureId] || [];
  const monetizationRows = (data.monetization || []).map((item, index) => {
    const effect = monetizationEffects[index] || [item.example, "Перевірити на активній когорті перед масштабуванням."];
    return `
      <tr>
        <td>
          <span>M${index + 1}</span>
          <strong>${item.title}</strong>
        </td>
        <td>${item.mechanism}</td>
        <td>${item.metric}</td>
        <td>
          <div class="money-effect">
            <strong>${effect[0]}</strong>
            <small>${effect[1]}</small>
          </div>
        </td>
      </tr>
    `;
  }).join("");
  const measurementFunnel = [
    ["Показ", "відкриття функції", "100%", 100],
    ["Активація", "перша корисна дія", "60-70%", 72],
    ["Навчальний сигнал", "задача виконана або перевірена", "45-55%", 56],
    ["Бізнес-сигнал", "зміна продовження або повторного бронювання", "2-5%", 34]
  ].map(([label, event, value, width]) => `
    <div class="hyp-funnel-row">
      <span>${label}</span>
      <div class="hyp-funnel-bar"><i style="--w:${width}%"></i></div>
      <strong>${value}</strong>
      <small>${event}</small>
    </div>
  `).join("");
  const activeSection = state.hypothesisSection || "hypotheses";
  const selectedSection = {
    hypotheses: `
      <section class="hyp-section-panel">
        <div class="hyp-section-head">
          <span>Гіпотези</span>
        </div>
        <div class="hyp-hypotheses">
          ${hypothesisDetail}
        </div>
      </section>
    `,
    results: `
      <section class="hyp-section-panel">
        <div class="hyp-section-head">
          <span>Очікувані результати</span>
        </div>
        <section class="hyp-results-dashboard">
          <section class="hyp-metric-grid">${metricCardsHtml}</section>
        </section>
      </section>
    `,
    monetization: `
      <section class="hyp-section-panel hyp-monetization">
        <div class="monetization-table-wrap">
          <table class="monetization-table">
            <thead>
              <tr>
                <th>Варіант</th>
                <th>Як працює</th>
                <th>Що міряємо</th>
                <th>Потенційний ефект</th>
              </tr>
            </thead>
            <tbody>${monetizationRows}</tbody>
          </table>
        </div>
        <div class="hyp-base-note">
          База розрахунку для прикладів: 120 000 уроків/міс, 30 000 активних студентів, $20 за урок, комісія платформи 30% = $6 з уроку.
        </div>
      </section>
    `,
    workplan: `
      <section class="hyp-section-panel">
        ${workPlanHtml}
      </section>
    `,
    comparison: `
      <section class="hyp-section-panel comparison-section">
        <div class="comparison-stack">
          ${comparisonHtml}
        </div>
      </section>
    `,
    roadmap: `
      <section class="hyp-section-panel roadmap-section">
        ${implementationRoadmapHtml}
      </section>
    `
  }[activeSection] || "";

  return `
    <div class="hypothesis-panel">
      ${selectedSection}
    </div>
  `;
}

function getHypCounts(featureId) {
  const hypothesisCount = { recap: 4, practice: 4, review: 3, preview: 3, game: 4 };
  const monetizationCount = { recap: 3, practice: 2, review: 2, preview: 2, game: 2 };
  const workplanCount = { recap: 5, practice: 5, review: 4, preview: 4, game: 5 };
  const resultCount = { recap: 5, practice: 4, review: 3, preview: 3, game: 4 };
  return {
    hypotheses: hypothesisCount[featureId] || 3,
    results: resultCount[featureId] || 4,
    monetization: monetizationCount[featureId] || 2,
    workplan: workplanCount[featureId] || 3,
    comparison: 5,
    roadmap: 6
  };
}

function render() {
  renderFeatureTabs();
  renderSummary();
  renderRoles();
  renderScreens();
  renderNav();

  const workspace = document.querySelector(".screen-workspace");
  const flowPanel = document.querySelector(".flow-panel");
  let modeBlock = document.getElementById("mode-switch-block");
  if (!modeBlock && flowPanel) {
    const modeBlock = document.createElement("div");
    modeBlock.id = "mode-switch-block";
    modeBlock.className = "mode-switch-block";
    modeBlock.innerHTML = `
      <span>Режим перегляду</span>
      <div class="mode-segment" role="group" aria-label="Режим перегляду">
        <button class="mode-choice" type="button" data-mode="prototype" aria-pressed="true">Прототип</button>
        <button class="mode-choice" type="button" data-mode="hypotheses" aria-pressed="false">Гіпотези</button>
      </div>
    `;
    flowPanel.prepend(modeBlock);
    modeBlock.querySelectorAll("[data-mode]").forEach((button) => {
      button.addEventListener("click", () => {
        state.hypothesisMode = button.dataset.mode === "hypotheses";
        render();
      });
    });
  }

  let hypothesisSectionBlock = document.getElementById("hyp-section-block");
  if (!hypothesisSectionBlock && flowPanel) {
    hypothesisSectionBlock = document.createElement("div");
    hypothesisSectionBlock.id = "hyp-section-block";
    hypothesisSectionBlock.className = "hyp-section-block";
    hypothesisSectionBlock.innerHTML = `
      <span>Бриф фічі</span>
      <div class="hyp-section-segment" role="group" aria-label="Бриф фічі">
        <button class="hyp-section-choice" type="button" data-hyp-section="hypotheses">Гіпотези</button>
        <button class="hyp-section-choice" type="button" data-hyp-section="results">Метрики</button>
        <button class="hyp-section-choice" type="button" data-hyp-section="monetization">Монетизація</button>
        <button class="hyp-section-choice" type="button" data-hyp-section="workplan">План</button>
        <button class="hyp-section-choice" type="button" data-hyp-section="comparison">RICE</button>
        <button class="hyp-section-choice" type="button" data-hyp-section="roadmap">Роадмапа</button>
      </div>
    `;
    const currentModeBlock = document.getElementById("mode-switch-block");
    if (currentModeBlock) currentModeBlock.after(hypothesisSectionBlock);
    hypothesisSectionBlock.querySelectorAll("[data-hyp-section]").forEach((button) => {
      button.addEventListener("click", () => {
        state.hypothesisSection = button.dataset.hypSection;
      render();
      });
    });
  }

  if (flowPanel) {
    flowPanel.classList.toggle("is-hypothesis-mode", state.hypothesisMode);
    const panelBlocks = [...flowPanel.querySelectorAll(":scope > .panel-block")];
    panelBlocks.forEach((block) => {
      block.style.display = state.hypothesisMode ? "none" : "";
    });
  }

  document.querySelectorAll("[data-mode]").forEach((button) => {
    const active = state.hypothesisMode
      ? button.dataset.mode === "hypotheses"
      : button.dataset.mode === "prototype";
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  if (hypothesisSectionBlock) {
    const hypCounts = getHypCounts(state.featureId);
    const badge = (n) => `<span class="hyp-tab-count">${n}</span>`;
    const hypSectionLabels = {
      hypotheses:   `Гіпотези ${badge(hypCounts.hypotheses)}`,
      results:      `Метрики ${badge(hypCounts.results)}`,
      monetization: `Монетизація ${badge(hypCounts.monetization)}`,
      workplan:     `План ${badge(hypCounts.workplan)}`,
      comparison:   `RICE`,
      roadmap:      `Роадмапа`
    };
    hypothesisSectionBlock.style.display = state.hypothesisMode ? "" : "none";
    hypothesisSectionBlock.querySelectorAll("[data-hyp-section]").forEach((button) => {
      const key = button.dataset.hypSection;
      if (hypSectionLabels[key]) button.innerHTML = hypSectionLabels[key];
      const active = key === state.hypothesisSection;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  renderSelectedScreen();
  renderScreenHypotheses();

  // Sync visibility after render
  const workspace2 = document.querySelector(".screen-workspace");
  if (workspace2) {
    const webPreview = workspace2.querySelector(".web-preview");
    let hypRoot = document.getElementById("hyp-panel-root");
    if (!hypRoot) {
      hypRoot = document.createElement("div");
      hypRoot.id = "hyp-panel-root";
      hypRoot.className = "hyp-panel-root";
      workspace2.append(hypRoot);
    }
    if (webPreview) webPreview.style.display = state.hypothesisMode ? "none" : "";
    if (hypRoot) {
      hypRoot.style.display = state.hypothesisMode ? "" : "none";
      if (state.hypothesisMode) hypRoot.innerHTML = renderHypothesis();
    }
  }
}

featureTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const nextFeatureId = tab.dataset.feature;
    if (!nextFeatureId || nextFeatureId === state.featureId || !features[nextFeatureId]) return;
    const currentRoleId = state.roleId;
    const nextRoles = features[nextFeatureId].roles;
    const defaultRoleByFeature = { recap: "student", practice: "student", review: "student", preview: "student", game: "student" };
    const defaultRoleId = defaultRoleByFeature[nextFeatureId];
    const fallbackRoleId = nextRoles.some((role) => role.id === defaultRoleId)
      ? defaultRoleId
      : nextRoles[0]?.id || "student";
    state.featureId = nextFeatureId;
    state.roleId = nextRoles.some((role) => role.id === currentRoleId)
      ? currentRoleId
      : fallbackRoleId;
    state.screenIndex = 0;
    state.hypothesisIndex = 0;
    state.practiceTaskIndex = 0;
    render();
  });
});

// Interactive answer choices — 3 states: idle / wrong / correct
document.addEventListener("click", (e) => {
  const riceFeature = e.target.closest("[data-rice-feature]");
  if (riceFeature) {
    const nextFeatureId = riceFeature.dataset.riceFeature;
    if (nextFeatureId && features[nextFeatureId]) {
      state.featureId = nextFeatureId;
      const nextRoles = features[nextFeatureId].roles;
      const defaultRoleByFeature = { recap: "student", practice: "student", review: "student", preview: "student", game: "student" };
      const defaultRoleId = defaultRoleByFeature[nextFeatureId];
      state.roleId = nextRoles.some((role) => role.id === state.roleId)
        ? state.roleId
        : nextRoles.find((role) => role.id === defaultRoleId)?.id || nextRoles[0]?.id || "student";
      state.screenIndex = 0;
      state.hypothesisIndex = 0;
      state.hypothesisSection = "hypotheses";
      state.practiceTaskIndex = 0;
      render();
    }
    return;
  }

  const hypothesisTab = e.target.closest("[data-hyp-index]");
  if (!hypothesisTab) return;
  state.hypothesisIndex = Number(hypothesisTab.dataset.hypIndex) || 0;
  state.hypothesisSection = "hypotheses";
  render();
});

mockMain.addEventListener("click", (e) => {
  const insightTab = e.target.closest("[data-insight-tab]");
  if (insightTab) {
    state.insightTab = insightTab.dataset.insightTab || "overall";
    render();
    return;
  }

  const practiceNav = e.target.closest("[data-practice-nav]");
  if (practiceNav) {
    const idx = Number(practiceNav.dataset.practiceNav);
    const navBar = practiceNav.closest("[data-practice-total]");
    const total = navBar ? Number(navBar.dataset.practiceTotal) : 99;
    if (!isNaN(idx) && idx >= 0 && idx < total) {
      state.practiceTaskIndex = idx;
      render();
    }
    return;
  }

  const starBtn = e.target.closest(".star-btn");
  if (starBtn) {
    const field = starBtn.closest("[data-rating-field]")?.dataset.ratingField;
    const score = Number(starBtn.dataset.score) || 0;
    if (field === "accuracy" || field === "usefulness") {
      state.recapRating[field] = score;
      const row = starBtn.closest(".star-row");
      if (row) {
        row.querySelectorAll(".star-btn").forEach((btn) => {
          btn.classList.toggle("is-active", Number(btn.dataset.score) <= score);
        });
      }
    }
    return;
  }

  const approveInsightsButton = e.target.closest(".js-approve-insights");
  if (approveInsightsButton) {
    approveLessonInsights();
    return;
  }

  const editMetricBtn = e.target.closest("[data-edit-metric]");
  if (editMetricBtn) {
    state.editingMetricIdx = Number(editMetricBtn.dataset.editMetric);
    render();
    // focus input after render
    requestAnimationFrame(() => document.getElementById("edit-metric-input")?.focus());
    return;
  }

  const closeEditMetricBtn = e.target.closest("[data-close-edit-metric]");
  if (closeEditMetricBtn) {
    state.editingMetricIdx = null;
    render();
    return;
  }

  const saveEditMetricBtn = e.target.closest("[data-save-edit-metric]");
  if (saveEditMetricBtn) {
    const idx = Number(saveEditMetricBtn.dataset.saveEditMetric);
    const input = document.getElementById("edit-metric-input");
    if (input && lessonInsightModel.metrics[idx]) {
      const newValue = input.value.trim();
      if (newValue) {
        lessonInsightModel.metrics[idx].value = newValue;
        lessonInsightModel.metrics[idx]._edited = true;
      }
    }
    state.editingMetricIdx = null;
    render();
    return;
  }

  // close popup when clicking the backdrop
  const overlay = e.target.closest("[data-metric-overlay]");
  if (overlay && e.target === overlay) {
    state.editingMetricIdx = null;
    render();
    return;
  }

  const recapButton = e.target.closest(".js-open-recap");
  if (recapButton) {
    openPostLessonRecap();
    return;
  }

  const btn = e.target.closest(".answer-choice");
  if (!btn) return;
  const options = btn.closest(".answer-options");
  if (!options || options.classList.contains("is-answered")) return;
  options.classList.add("is-answered");
  btn.classList.add("is-selected");
  if (btn.dataset.correct === "true") {
    options.classList.add("is-correct");
    btn.classList.add("is-correct-answer");
  } else {
    options.classList.add("is-wrong");
    btn.classList.add("is-wrong-answer");
    const correct = options.querySelector("[data-correct='true']");
    if (correct) correct.classList.add("is-correct-answer");
  }
});

screenAction.addEventListener("click", () => {
  const screen = getCurrentScreen();
  if (screen.type === "student-post-lesson-start") {
    openPostLessonRecap();
    return;
  }
  if (screen.type === "student-recap") {
    const role = getCurrentRole();
    const weekIndex = role.screens.findIndex((candidate) => candidate.type === "student-week");
    if (weekIndex >= 0) {
      state.screenIndex = weekIndex;
      render();
    }
    return;
  }
  if (screen.type === "teacher-ai-review") {
    approveLessonInsights();
  }
});

render();
