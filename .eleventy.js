// this is the configuration file

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css') //these two lines are something we did to tell eleventy it needs to "see" these files/folders in the public folder.
    eleventyConfig.addPassthroughCopy('./src/assets')

    return {
        dir: {
            input: "src", //where i am working from
            output: "public" // where my public folders are
        }
    };
}