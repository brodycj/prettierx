const commonOptions = {
  yieldStarSpacing: true,
  generatorStarSpacing: true,
  spaceBeforeFunctionParen: true,
  singleQuote: true,
  jsxSingleQuote: true,
  semi: false,
  alignTernaryLines: false
};

run_spec(__dirname, ["babel", "flow", "typescript"], {
  endOfLine: "lf",
  ...commonOptions
});
