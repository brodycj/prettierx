run_spec(__dirname, ["yaml"]);
// support --no-yaml-break-before-comment
run_spec(__dirname, ["yaml"], { yamlBreakBeforeComment: false });
