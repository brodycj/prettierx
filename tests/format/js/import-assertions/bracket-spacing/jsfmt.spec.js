run_spec(__dirname, ["babel"], {
  // [prettierx]: broken-out bracket spacing options
  graphqlCurlySpacing: false,
  exportCurlySpacing: false,
  importCurlySpacing: false,
  objectCurlySpacing: false,
  typeCurlySpacing: false,
  yamlBracketSpacing: false,
  errors: {
    espree: [
      "dynamic-import.js",
      "static-import.js",
      "re-export.js",
      "empty.js",
    ],
    meriyah: [
      "dynamic-import.js",
      "static-import.js",
      "re-export.js",
      "empty.js",
    ],
  },
});
