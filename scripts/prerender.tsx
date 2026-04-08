/**
 * After `vite build`, renders each indexable route to static HTML under dist/
 * so crawlers receive real content without waiting for client JS.
 *
 * Uses a shell without DocumentMeta/react-helmet-async so Node/tsx can run the tree;
 * <head> tags are injected from the same getRouteSeo data as the client (see headMarkup.ts).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createMemoryRouter, Outlet, RouterProvider } from 'react-router';

import { appRouteChildren } from '../src/app/appRouteChildren';
import { getStaticHeadMarkupForPath } from '../src/app/seo/headMarkup';
import { ScrollToTop } from '../src/app/components/ScrollToTop';
import { getAllPrerenderPaths } from './prerender-paths';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const DIST_DIR = path.join(PROJECT_ROOT, 'dist');

/** Same outlets as Root, without DocumentMeta / Helmet (Node-friendly). */
function PrerenderShell() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const prerenderRouteDefinition = {
  path: '/',
  Component: PrerenderShell,
  children: appRouteChildren,
};

function renderAppToString(urlPath: string): string {
  const memoryRouter = createMemoryRouter([prerenderRouteDefinition], {
    initialEntries: [urlPath],
    initialIndex: 0,
  });

  const tree = <RouterProvider router={memoryRouter} />;
  return renderToString(tree);
}

function mergeTemplate(baseHtml: string, body: string, urlPath: string): string {
  let html = baseHtml.replace(/<div id="root">\s*<\/div>/, `<div id="root">${body}</div>`);

  html = html.replace(/<title>[\s\S]*?<\/title>/i, '');
  html = html.replace(/<meta\s+name="description"[^>]*>/i, '');

  const headInject = getStaticHeadMarkupForPath(urlPath);
  html = html.replace('</head>', `    ${headInject}\n  </head>`);

  return html;
}

function writeHtmlFile(urlPath: string, html: string) {
  if (urlPath === '/') {
    fs.writeFileSync(path.join(DIST_DIR, 'index.html'), html, 'utf8');
    return;
  }
  const rel = urlPath.replace(/^\//, '');
  const dir = path.join(DIST_DIR, rel);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
}

function main() {
  const templatePath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('prerender: dist/index.html missing — run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf8');
  const paths = getAllPrerenderPaths(PROJECT_ROOT);

  console.log(`prerender: generating ${paths.length} static HTML files…`);

  for (const urlPath of paths) {
    const body = renderAppToString(urlPath);
    const html = mergeTemplate(baseHtml, body, urlPath);
    writeHtmlFile(urlPath, html);
  }

  console.log(`prerender: done (${paths.length} paths).`);
}

main();
