const translations = {
  es: {
    common: {
      back: "Volver",
      language: "Idioma",
      spanish: "Español",
      english: "Inglés",
      themeLabel: "Modo oscuro",
      themeDark: "Activar modo oscuro",
      themeLight: "Activar modo claro",
      technologies: "Tecnologías",
      projectFacts: "Claves del proyecto",
      repository: "Ver repositorio ↗",
      portraitAlt: "Retrato temporal",
      snakeAlt: "Ilustración temporal de Snake AI",
      deployAlt: "Ilustración temporal de DeployKit",
      pulsoAlt: "Ilustración temporal de Pulso Lanzarote",
    },
    index: {
      _title: "Manuel Rodríguez Sutil — Datos y Desarrollo Web",
      _description: "Portfolio de Manuel Rodríguez Sutil, estudiante de Ciencia de Datos y Desarrollo de Aplicaciones Web.",
      role: "Estudiante de Ciencia de Datos y Desarrollo Web",
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
      _description: "Formación, intereses y objetivos profesionales de Manuel Rodríguez Sutil.",
      kicker: "Sobre mí",
      title: "Construyo software para resolver problemas concretos.",
      intro: "Estudio Ciencia de Datos en la UOC y Desarrollo de Aplicaciones Web en el CIFP Zonzamas. Me interesa crear productos que combinen software, datos e inteligencia artificial.",
      factsLabel: "Más sobre mí",
      f1Label: "01 · Recorrido", f1Title: "Tecnología y creación", f1Text: "La tecnología me interesa desde niño porque me permite crear. Antes de cambiar de rumbo estudié Medicina, una etapa que reforzó mi interés por analizar problemas complejos con rigor.",
      f2Label: "02 · Intereses", f2Title: "Más allá del código", f2Text: "Disfruto diseñando pipelines con machine learning e inteligencia artificial, sobre todo cuando sostienen un producto útil. La filosofía y la literatura completan mi forma de analizar ideas y comunicar soluciones.",
      f3Label: "03 · Objetivo", f3Title: "Prácticas y empleo", f3Text: "Busco oportunidades en ciencia de datos, ML engineering, data engineering o desarrollo de software. Estoy disponible para trabajo presencial o remoto desde España.",
    },
    snake: {
      _title: "Snake AI — Manuel Rodríguez Sutil",
      _description: "Snake AI, proyecto de aprendizaje por refuerzo de Manuel Rodríguez Sutil.",
      kicker: "Aprendizaje por refuerzo",
      description: "Construí este agente después de preguntarme cómo se programaban los bots de los juegos. El proyecto une un motor de Snake en C con un agente DQN desarrollado en Python y PyTorch.",
      f1Label: "01 · Origen", f1Title: "Un proyecto personal", f1Text: "La idea surgió mientras jugaba y desarrollé el proyecto en solitario. Quería entender el ciclo completo: crear el entorno, representar cada estado, entrenar al agente y verlo jugar con el modelo aprendido.",
      f2Label: "02 · Diseño", f2Title: "Once señales, cuatro acciones", f2Text: "El agente observa la dirección, la posición relativa de la comida y el peligro a ambos lados y al frente. Puede moverse en cuatro direcciones y recibe +1 al comer, -1 al chocar y 0 en el resto de pasos.",
      f3Label: "03 · Reto", f3Title: "Conectar C con PyTorch", f3Text: "La parte más exigente fue exponer el motor de C como una librería compartida y controlarlo desde Python. El entrenamiento usa replay memory, una red objetivo y exploración epsilon-greedy. El proyecto está terminado.",
    },
    deploy: {
      _title: "DeployKit — Manuel Rodríguez Sutil",
      _description: "DeployKit, herramienta de despliegue multi-tenant de Manuel Rodríguez Sutil.",
      kicker: "DevOps · Automatización",
      description: "Creé DeployKit a partir de una necesidad de trabajo y lo convertí en una herramienta modular. Gestiona despliegues independientes de frontend y backend por tenant sobre infraestructura AWS existente.",
      f1Label: "01 · Origen", f1Title: "De necesidad interna a herramienta adaptable", f1Text: "Desarrollé el proyecto en solitario a partir del despliegue de una aplicación para una empresa. Separé la lógica específica y amplié la configuración para aplicarla a otros proyectos multi-tenant.",
      f2Label: "02 · Garantías", f2Title: "Despliegues trazables", f2Text: "Cada referencia se fija a un commit. El backend usa AWS SSM para evitar accesos SSH directos, guarda versiones inmutables, comprueba la salud del servicio y permite rollback. El historial y los bloqueos evitan despliegues simultáneos sobre la misma aplicación.",
      f3Label: "03 · Interfaces", f3Title: "CLI para personas y agentes", f3Text: "Elegí una CLI para facilitar la automatización y el uso desde agentes de IA. El dashboard web usa la misma lógica de orquestación. Un entorno Docker permite probar el flujo sin acceso a AWS.",
    },
    pulso: {
      _title: "Pulso Lanzarote — Manuel Rodríguez Sutil",
      _description: "Pulso Lanzarote, guía viva de eventos creada por Manuel Rodríguez Sutil.",
      kicker: "Datos · Producto local",
      description: "Creé Pulso Lanzarote para reunir los eventos locales que estaban repartidos entre agendas institucionales y culturales. El objetivo es dar visibilidad a planes canarios y facilitar que cualquier persona encuentre qué hacer en la isla.",
      f1Label: "01 · Fuentes", f1Title: "Nueve agendas locales", f1Text: "Scrapers específicos recopilan eventos del Cabildo, ayuntamientos, espacios culturales y portales de ocio. Cada fuente produce el mismo modelo de evento para que el resto del sistema pueda procesarlo.",
      f2Label: "02 · Pipeline", f2Title: "Una agenda sin duplicados", f2Text: "El sistema normaliza y cruza publicaciones para conservar un único evento. Gemma 3 clasifica el contenido y bge-m3 genera embeddings para búsqueda y ranking. Las reglas de fecha y diversidad completan la selección.",
      f3Label: "03 · Producto", f3Title: "Web, Telegram y calendario", f3Text: "La misma agenda alimenta la web pública, un bot de Telegram, un calendario iCalendar y el panel de operaciones. Pulso está en desarrollo activo y utiliza modelos locales, sin APIs de pago.",
    },
    experience: {
      _title: "Experiencia — Manuel Rodríguez Sutil",
      _description: "Experiencia profesional y formación de Manuel Rodríguez Sutil.",
      kicker: "Experiencia y formación",
      title: "Software, datos e infraestructura.",
      intro: "Trabajo como Ingeniero de Software mientras curso Ciencia de Datos y Desarrollo de Aplicaciones Web. Esta combinación me permite participar en un producto desde el pipeline de datos hasta su despliegue.",
      timelineLabel: "Experiencia profesional y formación",
      f1Label: "Mayo 2026 — Actualidad", f1Title: "Ingeniero de Software · Tamia Innova Lab", f1Text: "Diseño software especializado para empresas en un equipo remoto. Trabajo con Python, TypeScript, PyTorch, Ollama, Docker y AWS en tareas de desarrollo, DevOps, ML engineering y data engineering.",
      f2Label: "2025 — Actualidad", f2Title: "Grado en Ciencia de Datos · UOC", f2Text: "Curso el cuarto semestre del grado, con formación en programación, estadística, matemáticas, gestión de datos y machine learning.",
      f3Label: "2025 — Actualidad", f3Title: "Desarrollo de Aplicaciones Web · CIFP Zonzamas", f3Text: "Curso el segundo y último año del ciclo de grado superior, centrado en desarrollo web, bases de datos y construcción de aplicaciones.",
      f4Label: "Idiomas", f4Title: "Español, inglés, alemán y francés", f4Text: "Español nativo, inglés C1, alemán B1 y francés A2.",
    },
    skills: {
      _title: "Habilidades — Manuel Rodríguez Sutil",
      _description: "Tecnologías y habilidades de Manuel Rodríguez Sutil.",
      kicker: "Herramientas",
      title: "Trabajo entre software, datos e infraestructura.",
      intro: "Combino programación, machine learning y sistemas para construir productos completos. Elijo las herramientas según el problema y mantengo una base técnica amplia para trabajar entre distintas capas.",
      gridLabel: "Habilidades",
      f1Title: "Datos e IA", f1Text: "Dominio sólido de Python y R, junto con PyTorch, Ollama, machine learning, estadística, matemáticas y visualización con Matplotlib.",
      f2Title: "Desarrollo", f2Text: "Dominio sólido de JavaScript y TypeScript, y nivel intermedio en C y C++. Desarrollo web, automatización y diseño de herramientas CLI.",
      f3Title: "Datos e infraestructura", f3Text: "PostgreSQL, SQLite, MySQL, Microsoft SQL Server, Docker, AWS, Linux, Bash y Git.",
      f4Title: "Forma de trabajar", f4Text: "Trabajo en equipo, curiosidad técnica y capacidad para moverme entre producto, datos, backend e infraestructura según las necesidades del proyecto.",
    },
    contact: {
      _title: "Contacto — Manuel Rodríguez Sutil",
      _description: "Contacto profesional de Manuel Rodríguez Sutil, disponible para prácticas y empleo en España o remoto.",
      kicker: "Contacto",
      title: "Estoy abierto a nuevas oportunidades.",
      intro: "Busco prácticas o empleo en ciencia de datos, machine learning, data engineering y desarrollo de software. Estoy en España y puedo trabajar en remoto o de forma presencial.",
      methodsLabel: "Formas de contacto",
    },
  },
  en: {
    common: {
      back: "Back",
      language: "Language",
      spanish: "Spanish",
      english: "English",
      themeLabel: "Dark mode",
      themeDark: "Switch to dark mode",
      themeLight: "Switch to light mode",
      technologies: "Technologies",
      projectFacts: "Project highlights",
      repository: "View repository ↗",
      portraitAlt: "Temporary portrait",
      snakeAlt: "Temporary Snake AI illustration",
      deployAlt: "Temporary DeployKit illustration",
      pulsoAlt: "Temporary Pulso Lanzarote illustration",
    },
    index: {
      _title: "Manuel Rodríguez Sutil — Data & Web Development",
      _description: "Portfolio of Manuel Rodríguez Sutil, a Data Science and Web Application Development student.",
      role: "Data Science & Web Development Student",
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
      _description: "Education, interests and career goals of Manuel Rodríguez Sutil.",
      kicker: "About me",
      title: "I build software to solve concrete problems.",
      intro: "I study Data Science at UOC and Web Application Development at CIFP Zonzamas. I want to build products that combine software, data and artificial intelligence.",
      factsLabel: "More about me",
      f1Label: "01 · Path", f1Title: "Technology and creation", f1Text: "Technology has interested me since childhood because it gives me a way to create. I studied Medicine before changing direction, an experience that strengthened my interest in examining complex problems with care.",
      f2Label: "02 · Interests", f2Title: "Beyond code", f2Text: "I enjoy designing machine learning and AI pipelines when they support a useful product. Philosophy and literature shape how I examine ideas and explain solutions.",
      f3Label: "03 · Goal", f3Title: "Internships and employment", f3Text: "I am looking for roles in data science, ML engineering, data engineering or software development. I am available for remote or on-site work from Spain.",
    },
    snake: {
      _title: "Snake AI — Manuel Rodríguez Sutil",
      _description: "Snake AI, a reinforcement learning project by Manuel Rodríguez Sutil.",
      kicker: "Reinforcement learning",
      description: "I built this agent after wondering how game bots were programmed. The project connects a Snake engine written in C to a DQN agent built with Python and PyTorch.",
      f1Label: "01 · Origin", f1Title: "A personal project", f1Text: "The idea came to me while playing a game, and I built the project on my own. I wanted to understand the whole cycle: build the environment, represent each state, train the agent and watch it play with the learned model.",
      f2Label: "02 · Design", f2Title: "Eleven signals, four actions", f2Text: "The agent observes its direction, the food position and danger on both sides and ahead. It can move in four directions and receives +1 for food, -1 for a collision and 0 for every other step.",
      f3Label: "03 · Challenge", f3Title: "Connecting C to PyTorch", f3Text: "The hardest part was exposing the C engine as a shared library and controlling it from Python. Training uses replay memory, a target network and epsilon-greedy exploration. The project is complete.",
    },
    deploy: {
      _title: "DeployKit — Manuel Rodríguez Sutil",
      _description: "DeployKit, a multi-tenant deployment tool by Manuel Rodríguez Sutil.",
      kicker: "DevOps · Automation",
      description: "I created DeployKit from a need I encountered at work and turned it into a modular tool. It manages separate frontend and backend deployments for each tenant on existing AWS infrastructure.",
      f1Label: "01 · Origin", f1Title: "From an internal need to an adaptable tool", f1Text: "I built the project on my own after deploying an application for a company. I removed project-specific logic and expanded the configuration so it could support other multi-tenant applications.",
      f2Label: "02 · Safeguards", f2Title: "Traceable deployments", f2Text: "Each reference resolves to a commit. The backend uses AWS SSM to avoid direct SSH access, stores immutable releases, runs a health check and supports rollback. History and locks prevent two deployments from changing the same application at once.",
      f3Label: "03 · Interfaces", f3Title: "A CLI for people and agents", f3Text: "I chose a CLI to support automation and AI agents. The web dashboard uses the same orchestration code. A Docker environment can run through the workflow without AWS access.",
    },
    pulso: {
      _title: "Pulso Lanzarote — Manuel Rodríguez Sutil",
      _description: "Pulso Lanzarote, a living events guide created by Manuel Rodríguez Sutil.",
      kicker: "Data · Local product",
      description: "I created Pulso Lanzarote to bring together local events spread across institutional and cultural calendars. Its goal is to give Canarian events more visibility and help people find things to do on the island.",
      f1Label: "01 · Sources", f1Title: "Nine local calendars", f1Text: "Dedicated scrapers collect events from the island council, municipalities, cultural venues and leisure websites. Each source returns the same event model for the rest of the system.",
      f2Label: "02 · Pipeline", f2Title: "One agenda without duplicates", f2Text: "The system normalizes and matches listings to keep one event. Gemma 3 classifies the content and bge-m3 creates embeddings for search and ranking. Date and diversity rules complete the selection.",
      f3Label: "03 · Product", f3Title: "Web, Telegram and calendar", f3Text: "One agenda powers the public website, a Telegram bot, an iCalendar feed and the operations dashboard. Pulso is under active development and runs with on-device models, without paid APIs.",
    },
    experience: {
      _title: "Experience — Manuel Rodríguez Sutil",
      _description: "Professional experience and education of Manuel Rodríguez Sutil.",
      kicker: "Experience and education",
      title: "Software, data and infrastructure.",
      intro: "I work as a Software Engineer while studying Data Science and Web Application Development. This combination lets me contribute to a product from its data pipeline through deployment.",
      timelineLabel: "Professional experience and education",
      f1Label: "May 2026 — Present", f1Title: "Software Engineer · Tamia Innova Lab", f1Text: "I design specialized software for companies as part of a remote team. I use Python, TypeScript, PyTorch, Ollama, Docker and AWS across development, DevOps, ML engineering and data engineering.",
      f2Label: "2025 — Present", f2Title: "BSc in Data Science · UOC", f2Text: "I am in the fourth semester, studying programming, statistics, mathematics, data management and machine learning.",
      f3Label: "2025 — Present", f3Title: "Web Application Development · CIFP Zonzamas", f3Text: "I am in the second and final year of the advanced vocational programme, focused on web development, databases and application design.",
      f4Label: "Languages", f4Title: "Spanish, English, German and French", f4Text: "Native Spanish, C1 English, B1 German and A2 French.",
    },
    skills: {
      _title: "Skills — Manuel Rodríguez Sutil",
      _description: "Technologies and skills of Manuel Rodríguez Sutil.",
      kicker: "Toolkit",
      title: "I work across software, data and infrastructure.",
      intro: "I combine programming, machine learning and systems work to build complete products. I choose tools based on the problem and keep a broad technical base so I can contribute across layers.",
      gridLabel: "Skills",
      f1Title: "Data & AI", f1Text: "Strong command of Python and R, with PyTorch, Ollama, machine learning, statistics, mathematics and visualization with Matplotlib.",
      f2Title: "Development", f2Text: "Strong command of JavaScript and TypeScript, with intermediate C and C++. Web development, automation and CLI tool design.",
      f3Title: "Data & infrastructure", f3Text: "PostgreSQL, SQLite, MySQL, Microsoft SQL Server, Docker, AWS, Linux, Bash and Git.",
      f4Title: "Ways of working", f4Text: "Teamwork, technical curiosity and the ability to contribute across product, data, backend and infrastructure based on project needs.",
    },
    contact: {
      _title: "Contact — Manuel Rodríguez Sutil",
      _description: "Contact Manuel Rodríguez Sutil for internships and employment in Spain or remote roles.",
      kicker: "Contact",
      title: "I am open to new opportunities.",
      intro: "I am looking for internships or employment in data science, machine learning, data engineering and software development. I am based in Spain and available for remote or on-site work.",
      methodsLabel: "Contact methods",
    },
  },
};

const page = document.body.dataset.page;
const languageStorageKey = "portfolio-language";
const themeStorageKey = "portfolio-theme";
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
let themeToggleButton;

function savedLanguage() {
  try {
    return localStorage.getItem(languageStorageKey);
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
  updateThemeToggle(copy);

  if (remember) {
    try {
      localStorage.setItem(languageStorageKey, selected);
    } catch {
      // The selection still applies for this page when storage is unavailable.
    }
  }
}

function activeTheme() {
  const override = document.documentElement.dataset.theme;
  return override === "dark" || override === "light"
    ? override
    : systemTheme.matches ? "dark" : "light";
}

function updateThemeToggle(copy = copyFor(document.documentElement.lang === "en" ? "en" : "es")) {
  if (!themeToggleButton) return;

  const dark = activeTheme() === "dark";
  const label = dark ? copy.themeLight : copy.themeDark;
  themeToggleButton.textContent = dark ? "☀" : "☾";
  themeToggleButton.setAttribute("aria-label", copy.themeLabel);
  themeToggleButton.setAttribute("aria-pressed", String(dark));
  themeToggleButton.setAttribute("title", label);
}

function toggleTheme() {
  try {
    if (document.documentElement.dataset.theme) {
      delete document.documentElement.dataset.theme;
      localStorage.removeItem(themeStorageKey);
    } else {
      const selected = activeTheme() === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = selected;
      localStorage.setItem(themeStorageKey, selected);
    }
  } catch {
    // The selection still applies for this page when storage is unavailable.
  }

  updateThemeToggle();
}

function createThemeToggle() {
  themeToggleButton = document.createElement("button");
  themeToggleButton.type = "button";
  themeToggleButton.className = "theme-toggle";
  themeToggleButton.addEventListener("click", toggleTheme);
  document.body.append(themeToggleButton);
  updateThemeToggle();
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
createThemeToggle();
createLanguageSwitcher();
applyLanguage(initialLanguage);

systemTheme.addEventListener("change", () => {
  if (!document.documentElement.dataset.theme) updateThemeToggle();
});

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
