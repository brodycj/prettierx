"use strict";

const commonOptions = require("../common/common-options");

// format based on https://github.com/prettier/prettier/blob/main/src/main/core-options.js
module.exports = {
  singleQuote: commonOptions.singleQuote,
  proseWrap: commonOptions.proseWrap,
  // [prettierx]
  yamlBracketSpacing: {
    category: "Other",
    type: "boolean",
    default: true,
    description: "Put spaces between brackets / curly braces for YAML.",
    oppositeDescription:
      "Do not put spaces between brackets / curly braces for YAML.",
  },
  yamlBreakBeforeComment: {
    category: "Other",
    type: "boolean",
    default: false,
    description: "Put or remove line breaked before comment section for YAML.",
    oppositeDescription:
      "Do not put line break before comment section for YAML.",
  },
};
