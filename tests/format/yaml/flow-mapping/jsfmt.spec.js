run_spec(__dirname, ["yaml"]);
run_spec(__dirname, ["yaml"], { tabWidth: 4 });
// [prettierx] with yamlBracketSpacing option
// and bogus option to keep snapshot more consistent with Prettier 2.3.1
run_spec(__dirname, ["yaml"], { bogus: true, yamlBracketSpacing: false });
