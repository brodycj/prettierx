// --align-object-properties no longer working with non-Babel typescript parser
run_spec(__dirname, ["babel", "babel-flow", "flow", "babel-ts"], {
  // "Standard JS":
  alignObjectProperties: true,
  trailingComma: "none",
});
