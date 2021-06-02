run_spec(__dirname, ["yaml"]);
run_spec(__dirname, ["yaml"], { tabWidth: 4 });
// [prettierx]: broken-out bracket spacing option(s)
run_spec(__dirname, ["yaml"], {
  // [prettierx] bogus option to keep snapshot more consistent with Prettier 2.3.0
  bogus: null,
  // [prettierx] replaced bracketSpacing option
  yamlBracketSpacing: false,
});
