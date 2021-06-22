run_spec(__dirname, ["babel", "flow", "typescript"]);
// [prettierx]: broken-out bracket spacing options
run_spec(__dirname, ["babel", "flow", "typescript"], {
  objectCurlySpacing: false,
});
