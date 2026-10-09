export default function(eleventyConfigure) {

    // pass throughs
    eleventyConfigure.addPassthroughCopy("src/assets");

    return {
    dir: {
        input: "src",
        output: "_site",
        includes: "_includes"
        }
  };
};