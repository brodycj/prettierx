run_spec(__dirname, ["yaml"]);
run_spec(__dirname, ["yaml"], { tabWidth: 4 });
run_spec(__dirname, ["yaml"], { bracketSpacing: false });
// support --no-yaml-break-before-comment
run_spec(__dirname, ["yaml"], { yamlBreakBeforeComment: false });
