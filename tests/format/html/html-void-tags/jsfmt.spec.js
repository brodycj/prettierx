run_spec(__dirname, ["html", "angular", "vue"], { errors: { vue: true } });
run_spec(__dirname, ["html"], { htmlVoidTags: true, errors: { vue: true } });
run_spec(__dirname, ["angular", "vue"], {
  htmlVoidTags: true,
  errors: { vue: true },
});
