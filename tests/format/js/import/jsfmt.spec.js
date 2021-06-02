run_spec(__dirname, ["babel", "flow", "typescript"]);
run_spec(__dirname, ["babel", "flow", "typescript"], {
  // [prettierx]: broken-out bracket spacing options
  graphqlCurlySpacing: false,
  exportCurlySpacing: false,
  importCurlySpacing: false,
  objectCurlySpacing: false,
  typeCurlySpacing: false,
  yamlBracketSpacing: false,
});
