// [prettierx merge update from prettier@2.3.1 ...]
// using bogus option to keep snapshot more consistent with Prettier 2.3.1
run_spec(__dirname, ["yaml"], { bogus3: null });
run_spec(__dirname, ["yaml"], { bogus2: null, tabWidth: 4 });
run_spec(__dirname, ["yaml"], { bogus1: null, yamlBracketSpacing: false });
