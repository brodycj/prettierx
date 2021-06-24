"use strict";

const path = require("path");
const isProduction = process.env.NODE_ENV === "production";
const prettierRootDir = isProduction
  ? process.env.PRETTIERX_DIR // [prettierx]
  : path.join(__dirname, "..");
// [@prettier-x/formatter-2021-0x]
// const { bin } = ...
const bin = "prettierx.js";
const prettierCli = path.join(
  prettierRootDir,
  // [@prettier-x/formatter-2021-0x]
  "tests_bin_fixture",
  // [prettierx]
  typeof bin === "object" ? bin.prettierx : bin
);

const thirdParty = isProduction
  ? path.join(prettierRootDir, "./third-party")
  : path.join(prettierRootDir, "./src/common/third-party");

module.exports = {
  thirdParty,
  prettierCli,
};
