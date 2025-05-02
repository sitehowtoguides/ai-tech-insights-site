const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Specify the input directory (where your content and layouts live)
  // Using default "." for root

  // Specify the includes directory (for layouts, partials)
  eleventyConfig.dir = {
    input: ".",
    includes: "_includes",
    output: "_site"
  };

  // Add passthrough copy for CSS. Tailwind builds it, but this ensures Eleventy knows about it.
  eleventyConfig.addPassthroughCopy("css");

  // Date formatting filters using Luxon
  eleventyConfig.addFilter("readableDate", dateObj => {
    // Format date for display, e.g., "May 02, 2025"
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("LLL dd, yyyy");
  });

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    // Format date for <time> attribute, e.g., "2025-05-02"
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toISODate();
  });

  // You might add more configuration here later, like passthrough copy for assets
  // eleventyConfig.addPassthroughCopy("img");

  return {
    pathPrefix: "/ai-tech-insights-site/", // Add this line for GitHub Pages subpath
    dir: eleventyConfig.dir // Ensure existing dir config is returned
  };
};

