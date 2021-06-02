run_spec(__dirname, ["yaml"]);
run_spec(__dirname, ["yaml"], { tabWidth: 4 });
// [prettierx]: broken-out bracket spacing options
run_spec(__dirname, ["yaml"], { yamlBracketSpacing: false });
