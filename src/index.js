"use strict";

const { version } = require("../package.json");

// [@prettier-x/formatter-2021-0x]
const cli = require("./cli");

const core = require("./main/core");
const { getSupportInfo } = require("./main/support");
const getFileInfo = require("./common/get-file-info");
const sharedUtil = require("./common/util-shared");
const plugins = require("./common/load-plugins");
const config = require("./config/resolve-config");
const doc = require("./document");

// [@prettier-x/formatter-2021-0x]
// quick & ugly solution to help support prettier-plugin-x
// (with Babel parser *only* at this point):
const languages = [
  {
    ...require("./language-js"),
    parsers: require("./language-js/parser-babel").parsers,
  },
];
// TODO: support more languages such as CSS, HTML, etc.
// FUTURE SOLUTION once updates from Prettier 2.3.1 are included in prettierX:
// const languages = require("./languages");

function _withPlugins(
  fn,
  optsArgIdx = 1 // Usually `opts` is the 2nd argument
) {
  return (...args) => {
    const opts = args[optsArgIdx] || {};
    args[optsArgIdx] = {
      ...opts,
      plugins: plugins.loadPlugins(opts.plugins, opts.pluginSearchDirs),
    };
    return fn(...args);
  };
}

function withPlugins(fn, optsArgIdx) {
  const resultingFn = _withPlugins(fn, optsArgIdx);
  if (fn.sync) {
    // @ts-ignore
    resultingFn.sync = _withPlugins(fn.sync, optsArgIdx);
  }
  return resultingFn;
}

const formatWithCursor = withPlugins(core.formatWithCursor);

module.exports = {
  formatWithCursor,

  format(text, opts) {
    return formatWithCursor(text, opts).formatted;
  },

  check(text, opts) {
    const { formatted } = formatWithCursor(text, opts);
    return formatted === text;
  },

  // [@prettier-x/formatter-2021-0x]
  cli,

  doc,

  // [@prettier-x/formatter-2021-0x]
  languages,

  resolveConfig: config.resolveConfig,
  resolveConfigFile: config.resolveConfigFile,
  clearConfigCache() {
    config.clearCache();
    plugins.clearCache();
  },

  getFileInfo: /** @type {typeof getFileInfo} */ (withPlugins(getFileInfo)),
  getSupportInfo: /** @type {typeof getSupportInfo} */ (withPlugins(
    getSupportInfo,
    0
  )),

  version,

  util: sharedUtil,

  /* istanbul ignore next */
  __debug: {
    parse: withPlugins(core.parse),
    formatAST: withPlugins(core.formatAST),
    formatDoc: withPlugins(core.formatDoc),
    printToDoc: withPlugins(core.printToDoc),
    printDocToString: withPlugins(core.printDocToString),
  },
};
