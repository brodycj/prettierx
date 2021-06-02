run_spec(__dirname, ["babel", "flow", "typescript"]);
run_spec(__dirname, ["babel", "flow", "typescript"], {
  // [prettierx] updated option:
  exportCurlySpacing: false,
});
