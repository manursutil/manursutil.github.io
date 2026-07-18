const translations = {
  es: {
    common: {
      back: "Volver",
      language: "Idioma",
      spanish: "Español",
      english: "Inglés",
      technologies: "Tecnologías",
      projectFacts: "Claves del proyecto",
      repository: "Ver repositorio ↗",
      portraitAlt: "Retrato temporal",
      snakeAlt: "Ilustración temporal de Snake AI",
      deployAlt: "Ilustración temporal de DeployKit",
      pulsoAlt: "Ilustración temporal de Pulso Lanzarote",
    },
    index: {
      _title: "Manuel Rodríguez Sutil — Ciencia de Datos",
      _description: "Portfolio de Manuel Rodríguez Sutil, estudiante de Ciencia de Datos.",
      role: "Estudiante de Ciencia de Datos",
      hint: "Explora las imágenes",
      about: "Sobre mí",
      experience: "Experiencia",
      skills: "Habilidades",
      contact: "Contacto",
      openAbout: "Abrir Sobre mí",
      openSnake: "Abrir el proyecto Snake AI",
      openDeploy: "Abrir el proyecto DeployKit",
      openPulso: "Abrir el proyecto Pulso Lanzarote",
      openExperience: "Abrir Experiencia",
      openSkills: "Abrir Habilidades",
      openContact: "Abrir Contacto",
    },
    about: {
      _title: "Sobre mí — Manuel Rodríguez Sutil",
      _description: "Sobre Manuel Rodríguez Sutil.",
      kicker: "Sobre mí",
      title: "Datos, código y curiosidad.",
      intro: "Soy Manuel, estudiante de Ciencia de Datos interesado en convertir problemas complejos en herramientas claras, útiles y bien construidas.",
      factsLabel: "Más sobre mí",
      f1Label: "01 · Ahora", f1Title: "Aprendiendo", f1Text: "Este texto es provisional. Aquí podrás contar qué estás estudiando y las áreas en las que quieres profundizar.",
      f2Label: "02 · Intereses", f2Title: "Construyendo", f2Text: "Añade los problemas que disfrutas resolver, desde inteligencia artificial hasta herramientas de producto.",
      f3Label: "03 · Siguiente", f3Title: "Buscando", f3Text: "Este espacio puede explicar qué oportunidades, colaboraciones o retos te gustaría encontrar.",
    },
    snake: {
      _title: "Snake AI — Manuel Rodríguez Sutil",
      _description: "Snake AI, proyecto de aprendizaje por refuerzo de Manuel Rodríguez Sutil.",
      kicker: "Aprendizaje por refuerzo",
      description: "Un agente que aprende a jugar a Snake mediante una red DQN. Conecta un motor rápido escrito en C y renderizado con raylib con un agente en Python y PyTorch.",
      f1Label: "01 · Motor", f1Title: "Juego nativo", f1Text: "El motor en C permite ejecutar el entorno con rapidez y también ofrece una versión jugable.",
      f2Label: "02 · Agente", f2Title: "DQN en Python", f2Text: "El agente entrena con PyTorch y guarda sus pesos para reproducir después las partidas.",
      f3Label: "03 · Integración", f3Title: "Dos mundos", f3Text: "Una librería compartida conecta el motor nativo con el entorno de entrenamiento en Python.",
    },
    deploy: {
      _title: "DeployKit — Manuel Rodríguez Sutil",
      _description: "DeployKit, herramienta de despliegue multi-tenant de Manuel Rodríguez Sutil.",
      kicker: "DevOps · Producto",
      description: "Herramienta CLI para desplegar frontend y backend de forma independiente por tenant sobre infraestructura AWS existente, con despliegues fijados a commits inmutables.",
      f1Label: "01 · Seguro", f1Title: "SSM, no SSH", f1Text: "Los despliegues de backend se ejecutan mediante AWS SSM y las referencias se resuelven a un commit.",
      f2Label: "02 · Independiente", f2Title: "Por tenant", f2Text: "Frontend y backend se despliegan, conservan y revierten de forma independiente para cada tenant.",
      f3Label: "03 · Reproducible", f3Title: "Simulación local", f3Text: "Un entorno Docker permite recorrer el flujo completo sin depender de una cuenta de AWS.",
    },
    pulso: {
      _title: "Pulso Lanzarote — Manuel Rodríguez Sutil",
      _description: "Pulso Lanzarote, guía viva de eventos creada por Manuel Rodríguez Sutil.",
      kicker: "Datos · Producto local",
      description: "Una guía viva de eventos que recopila agendas locales, elimina duplicados y selecciona planes relevantes para publicarlos en web, Telegram e iCalendar.",
      f1Label: "01 · Recopila", f1Title: "Fuentes locales", f1Text: "Scrapers específicos reúnen programación institucional, cultural y de ocio de toda la isla.",
      f2Label: "02 · Entiende", f2Title: "Agenda canónica", f2Text: "El pipeline normaliza, deduplica y enriquece eventos localmente con modelos de Ollama.",
      f3Label: "03 · Publica", f3Title: "Varios canales", f3Text: "La misma selección alimenta la web pública, Telegram, iCalendar y el panel de operaciones.",
    },
    experience: {
      _title: "Experiencia — Manuel Rodríguez Sutil",
      _description: "Experiencia de Manuel Rodríguez Sutil.",
      kicker: "Trayectoria",
      title: "Experiencia que todavía está tomando forma.",
      intro: "Contenido provisional para ordenar tu recorrido de forma breve y centrada en el impacto.",
      timelineLabel: "Experiencia profesional y formación",
      f1Label: "2025 — Ahora", f1Title: "Tu experiencia más reciente", f1Text: "Empresa o proyecto · Añade aquí una descripción breve de tu impacto y responsabilidades.",
      f2Label: "2024 — 2025", f2Title: "Otra experiencia relevante", f2Text: "Organización · Resume lo que construiste, aprendiste o mejoraste en una o dos líneas.",
      f3Label: "Formación", f3Title: "Ciencia de Datos", f3Text: "Universidad o centro · Completa este bloque con tu formación y las áreas que más te interesan.",
    },
    skills: {
      _title: "Habilidades — Manuel Rodríguez Sutil",
      _description: "Habilidades de Manuel Rodríguez Sutil.",
      kicker: "Herramientas",
      title: "De la pregunta al producto.",
      intro: "Una selección provisional de tecnologías y formas de trabajar que podrás ajustar más adelante.",
      gridLabel: "Habilidades",
      f1Title: "Datos & IA", f1Text: "Python, PyTorch, pandas, modelos de lenguaje y aprendizaje por refuerzo.",
      f2Title: "Desarrollo", f2Text: "TypeScript, C, APIs, automatización, testing y diseño de herramientas CLI.",
      f3Title: "Infraestructura", f3Text: "AWS, Docker, Linux, CI/CD y despliegues reproducibles.",
      f4Title: "Forma de trabajar", f4Text: "Curiosidad, pensamiento de producto, comunicación y aprendizaje continuo.",
    },
    contact: {
      _title: "Contacto — Manuel Rodríguez Sutil",
      _description: "Contacto de Manuel Rodríguez Sutil.",
      kicker: "Contacto",
      title: "¿Construimos algo interesante?",
      intro: "Este texto y el correo son temporales. Sustitúyelos cuando quieras por tu mensaje y datos definitivos.",
      methodsLabel: "Formas de contacto",
    },
  },
  en: {
    common: {
      back: "Back",
      language: "Language",
      spanish: "Spanish",
      english: "English",
      technologies: "Technologies",
      projectFacts: "Project highlights",
      repository: "View repository ↗",
      portraitAlt: "Temporary portrait",
      snakeAlt: "Temporary Snake AI illustration",
      deployAlt: "Temporary DeployKit illustration",
      pulsoAlt: "Temporary Pulso Lanzarote illustration",
    },
    index: {
      _title: "Manuel Rodríguez Sutil — Data Science",
      _description: "Portfolio of Manuel Rodríguez Sutil, Data Science student.",
      role: "Data Science Student",
      hint: "Explore the images",
      about: "About me",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
      openAbout: "Open About me",
      openSnake: "Open the Snake AI project",
      openDeploy: "Open the DeployKit project",
      openPulso: "Open the Pulso Lanzarote project",
      openExperience: "Open Experience",
      openSkills: "Open Skills",
      openContact: "Open Contact",
    },
    about: {
      _title: "About me — Manuel Rodríguez Sutil",
      _description: "About Manuel Rodríguez Sutil.",
      kicker: "About me",
      title: "Data, code and curiosity.",
      intro: "I’m Manuel, a Data Science student interested in turning complex problems into clear, useful and well-built tools.",
      factsLabel: "More about me",
      f1Label: "01 · Now", f1Title: "Learning", f1Text: "This is placeholder copy. Use this space to explain what you are studying and the areas you want to explore further.",
      f2Label: "02 · Interests", f2Title: "Building", f2Text: "Add the problems you enjoy solving, from artificial intelligence to product tools.",
      f3Label: "03 · Next", f3Title: "Looking for", f3Text: "This space can explain the opportunities, collaborations or challenges you would like to find.",
    },
    snake: {
      _title: "Snake AI — Manuel Rodríguez Sutil",
      _description: "Snake AI, a reinforcement learning project by Manuel Rodríguez Sutil.",
      kicker: "Reinforcement learning",
      description: "An agent that learns to play Snake through a DQN. It connects a fast C engine rendered with raylib to a Python and PyTorch agent.",
      f1Label: "01 · Engine", f1Title: "Native game", f1Text: "The C engine runs the environment quickly and also provides a playable version of the game.",
      f2Label: "02 · Agent", f2Title: "DQN in Python", f2Text: "The agent trains with PyTorch and saves its weights so its games can be replayed later.",
      f3Label: "03 · Integration", f3Title: "Two worlds", f3Text: "A shared library connects the native engine to the Python training environment.",
    },
    deploy: {
      _title: "DeployKit — Manuel Rodríguez Sutil",
      _description: "DeployKit, a multi-tenant deployment tool by Manuel Rodríguez Sutil.",
      kicker: "DevOps · Product",
      description: "A CLI tool for deploying frontend and backend independently per tenant on existing AWS infrastructure, with every deployment pinned to an immutable commit.",
      f1Label: "01 · Secure", f1Title: "SSM, not SSH", f1Text: "Backend deployments run through AWS SSM and every reference resolves to a specific commit.",
      f2Label: "02 · Independent", f2Title: "Per tenant", f2Text: "Frontend and backend are deployed, retained and rolled back independently for each tenant.",
      f3Label: "03 · Reproducible", f3Title: "Local simulation", f3Text: "A Docker environment runs through the complete workflow without requiring an AWS account.",
    },
    pulso: {
      _title: "Pulso Lanzarote — Manuel Rodríguez Sutil",
      _description: "Pulso Lanzarote, a living events guide created by Manuel Rodríguez Sutil.",
      kicker: "Data · Local product",
      description: "A living events guide that collects local calendars, removes duplicates and selects relevant plans for the web, Telegram and iCalendar.",
      f1Label: "01 · Collect", f1Title: "Local sources", f1Text: "Dedicated scrapers collect institutional, cultural and leisure events from across the island.",
      f2Label: "02 · Understand", f2Title: "Canonical agenda", f2Text: "The pipeline normalizes, deduplicates and enriches events locally with Ollama models.",
      f3Label: "03 · Publish", f3Title: "Multiple channels", f3Text: "The same selection powers the public website, Telegram, iCalendar and the operations dashboard.",
    },
    experience: {
      _title: "Experience — Manuel Rodríguez Sutil",
      _description: "Experience of Manuel Rodríguez Sutil.",
      kicker: "Journey",
      title: "Experience that is still taking shape.",
      intro: "Placeholder content for presenting your journey concisely and with a focus on impact.",
      timelineLabel: "Professional experience and education",
      f1Label: "2025 — Now", f1Title: "Your most recent experience", f1Text: "Company or project · Add a short description of your impact and responsibilities.",
      f2Label: "2024 — 2025", f2Title: "Another relevant experience", f2Text: "Organization · Summarize what you built, learned or improved in one or two lines.",
      f3Label: "Education", f3Title: "Data Science", f3Text: "University or institution · Complete this section with your education and main areas of interest.",
    },
    skills: {
      _title: "Skills — Manuel Rodríguez Sutil",
      _description: "Skills of Manuel Rodríguez Sutil.",
      kicker: "Toolkit",
      title: "From question to product.",
      intro: "A placeholder selection of technologies and ways of working that you can adjust later.",
      gridLabel: "Skills",
      f1Title: "Data & AI", f1Text: "Python, PyTorch, pandas, language models and reinforcement learning.",
      f2Title: "Development", f2Text: "TypeScript, C, APIs, automation, testing and CLI tool design.",
      f3Title: "Infrastructure", f3Text: "AWS, Docker, Linux, CI/CD and reproducible deployments.",
      f4Title: "Ways of working", f4Text: "Curiosity, product thinking, communication and continuous learning.",
    },
    contact: {
      _title: "Contact — Manuel Rodríguez Sutil",
      _description: "Contact Manuel Rodríguez Sutil.",
      kicker: "Contact",
      title: "Shall we build something interesting?",
      intro: "This text and email address are placeholders. Replace them with your final message and contact details whenever you are ready.",
      methodsLabel: "Contact methods",
    },
  },
};

const page = document.body.dataset.page;
const storageKey = "portfolio-language";

function savedLanguage() {
  try {
    return localStorage.getItem(storageKey);
  } catch {
    return null;
  }
}

function deviceLanguage() {
  const preferred = navigator.languages?.[0] || navigator.language || "en";
  return preferred.toLowerCase().startsWith("es") ? "es" : "en";
}

function copyFor(language) {
  return { ...translations[language].common, ...translations[language][page] };
}

function applyLanguage(language, remember = false) {
  const selected = language === "es" ? "es" : "en";
  const copy = copyFor(selected);

  document.documentElement.lang = selected;
  document.title = copy._title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", copy._description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = copy[element.dataset.i18nAria];
    if (value) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = copy[element.dataset.i18nAlt];
    if (value) element.setAttribute("alt", value);
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    const active = button.dataset.language === selected;
    button.setAttribute("aria-pressed", String(active));
  });

  const switcher = document.querySelector(".language-switcher");
  switcher?.setAttribute("aria-label", copy.language);
  switcher?.querySelector('[data-language="es"]')?.setAttribute("title", copy.spanish);
  switcher?.querySelector('[data-language="en"]')?.setAttribute("title", copy.english);

  if (remember) {
    try {
      localStorage.setItem(storageKey, selected);
    } catch {
      // The selection still applies for this page when storage is unavailable.
    }
  }
}

function createLanguageSwitcher() {
  const switcher = document.createElement("div");
  switcher.className = "language-switcher";
  switcher.setAttribute("role", "group");

  for (const language of ["es", "en"]) {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.language = language;
    button.textContent = language.toUpperCase();
    button.addEventListener("click", () => applyLanguage(language, true));
    switcher.append(button);
  }

  document.body.append(switcher);
  return switcher;
}

const storedLanguage = savedLanguage();
const initialLanguage = storedLanguage === "es" || storedLanguage === "en" ? storedLanguage : deviceLanguage();
createLanguageSwitcher();
applyLanguage(initialLanguage);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll(".collage-card, .sticker").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    if (reduceMotion || event.pointerType === "touch") return;

    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    card.style.setProperty("--tilt-x", `${y * -4}deg`);
    card.style.setProperty("--tilt-y", `${x * 4}deg`);
  });

  card.addEventListener("pointerleave", () => {
    card.style.removeProperty("--tilt-x");
    card.style.removeProperty("--tilt-y");
  });
});
