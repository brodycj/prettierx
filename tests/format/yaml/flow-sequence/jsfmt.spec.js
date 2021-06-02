run_spec(__dirname, ["yaml"]);
run_spec(__dirname, ["yaml"], { tabWidth: 4 });
run_spec(__dirname, ["yaml"], {
  // [prettierx]: broken-out bracket spacing options
  graphqlCurlySpacing: false,
  exportCurlySpacing: false,
  importCurlySpacing: false,
  objectCurlySpacing: false,
  typeCurlySpacing: false,
  yamlBracketSpacing: false,
});
