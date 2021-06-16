"use strict";

const path = require("path");
const isProduction = process.env.NODE_ENV === "production";
// [prettierx]
const { PRETTIERX_DIR } = process.env;
const { bin } = require(path.join(PRETTIERX_DIR, "package.json"));
const prettierCli = path.join(
  PRETTIERX_DIR,
  typeof bin === "object" ? bin.prettierx : bin
);

// [prettierx]
const thirdParty = isProduction
  ? path.join(PRETTIERX_DIR, "./third-party")
  : path.join(PRETTIERX_DIR, "./src/common/third-party");

const projectRoot = path.join(__dirname, "../..");

module.exports = {
  isProduction,
  thirdParty,
  prettierCli,
  projectRoot,
};
