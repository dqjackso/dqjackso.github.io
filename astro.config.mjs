import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/**
 * MDX keeps the backslash in `\{`. remark-math copies that into both
 * `node.value` and the hast children KaTeX reads, so strip it in both places.
 * In MDX, write math braces as `\{` and `\}`.
 */
function unescapeMdxBraces() {
  return (tree) => {
    walk(tree);
  };
}

function stripBraces(value) {
  return value.replace(/\\([{}])/g, '$1');
}

function walk(node) {
  if (!node || typeof node !== 'object') return;
  if (
    (node.type === 'text' || node.type === 'math' || node.type === 'inlineMath') &&
    typeof node.value === 'string'
  ) {
    node.value = stripBraces(node.value);
  }
  const hastChildren = node.data?.hChildren;
  if (Array.isArray(hastChildren)) {
    for (const child of hastChildren) walkHast(child);
  }
  if (Array.isArray(node.children)) {
    for (const child of node.children) walk(child);
  }
}

function walkHast(node) {
  if (!node || typeof node !== 'object') return;
  if (node.type === 'text' && typeof node.value === 'string') {
    node.value = stripBraces(node.value);
  }
  if (Array.isArray(node.children)) {
    for (const child of node.children) walkHast(child);
  }
}

export default defineConfig({
  site: 'https://dqjackso.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/blog/sample-') &&
        !page.includes('/rss.xml') &&
        !page.endsWith('/404/'),
    }),
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [unescapeMdxBraces, remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
    },
  },
});
