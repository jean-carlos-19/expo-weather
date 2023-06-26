module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@/controllers": "./src/controllers",
            "@/models": "./src/models",
            "@/services": "./src/services",
            "@/views": "./src/views",
            "@/global/theme": "./global/theme",
            "@/global/atomic/element": "./global/atomic/component",
            "@/global/atomic/component": "./global/atomic/component",
            "@/global/atomic/design": "./global/atomic/component",
          },
        },
      ],
      ["nativewind/babel"],
    ],
  };
};
