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
  // Since Tailwind builds directly to _site/css, this might not be needed unless you have other static CSS files.
  // eleventyConfig.addPassthroughCopy("css");

  // You might add more configuration here later, like passthrough copy for assets
  // eleventyConfig.addPassthroughCopy("img");

  // Define input/output directories
  const dirConfig = {
    input: ".",
    includes: "_includes",
    output: "_site"
  };

  // Return the configuration object - Simplified to rely on Eleventy defaults for template processing
  return {
    // Path prefix for GitHub Pages deployment
    pathPrefix: "/ai-tech-insights-site/",

    // Directory configuration
    dir: dirConfig
  };
};

