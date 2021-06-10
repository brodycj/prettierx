// [prettierx merge update(s) from prettier@2.3.1 ...]
// [prettierx] test with multiple Babel parsers:
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"]);
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  importCurlySpacing: false,
});
