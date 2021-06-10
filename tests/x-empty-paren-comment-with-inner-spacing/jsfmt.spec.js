// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

// [prettierx merge update(s) from prettier@2.3.1 ...]
const dirpath = `${__dirname}/../format/js/empty-paren-comment`;

run_spec(dirpath, ["babel", "babel-flow", "flow", "typescript"], {
  spaceInParens: true,
});
