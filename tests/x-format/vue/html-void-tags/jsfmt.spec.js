// [prettierx merge update from prettier@2.3.1]
run_spec(__dirname, ["vue"], { errors: { vue: true } });
run_spec(__dirname, ["vue"], {
  htmlVoidTags: true,
  errors: { vue: true },
});
