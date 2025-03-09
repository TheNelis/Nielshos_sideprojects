module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/css/");

  // Three.js
  eleventyConfig.addPassthroughCopy({
    "node_modules/three/build/": "js/three/"
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/three/examples/jsm/renderers/CSS2DRenderer.js": "js/CSS2DRenderer.js"
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/three/examples/jsm/controls/OrbitControls.js": "js/OrbitControls.js"
  });
  

  eleventyConfig.addWatchTarget("src/css/");
  
    return {
        dir: {
          input: 'src',
          includes: '_includes',
          output: '_site',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
      };
};