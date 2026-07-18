import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";

const root = new URL("../", import.meta.url);
const destinations = [
  "sobre-mi.html",
  "snake-ai.html",
  "deploykit.html",
  "pulso-lanzarote.html",
  "experiencia.html",
  "habilidades.html",
  "contacto.html",
];

test("the home page is a single-screen collage with no top navigation", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");

  assert.match(html, /class=["'][^"']*home-page/);
  assert.doesNotMatch(html, /<nav\b/i);
  assert.doesNotMatch(html, /brand-mark/);
  assert.doesNotMatch(html, /Portfolio\s*·?\s*2026/i);
  assert.match(html, /Manuel Rodríguez Sutil/);

  for (const destination of destinations) {
    assert.match(html, new RegExp(`href=["']${destination}["']`));
  }
});

test("collage cards have subtle motion with a reduced-motion fallback", async () => {
  const css = await readFile(new URL("style.css", root), "utf8");

  assert.match(css, /@keyframes\s+card-drift/);
  assert.match(css, /animation:\s*card-drift/);
  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
});

test("sticker labels are always visible", async () => {
  const css = await readFile(new URL("style.css", root), "utf8");

  assert.match(
    css,
    /\.sticker\s*>\s*span\s*\{[^}]*opacity:\s*1[^}]*transform:\s*translate\(-50%,\s*0\)/s,
  );
});

test("every collage destination is a real page with a back button", async () => {
  for (const destination of destinations) {
    const page = new URL(destination, root);
    await access(page);
    const html = await readFile(page, "utf8");

    assert.match(html, /class=["'][^"']*back-link/);
    assert.match(html, /href=["']index\.html["']/);
    assert.match(html, />\s*Volver\s*</);
  }
});

test("project pages link to their repositories", async () => {
  const projects = [
    ["snake-ai.html", "SnakeAI"],
    ["deploykit.html", "DeployKit"],
    ["pulso-lanzarote.html", "PulsoLanzarote"],
  ];

  for (const [page, repository] of projects) {
    const html = await readFile(new URL(page, root), "utf8");
    assert.match(html, new RegExp(`https://github\\.com/manursutil/${repository}`));
  }
});

test("the implementation remains dependency-free and accessible", async () => {
  const [html, css, js] = await Promise.all([
    readFile(new URL("index.html", root), "utf8"),
    readFile(new URL("style.css", root), "utf8"),
    readFile(new URL("script.js", root), "utf8"),
  ]);

  assert.doesNotMatch(html, /<script[^>]+src=["']https?:/i);
  assert.doesNotMatch(html, /<link[^>]+href=["']https?:/i);
  assert.match(html, /aria-label=/);
  assert.match(css, /overflow:\s*hidden/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(js, /pointermove/);
});

test("all three project images share the same desktop sizing rule", async () => {
  const css = await readFile(new URL("style.css", root), "utf8");
  const projectSelectors = ["card-snake", "card-deploy", "card-pulso"];

  for (const selector of projectSelectors) {
    assert.match(
      css,
      new RegExp(`\\.${selector}\\s*\\{[^}]*width:\\s*min\\(30vw,\\s*47vh,\\s*29rem\\)`, "s"),
    );
  }
});

test("project images remain fully visible on single-screen desktop layouts", async () => {
  const css = await readFile(new URL("style.css", root), "utf8");
  const projectPages = ["snake-ai.html", "deploykit.html", "pulso-lanzarote.html"];

  assert.match(css, /\.detail-media img\s*\{[^}]*object-fit:\s*contain/s);
  assert.match(css, /\.detail-media img\s*\{[^}]*width:\s*auto[^}]*box-shadow:/s);
  assert.match(css, /\.detail-media\s*\{[^}]*justify-content:\s*center/s);
  assert.match(
    css,
    /@media\s*\(max-height:\s*800px\)\s*and\s*\(min-width:\s*761px\)[^{]*\{[\s\S]*?\.project-page\s*\{[^}]*height:\s*100svh[^}]*overflow:\s*hidden/s,
  );

  for (const page of projectPages) {
    const html = await readFile(new URL(page, root), "utf8");
    assert.match(html, /<body[^>]+class=["'][^"']*project-page/);
  }
});

test("informational page headings reserve space below the back button", async () => {
  const css = await readFile(new URL("style.css", root), "utf8");

  assert.match(
    css,
    /\.detail-page:not\(\.project-page\) \.detail-main\s*\{[^}]*padding-top:\s*clamp\(5\.5rem,\s*10vh,\s*7rem\)/s,
  );
  assert.match(
    css,
    /@media\s*\(max-width:\s*760px\)[^{]*\{[\s\S]*?\.detail-main\s*\{[^}]*padding:\s*6\.75rem 0 3rem/s,
  );
});

test("every page supports automatic and manual Spanish-English localization", async () => {
  const pages = ["index.html", ...destinations];
  const script = await readFile(new URL("script.js", root), "utf8");

  assert.match(script, /navigator\.languages|navigator\.language/);
  assert.match(script, /localStorage/);
  assert.match(script, /language-switcher/);
  assert.match(script, /\bes\s*:/);
  assert.match(script, /\ben\s*:/);

  for (const page of pages) {
    const html = await readFile(new URL(page, root), "utf8");
    assert.match(html, /<body[^>]+data-page=/);
    assert.match(html, /<script src=["']script\.js["'] defer><\/script>/);
    assert.match(html, /data-i18n=/);
  }
});

test("every page follows the system color scheme and offers a persistent theme toggle", async () => {
  const pages = ["index.html", ...destinations];
  const [css, script] = await Promise.all([
    readFile(new URL("style.css", root), "utf8"),
    readFile(new URL("script.js", root), "utf8"),
  ]);

  assert.match(css, /prefers-color-scheme:\s*dark/);
  assert.match(css, /:root\[data-theme=["']dark["']\]/);
  assert.match(css, /:root\[data-theme=["']light["']\]/);
  assert.match(script, /portfolio-theme/);
  assert.match(script, /className\s*=\s*["']theme-toggle["']/);
  assert.match(script, /matchMedia\(["']\(prefers-color-scheme: dark\)["']\)/);
  assert.match(script, /localStorage\.removeItem\(themeStorageKey\)/);
  assert.match(script, /delete document\.documentElement\.dataset\.theme/);

  for (const page of pages) {
    const html = await readFile(new URL(page, root), "utf8");
    assert.match(html, /<meta name=["']color-scheme["'] content=["']light dark["']/);
    assert.match(html, /localStorage\.getItem\(["']portfolio-theme["']\)/);
  }
});

test("the theme toggle overrides the system once and returns to automatic mode", async () => {
  const script = await readFile(new URL("script.js", root), "utf8");
  const values = new Map();
  const children = [];

  function element() {
    return {
      children: [],
      dataset: {},
      listeners: {},
      append(child) { this.children.push(child); },
      addEventListener(type, listener) { this.listeners[type] = listener; },
      setAttribute(name, value) { this[name] = value; },
      querySelector(selector) {
        const language = selector.match(/data-language="(es|en)"/)?.[1];
        return this.children.find((child) => child.dataset.language === language) ?? null;
      },
    };
  }

  const documentElement = { dataset: {}, lang: "es" };
  const document = {
    body: { dataset: { page: "index" }, append(child) { children.push(child); } },
    documentElement,
    createElement: element,
    querySelector(selector) {
      if (selector === ".language-switcher") {
        return children.find((child) => child.className === "language-switcher") ?? null;
      }
      return null;
    },
    querySelectorAll(selector) {
      if (selector === "[data-language]") {
        return children.flatMap((child) => child.children ?? []).filter((child) => child.dataset.language);
      }
      return [];
    },
  };

  runInNewContext(script, {
    document,
    localStorage: {
      getItem(key) { return values.get(key) ?? null; },
      setItem(key, value) { values.set(key, value); },
      removeItem(key) { values.delete(key); },
    },
    navigator: { language: "es" },
    window: {
      matchMedia(query) {
        return { matches: query.includes("color-scheme"), addEventListener() {} };
      },
    },
  });

  const toggle = children.find((child) => child.className === "theme-toggle");
  assert.equal(toggle["aria-label"], "Modo oscuro");
  assert.equal(toggle["aria-pressed"], "true");

  toggle.listeners.click();
  assert.equal(documentElement.dataset.theme, "light");
  assert.equal(values.get("portfolio-theme"), "light");
  assert.equal(toggle["aria-pressed"], "false");

  toggle.listeners.click();
  assert.equal("theme" in documentElement.dataset, false);
  assert.equal(values.has("portfolio-theme"), false);
  assert.equal(toggle["aria-pressed"], "true");
});

test("portfolio copy contains the supplied professional details and no draft text", async () => {
  const pages = ["index.html", ...destinations];
  const contents = await Promise.all(
    pages.map((page) => readFile(new URL(page, root), "utf8")),
  );
  const script = await readFile(new URL("script.js", root), "utf8");
  const portfolio = `${contents.join("\n")}\n${script}`;

  assert.match(portfolio, /Tamia Innova Lab/);
  assert.match(portfolio, /UOC/);
  assert.match(portfolio, /CIFP Zonzamas/);
  assert.match(portfolio, /mrodsut@gmail\.com/);
  assert.match(portfolio, /inglés C1, alemán B1 y francés A2/);
  assert.match(portfolio, /nivel intermedio en C y C\+\+/);
  assert.match(portfolio, /proyecto en solitario/);
  assert.match(portfolio, /SSM para evitar accesos SSH directos/);
  assert.doesNotMatch(portfolio, /hola@ejemplo\.com/);
  assert.doesNotMatch(
    portfolio,
    /Contenido provisional|selección provisional|Añade aquí|Completa este bloque|Este texto y el correo son temporales/,
  );
});
