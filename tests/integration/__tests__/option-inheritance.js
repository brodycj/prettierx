"use strict";

const path = require("path");

const prettier = require("prettier-local");
const runPrettier = require("../runPrettier");

test("API resolveConfig with file arg should return only set options", () => {
  const file = path.resolve(
    path.join(__dirname, "../cli/config/option-inheritance/file.js")
  );
  return prettier.resolveConfig(file).then((result) => {
    expect(result).toMatchObject({
      bracketSpacing: true,
      objectCurlySpacing: false,
    });
  });
});

test("API resolveConfig.sync with file arg should return only set options", () => {
  const file = path.resolve(
    path.join(__dirname, "../cli/config/option-inheritance/file.js")
  );
  expect(prettier.resolveConfig.sync(file)).toMatchObject({
    bracketSpacing: true,
    objectCurlySpacing: false,
  });
});

describe("properly propogates inherited option values", () => {
  runPrettier("cli/config/option-inheritance/", ["./file.js"]).test({
    status: 0,
  });
});
