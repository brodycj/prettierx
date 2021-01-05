run_spec(__dirname, ["babel", "babel-flow", "babel-ts"], {
  arrowParens: "avoid", // added to preserve snapshot order
  importFormatting: "oneline",
});
run_spec(__dirname, ["babel", "babel-flow", "babel-ts"], {
  importFormatting: "auto",
  trailingComma: "none",
});
