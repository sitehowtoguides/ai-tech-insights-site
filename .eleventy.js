const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  // Date formatting filters using Luxon
  eleventyConfig.addFilter("readableDate", dateObj => {
    // Format date for display, e.g., "May 02, 2025"
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("LLL dd, yyyy");
  });

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    // Format date for <time> attribute, e.g., "2025-05-02"
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toISODate();
  });

  // Add passthrough copy for CSS. Tailwind builds it, but this ensures Eleventy knows about it.
  // Ensure the 'css' directory exists at the root or adjust the path accordingly.
  // If your built CSS is in _site/css, Eleventy handles it automatically.
  // If you have a source CSS folder, copy it like this:
  // eleventyConfig.addPassthroughCopy("src/css"); 
  // Since Tailwind builds directly to _site/css, this might not be needed unless you have other static CSS files.
  // Let's keep it commented out for now unless build issues arise.
  // eleventyConfig.addPassthroughCopy("css");

  // You might add more configuration here later, like passthrough copy for assets
  // eleventyConfig.addPassthroughCopy("img");

  // Define input/output directories
  const dirConfig = {
    input: ".",
    includes: "_includes",
    output: "_site"
  };

  // Return the configuration object
  return {
    // Control which files Eleventy will process
    // e.g., `templateFormats: ["md", "njk", "html", "liquid"],`
    templateFormats: ["md", "njk"], // Process only Markdown and Nunjucks files

    // Pre-process data files
    // dataTemplateEngine: "njk",

    // Pre-process Markdown files
    markdownTemplateEngine: "njk",

    // Pre-process HTML files
    // htmlTemplateEngine: "njk",

    // Path prefix for GitHub Pages deployment
    pathPrefix: "/ai-tech-insights-site/",

    // Directory configuration
    dir: dirConfig
  };
};

