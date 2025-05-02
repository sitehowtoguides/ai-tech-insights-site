module.exports = function(eleventyConfig) {
  // Specify the input directory (where your content and layouts live)
  // Using default '.' for root

  // Specify the includes directory (for layouts, partials)
  eleventyConfig.dir = {
    input: ".",
    includes: "_includes",
    output: "_site"
  };

  // Add passthrough copy for CSS. Tailwind builds it, but this ensures Eleventy knows about it.
  eleventyConfig.addPassthroughCopy("css");

  // You might add more configuration here later, like passthrough copy for assets
  // eleventyConfig.addPassthroughCopy("img");

  return {
    pathPrefix: "/ai-tech-insights-site/", // Add this line for GitHub Pages subpath
    dir: eleventyConfig.dir // Ensure existing dir config is returned
  };
};

