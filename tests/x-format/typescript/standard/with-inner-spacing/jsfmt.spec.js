// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

const path = require("path");
const dirpath = path.join(__dirname, "/..");

run_spec(dirpath, ["typescript"], {
  spaceInParens: true,
  yieldStarSpacing: true,
  generatorStarSpacing: true,
  typeAngleBracketSpacing: true,
  spaceBeforeFunctionParen: true,
  singleQuote: true,
  jsxSingleQuote: true,
  semi: false,
});
