// NOTE: This will not work with babel-ts due to
// an issue with parsing incorrect-ternaries.js:
// https://github.com/babel/babel/issues/11959
// Skipping typescript language for now as a quick workaround.
run_spec(__dirname, ["babel", "babel-flow", "flow"], {
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
