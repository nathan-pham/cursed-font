import { terser } from "rollup-plugin-terser";

export default {
    input: "./js/Font.js",
    plugins: [terser()],

    output: {
        file: "./build/bundle.min.js",
        // format: "esm",
        name: "bundle",
    },
};
