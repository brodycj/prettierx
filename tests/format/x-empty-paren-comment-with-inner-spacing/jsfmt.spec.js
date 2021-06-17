// [prettierx] test script notice:
// This test script runs for test files in another directory,
// **not** on any files in *this* directory.

const dirpath = `${__dirname}/../../empty_paren_comment`;

run_spec(dirpath, ["babel", "babel-flow", "flow", "typescript"], {
  spaceInParens: true,
});
