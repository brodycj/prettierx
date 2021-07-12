"use strict";

const path = require("path");

const editorconfig = require("editorconfig");
const memoize = require("fast-memoize");
const editorConfigToPrettier = require("editorconfig-to-prettier");
const findProjectRoot = require("./find-project-root");

const memoizeCache = new Map();
const memoizeOptions = {
  cache: {
    create() {
      return {
        has: (key) => memoizeCache.has(key),
        get: (key) => memoizeCache.get(key),
        set: (key, value) => memoizeCache.set(key, value)
      };
    }
  }
};
const jsonStringifyMem = (fn) => memoize(fn, memoizeOptions);

const maybeParse = (filePath, parse) =>
  filePath &&
  parse(filePath, {
    root: findProjectRoot(path.dirname(path.resolve(filePath))),
  });

const editorconfigAsyncNoCache = async (filePath) =>
  editorConfigToPrettier(await maybeParse(filePath, editorconfig.parse));
const editorconfigAsyncWithCache = jsonStringifyMem(editorconfigAsyncNoCache);

const editorconfigSyncNoCache = (filePath) =>
  editorConfigToPrettier(maybeParse(filePath, editorconfig.parseSync));
const editorconfigSyncWithCache = jsonStringifyMem(editorconfigSyncNoCache);

function getLoadFunction(opts) {
  if (!opts.editorconfig) {
    return () => null;
  }

  if (opts.sync) {
    return opts.cache ? editorconfigSyncWithCache : editorconfigSyncNoCache;
  }

  return opts.cache ? editorconfigAsyncWithCache : editorconfigAsyncNoCache;
}

function clearCache() {
  memoizeCache.clear();
}

module.exports = {
  getLoadFunction,
  clearCache,
};
