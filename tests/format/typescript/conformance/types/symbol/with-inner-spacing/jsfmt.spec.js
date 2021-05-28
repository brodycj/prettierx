// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

const dirPath = `${__dirname}/..`;

run_spec(dirPath, ["typescript"], {
  // [prettierx] test with spacing options (...)
  typeAngleBracketSpacing: true,
  typeBracketSpacing: true,
});
