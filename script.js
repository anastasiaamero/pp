const STORAGE_KEY = "korolev-clone-admin-v1";
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

const defaults = {
  lang: "ru",
  heroByLang: heroByLangDefaults,
  hero: heroByLangDefaults.ru,
  projects: [
    ["Albato Copilot", "Simpler complex user journeys", "./assets/img-case-1.avif", "Specializing in data-heavy SaaS platforms, complex workflows and scalable product systems."],
    ["Albato Builder", "canvas-based interaction mode", "./assets/img-case-2.avif", "Rethinking how users build complex automations through a visual drag-and-drop interface."],
    ["Albato Redesign", "Clarity, usability & scalability", "./assets/img-case-3.avif", "A complete platform redesign focused on clarity, usability and international expansion."],
    ["Coffee Maker App", "Personalise the coffee-making experience", "./assets/img-case-4.avif", "A concept app that connects to smart coffee machines for a personalised brewing experience."],
    ["SPIK", "Learn & revisit personal vocabulary", "./assets/img-case-5.avif", "A language-learning app focused on personal vocabulary building through spaced repetition."],
    ["Web clipper", "Scalable knowledge management system", "./assets/img-case-6.avif", "A browser extension for capturing, organising and retrieving web content at scale."],
    ["Coffeeopia", "Community platform for specialty coffee", "./assets/img-case-7.avif", "A community platform connecting specialty coffee enthusiasts, roasters and baristas."],
    ["Hilight", "Navigation for visually impaired", "./assets/img-case-8.avif", "An accessibility-first navigation app designed for visually impaired users."],
    ["Tinkoff Bank", "Gamified investment experience", "./assets/img-case-9.avif", "Gamifying the investment experience for one of Russia's largest digital banks."],
    ["Tinkoff Bank", "Learning platform for new investors", "./assets/img-case-10.avif", "A platform that guides first-time investors from zero to their first portfolio."]
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
const adminRequested = new URLSearchParams(window.location.search).get("admin") === "1" || window.location.hash === "#admin";
if (adminRequested) localStorage.setItem("adminAccess", "1");
const isLocalPreview = window.location.protocol === "file:" || window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost";
const isAdminMode = isLocalPreview || adminRequested || localStorage.getItem("adminAccess") === "1";

const modal = document.querySelector("#modal");
const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector("#modal-title");
const modalSubtitle = document.querySelector("#modal-subtitle");
const modalDesc = document.querySelector("#modal-desc");
const modalExtra = document.querySelector("#modal-extra");
const modalGallery = document.querySelector("#modal-gallery");
const modalBlocks = document.createElement("div");
modalBlocks.className = "modal-blocks";
modalGallery.before(modalBlocks);

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
      projects: defaults.projects.map((project, index) => mergeProject(project, saved.projects?.[index])),
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
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    lang: state.lang,
    heroByLang: state.heroByLang,
    hero: state.hero,
    projects: state.projects,
    cards: state.cards
  }));
  localStorage.setItem(LANGUAGE_KEY, state.lang);
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

  state.projects.forEach((project, index) => {
    const [title, subtitle, image] = project;
    const titleNode = document.querySelector(`[data-project-title="${index}"]`);
    const subtitleNode = document.querySelector(`[data-project-subtitle="${index}"]`);
    const imageNode = document.querySelector(`[data-project-image-view="${index}"]`);
    if (titleNode) titleNode.textContent = title;
    if (subtitleNode) subtitleNode.textContent = subtitle;
    if (imageNode) {
      imageNode.src = image;
      imageNode.alt = title;
    }
  });

  state.cards.forEach((card, index) => {
    const [title, , image] = card;
    const imageNode = document.querySelector(`[data-card-image-view="${index}"]`);
    if (imageNode) {
      imageNode.src = image;
      imageNode.alt = title || `Portfolio card ${index + 1}`;
    }
  });
}

function openModal(item) {
  const [title, subtitle, image, desc, height = 88, extraText = "", extraImages = [], blocks = [], modalPhoto] = item;
  const isPersonalCard = typeof image === "string" && image.includes("/cards/admin-card-");
  modalImage.src = isPersonalCard && height ? height : modalPhoto || image;
  modalImage.alt = `${title} ${subtitle}`.trim();
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
      imageNode.src = block.image;
      imageNode.alt = block.heading || title;
      media.append(imageNode);
      blockNode.append(media);
    }

    modalBlocks.append(blockNode);
  });
  modalBlocks.hidden = blocks.length === 0;
  extraImages.forEach((src) => {
    const imageNode = document.createElement("img");
    imageNode.src = src;
    imageNode.alt = title;
    modalGallery.append(imageNode);
  });
  modalGallery.hidden = extraImages.length === 0;
  document.documentElement.style.setProperty("--project-modal-height", `${height}svh`);
  modal.hidden = false;
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
  document.querySelector(".modal-close").focus();
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

  previewImage.src = image;
  previewImage.alt = title;
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
      imageNode.src = block.image;
      imageNode.alt = block.heading || title;
      media.append(imageNode);
      blockNode.append(media);
    }

    previewBlocks.append(blockNode);
  });

  previewBlocks.hidden = blocks.length === 0;
  extraImages.forEach((src) => {
    const imageNode = document.createElement("img");
    imageNode.src = src;
    imageNode.alt = title;
    previewGallery.append(imageNode);
  });
  previewGallery.hidden = extraImages.length === 0;
}

function closeModal() {
  modal.hidden = true;
  modalImage.removeAttribute("src");
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
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
  project[0] = document.querySelector('[data-project-field="title"]').value.trim();
  project[1] = document.querySelector('[data-project-field="subtitle"]').value.trim();
  project[3] = document.querySelector('[data-project-field="desc"]').value.trim();
  project[4] = Number(document.querySelector('[data-project-field="height"]').value) || 88;
  project[5] = document.querySelector('[data-project-field="extraText"]').value.trim();
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
  block.heading = document.querySelector('[data-block-field="heading"]').value.trim();
  block.text = document.querySelector('[data-block-field="text"]').value.trim();
  block.align = document.querySelector('[data-block-field="align"]').value;
}

document.querySelectorAll("[data-card]").forEach((button) => {
  button.addEventListener("click", () => openModal(state.cards[Number(button.dataset.card)]));
});

document.querySelectorAll("[data-project]").forEach((card) => {
  card.addEventListener("click", () => openModal(state.projects[Number(card.dataset.project)]));
});

document.querySelector(".modal-backdrop").addEventListener("click", closeModal);
document.querySelector(".modal-close").addEventListener("click", closeModal);

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
  selectedProject = Number(event.target.value);
  fillProjectFields();
});

document.querySelector("[data-block-select]").addEventListener("change", (event) => {
  readBlockFields();
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
  renderContent();
  renderProjectPreview();
});

document.querySelector(".admin-body").addEventListener("change", (event) => {
  if (event.target.matches("[data-project-select], [data-card-select], input[type=\"file\"]")) return;
  readAdminFields();
  readCardFields();
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
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    state.projects[selectedProject][2] = String(reader.result);
    saveState();
    renderContent();
    renderProjectPreview();
  });
  reader.readAsDataURL(file);
});

document.querySelector("[data-project-extra-images]").addEventListener("change", (event) => {
  const files = Array.from(event.target.files || []);
  if (!files.length) return;
  const project = state.projects[selectedProject];
  if (!Array.isArray(project[6])) project[6] = [];
  Promise.all(files.map((file) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result)));
    reader.readAsDataURL(file);
  }))).then((images) => {
    project[6].push(...images);
    saveState();
    renderProjectPreview();
  });
});

const cardSelect = document.querySelector("[data-card-select]");
if (cardSelect) {
  cardSelect.addEventListener("change", (event) => {
    readCardFields();
    selectedCard = Number(event.target.value);
    fillCardFields();
  });
}

const cardImageInput = document.querySelector("[data-card-image]");
if (cardImageInput) {
  cardImageInput.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      state.cards[selectedCard][2] = String(reader.result);
      saveState();
      renderContent();
    });
    reader.readAsDataURL(file);
  });
}

document.querySelector("[data-block-image]").addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  normalizeProjectBlocks();
  if (!state.projects[selectedProject][7][selectedBlock]) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    state.projects[selectedProject][7][selectedBlock].image = String(reader.result);
    saveState();
    renderProjectPreview();
  });
  reader.readAsDataURL(file);
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
