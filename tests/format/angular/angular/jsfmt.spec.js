run_spec(__dirname, ["angular"], { trailingComma: "none" });
run_spec(__dirname, ["angular"]);
run_spec(__dirname, ["angular"], { printWidth: 1 });
run_spec(__dirname, ["angular"], { htmlWhitespaceSensitivity: "ignore" });
run_spec(__dirname, ["angular"], {
  // [prettierx]: broken-out bracket spacing options
  graphqlCurlySpacing: false,
  exportCurlySpacing: false,
  importCurlySpacing: false,
  objectCurlySpacing: false,
  typeCurlySpacing: false,
  yamlBracketSpacing: false,
});
// [prettierx]: broken-out bracket spacing options
run_spec(__dirname, ["angular"], { objectCurlySpacing: false });
