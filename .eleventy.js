module.exports = function(eleventyConfig) {

  // fonts
  eleventyConfig.addPassthroughCopy("assets/fonts");

  // css
  eleventyConfig.addPassthroughCopy("bundle.css");

  // change default build directory from _site to dist
  return {
    dir: {
      output: "dist"
    }
  }
};
