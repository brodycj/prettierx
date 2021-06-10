// [prettierx merge update(s) from prettier@2.3.1 ...]
// using bogus option to avoid snapshot churn during merge
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  bogus: true,
});
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  tabWidth: 4,
});
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  useTabs: true,
});
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  useTabs: true,
  tabWidth: 4,
});
