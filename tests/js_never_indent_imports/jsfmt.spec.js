run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  neverIndentImports: true
});
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  neverIndentImports: false
});
