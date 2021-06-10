run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  // [prettierx merge update(s) from prettier@2.3.1 ...]
  // using bogus option to avoid snapshot churn during merge
  bogus: true,
  generatorStarSpacing: true,
});
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  generatorStarSpacing: true,
  spaceBeforeFunctionParen: true,
});
