"use strict";

const commonOptions = require("../common/common-options");

// format based on https://github.com/prettier/prettier/blob/main/src/main/core-options.js
/** @type {{ [name: string]: import("../main/core-options").OptionInfo }} */
module.exports = {
  bracketSpacing: commonOptions.bracketSpacing,
  graphqlCurlySpacing: {
    category: "Other",
    type: "boolean",
    default: true,
    inherit: "bracketSpacing",
    description: "Put spaces between curly braces for GraphQL.",
    oppositeDescription: "Do not put spaces between curly braces for GraphQL.",
  },
};
