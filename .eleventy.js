module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

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
