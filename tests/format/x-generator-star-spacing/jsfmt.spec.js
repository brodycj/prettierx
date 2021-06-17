run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  // [FUTURE TBD] use Nodejs path function (...) bogus option to preserve snapshot order
  bogus: null,
  generatorStarSpacing: true,
});
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  generatorStarSpacing: true,
  spaceBeforeFunctionParen: true,
});
