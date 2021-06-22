run_spec(__dirname, ["babel", "flow", "typescript"]);
run_spec(__dirname, ["babel", "flow", "typescript"], {
  // [prettierx]: broken-out bracket spacing options
  importCurlySpacing: false,
});
