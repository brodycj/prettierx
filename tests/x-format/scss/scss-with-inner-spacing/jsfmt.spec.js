// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

// [prettierx merge update from prettier@2.3.1 ...]
const path = require("path");
const dirpath = path.join(formatRoot, "/scss/scss");

run_spec(dirpath, ["scss"], {
  // [prettierx] test with --css-paren-spacing
  cssParenSpacing: true,
});