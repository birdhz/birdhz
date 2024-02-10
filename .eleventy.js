// change default build directory from _site to dist
module.exports = function(eleventyConfig) {
  return {
    dir: {
      output: "dist"
    }
  }
};

// fonts
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/fonts");
};

// css
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
};
