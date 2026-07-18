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
  assert.doesNotMatch(html, /Portfolio\s*·?\s*2026/i);
  assert.match(html, /Manuel Rodríguez Sutil/);

  for (const destination of destinations) {
    assert.match(html, new RegExp(`href=["']${destination}["']`));
  }
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
