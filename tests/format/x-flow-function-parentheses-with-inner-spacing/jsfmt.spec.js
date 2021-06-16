// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

// [prettierx merge update from prettier@2.3.1 ...]
const dirpath = `${__dirname}/../flow/function-parentheses`;

// [prettierx] test with --paren-spacing, only with defaults
// including arrowParens: "avoid"
// (note that this combination is **not** recommended)
run_spec(dirpath, ["flow", "babel", "babel-flow"], {
  spaceInParens: true,
  typeAngleBracketSpacing: true,
});
