run_spec(__dirname, ["yaml"]);
run_spec(__dirname, ["yaml"], { tabWidth: 4 });
// [prettierx merge update(s) from prettier@2.3.1] renamed attribute
// with bogus property to keep snapshot more consistent with prettier@2.3.1
run_spec(__dirname, ["yaml"], { bogus: true, yamlBracketSpacing: false });
