import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);

test("the portfolio exposes every promised section from the collage", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  const sections = ["sobre-mi", "proyectos", "experiencia", "habilidades", "contacto"];

  for (const id of sections) {
    assert.match(html, new RegExp(`id=["']${id}["']`));
    assert.match(html, new RegExp(`href=["']#${id}["']`));
  }
});

test("all three project pages and their source repositories are linked", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");

  for (const project of ["snake-ai", "deploykit", "pulso-lanzarote"]) {
    assert.match(html, new RegExp(`id=["']${project}["']`));
  }

  for (const repository of ["SnakeAI", "DeployKit", "PulsoLanzarote"]) {
    assert.match(html, new RegExp(`https://github\\.com/manursutil/${repository}`));
  }
});

test("the implementation stays dependency-free and includes accessibility hooks", async () => {
  const [html, css, js] = await Promise.all([
    readFile(new URL("index.html", root), "utf8"),
    readFile(new URL("style.css", root), "utf8"),
    readFile(new URL("script.js", root), "utf8"),
  ]);

  assert.doesNotMatch(html, /<script[^>]+src=["']https?:/i);
  assert.doesNotMatch(html, /<link[^>]+href=["']https?:/i);
  assert.match(html, /class=["'][^"']*skip-link/);
  assert.match(html, /aria-label=/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(js, /IntersectionObserver/);
});
