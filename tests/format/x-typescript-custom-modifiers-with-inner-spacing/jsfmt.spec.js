// [prettierx] test script notice:
// This test script runs for test files in another directory,
// **not** on any files in *this* directory.

const dirpath = `${__dirname}/../../typescript/custom/modifiers`;

run_spec(dirpath, ["typescript"], {
  // [prettierx] test with spacing options (...)
  typeAngleBracketSpacing: true,
  typeBracketSpacing: true,
});
