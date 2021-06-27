"use strict";

const prettierx = require("prettier/local");
// const { concat } = prettier.doc.builders;

module.exports = {
  languages: [
    {
      name: "es2100",
      parsers: ["es2100-parser"],
      extensions: [".es2100"],
    },
    {
      name: "flow2100",
      parsers: ["flow2100-parser"],
      extensions: [".flow2100"],
    },
    {
      name: "ts2100",
      parsers: ["ts2100-parser"],
      extensions: [".ts2100"],
    },
  ],
  parsers: {
    "es2100-parser": {
      ...prettierx.languages[0].parsers.babel,
      astFormat: "estree-2100",
    },
    "flow2100-parser": {
      ...prettierx.languages[0].parsers["babel-flow"],
      astFormat: "estree-2100",
    },
    "ts2100-parser": {
      ...prettierx.languages[0].parsers["babel-ts"],
      astFormat: "estree-2100",
    },
  },
  printers: {
    "estree-2100": prettierx.languages[0].printers.estree,
  },
};
