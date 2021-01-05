// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

const dirpath = `${__dirname}/..`;

// no longer working with non-Babel flow & typescript parsers
run_spec(dirpath, ["babel", "babel-flow", "babel-ts"], {
  parenSpacing: true,
});
