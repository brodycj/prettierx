run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  arrowParens: "avoid", // - recommended
  indentChains: false,
});

run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  indentChains: false,
  parenSpacing: true,
  // recommended:
  arrowParens: "avoid",
});
