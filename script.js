const STORAGE_KEY = "anastasiaamero-site-v3";
const LANGUAGE_KEY = "anastasiaamero-language";

const heroByLangDefaults = {
  ru: [
    "Коммуникационный",
    "дизайнер",
    "Анастасия",
    "Пескова",
    ""
  ],
  en: [
    "Communication",
    "designer",
    "Anastasia",
    "Peskova",
    ""
  ]
};

const cardModalPhotos = [
  "./assets/cards/photo-1.jpg",
  "./assets/cards/photo-3.jpg",
  "./assets/cards/photo-4.jpg"
];

const uiText = {
  ru: {
    contact: "Связаться",
    admin: "Кабинет",
    close: "Закрыть",
    email: "Email"
  },
  en: {
    contact: "Contact me",
    admin: "Admin",
    close: "Close",
    email: "Email"
  }
};

const projectTranslations = {
  "СБОЛ.про": {
    title: "SBOL.pro",
    subtitle: "Platform branding",
    desc: "Identity and visual system for the unified SBOL.pro platform.",
    blocks: [
      ["Context", "Identity and visual system for the unified SBOL.pro platform."],
      ["Task", "Create a modern, flexible and scalable visual system."],
      ["Role", "Concept, logo, visual language, templates, guidebook and AI graphics."],
      ["Solution", "I developed a system based on fluid lines, 3D forms and a strict grid. I assembled templates, typography, composition rules and visual principles."],
      ["Result", "The system is used by product teams and became the basis for dozens of communication materials."]
    ]
  },
  "AI-библиотека": {
    title: "AI Library",
    subtitle: "Image library",
    desc: "A set of AI visuals in the platform's brand style.",
    blocks: [
      ["Context", "Creation of an image library in the platform's brand style."],
      ["Task", "Create a set of visuals for interfaces, presentations and media."],
      ["Role", "Concept, generation, retouching and image systematization."],
      ["Solution", "I developed a visual language based on brand lines and forms, created a series of AI images and organized them by category."],
      ["Result", "The library is used by teams for presentations and interfaces."]
    ]
  },
  "Мерч СБОЛ": {
    title: "SBOL Merch",
    subtitle: "Identity on physical media",
    desc: "Merch for the SBOL.pro platform team.",
    blocks: [
      ["Context", "The platform identity had to be transferred to physical media."],
      ["Task", "Make the merch recognizable, modern and connected to the product visual system."],
      ["Role", "Concept, design, AI generation and production preparation."],
      ["Solution", "I adapted brand elements for physical items, assembled composition options and prepared layouts for team use."],
      ["Result", "The merch was used at internal events and in team communications."]
    ]
  },
  "ИИ-офис": {
    title: "AI Office",
    subtitle: "Card concepts",
    desc: "Visual card concepts for Sber's AI office.",
    blocks: [
      ["Context", "Internal card products needed a visual language connected with AI and technology."],
      ["Task", "Find an expressive visual approach for a card series and prepare options for further development."],
      ["Role", "Concept, visual language, 3D forms, AI generation and variant preparation."],
      ["Solution", "I assembled visual directions, generated graphics and adapted them to card formats."],
      ["Result", "Concepts and a visual base were prepared for further development."]
    ]
  },
  "Соц. сети Domo": {
    title: "Domo Social",
    subtitle: "Content and templates",
    desc: "Materials and templates for Domo communications.",
    blocks: [
      ["Context", "Visual system and content for an architectural studio."],
      ["Task", "Create a recognizable style for regular posts and communications."],
      ["Role", "Concept, visual language, templates and material design."],
      ["Solution", "I developed templates, compositions and visual principles for social media."],
      ["Result", "The materials became the basis for Domo's regular visual language."]
    ]
  },
  "Altanina LLC": {
    title: "Altanina LLC",
    subtitle: "Business identity",
    desc: "Identity for a small business in the USA.",
    blocks: [
      ["Context", "A small business needed an identity that could be used across media, website and communications."],
      ["Task", "Create a clear and flexible visual image for the brand."],
      ["Role", "Concept, logo, characters, media and visual system."],
      ["Solution", "I assembled brand elements, logo options, characters and examples of use across media."],
      ["Result", "The identity is used in company materials and communications."]
    ]
  },
  "Сивил стиль": {
    title: "Sivil Style",
    subtitle: "Brand update",
    desc: "Brand style update for Sivil.",
    blocks: [
      ["Context", "The brand needed to update its visual language and make communications more modern."],
      ["Task", "Preserve brand recognition while updating the style for new media."],
      ["Role", "Concept, visual language, templates and media."],
      ["Solution", "I updated compositions, typography and rules for applying the brand style in materials."],
      ["Result", "The style became the basis for brand media and communications."]
    ]
  },
  "Апекс соцсети": {
    title: "Apex Social",
    subtitle: "Content identity",
    desc: "Visual system for Apex social media.",
    blocks: [
      ["Context", "The project needed a recognizable theme for Instagram and Telegram."],
      ["Task", "Adapt the identity for regular content and different publication formats."],
      ["Role", "Concept, templates, visual language and content design."],
      ["Solution", "I assembled templates, composition rules and visual techniques for social media."],
      ["Result", "A unified visual style appeared for social media."]
    ]
  },
  "Визуал Умного помощника": {
    title: "Assistant Visual",
    subtitle: "Posts and media",
    desc: "Content materials for a smart assistant project.",
    blocks: [
      ["Context", "The visual system had to be adapted for different post and publication formats."],
      ["Task", "Assemble a clear set of materials that can be quickly used in communications."],
      ["Role", "Templates, publication design, visual selection and material assembly."],
      ["Solution", "I adapted the existing visual approach to content formats and assembled materials in a unified style."],
      ["Result", "The content became more consistent and recognizable within one brand."]
    ]
  }
};

const cardTextTranslations = {
  "./assets/cards/photo-1.jpg": "In my free time I study English, practice yoga, walk with my dog and travel. I like discovering new places, people and impressions.",
  "./assets/cards/photo-3.jpg": "I have been working in design for more than 4 years. For the last 2 years I have worked as a designer at Sber, one of the largest technology companies. I have taken part in projects of different scales: from social media content to websites and digital products. I also have experience creating identities for both internal projects of a large company and small startups.",
  "./assets/cards/photo-4.jpg": "I run a channel about neural networks, where I cover new tools, share practical ways to use AI and show my own projects."
};

const defaults = {
  lang: "ru",
  heroByLang: heroByLangDefaults,
  hero: heroByLangDefaults.ru,
  projects: [
    ["СБОЛ.про", "Брендинг платформы", "./assets/portfolio/page-04.png", "Айдентика и визуальная система для объединенной платформы СБОЛ.про.", 88, "", [], [
      { heading: "Контекст", text: "Айдентика и визуальная система для объединенной платформы СБОЛ.про.", image: "./assets/portfolio/page-03.png", align: "full" },
      { heading: "Задача", text: "Создать современную, гибкую и масштабируемую визуальную систему.", image: "./assets/portfolio/page-03.png", align: "full" },
      { heading: "Роль", text: "Концепция, логотип, визуальный язык, шаблоны, гайдбук и AI-графика.", image: "./assets/portfolio/page-04.png", align: "full" },
      { heading: "Решение", text: "Разработала систему на основе плавных линий, 3D-форм и строгой сетки. Собрала шаблоны, типографику, правила композиции и визуальные принципы.", image: "./assets/portfolio/page-04.png", align: "full" },
      { heading: "Результат", text: "Система используется командами продукта и легла в основу десятков коммуникационных материалов.", image: "./assets/portfolio/page-04.png", align: "full" }
    ]],
    ["AI-библиотека", "Библиотека изображений", "./assets/portfolio/page-06.png", "Набор AI-визуалов в фирменном стиле платформы.", 88, "", [], [
      { heading: "Контекст", text: "Создание библиотеки изображений в фирменном стиле платформы.", image: "./assets/portfolio/page-05.png", align: "full" },
      { heading: "Задача", text: "Сделать набор визуалов, которые можно использовать в интерфейсах, презентациях и медиа.", image: "./assets/portfolio/page-05.png", align: "full" },
      { heading: "Роль", text: "Концепция, генерации, обработка и систематизация изображений.", image: "./assets/portfolio/page-06.png", align: "full" },
      { heading: "Решение", text: "Разработала визуальный язык на основе фирменных линий и форм, создала серию AI-изображений и структурировала их по категориям.", image: "./assets/portfolio/page-06.png", align: "full" },
      { heading: "Результат", text: "Библиотека используется командами для презентаций и интерфейсов.", image: "./assets/portfolio/page-06.png", align: "full" }
    ]],
    ["Мерч СБОЛ", "Айдентика в физическом носителе", "./assets/portfolio/page-08.png", "Мерч для команды платформы СБОЛ.про.", 88, "", [], [
      { heading: "Контекст", text: "Айдентику платформы нужно было перенести на физические носители.", image: "./assets/portfolio/page-07.png", align: "full" },
      { heading: "Задача", text: "Сделать мерч узнаваемым, современным и связанным с визуальной системой продукта.", image: "./assets/portfolio/page-07.png", align: "full" },
      { heading: "Роль", text: "Концепция, дизайн, AI-генерации и подготовка к производству.", image: "./assets/portfolio/page-08.png", align: "full" },
      { heading: "Решение", text: "Адаптировала фирменные элементы под носители, собрала варианты композиций и подготовила макеты для использования командой.", image: "./assets/portfolio/page-08.png", align: "full" },
      { heading: "Результат", text: "Мерч использовался на внутренних мероприятиях и в коммуникациях команды.", image: "./assets/portfolio/page-08.png", align: "full" }
    ]],
    ["ИИ-офис", "Концепты карт", "./assets/portfolio/page-10.png", "Визуальные концепты карт для ИИ-офиса Сбера.", 88, "", [], [
      { heading: "Контекст", text: "Внутренние карточные продукты требовали визуального языка, связанного с темой ИИ и технологичности.", image: "./assets/portfolio/page-09.png", align: "full" },
      { heading: "Задача", text: "Найти выразительный визуальный подход для серии карт и подготовить варианты для дальнейшего развития.", image: "./assets/portfolio/page-09.png", align: "full" },
      { heading: "Роль", text: "Концепт, визуальный язык, 3D-формы, AI-генерации и подготовка вариантов.", image: "./assets/portfolio/page-10.png", align: "full" },
      { heading: "Решение", text: "Собрала визуальные направления, сгенерировала графику и адаптировала ее под формат карточных носителей.", image: "./assets/portfolio/page-10.png", align: "full" },
      { heading: "Результат", text: "Подготовлены концепты и визуальная база для дальнейшего развития носителей.", image: "./assets/portfolio/page-10.png", align: "full" }
    ]],
    ["Соц. сети Domo", "Контент и шаблоны", "./assets/portfolio/page-13.png", "Материалы и шаблоны для коммуникаций Domo.", 88, "", [], [
      { heading: "Контекст", text: "Визуальная система и контент для архитектурного бюро.", image: "./assets/portfolio/page-12.png", align: "full" },
      { heading: "Задача", text: "Создать узнаваемый стиль для регулярных публикаций и коммуникаций.", image: "./assets/portfolio/page-12.png", align: "full" },
      { heading: "Роль", text: "Концепция, визуальный язык, шаблоны и оформление материалов.", image: "./assets/portfolio/page-13.png", align: "full" },
      { heading: "Решение", text: "Разработала шаблоны, композиции и визуальные принципы для социальных сетей.", image: "./assets/portfolio/page-13.png", align: "full" },
      { heading: "Результат", text: "Материалы стали основой для регулярного визуального языка Domo.", image: "./assets/portfolio/page-13.png", align: "full" }
    ]],
    ["Altanina LLC", "Айдентика бизнеса", "./assets/portfolio/page-16.png", "Айдентика для малого бизнеса в США.", 88, "", [], [
      { heading: "Контекст", text: "Малому бизнесу требовалась айдентика, которую можно использовать на носителях, сайте и в коммуникациях.", image: "./assets/portfolio/page-15.png", align: "full" },
      { heading: "Задача", text: "Создать понятный и гибкий визуальный образ для бренда.", image: "./assets/portfolio/page-15.png", align: "full" },
      { heading: "Роль", text: "Концепция, логотип, персонажи, носители и визуальная система.", image: "./assets/portfolio/page-16.png", align: "full" },
      { heading: "Решение", text: "Собрала фирменные элементы, варианты логотипа, персонажей и примеры применения на носителях.", image: "./assets/portfolio/page-16.png", align: "full" },
      { heading: "Результат", text: "Айдентика используется в фирменных материалах и коммуникациях компании.", image: "./assets/portfolio/page-16.png", align: "full" }
    ]],
    ["Сивил стиль", "Обновление бренда", "./assets/portfolio/page-19.png", "Обновление фирменного стиля для бренда Сивил.", 88, "", [], [
      { heading: "Контекст", text: "Бренду требовалось обновить визуальный язык и сделать коммуникации современнее.", image: "./assets/portfolio/page-18.png", align: "full" },
      { heading: "Задача", text: "Сохранить узнаваемость бренда и при этом обновить стиль для новых носителей.", image: "./assets/portfolio/page-18.png", align: "full" },
      { heading: "Роль", text: "Концепция, визуальный язык, шаблоны и носители.", image: "./assets/portfolio/page-19.png", align: "full" },
      { heading: "Решение", text: "Обновила композиции, типографику и правила применения фирменного стиля в материалах бренда.", image: "./assets/portfolio/page-19.png", align: "full" },
      { heading: "Результат", text: "Стиль стал основой для носителей и коммуникаций бренда.", image: "./assets/portfolio/page-19.png", align: "full" }
    ]],
    ["Апекс соцсети", "Айдентика контента", "./assets/portfolio/page-22.png", "Визуальная система для соцсетей проекта Апекс.", 88, "", [], [
      { heading: "Контекст", text: "Проекту нужна была узнаваемая тема для Instagram и Telegram.", image: "./assets/portfolio/page-21.png", align: "full" },
      { heading: "Задача", text: "Адаптировать айдентику под регулярный контент и разные форматы публикаций.", image: "./assets/portfolio/page-21.png", align: "full" },
      { heading: "Роль", text: "Концепция, шаблоны, визуальный язык и оформление контента.", image: "./assets/portfolio/page-22.png", align: "full" },
      { heading: "Решение", text: "Собрала шаблоны, правила композиции и визуальные приемы для соцсетей.", image: "./assets/portfolio/page-22.png", align: "full" },
      { heading: "Результат", text: "Появился единый визуальный стиль для социальных сетей.", image: "./assets/portfolio/page-22.png", align: "full" }
    ]],
    ["Визуал Умного помощника", "Публикации и медиа", "./assets/portfolio/page-22.png", "Контентные материалы для соцсетей проекта Апекс.", 88, "", [], [
      { heading: "Контекст", text: "Нужно было адаптировать визуальную систему под разные форматы постов и публикаций.", image: "./assets/portfolio/page-21.png", align: "full" },
      { heading: "Задача", text: "Собрать понятный набор материалов, который можно быстро использовать в коммуникациях.", image: "./assets/portfolio/page-21.png", align: "full" },
      { heading: "Роль", text: "Шаблоны, оформление публикаций, подбор визуалов и сборка материалов.", image: "./assets/portfolio/page-22.png", align: "full" },
      { heading: "Решение", text: "Адаптировала существующий визуальный подход под контентные форматы и собрала материалы в едином стиле.", image: "./assets/portfolio/page-22.png", align: "full" },
      { heading: "Результат", text: "Контент стал более цельным и узнаваемым в рамках единого бренда.", image: "./assets/portfolio/page-22.png", align: "full" }
    ]]
  ],
  cards: [
    ["", "", "./assets/cards/admin-card-1.svg", "В свободное время изучаю английский, занимаюсь йогой, гуляю со своей собакой и путешествую. Люблю открывать новые места, людей и впечатления.", "./assets/cards/photo-1.jpg"],
    ["", "", "./assets/cards/admin-card-2.svg", "Более 4 лет занимаюсь дизайном. Последние 2 года работаю дизайнером в одной из крупнейших технологических компаний — Сбере. За это время участвовала в проектах разного масштаба: от создания контента для социальных сетей до разработки сайтов и цифровых продуктов. Также имею опыт разработки айдентики как для внутренних проектов крупной компании, так и для небольших стартапов.", "./assets/cards/photo-3.jpg"],
    ["", "", "./assets/cards/admin-card-3.svg", "Веду канал о нейросетях, где рассказываю о новых инструментах, делюсь практическими способами использования ИИ и показываю собственные проекты.", "./assets/cards/photo-4.jpg"]
  ]
};

let state = readState();
let selectedProject = 0;
let selectedBlock = 0;
let selectedCard = 0;
let activeCardModalIndex = 0;
const adminRequested = new URLSearchParams(window.location.search).has("admin") || window.location.hash === "#admin";
const isAdminMode = adminRequested || localStorage.getItem("adminAccess") === "1";

const modal = document.querySelector("#modal");
const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector("#modal-title");
const modalSubtitle = document.querySelector("#modal-subtitle");
const modalDesc = document.querySelector("#modal-desc");
const modalExtra = document.querySelector("#modal-extra");
const modalGallery = document.querySelector("#modal-gallery");
const modalCardStackImages = document.querySelectorAll("[data-card-stack-image]");
const modalBlocks = document.createElement("div");
modalBlocks.className = "modal-blocks";
modalGallery.before(modalBlocks);
const imageViewer = document.querySelector("[data-image-viewer]");
const imageViewerStage = document.querySelector(".image-viewer-stage");
const imageViewerImg = document.querySelector("[data-image-viewer-img]");
let viewerScale = 1;
let viewerX = 0;
let viewerY = 0;
let viewerDragging = false;
let viewerStartX = 0;
let viewerStartY = 0;
let viewerBaseX = 0;
let viewerBaseY = 0;
const viewerPointers = new Map();
let viewerPinchStartDistance = 0;
let viewerPinchStartScale = 1;
let cardSwipeStartX = 0;
let cardSwipeStartY = 0;
let cardSwipeHandled = false;

function cloneDefaults() {
  return JSON.parse(JSON.stringify(defaults));
}

function readState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return cloneDefaults();
    const lang = saved.lang || localStorage.getItem(LANGUAGE_KEY) || defaults.lang;
    const heroByLang = mergeHeroLanguages(saved);
    return {
      lang,
      heroByLang,
      hero: heroByLang[lang] || heroByLang.ru,
      projects: mergeProjects(saved.projects),
      cards: mergeCards(saved.cards)
    };
  } catch {
    return cloneDefaults();
  }
}

function mergeHeroLanguages(saved) {
  const heroByLang = JSON.parse(JSON.stringify(heroByLangDefaults));
  if (saved.heroByLang) {
    Object.keys(heroByLang).forEach((lang) => {
      if (Array.isArray(saved.heroByLang[lang])) {
        heroByLang[lang] = normalizeHero(saved.heroByLang[lang], heroByLang[lang]);
      }
    });
  } else if (Array.isArray(saved.hero) && !isLegacyHero(saved.hero)) {
    heroByLang.ru = normalizeHero(saved.hero, heroByLang.ru);
  }
  return heroByLang;
}

function normalizeHero(hero, fallback) {
  return fallback.map((line, index) => hero[index] ?? line);
}

function isLegacyHero(hero) {
  return hero[0] === "Bridging user needs" || hero[2] === "10 years of designing";
}

function mergeCards(savedCards) {
  if (!Array.isArray(savedCards)) return defaults.cards;
  return defaults.cards.map((card, index) => {
    const savedCard = savedCards[index];
    if (!Array.isArray(savedCard) || savedCard[3] === "Editable portfolio card.") return card;
    const merged = [...card];
    savedCard.slice(0, 4).forEach((value, valueIndex) => {
      merged[valueIndex] = value;
    });
    merged[4] = card[4];
    return merged;
  });
}

function mergeProjects(savedProjects) {
  if (!Array.isArray(savedProjects)) return defaults.projects;
  if (!savedProjects.length) return defaults.projects;
  return savedProjects.map((project, index) => mergeProject(defaults.projects[index] || createEmptyProject(), project));
}

function mergeProject(project, saved) {
  const merged = [...project];
  if (saved) {
    saved.forEach((value, index) => {
      merged[index] = value;
    });
  }
  if (!merged[4]) merged[4] = 88;
  if (!merged[5]) merged[5] = "";
  if (!Array.isArray(merged[6])) merged[6] = [];
  if (!Array.isArray(merged[7])) merged[7] = [];
  return merged;
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      lang: state.lang,
      heroByLang: state.heroByLang,
      hero: state.hero,
      projects: state.projects,
      cards: state.cards
    }));
    localStorage.setItem(LANGUAGE_KEY, state.lang);
    showSaveIndicator();
    return true;
  } catch (error) {
    console.error(error);
    alert("Не получилось сохранить изменения: изображение слишком большое для браузера. Попробуй загрузить картинку поменьше.");
    return false;
  }
}

function showSaveIndicator() {
  const el = document.querySelector(".admin-note");
  if (!el) return;
  const orig = el.textContent;
  el.textContent = "✓ Сохранено";
  el.style.color = "#0a0";
  clearTimeout(el._saveTimer);
  el._saveTimer = setTimeout(() => {
    el.textContent = orig;
    el.style.color = "";
  }, 1500);
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result)));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(file);
  });
}

async function readImageFile(file) {
  if (!file.type.startsWith("image/") || file.type === "image/svg+xml") {
    return readFileAsDataUrl(file);
  }

  const dataUrl = await readFileAsDataUrl(file);
  const image = await new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", reject);
    img.src = dataUrl;
  });
  const maxSide = 1800;
  const ratio = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.max(1, Math.round(image.naturalWidth * ratio));
  const height = Math.max(1, Math.round(image.naturalHeight * ratio));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0, width, height);
  return canvas.toDataURL("image/jpeg", 0.82);
}

function getLang() {
  return state.lang === "en" ? "en" : "ru";
}

function setImageSource(imageNode, src, alt = "") {
  if (!imageNode || !src) return;
  imageNode.classList.add("is-loading");
  imageNode.removeAttribute("src");
  imageNode.alt = alt;
  imageNode.onload = () => imageNode.classList.remove("is-loading");
  imageNode.onerror = () => imageNode.classList.remove("is-loading");
  requestAnimationFrame(() => {
    imageNode.src = src;
    if (imageNode.complete) imageNode.classList.remove("is-loading");
  });
}

function localizeProject(project) {
  if (getLang() !== "en") return project;
  const translation = projectTranslations[project[0]];
  if (!translation) return project;
  const blocks = Array.isArray(project[7]) ? project[7].map((block, index) => {
    const blockTranslation = translation.blocks[index];
    if (!blockTranslation) return block;
    return {
      ...block,
      heading: blockTranslation[0],
      text: blockTranslation[1]
    };
  }) : [];
  return [
    translation.title,
    translation.subtitle,
    project[2],
    translation.desc,
    project[4],
    project[5],
    project[6],
    blocks,
    project[8]
  ];
}

function localizeModalItem(item) {
  const localizedProject = localizeProject(item);
  if (localizedProject !== item) return localizedProject;
  if (getLang() !== "en") return item;
  const translatedCardText = cardTextTranslations[item[2]];
  if (!translatedCardText) return item;
  const localized = [...item];
  localized[3] = translatedCardText;
  return localized;
}

function renderUiText() {
  const text = uiText[getLang()];
  document.querySelectorAll("[data-ui]").forEach((node) => {
    const key = node.dataset.ui;
    if (text[key]) node.textContent = text[key];
    if (key === "close") node.setAttribute("aria-label", text[key]);
  });
}

function createProjectCard(index) {
  const article = document.createElement("article");
  article.className = "case-card is-visible";
  article.dataset.project = String(index);
  article.innerHTML = `
    <div class="case-title">
      <h2 data-project-title="${index}"></h2>
      <p data-project-subtitle="${index}"></p>
    </div>
    <div class="case-media"><img data-project-image-view="${index}" alt="" /></div>
  `;
  return article;
}

function bindProjectCard(card) {
  if (card.dataset.bound === "1") return;
  card.dataset.bound = "1";
  card.addEventListener("click", () => {
    const project = state.projects[Number(card.dataset.project)];
    if (project) openModal(project);
  });
}

function ensureProjectCards() {
  const grid = document.querySelector(".case-grid");
  if (!grid) return;
  while (grid.querySelectorAll("[data-project]").length < state.projects.length) {
    grid.append(createProjectCard(grid.querySelectorAll("[data-project]").length));
  }
  grid.querySelectorAll("[data-project]").forEach((card, index) => {
    card.dataset.project = String(index);
    const title = card.querySelector("[data-project-title]");
    const subtitle = card.querySelector("[data-project-subtitle]");
    const image = card.querySelector("[data-project-image-view]");
    if (title) title.dataset.projectTitle = String(index);
    if (subtitle) subtitle.dataset.projectSubtitle = String(index);
    if (image) image.dataset.projectImageView = String(index);
    bindProjectCard(card);
  });
}

function renderContent() {
  state.hero = state.heroByLang[state.lang] || state.heroByLang.ru;
  state.hero.forEach((line, index) => {
    const node = document.querySelector(`[data-hero-line="${index}"]`);
    if (node) {
      node.textContent = line;
      node.hidden = !line;
    }
  });
  document.documentElement.lang = state.lang;
  const langToggle = document.querySelector("[data-lang-toggle]");
  if (langToggle) langToggle.textContent = state.lang === "ru" ? "En" : "Ru";
  renderUiText();
  ensureProjectCards();

  document.querySelectorAll("[data-project]").forEach((card) => {
    const index = Number(card.dataset.project);
    card.hidden = index >= state.projects.length;
  });

  state.projects.forEach((project, index) => {
    const [title, subtitle, image] = localizeProject(project);
    const titleNode = document.querySelector(`[data-project-title="${index}"]`);
    const subtitleNode = document.querySelector(`[data-project-subtitle="${index}"]`);
    const imageNode = document.querySelector(`[data-project-image-view="${index}"]`);
    if (titleNode) titleNode.textContent = title;
    if (subtitleNode) subtitleNode.textContent = subtitle;
    setImageSource(imageNode, image, title);
  });

  state.cards.forEach((card, index) => {
    const [title, , image] = card;
    const imageNode = document.querySelector(`[data-card-image-view="${index}"]`);
    if (image) {
      setImageSource(imageNode, image, title || `Portfolio card ${index + 1}`);
    }
  });
}

function getCardModalItem(index) {
  const card = state.cards[index] || defaults.cards[index];
  const defaultCard = defaults.cards[index];
  return [
    card[0] || defaultCard?.[0] || "",
    card[1] || defaultCard?.[1] || "",
    card[2] || cardModalPhotos[index] || defaultCard?.[2] || "",
    card[3] || (defaultCard ? defaultCard[3] : "") || "",
    88,
    "",
    [],
    []
  ];
}

function openCardModal(index) {
  activeCardModalIndex = (index + state.cards.length) % state.cards.length;
  openModal(getCardModalItem(activeCardModalIndex), { personal: true });
}

function switchCardModal(direction) {
  openCardModal(activeCardModalIndex + direction);
}

function renderCardStackImages(index) {
  modalCardStackImages.forEach((imageNode, stackIndex) => {
    const cardIndex = (index + stackIndex + 1) % state.cards.length;
    const card = state.cards[cardIndex] || defaults.cards[cardIndex];
    const src = cardModalPhotos[cardIndex] || card?.[2] || "";
    if (src) setImageSource(imageNode, src, "");
  });
}

function openModal(item, options = {}) {
  item = localizeModalItem(item);
  const [title, subtitle, image, desc, height = 88, extraText = "", extraImages = [], blocks = [], modalPhoto] = item;
  const isPersonalCard = options.personal || (typeof image === "string" && (image.includes("/cards/admin-card-") || image.includes("/cards/photo-")));
  const modalImageSrc = isPersonalCard ? image : modalPhoto || image;
  const modalHeight = isPersonalCard ? 88 : height;
  modal.classList.toggle("is-personal", isPersonalCard);
  if (isPersonalCard) renderCardStackImages(activeCardModalIndex);
  modalImage.hidden = !isPersonalCard;
  if (isPersonalCard) {
    setImageSource(modalImage, modalImageSrc, `${title} ${subtitle}`.trim());
  } else {
    modalImage.removeAttribute("src");
  }
  modalTitle.textContent = title;
  modalTitle.hidden = !title;
  modalSubtitle.textContent = subtitle;
  modalSubtitle.hidden = !subtitle;
  modalDesc.textContent = desc;
  modalDesc.hidden = !desc;
  modalExtra.textContent = extraText;
  modalExtra.hidden = !extraText;
  modalGallery.innerHTML = "";
  modalBlocks.innerHTML = "";
  blocks.forEach((block) => {
    const blockNode = document.createElement("section");
    blockNode.className = `modal-block align-${block.align || "full"}${block.image ? " has-image" : ""}`;

    const copy = document.createElement("div");
    copy.className = "modal-block-copy";
    if (block.heading) {
      const heading = document.createElement("h3");
      heading.textContent = block.heading;
      copy.append(heading);
    }
    if (block.text) {
      const text = document.createElement("p");
      text.textContent = block.text;
      copy.append(text);
    }
    blockNode.append(copy);

    if (block.image) {
      const media = document.createElement("div");
      media.className = "modal-block-media";
      const imageNode = document.createElement("img");
      setImageSource(imageNode, block.image, block.heading || title);
      media.append(imageNode);
      blockNode.append(media);
    }

    modalBlocks.append(blockNode);
  });
  modalBlocks.hidden = blocks.length === 0;
  extraImages.forEach((src) => {
    const imageNode = document.createElement("img");
    setImageSource(imageNode, src, title);
    modalGallery.append(imageNode);
  });
  modalGallery.hidden = extraImages.length === 0;
  document.documentElement.style.setProperty("--project-modal-height", `${modalHeight}svh`);
  modal.hidden = false;
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
}

function renderProjectPreview() {
  const project = state.projects[selectedProject];
  if (!project) return;
  const [title, subtitle, image, desc, , extraText = "", extraImages = [], blocks = []] = project;
  const previewImage = document.querySelector("[data-preview-image]");
  const previewTitle = document.querySelector("[data-preview-title]");
  const previewSubtitle = document.querySelector("[data-preview-subtitle]");
  const previewDesc = document.querySelector("[data-preview-desc]");
  const previewExtra = document.querySelector("[data-preview-extra]");
  const previewBlocks = document.querySelector("[data-preview-blocks]");
  const previewGallery = document.querySelector("[data-preview-gallery]");

  setImageSource(previewImage, image, title);
  previewTitle.textContent = title;
  previewSubtitle.textContent = subtitle;
  previewDesc.textContent = desc;
  previewExtra.textContent = extraText;
  previewExtra.hidden = !extraText;
  previewBlocks.innerHTML = "";
  previewGallery.innerHTML = "";

  blocks.forEach((block) => {
    const blockNode = document.createElement("section");
    blockNode.className = `project-preview-block align-${block.align || "full"}${block.image ? " has-image" : ""}`;

    const copy = document.createElement("div");
    copy.className = "project-preview-block-copy";
    if (block.heading) {
      const heading = document.createElement("h3");
      heading.textContent = block.heading;
      copy.append(heading);
    }
    if (block.text) {
      const text = document.createElement("p");
      text.textContent = block.text;
      copy.append(text);
    }
    blockNode.append(copy);

    if (block.image) {
      const media = document.createElement("div");
      media.className = "project-preview-media";
      const imageNode = document.createElement("img");
      setImageSource(imageNode, block.image, block.heading || title);
      media.append(imageNode);
      blockNode.append(media);
    }

    previewBlocks.append(blockNode);
  });

  previewBlocks.hidden = blocks.length === 0;
  extraImages.forEach((src) => {
    const imageNode = document.createElement("img");
    setImageSource(imageNode, src, title);
    previewGallery.append(imageNode);
  });
  previewGallery.hidden = extraImages.length === 0;
}

function closeModal() {
  modal.hidden = true;
  modal.classList.remove("is-personal");
  modalImage.removeAttribute("src");
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
}

function updateImageViewerTransform() {
  imageViewerImg.style.setProperty("--viewer-scale", viewerScale);
  imageViewerImg.style.setProperty("--viewer-x", `${viewerX}px`);
  imageViewerImg.style.setProperty("--viewer-y", `${viewerY}px`);
}

function openImageViewer(src, alt = "") {
  if (!src) return;
  viewerScale = 1;
  viewerX = 0;
  viewerY = 0;
  setImageSource(imageViewerImg, src, alt);
  updateImageViewerTransform();
  imageViewer.hidden = false;
}

function closeImageViewer() {
  imageViewer.hidden = true;
  imageViewerImg.removeAttribute("src");
  viewerPointers.clear();
  viewerDragging = false;
  viewerPinchStartDistance = 0;
}

function setImageViewerScale(scale) {
  viewerScale = Math.min(4, Math.max(1, Number(scale.toFixed(2))));
  if (viewerScale === 1) {
    viewerX = 0;
    viewerY = 0;
  }
  updateImageViewerTransform();
}

function resetImageViewer() {
  viewerScale = 1;
  viewerX = 0;
  viewerY = 0;
  updateImageViewerTransform();
}

function getViewerPointerDistance() {
  const points = Array.from(viewerPointers.values());
  if (points.length < 2) return 0;
  const [first, second] = points;
  return Math.hypot(second.x - first.x, second.y - first.y);
}

function createEmptyProject() {
  return [
    "Новый проект",
    "Описание проекта",
    "./assets/portfolio/page-04.png",
    "Короткое описание проекта.",
    88,
    "",
    [],
    [
      { heading: "Контекст", text: "", image: "", align: "full" },
      { heading: "Задача", text: "", image: "", align: "full" },
      { heading: "Роль", text: "", image: "", align: "full" },
      { heading: "Решение", text: "", image: "", align: "full" },
      { heading: "Результат", text: "", image: "", align: "full" }
    ]
  ];
}

function refreshAdminAfterProjectChange() {
  selectedProject = Math.min(selectedProject, Math.max(state.projects.length - 1, 0));
  selectedBlock = 0;
  renderContent();
  fillAdmin();
  saveState();
}

function fillAdmin() {
  state.hero = state.heroByLang[state.lang] || state.heroByLang.ru;
  state.hero.forEach((line, index) => {
    const input = document.querySelector(`[data-hero-input="${index}"]`);
    if (input) input.value = line;
  });

  const select = document.querySelector("[data-project-select]");
  select.innerHTML = "";
  state.projects.forEach((project, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${index + 1}. ${project[0]}`;
    select.append(option);
  });
  select.value = String(selectedProject);
  fillProjectFields();

  const cardSelect = document.querySelector("[data-card-select]");
  if (cardSelect) {
    cardSelect.innerHTML = "";
    state.cards.forEach((card, index) => {
      const option = document.createElement("option");
      option.value = String(index);
      option.textContent = `${index + 1}. ${card[0]}`;
      cardSelect.append(option);
    });
    cardSelect.value = String(selectedCard);
  }
  fillCardFields();
}

function fillProjectFields() {
  normalizeProjectBlocks();
  const [title, subtitle, , desc, height = 88, extraText = ""] = state.projects[selectedProject];
  document.querySelector('[data-project-field="title"]').value = title;
  document.querySelector('[data-project-field="subtitle"]').value = subtitle;
  document.querySelector('[data-project-field="desc"]').value = desc;
  document.querySelector('[data-project-field="extraText"]').value = extraText;
  document.querySelector('[data-project-field="height"]').value = height;
  selectedBlock = 0;
  fillBlockList();
  renderProjectPreview();
}

function readAdminFields() {
  state.hero = state.hero.map((line, index) => {
    const input = document.querySelector(`[data-hero-input="${index}"]`);
    return input ? input.value.trim() : line;
  });
  state.heroByLang[state.lang] = state.hero;

  const project = state.projects[selectedProject];
  const titleInput = document.querySelector('[data-project-field="title"]');
  if (titleInput) project[0] = titleInput.value.trim();
  const subtitleInput = document.querySelector('[data-project-field="subtitle"]');
  if (subtitleInput) project[1] = subtitleInput.value.trim();
  const descInput = document.querySelector('[data-project-field="desc"]');
  if (descInput) project[3] = descInput.value.trim();
  const heightInput = document.querySelector('[data-project-field="height"]');
  if (heightInput) project[4] = Number(heightInput.value) || 88;
  const extraInput = document.querySelector('[data-project-field="extraText"]');
  if (extraInput) project[5] = extraInput.value.trim();
  if (!Array.isArray(project[6])) project[6] = [];
  if (!Array.isArray(project[7])) project[7] = [];
  readBlockFields();
}

function normalizeProjectBlocks() {
  const project = state.projects[selectedProject];
  if (!Array.isArray(project[7])) project[7] = [];
}

function fillBlockList() {
  normalizeProjectBlocks();
  const select = document.querySelector("[data-block-select]");
  const blocks = state.projects[selectedProject][7];
  select.innerHTML = "";
  blocks.forEach((block, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${index + 1}. ${block.heading || "Новый блок"}`;
    select.append(option);
  });
  if (!blocks.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Блоков пока нет";
    select.append(option);
  }
  selectedBlock = Math.min(selectedBlock, Math.max(blocks.length - 1, 0));
  select.value = blocks.length ? String(selectedBlock) : "";
  fillBlockFields();
}

function fillBlockFields() {
  normalizeProjectBlocks();
  const block = state.projects[selectedProject][7][selectedBlock];
  document.querySelector('[data-block-field="heading"]').value = block?.heading || "";
  document.querySelector('[data-block-field="text"]').value = block?.text || "";
  document.querySelector('[data-block-field="align"]').value = block?.align || "full";
  renderProjectPreview();
}

function fillCardFields() {
  const card = state.cards[selectedCard];
  if (!card) return;
  const titleInput = document.querySelector('[data-card-field="title"]');
  const subtitleInput = document.querySelector('[data-card-field="subtitle"]');
  const descInput = document.querySelector('[data-card-field="desc"]');
  if (titleInput) titleInput.value = card[0] || "";
  if (subtitleInput) subtitleInput.value = card[1] || "";
  if (descInput) descInput.value = card[3] || "";
}

function readCardFields() {
  const card = state.cards[selectedCard];
  if (!card) return;
  const titleInput = document.querySelector('[data-card-field="title"]');
  const subtitleInput = document.querySelector('[data-card-field="subtitle"]');
  const descInput = document.querySelector('[data-card-field="desc"]');
  if (titleInput) card[0] = titleInput.value.trim();
  if (subtitleInput) card[1] = subtitleInput.value.trim();
  if (descInput) card[3] = descInput.value.trim();
}

function readBlockFields() {
  normalizeProjectBlocks();
  const block = state.projects[selectedProject][7][selectedBlock];
  if (!block) return;
  const headingInput = document.querySelector('[data-block-field="heading"]');
  if (headingInput) block.heading = headingInput.value.trim();
  const textInput = document.querySelector('[data-block-field="text"]');
  if (textInput) block.text = textInput.value.trim();
  const alignInput = document.querySelector('[data-block-field="align"]');
  if (alignInput) block.align = alignInput.value.trim();
}

document.querySelectorAll("[data-card]").forEach((button) => {
  button.addEventListener("click", () => openCardModal(Number(button.dataset.card)));
});

document.querySelector(".modal-backdrop").addEventListener("click", closeModal);
document.querySelector(".modal-close").addEventListener("click", closeModal);
document.querySelector(".modal-panel").addEventListener("pointerdown", (event) => {
  if (!modal.classList.contains("is-personal")) return;
  cardSwipeHandled = false;
  cardSwipeStartX = event.clientX;
  cardSwipeStartY = event.clientY;
});
document.querySelector(".modal-panel").addEventListener("pointerup", (event) => {
  if (!modal.classList.contains("is-personal")) return;
  const deltaX = event.clientX - cardSwipeStartX;
  const deltaY = event.clientY - cardSwipeStartY;
  if (Math.abs(deltaX) < 54 || Math.abs(deltaX) < Math.abs(deltaY) * 1.4) return;
  cardSwipeHandled = true;
  switchCardModal(deltaX < 0 ? 1 : -1);
});
document.querySelector(".modal-panel").addEventListener("click", (event) => {
  if (cardSwipeHandled) {
    cardSwipeHandled = false;
    return;
  }
  if (modal.classList.contains("is-personal")) {
    if (event.target.closest(".modal-close")) return;
    const stackImage = event.target.closest(".modal-card-stack img");
    if (stackImage) {
      switchCardModal(1);
      return;
    }
    const ownImage = event.target.closest("#modal-image");
    if (ownImage && !ownImage.classList.contains("is-loading") && ownImage.currentSrc) {
      openImageViewer(ownImage.currentSrc, ownImage.alt);
      return;
    }
    const bounds = event.currentTarget.getBoundingClientRect();
    switchCardModal(event.clientX < bounds.left + bounds.width / 2 ? -1 : 1);
    return;
  }
  const imageNode = event.target.closest("img");
  if (!imageNode || imageNode.classList.contains("is-loading") || !imageNode.currentSrc) return;
  openImageViewer(imageNode.currentSrc, imageNode.alt);
});

document.querySelectorAll("[data-image-viewer-close]").forEach((button) => {
  button.addEventListener("click", closeImageViewer);
});

imageViewerStage.addEventListener("pointerdown", (event) => {
  viewerPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  imageViewerStage.setPointerCapture(event.pointerId);
  if (viewerPointers.size === 2) {
    viewerDragging = false;
    viewerPinchStartDistance = getViewerPointerDistance();
    viewerPinchStartScale = viewerScale;
    return;
  }
  if (viewerScale <= 1) return;
  viewerDragging = true;
  viewerStartX = event.clientX;
  viewerStartY = event.clientY;
  viewerBaseX = viewerX;
  viewerBaseY = viewerY;
});

imageViewerStage.addEventListener("pointermove", (event) => {
  if (!viewerPointers.has(event.pointerId)) return;
  viewerPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  if (viewerPointers.size >= 2 && viewerPinchStartDistance > 0) {
    const distance = getViewerPointerDistance();
    setImageViewerScale(viewerPinchStartScale * (distance / viewerPinchStartDistance));
    return;
  }
  if (!viewerDragging) return;
  viewerX = viewerBaseX + event.clientX - viewerStartX;
  viewerY = viewerBaseY + event.clientY - viewerStartY;
  updateImageViewerTransform();
});

imageViewerStage.addEventListener("pointerup", (event) => {
  viewerPointers.delete(event.pointerId);
  viewerDragging = false;
  viewerPinchStartDistance = 0;
});

imageViewerStage.addEventListener("pointercancel", (event) => {
  viewerPointers.delete(event.pointerId);
  viewerDragging = false;
  viewerPinchStartDistance = 0;
});

imageViewerImg.addEventListener("dblclick", () => {
  if (viewerScale > 1) resetImageViewer();
  else setImageViewerScale(2);
});

imageViewer.addEventListener("wheel", (event) => {
  event.preventDefault();
  setImageViewerScale(viewerScale + (event.deltaY < 0 ? 0.25 : -0.25));
}, { passive: false });

const adminButton = document.querySelector("[data-admin-open]");
const publicContact = document.querySelector("[data-public-contact]");
const langToggle = document.querySelector("[data-lang-toggle]");
if (isAdminMode) {
  adminButton.hidden = false;
  publicContact.hidden = true;
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    if (!document.querySelector("[data-admin]").hidden) {
      readAdminFields();
    }
    state.lang = state.lang === "ru" ? "en" : "ru";
    state.hero = state.heroByLang[state.lang] || state.heroByLang.ru;
    saveState();
    renderContent();
    if (!document.querySelector("[data-admin]").hidden) {
      fillAdmin();
    }
  });
}

adminButton.addEventListener("click", () => {
  if (!isAdminMode) return;
  fillAdmin();
  document.querySelector("[data-admin]").hidden = false;
});

document.querySelector("[data-admin-close]").addEventListener("click", () => {
  document.querySelector("[data-admin]").hidden = true;
});

document.querySelector("[data-project-select]").addEventListener("change", (event) => {
  readAdminFields();
  saveState();
  selectedProject = Number(event.target.value);
  fillProjectFields();
});

document.querySelector("[data-project-add]").addEventListener("click", () => {
  readAdminFields();
  state.projects.splice(selectedProject + 1, 0, createEmptyProject());
  selectedProject += 1;
  refreshAdminAfterProjectChange();
});

document.querySelector("[data-project-delete]").addEventListener("click", () => {
  if (state.projects.length <= 1) return;
  state.projects.splice(selectedProject, 1);
  selectedProject = Math.max(0, selectedProject - 1);
  refreshAdminAfterProjectChange();
});

document.querySelector("[data-project-up]").addEventListener("click", () => {
  readAdminFields();
  if (selectedProject <= 0) return;
  [state.projects[selectedProject - 1], state.projects[selectedProject]] = [state.projects[selectedProject], state.projects[selectedProject - 1]];
  selectedProject -= 1;
  refreshAdminAfterProjectChange();
});

document.querySelector("[data-project-down]").addEventListener("click", () => {
  readAdminFields();
  if (selectedProject >= state.projects.length - 1) return;
  [state.projects[selectedProject + 1], state.projects[selectedProject]] = [state.projects[selectedProject], state.projects[selectedProject + 1]];
  selectedProject += 1;
  refreshAdminAfterProjectChange();
});

document.querySelector("[data-block-select]").addEventListener("change", (event) => {
  readBlockFields();
  saveState();
  selectedBlock = Number(event.target.value || 0);
  fillBlockFields();
});

document.querySelector("[data-block-add]").addEventListener("click", () => {
  readAdminFields();
  normalizeProjectBlocks();
  state.projects[selectedProject][7].push({ heading: "Новый блок", text: "", image: "", align: "full" });
  selectedBlock = state.projects[selectedProject][7].length - 1;
  fillBlockList();
});

document.querySelector("[data-block-delete]").addEventListener("click", () => {
  normalizeProjectBlocks();
  const blocks = state.projects[selectedProject][7];
  if (!blocks.length) return;
  blocks.splice(selectedBlock, 1);
  selectedBlock = Math.max(0, selectedBlock - 1);
  saveState();
  fillBlockList();
});

document.querySelector("[data-block-up]").addEventListener("click", () => {
  readBlockFields();
  const blocks = state.projects[selectedProject][7];
  if (!blocks || selectedBlock <= 0) return;
  [blocks[selectedBlock - 1], blocks[selectedBlock]] = [blocks[selectedBlock], blocks[selectedBlock - 1]];
  selectedBlock -= 1;
  fillBlockList();
});

document.querySelector("[data-block-down]").addEventListener("click", () => {
  readBlockFields();
  const blocks = state.projects[selectedProject][7];
  if (!blocks || selectedBlock >= blocks.length - 1) return;
  [blocks[selectedBlock + 1], blocks[selectedBlock]] = [blocks[selectedBlock], blocks[selectedBlock + 1]];
  selectedBlock += 1;
  fillBlockList();
});

document.querySelector(".admin-body").addEventListener("input", (event) => {
  if (event.target.matches('input[type="file"]')) return;
  readAdminFields();
  readCardFields();
  saveState();
  renderContent();
  renderProjectPreview();
});

document.querySelector(".admin-body").addEventListener("change", (event) => {
  if (event.target.matches("[data-project-select], [data-card-select], input[type=\"file\"]")) return;
  readAdminFields();
  readCardFields();
  saveState();
  renderContent();
  renderProjectPreview();
});

document.querySelector("[data-save]").addEventListener("click", () => {
  readAdminFields();
  readCardFields();
  saveState();
  renderContent();
  fillAdmin();
});

document.querySelector("[data-reset]").addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(LANGUAGE_KEY);
  state = cloneDefaults();
  selectedProject = 0;
  selectedCard = 0;
  renderContent();
  fillAdmin();
});

document.querySelector("[data-project-image]").addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  readImageFile(file).then((src) => {
    state.projects[selectedProject][2] = src;
    if (saveState()) {
      renderContent();
      renderProjectPreview();
    }
  }).catch(() => {
    alert("Не получилось загрузить картинку.");
  });
});

document.querySelector("[data-project-extra-images]").addEventListener("change", (event) => {
  const files = Array.from(event.target.files || []);
  if (!files.length) return;
  const project = state.projects[selectedProject];
  if (!Array.isArray(project[6])) project[6] = [];
  Promise.all(files.map(readImageFile)).then((images) => {
    project[6].push(...images);
    saveState();
    renderProjectPreview();
  }).catch(() => {
    alert("Не получилось загрузить одну из картинок.");
  });
});

const cardSelect = document.querySelector("[data-card-select]");
if (cardSelect) {
  cardSelect.addEventListener("change", (event) => {
    readCardFields();
    saveState();
    selectedCard = Number(event.target.value);
    fillCardFields();
  });
}

const cardImageInput = document.querySelector("[data-card-image]");
if (cardImageInput) {
  cardImageInput.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    readImageFile(file).then((src) => {
      state.cards[selectedCard][2] = src;
      if (saveState()) renderContent();
    }).catch(() => {
      alert("Не получилось загрузить картинку.");
    });
  });
}

document.querySelector("[data-block-image]").addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  normalizeProjectBlocks();
  if (!state.projects[selectedProject][7][selectedBlock]) return;
  readImageFile(file).then((src) => {
    state.projects[selectedProject][7][selectedBlock].image = src;
    if (saveState()) renderProjectPreview();
  }).catch(() => {
    alert("Не получилось загрузить картинку.");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.altKey && event.shiftKey && event.key.toLowerCase() === "a") {
    localStorage.setItem("adminAccess", "1");
    adminButton.hidden = false;
    publicContact.hidden = true;
    fillAdmin();
    document.querySelector("[data-admin]").hidden = false;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!imageViewer.hidden) {
      closeImageViewer();
      return;
    }
    if (!modal.hidden) closeModal();
    document.querySelector("[data-admin]").hidden = true;
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.02 });

document.querySelectorAll(".case-card").forEach((card) => observer.observe(card));

const parallax = document.querySelector("[data-parallax]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (parallax && !reduceMotion) {
  window.addEventListener("mousemove", (event) => {
    const rect = document.querySelector(".hero").getBoundingClientRect();
    const x = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
    const y = (event.clientY - (rect.top + rect.height / 2)) / rect.height;
    parallax.style.translate = `${x * 9}px ${y * 9}px`;
  }, { passive: true });
}

renderContent();
