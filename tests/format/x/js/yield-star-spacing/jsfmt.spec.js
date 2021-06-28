run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  // bogus option to help preserve snapshot order
  bogus1: true,
  yieldStarSpacing: true,
});
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  // bogus option to help preserve snapshot order
  bogus2: true,
  yieldStarSpacing: true,
  generatorStarSpacing: true,
});
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  yieldStarSpacing: true,
  generatorStarSpacing: true,
  spaceBeforeFunctionParen: true,
});
