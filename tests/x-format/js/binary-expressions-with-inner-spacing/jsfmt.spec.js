// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

// [prettierx merge update from prettier@2.3.1 ...]
const path = require("path");
const dirpath = path.join(formatRoot, "/js/binary-expressions");

run_spec(dirpath, ["babel", "babel-flow", "flow", "typescript"], {
  errors: { espree: ["like-regexp.js"] },
  // [prettierx] test with --paren-spacing
  spaceInParens: true,
  computedPropertySpacing: true,
  spaceUnaryOps: true,
  templateCurlySpacing: true,
});
