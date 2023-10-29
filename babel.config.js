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
            "@/global": "./global",
            "@/atomic/element": "./atomic/element",
            "@/atomic/component": "./atomic/component",
            "@/atomic/design": "./atomic/design",
            "@/atomic/theme":"./src/atomic/theme",
            "@/validations":"./src/validations",
      	    "@/context":"./src/context",
            "@/hooks":"./src/hooks",
            "@/assets":"./src/assets",
          },
        },
      ],
      ["nativewind/babel"],
      [
        "module:react-native-dotenv",
        {
         'moduleName':'@env',
         'path':'.env',
        }
      ]
    ],
  };
};