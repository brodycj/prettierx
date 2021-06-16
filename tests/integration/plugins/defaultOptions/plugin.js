"use strict";

module.exports = {
  languages: [
    {
      name: "foo",
      parsers: ["foo-parser"],
      extensions: [".foo"]
    }
  ],
  defaultOptions: {
    tabWidth: 8,
    // [prettierx merge update from prettier@2.3.1] broken-out bracket spacing options
    objectCurlySpacing: false
  },
  parsers: {
    "foo-parser": {
      parse: text => ({ text }),
      astFormat: "foo-ast"
    }
  },
  printers: {
    "foo-ast": {
      print: (path, options) =>
        JSON.stringify({
          tabWidth: options.tabWidth,
          // [prettierx merge update from prettier@2.3.1] broken-out bracket spacing options
          objectCurlySpacing: options.objectCurlySpacing
        })
    }
  }
};
