run_spec(__dirname, ["babel"], {
  // [prettierx] updated options:
  importCurlySpacing: false,
  exportCurlySpacing: false,
  objectCurlySpacing: false,
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
