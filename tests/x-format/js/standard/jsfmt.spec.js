// [prettierx merge update from prettier@2.3.1 ...]
// SKIP TypeScript for now
run_spec(__dirname, ["babel", "babel-flow", "flow"], {
  // [prettierx merge update from prettier@2.3.1 ...] ???:
  // [TBD] issue with babel-ts parser:
  // disableBabelTS: ["incorrect-ternaries.js"],
  // explicit endOfLine setting, same as default since Prettier 2.0
  // (shows <LF> in test snapshots)
  endOfLine: "lf",
  // "Standard JS":
  yieldStarSpacing: true,
  generatorStarSpacing: true,
  offsetTernaryExpressions: true,
  spaceBeforeFunctionParen: true,
  singleQuote: true,
  jsxSingleQuote: true,
  semi: false,
  trailingComma: "none",
  // recommended:
  arrowParens: "avoid",
});
