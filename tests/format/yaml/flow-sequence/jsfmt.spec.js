run_spec(__dirname, ["yaml"]);
run_spec(__dirname, ["yaml"], { tabWidth: 4 });
run_spec(__dirname, ["yaml"], { bracketSpacing: false });
run_spec(__dirname, ["yaml"], { tabWidth:4, yamlDoSequenceIndent: true });
