// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

const path = require("path");
const dirpath = path.join(__dirname, "/..");

run_spec(dirpath, ["__ng_interpolation"], {
  // [prettierx] test with --paren-spacing
  spaceInParens: true,
  computedPropertySpacing: true,
  trailingComma: "none",
  spaceUnaryOps: true,
});
