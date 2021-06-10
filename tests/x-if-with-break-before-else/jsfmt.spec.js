// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

// [prettierx merge update(s) from prettier@2.3.1 ...]
const dirpath = `${__dirname}/../format/js/if`;

// [prettierx merge update(s) from prettier@2.3.1 ...]
run_spec(dirpath, ["babel", "babel-flow", "flow", "typescript"], {
  // [prettierx] test with --break-before-else
  breakBeforeElse: true,
  // recommended:
  trailingComma: "none", // ("Standard JS")
});
