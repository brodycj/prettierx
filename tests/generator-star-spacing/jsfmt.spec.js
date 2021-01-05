run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  arrowParens: "avoid", // added to preserve snapshot order
  generatorStarSpacing: true,
});
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  generatorStarSpacing: true,
  spaceBeforeFunctionParen: true,
});
