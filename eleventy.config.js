import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function(eleventyConfig) {

    // pass throughs
    eleventyConfig.addPassthroughCopy("src/assets");

    eleventyConfig.addPlugin(feedPlugin, {
        type: "atom",
        outputPath: "/feed.xml",
        collection: {
            name: "posts",
            limit: 15,
            sort: "auto"
        },
        metadata: {
            language : "en",
            title : "alizardgay blog",
            base : "https://alizard.gay/blog/",
            author: {
                name: "alizard",
                email: "contact@alizard.gay"
            }
        }
    })

    return {
    dir: {
        input: "src",
        output: "_site",
        includes: "_includes"
        }
  }
}