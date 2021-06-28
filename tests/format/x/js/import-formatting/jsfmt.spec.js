run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  // bogus option to help preserve snapshot order
  bogus: true,
  importFormatting: "oneline",
});
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  importFormatting: "auto",
  trailingComma: "none",
});
