import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import typograf from "astro-typograf";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx({
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }),
  typograf({
    selector: 'p, h1, h2, h3, h4, li',
    typografOptions: {
      locale: ['ru', 'en-US']
    }
  })]
});