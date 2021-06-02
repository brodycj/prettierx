run_spec(__dirname, ["graphql"]);
run_spec(__dirname, ["graphql"], {
  // [prettierx]: broken-out bracket spacing options
  graphqlCurlySpacing: false,
  exportCurlySpacing: false,
  importCurlySpacing: false,
  objectCurlySpacing: false,
  typeCurlySpacing: false,
  yamlBracketSpacing: false,
});
// [prettierx]: broken-out bracket spacing options
run_spec(__dirname, ["graphql"], { graphqlCurlySpacing: false });
