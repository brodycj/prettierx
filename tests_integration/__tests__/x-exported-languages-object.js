"use strict";

const runPrettier = require("../runPrettier");
const EOL = "\n";

describe("uses 'plugins/exported-languages-object' to determine parser & parse JavaScript", () => {
  runPrettier(
    "x-plugins/exported-languages-object",
    ["*.es2100", "--plugin=./plugin"],
    {
      ignoreLineEndings: true,
    }
  ).test({
    stdout: '["test 1", 2];' + EOL,
    stderr: "",
    status: 0,
    write: [],
  });
});

describe("uses 'plugins/exported-languages-object' to determine parser & parse flow", () => {
  runPrettier(
    "x-plugins/exported-languages-object",
    ["*.flow2100", "--plugin=./plugin"],
    {
      ignoreLineEndings: true,
    }
  ).test({
    stdout: '["test 1", 2];' + EOL,
    stderr: "",
    status: 0,
    write: [],
  });
});

describe("uses 'plugins/exported-languages-object' to determine parser & parse TypeScript", () => {
  runPrettier(
    "x-plugins/exported-languages-object",
    ["*.ts2100", "--plugin=./plugin"],
    {
      ignoreLineEndings: true,
    }
  ).test({
    stdout: '["test 1", 2];' + EOL,
    stderr: "",
    status: 0,
    write: [],
  });
});
