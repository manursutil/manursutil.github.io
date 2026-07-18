import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

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
  assert.match(
    css,
    /@media\s*\(max-height:\s*800px\)\s*and\s*\(min-width:\s*761px\)[^{]*\{[\s\S]*?\.project-page\s*\{[^}]*height:\s*100svh[^}]*overflow:\s*hidden/s,
  );

  for (const page of projectPages) {
    const html = await readFile(new URL(page, root), "utf8");
    assert.match(html, /<body[^>]+class=["'][^"']*project-page/);
  }
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
