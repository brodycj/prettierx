run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  arrowParens: "avoid", // added to preserve snapshot order
  yieldStarSpacing: true,
});
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  yieldStarSpacing: true,
  generatorStarSpacing: true,
});
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  yieldStarSpacing: true,
  generatorStarSpacing: true,
  spaceBeforeFunctionParen: true,
});
