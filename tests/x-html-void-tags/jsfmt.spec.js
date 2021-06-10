// [prettierx merge update(s) from prettier@2.3.1 ...]
// with bogus attributes to preserve snapshot order
// XXX TBD not working with Vue after merge - ???
run_spec(__dirname, ["html", "angular"], { bogus1: true });
run_spec(__dirname, ["html"], { bogus2: true, htmlVoidTags: true });
run_spec(__dirname, ["angular"], { bogus3: true, htmlVoidTags: true });
