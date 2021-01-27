"use strict";

const commonOptions = require("../common/common-options");

// format based on https://github.com/prettier/prettier/blob/master/src/main/core-options.js
module.exports = {
  singleQuote: commonOptions.singleQuote,
  proseWrap: commonOptions.proseWrap,
  yamlBracketSpacing: {
    category: "Other",
    type: "boolean",
    default: true,
    description: "Put spaces between brackets & curly braces for Yaml.",
    oppositeDescription:
      "Do not put spaces between brackets or curly braces for Yaml. Option status: experimental, with limited testing.",
  },
};
