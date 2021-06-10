// [prettierx merge update(s) from prettier@2.3.1 ...]
// using bogus option to avoid snapshot churn during merge
run_spec(__dirname, ["babel", "babel-flow", "typescript"], { bogus: true });
run_spec(__dirname, ["babel", "babel-flow", "typescript"], {
  breakLongMethodChains: true,
});
