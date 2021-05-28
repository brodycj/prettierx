run_spec(__dirname, ["babel", "babel-flow", "babel-ts"], {
  spaceInParens: true,
  arrayBracketSpacing: true,
  computedPropertySpacing: true,
  spaceUnaryOps: true,
  templateCurlySpacing: true,
  errors: {
    espree: [
      "bind.js",
      "import-export.js",
      "objects.js",
      "spread.js",
      "throw.js",
      "try-catch.js",
    ],
    meriyah: [
      "bind.js",
      "import-export.js",
      "objects.js",
      "spread.js",
      "throw.js",
      "try-catch.js",
    ],
  },
});
