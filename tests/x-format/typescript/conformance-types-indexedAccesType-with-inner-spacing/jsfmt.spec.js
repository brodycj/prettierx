// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

// [prettierx merge update from prettier@2.3.1 ...]
const path = require("path");
const dirpath = path.join(
  formatRoot,
  "/typescript/conformance/types/indexedAccesType"
);

run_spec(dirpath, ["typescript"], {
  // [prettierx] test with --paren-spacing
  spaceInParens: true,
  typeAngleBracketSpacing: true,
  typeBracketSpacing: true,
});
