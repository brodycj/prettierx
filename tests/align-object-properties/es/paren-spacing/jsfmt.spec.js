// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

const dirpath = `${__dirname}/..`;

// --align-object-properties no longer working with non-Babel typescript parser
run_spec(dirpath, ["babel", "babel-flow", "flow", "babel-ts"], {
  // "Standard JS":
  alignObjectProperties: true,
  // prettierx: test with --paren-spacing
  parenSpacing: true,
  // "Standard JS":
  trailingComma: "none",
});
