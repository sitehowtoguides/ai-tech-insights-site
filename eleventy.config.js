import fs from 'fs';
import path from 'path';

import cssnano from 'cssnano';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

import yaml from "js-yaml";

import markdownIt from "markdown-it";

import { IdAttributePlugin } from "@11ty/eleventy";

const md = new markdownIt({
  html: true,
});

export default function (eleventyConfig) {
  //compile tailwind before eleventy processes the files
  eleventyConfig.on('eleventy.before', async () => {
    const tailwindInputPath = path.resolve('./css/tailwind.css');

    const tailwindOutputPath = './_site/assets/css/styles.css';

    const cssContent = fs.readFileSync(tailwindInputPath, 'utf8');

    const outputDir = path.dirname(tailwindOutputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const result = await processor.process(cssContent, {
      from: tailwindInputPath,
      to: tailwindOutputPath,
    });

    fs.writeFileSync(tailwindOutputPath, result.css);
  });

  const processor = postcss([
    //compile tailwind
    tailwindcss(),

    //minify tailwind css
    cssnano({
      preset: 'default',
    }),
  ]);

  eleventyConfig.addPlugin(IdAttributePlugin);

  eleventyConfig.addPassthroughCopy('./images/**/*');

  eleventyConfig.addPassthroughCopy('./android-chrome-192x192.png');
  eleventyConfig.addPassthroughCopy('./android-chrome-512x512.png');
  eleventyConfig.addPassthroughCopy('./apple-touch-icon.png');
  eleventyConfig.addPassthroughCopy('./favicon-16x16.png');
  eleventyConfig.addPassthroughCopy('./favicon-32x32.png');
  eleventyConfig.addPassthroughCopy('./favicon.ico');
  eleventyConfig.addPassthroughCopy('./site.webmanifest');

  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter("numCommas", function(value) {
		return value.toLocaleString()
	});

  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content);
  });

  eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
		if(data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
			return false;
		}
	});

  eleventyConfig.addFilter('where', function(collection, field, value) {
    if (!value) return collection;
      const filtered = collection.filter(item => item.data[field] == value)
      return filtered;
  });

  return {
    dir: {
      input: './',
      output: '_site',
      "data": "_data",
      includes: "_includes",
      layouts: "_layouts"
    },
  };
}
