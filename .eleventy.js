module.exports = function(eleventyConfig) {
  // Specify the input directory (where your content and layouts live)
  // Using default '.' for root

  // Specify the includes directory (for layouts, partials)
  eleventyConfig.dir = {
    input: ".",
    includes: "_includes",
    output: "_site"
  };

  // You might add more configuration here later, like passthrough copy for assets
  // eleventyConfig.addPassthroughCopy("css");
  // eleventyConfig.addPassthroughCopy("img");

  return eleventyConfig;
};

