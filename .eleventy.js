// Import prior to `module.exports` within `.eleventy.js`
const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');

  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/fonts');
  eleventyConfig.addPassthroughCopy('./src/img');

  eleventyConfig.addWatchTarget('./src/css');

  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter('postDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy.LL.dd');
    // return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    // return DateTime.fromJSDate(dateObj).toLocaleString({ month: 'long', day: 'numeric' });
  });

  eleventyConfig.addFilter('alphabetize', (collectionArray) => {
    return collectionArray.sort((a, b) => {
      return a.data.title < b.data.title ? -1 : 1;
    });
  });

  eleventyConfig.addFilter('findQuote', (quotesArray, text) => {
    let result = quotesArray.find((item) =>
      item.quote.toLowerCase().includes(text.toLowerCase())
    );
    console.log(result);
    return result;
  });

  return {
    dir: {
      input: 'src',
      output: 'public',
      includes: '_includes',
    },
  };
};
