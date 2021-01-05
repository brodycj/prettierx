run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  arrowParens: "avoid", // added to preserve snapshot order
  importFormatting: "oneline",
});
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  importFormatting: "auto",
  trailingComma: "none",
});
