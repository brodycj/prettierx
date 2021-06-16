run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  // [prettierx merge update from prettier@2.3.1 ...] bogus option to preserve snapshot order
  bogus: null,
  importFormatting: "oneline",
});
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  importFormatting: "auto",
  trailingComma: "none",
});
