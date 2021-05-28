// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

const path = require("path");
const dirPath = path.join(`${__dirname}/..`);

run_spec(dirPath, ["babel", "babel-flow"], {
  // [prettierx] test with --paren-spacing
  spaceInParens: true,
  arrayBracketSpacing: true,
  computedPropertySpacing: true,
  // [prettierx] recommended option:
  arrowParens: "avoid",
  // [prettierx] "Standard JS" setting:
  trailingComma: "none",
});
