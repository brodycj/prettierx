// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

// [prettierx merge update from prettier@2.3.1 ...]
const path = require("path");
const dirpath = path.join(formatRoot, "/js/test-declarations");

run_spec(dirpath, ["babel", "babel-flow", "flow", "typescript"], {
  // [prettierx] recommended option, especially in combo with --paren-spacing
  arrowParens: "avoid",
  // [prettierx] test with --paren-spacing
  spaceInParens: true,
  arrayBracketSpacing: true,
  typeAngleBracketSpacing: true,
  templateCurlySpacing: true,
});
