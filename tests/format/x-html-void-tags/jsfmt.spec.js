// [prettierx merge update from prettier@2.3.1] TBD SKIP Vue due to issue
run_spec(__dirname, ["html", "angular"]);
run_spec(__dirname, ["html"], { htmlVoidTags: true });
run_spec(__dirname, ["angular"], { htmlVoidTags: true });
