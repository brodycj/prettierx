// [prettierx] test script notice:
// This test script runs for test files in another directory,
// **not** on any files in *this* directory.

const dirpath = `${__dirname}/../../computed_props`;

run_spec(dirpath, ["babel", "babel-flow"], {
  computedPropertySpacing: true,
});
