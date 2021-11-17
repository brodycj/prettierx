run_spec(__dirname, ["yaml"], { useTabs: true });
run_spec(__dirname, ["yaml"], { proseWrap: "always" });
// support --no-yaml-break-before-comment
run_spec(__dirname, ["yaml"], { yamlBreakBeforeComment: false });
