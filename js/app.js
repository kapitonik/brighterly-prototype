const features = {
  practice: {
    kicker: "Функция 01",
    title: "Закрепление после урока",
    description:
      "Здесь появится цепочка экранов: разбор урока, подтверждение заданий преподавателем, выполнение учеником и возврат результата к следующему занятию.",
    placeholderTitle: "Экраны закрепления",
    placeholderCaption: "Разбор, подбор заданий и результат выполнения."
  },
  warmup: {
    kicker: "Функция 02",
    title: "Разминка перед уроком",
    description:
      "Будущий набор экранов покажет короткую подготовку ученика перед занятием и передачу результата преподавателю.",
    placeholderTitle: "Экраны разминки",
    placeholderCaption: "Задание в зале ожидания и готовность к уроку."
  },
  summary: {
    kicker: "Функция 03",
    title: "Итоги урока для родителей",
    description:
      "Здесь будут экраны с ключевыми моментами урока, прогрессом ребёнка и понятными следующими шагами для семьи.",
    placeholderTitle: "Экраны итогов",
    placeholderCaption: "Краткий разбор урока для родителя."
  },
  game: {
    kicker: "Функция 04",
    title: "Игровые механики",
    description:
      "В этом разделе появятся серии дней, очки, жизни и еженедельный турнир как основа регулярной практики.",
    placeholderTitle: "Экраны вовлечения",
    placeholderCaption: "Серии, очки и недельный прогресс."
  },
  parent: {
    kicker: "Функция 05",
    title: "Панель достижений",
    description:
      "Будущие экраны покажут родителю прогресс ребёнка без лишнего контроля: серии, задания, динамику и место в турнире.",
    placeholderTitle: "Экраны родителя",
    placeholderCaption: "Прогресс и достижения ребёнка."
  }
};

const cards = document.querySelectorAll(".feature-card");
const kicker = document.querySelector("#feature-kicker");
const title = document.querySelector("#feature-title");
const description = document.querySelector("#feature-description");
const placeholderTitle = document.querySelector("#placeholder-title");
const placeholderCaption = document.querySelector("#placeholder-caption");

function selectFeature(featureId) {
  const feature = features[featureId];
  if (!feature) return;

  cards.forEach((card) => {
    card.classList.toggle("is-active", card.dataset.feature === featureId);
  });

  kicker.textContent = feature.kicker;
  title.textContent = feature.title;
  description.textContent = feature.description;
  placeholderTitle.textContent = feature.placeholderTitle;
  placeholderCaption.textContent = feature.placeholderCaption;
}

cards.forEach((card) => {
  card.addEventListener("click", () => selectFeature(card.dataset.feature));
});
