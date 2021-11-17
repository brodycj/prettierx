run_spec(__dirname, ["yaml"]);
run_spec(__dirname, ["yaml"], { tabWidth: 4 });
// support --no-yaml-break-before-comment
run_spec(__dirname, ["yaml"], { yamlBreakBeforeComment: false });
