run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  // bogus option to help preserve snapshot order
  bogus: true,
  generatorStarSpacing: true,
});
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  generatorStarSpacing: true,
  spaceBeforeFunctionParen: true,
});
