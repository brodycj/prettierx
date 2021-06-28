// [prettierx] test script notice:
// This test script runs for test files in another directory,
// **not** on any files in *this* directory.

// [FUTURE TBD] use Nodejs path function (...)
const dirPath = `${__dirname}/../../../js/ternaries`;

// NOTE: This will not work with babel-ts due to
// an issue with parsing incorrect-ternaries.js:
// https://github.com/babel/babel/issues/11959
// Skipping typescript language for now as a quick workaround.
run_spec(dirPath, ["babel", "babel-flow", "flow"], {
  spaceInParens: true,
  arrayBracketSpacing: true,
  computedPropertySpacing: true,
  spaceUnaryOps: true,
  templateCurlySpacing: true,
  // [prettierx] recommended option:
  arrowParens: "avoid",
  // [prettierx] "Standard JS" setting:
  trailingComma: "none",
});
