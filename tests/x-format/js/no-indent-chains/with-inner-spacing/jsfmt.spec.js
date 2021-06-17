// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

const path = require("path");
const dirpath = path.join(__dirname, "/..");

run_spec(dirpath, ["babel", "babel-flow", "flow", "typescript"], {
  indentChains: false,
  spaceInParens: true,
  spaceUnaryOps: true,
  // recommended:
  arrowParens: "avoid",
});
