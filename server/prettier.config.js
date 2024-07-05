/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
    plugins: ["prettier-plugin-tailwindcss"],
    useTabs: false,
    tabWidth: 4,
    bracketSpacing: true,
    bracketSameLine: false,
    semi: true,
    arrowParens: "always",
    singleQuote: false,
    jsxSingleQuote: true,
    printWidth: 120,
};

module.exports = config;
