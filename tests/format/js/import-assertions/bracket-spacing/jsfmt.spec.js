run_spec(__dirname, ["babel"], {
  // [prettierx merge update(s) from prettier@2.3.1 ...]
  importCurlySpacing: false,
  // TBD ???: objectCurlySpacing setting needed for a case in dynamic-import.js
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
