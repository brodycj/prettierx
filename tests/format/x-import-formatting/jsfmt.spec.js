run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  // [FUTURE TBD] use Nodejs path function (...) bogus option to preserve snapshot order
  bogus: null,
  importFormatting: "oneline",
});
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  importFormatting: "auto",
  trailingComma: "none",
});
