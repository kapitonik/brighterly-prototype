const features = {
  practice: {
    kicker: "Функция 01",
    title: "Закрепление после урока",
    description:
      "ИИ разбирает урок, предлагает задания преподавателю, ученик закрепляет материал, а результат возвращается к следующему занятию.",
    roles: [
      {
        id: "teacher",
        label: "Преподаватель",
        path: "teacher/lesson-review",
        nav: ["Уроки", "Задания", "Прогресс", "Сообщения"],
        screens: [
          {
            title: "Разбор прошедшего урока",
            caption: "Темы, ошибки и сильные места",
            action: "Подтвердить подборку",
            placeholderTitle: "Макет разбора урока",
            placeholderCaption: "Здесь будет таблица ошибок, тем и предложенных заданий.",
            notes: ["Ошибки из записи урока", "5–7 заданий на неделю", "Быстрое подтверждение преподавателем"]
          },
          {
            title: "Редактирование подборки",
            caption: "Замена и настройка заданий",
            action: "Сохранить задания",
            placeholderTitle: "Макет редактирования",
            placeholderCaption: "Преподаватель сможет заменить задание, изменить сложность и добавить комментарий.",
            notes: ["Контроль качества", "Задание выглядит как продолжение урока", "Время подтверждения меньше минуты"]
          },
          {
            title: "Отчёт перед следующим уроком",
            caption: "Что ученик сделал между занятиями",
            action: "Открыть план урока",
            placeholderTitle: "Макет отчёта",
            placeholderCaption: "Перед занятием преподаватель увидит выполненные задания и новые ошибки.",
            notes: ["Память между уроками", "Меньше времени на повторную диагностику", "Следующий урок начинается с данных"]
          }
        ]
      },
      {
        id: "student",
        label: "Ученик",
        path: "student/practice",
        nav: ["Сегодня", "Задания", "Серии", "Награды"],
        screens: [
          {
            title: "Задание от преподавателя",
            caption: "Персональная подборка после урока",
            action: "Начать",
            placeholderTitle: "Макет задания ученика",
            placeholderCaption: "Ученик видит короткую подборку, связанную с прошедшим уроком.",
            notes: ["Не случайная тренировка", "Понятная связь с уроком", "Короткий ежедневный формат"]
          },
          {
            title: "Выполнение задания",
            caption: "Пошаговое решение и подсказки",
            action: "Проверить ответ",
            placeholderTitle: "Макет выполнения",
            placeholderCaption: "Здесь будет рабочая область с задачей, ответом и безопасной подсказкой.",
            notes: ["Подсказка не решает задачу за ученика", "Ошибки сохраняются", "Прогресс возвращается преподавателю"]
          }
        ]
      }
    ]
  },
  warmup: {
    kicker: "Функция 02",
    title: "Разминка перед уроком",
    description:
      "Короткая подготовка в зале ожидания помогает ученику вспомнить прошлую тему до начала живого занятия.",
    roles: [
      {
        id: "student",
        label: "Ученик",
        path: "student/waiting-room",
        nav: ["Зал ожидания", "Разминка", "Урок", "Серия"],
        screens: [
          {
            title: "Зал ожидания",
            caption: "3–5 минут до урока",
            action: "Начать разминку",
            placeholderTitle: "Макет зала ожидания",
            placeholderCaption: "Здесь будет короткое задание перед подключением преподавателя.",
            notes: ["Повторение прошлой темы", "Мягкий вход в урок", "Ученик приходит подготовленным"]
          },
          {
            title: "Результат разминки",
            caption: "Что передать преподавателю",
            action: "Перейти к уроку",
            placeholderTitle: "Макет результата",
            placeholderCaption: "Система покажет, что получилось, а где ученик снова ошибся.",
            notes: ["Сигнал преподавателю", "Меньше времени на разогрев", "Связь с темой урока"]
          }
        ]
      },
      {
        id: "teacher",
        label: "Преподаватель",
        path: "teacher/warmup-signal",
        nav: ["Сегодня", "Ученик", "Разминка", "План"],
        screens: [
          {
            title: "Сигнал перед уроком",
            caption: "Как ученик прошёл разминку",
            action: "Открыть урок",
            placeholderTitle: "Макет сигнала",
            placeholderCaption: "Перед началом урока преподаватель увидит результат разминки.",
            notes: ["Готовность ученика", "Повторяющиеся ошибки", "Тема для первого вопроса"]
          }
        ]
      }
    ]
  },
  summary: {
    kicker: "Функция 03",
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
            title: "Итоги урока",
            caption: "Ключевые моменты и темы",
            action: "Открыть прогресс",
            placeholderTitle: "Макет итогов урока",
            placeholderCaption: "Здесь будут ключевые моменты, темы урока и следующие шаги.",
            notes: ["Меньше чёрного ящика", "Понятная ценность для родителя", "Связь с домашней практикой"]
          },
          {
            title: "Прогресс ребёнка",
            caption: "Динамика по темам",
            action: "Посмотреть задания",
            placeholderTitle: "Макет прогресса",
            placeholderCaption: "Родитель увидит рост по темам, серии и выполненные задания.",
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
            title: "Проверка итогов",
            caption: "Перед отправкой родителю",
            action: "Отправить родителю",
            placeholderTitle: "Макет проверки",
            placeholderCaption: "Преподаватель сможет быстро проверить текст и ключевые моменты.",
            notes: ["Контроль тона", "Без лишней нагрузки", "Родитель получает проверенную информацию"]
          }
        ]
      }
    ]
  },
  game: {
    kicker: "Функция 04",
    title: "Игровые механики",
    description:
      "Серии дней, очки и недельный турнир превращают короткую практику в привычку между уроками.",
    roles: [
      {
        id: "student",
        label: "Ученик",
        path: "student/streaks",
        nav: ["Сегодня", "Серия", "Турнир", "Награды"],
        screens: [
          {
            title: "Серия дней",
            caption: "Регулярность по предметам",
            action: "Продолжить серию",
            placeholderTitle: "Макет серии",
            placeholderCaption: "Здесь будет прогресс серии по математике и английскому.",
            notes: ["Ежедневная привычка", "Разные предметы — разные серии", "Короткое действие каждый день"]
          },
          {
            title: "Еженедельный турнир",
            caption: "Очки за практику",
            action: "Посмотреть рейтинг",
            placeholderTitle: "Макет турнира",
            placeholderCaption: "Турнир покажет место ученика и личную цель на неделю.",
            notes: ["Сравнение без давления", "Очки за полезные действия", "Итог недели"]
          }
        ]
      }
    ]
  },
  parent: {
    kicker: "Функция 05",
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
            title: "Обзор достижений",
            caption: "Состояние недели",
            action: "Открыть детали",
            placeholderTitle: "Макет панели родителя",
            placeholderCaption: "Здесь будет сводка по предметам, сериям и выполненным заданиям.",
            notes: ["Родитель как болельщик", "Видимый прогресс", "Меньше тревожности"]
          },
          {
            title: "Динамика по предметам",
            caption: "Математика и английский",
            action: "Посмотреть историю",
            placeholderTitle: "Макет динамики",
            placeholderCaption: "Покажем, где ребёнок продвинулся и какие темы требуют внимания.",
            notes: ["Динамика за месяц", "Понятные предметные зоны", "Связь с итогами уроков"]
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
const placeholderTitle = document.querySelector("#placeholder-title");
const placeholderCaption = document.querySelector("#placeholder-caption");
const screenNotes = document.querySelector("#screen-notes");
const appNav = document.querySelector(".app-nav nav");

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
  placeholderTitle.textContent = screen.placeholderTitle;
  placeholderCaption.textContent = screen.placeholderCaption;

  screenNotes.innerHTML = "";
  screen.notes.forEach((note) => {
    const item = document.createElement("li");
    item.textContent = note;
    screenNotes.append(item);
  });
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
