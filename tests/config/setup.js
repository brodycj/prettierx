"use strict";

// [prettierx]
const path = require("path");

Object.defineProperty(global, "run_spec", {
  get() {
    return require("./format-test");
  },
});

// [prettierx]
const formatRootPath = path.join(__dirname, "../format");
Object.defineProperty(global, "formatRoot", {
  get() {
    return formatRootPath;
  },
});
