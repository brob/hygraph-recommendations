const { EleventyRenderPlugin } = require("@11ty/eleventy");
const markdownIt = require("markdown-it");
const md = new markdownIt({
    html: true,
  });
module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(EleventyRenderPlugin);

    eleventyConfig.addFilter("markdown", (content) => {
        return md.render(content);
      });
}