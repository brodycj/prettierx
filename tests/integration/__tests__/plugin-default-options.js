"use strict";

const runPrettier = require("../runPrettier");

describe("plugin default options should work", () => {
  runPrettier(
    "plugins/defaultOptions",
    [
      "--stdin-filepath",
      "example.foo",
      "--plugin=./plugin",
      "--no-editorconfig",
    ],
    { input: "hello-world" }
  ).test({
    stdout: JSON.stringify({
      tabWidth: 8,
      // [prettierx merge update from prettier@2.3.1] broken-out bracket spacing options
      objectCurlySpacing: false,
    }),
    stderr: "",
    status: 0,
    write: [],
  });
});

describe("overriding plugin default options should work", () => {
  runPrettier(
    "plugins/defaultOptions",
    ["--stdin-filepath", "example.foo", "--plugin=./plugin", "--tab-width=4"],
    { input: "hello-world" }
  ).test({
    stdout: JSON.stringify({
      tabWidth: 4,
      // [prettierx merge update from prettier@2.3.1] broken-out bracket spacing options
      objectCurlySpacing: false,
    }),
    stderr: "",
    status: 0,
    write: [],
  });
});
