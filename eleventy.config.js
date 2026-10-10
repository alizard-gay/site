import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function(eleventyConfig) {

    // pass throughs
    eleventyConfig.addPassthroughCopy("src/assets");

    eleventyConfig.addPlugin(feedPlugin, {
        type: "atom",
        outputPath: "/blog/feed.xml",
        collection: {
            name: "post",
            limit: 10,
            sort: "descending",
            items: (collections) => collections.getFilteredByTag("post")
        },
        metadata: {
            language : "en",
            title : "alizardgay blog",
            subtitle : "Personal blog",
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
        },
    templateFormats: ["md", "njk", "html"] 
  }
}