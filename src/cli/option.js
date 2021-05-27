"use strict";

const dashify = require("dashify");
// [prettierx]: inherited option support
const camelCase = require("camelcase");

const fromPairs = require("lodash/fromPairs");

// eslint-disable-next-line no-restricted-modules
const prettier = require("../index");

const minimist = require("./minimist");
const { optionsNormalizer } = require("./prettier-internal");
const createMinimistOptions = require("./create-minimist-options");

function getOptions(argv, detailedOptions) {
  return fromPairs(
    detailedOptions
      .filter(({ forwardToApi }) => forwardToApi)
      .map(({ forwardToApi, name }) => [forwardToApi, argv[name]])
  );
}

function cliifyOptions(object, apiDetailedOptionMap) {
  return fromPairs(
    Object.entries(object || {}).map(([key, value]) => {
      const apiOption = apiDetailedOptionMap[key];
      const cliKey = apiOption ? apiOption.name : key;

      return [dashify(cliKey), value];
    })
  );
}

function createApiDetailedOptionMap(detailedOptions) {
  return fromPairs(
    detailedOptions
      .filter(
        (option) => option.forwardToApi && option.forwardToApi !== option.name
      )
      .map((option) => [option.forwardToApi, option])
  );
}

function parseArgsToOptions(context, overrideDefaults) {
  const minimistOptions = createMinimistOptions(context.detailedOptions);
  const apiDetailedOptionMap = createApiDetailedOptionMap(
    context.detailedOptions
  );
  return getOptions(
    optionsNormalizer.normalizeCliOptions(
      minimist(context.rawArguments, {
        string: minimistOptions.string,
        boolean: minimistOptions.boolean,
        default: cliifyOptions(overrideDefaults, apiDetailedOptionMap),
      }),
      context.detailedOptions,
      { logger: false }
    ),
    context.detailedOptions
  );
}

function getOptionsOrDie(context, filePath) {
  try {
    if (context.argv.config === false) {
      context.logger.debug(
        "'--no-config' option found, skip loading config file."
      );
      return null;
    }

    context.logger.debug(
      context.argv.config
        ? `load config file from '${context.argv.config}'`
        : `resolve config from '${filePath}'`
    );

    const options = prettier.resolveConfig.sync(filePath, {
      editorconfig: context.argv.editorconfig,
      config: context.argv.config,
    });

    context.logger.debug("loaded options `" + JSON.stringify(options) + "`");
    return options;
  } catch (error) {
    context.logger.error(
      `Invalid configuration file \`${filePath}\`: ` + error.message
    );
    process.exit(2);
  }
}

function applyConfigPrecedence(context, options) {
  try {
    switch (context.argv["config-precedence"]) {
      case "cli-override":
        return parseArgsToOptions(context, options);
      case "file-override":
        return { ...parseArgsToOptions(context), ...options };
      case "prefer-file":
        return options || parseArgsToOptions(context);
    }
  } catch (error) {
    /* istanbul ignore next */
    context.logger.error(error.toString());

    /* istanbul ignore next */
    process.exit(2);
  }
}

// [prettierx]: inherited option support
/**
 * Sets values for options which inherit the value of another option. If the
 * inherited option's value is set, but the inheritor's is not, the inheritor's
 * value is replaced with that of the inhereted option.
 * @param {{ [optionName: string]: import("../main/core-options").OptionInfo }} optionMap
 * @param {{ [optionName: string]: any }} options
 */
function setInheritedOptionValues(optionMap, options) {
  for (const [optionCliKey, optionInfo] of Object.entries(optionMap)) {
    if (!optionInfo || !optionInfo.inherit) {
      continue;
    }

    const optionApiKey = camelCase(optionCliKey);

    const optionValue = options[optionApiKey];
    if (optionValue !== undefined) {
      continue;
    }

    const inheritedValue = options[optionInfo.inherit];

    if (inheritedValue === undefined) {
      continue;
    }

    options[optionApiKey] = inheritedValue;
  }
}

function getOptionsForFile(context, filepath) {
  const options = getOptionsOrDie(context, filepath);

  const hasPlugins = options && options.plugins;
  if (hasPlugins) {
    context.pushContextPlugins(options.plugins);
  }

  const appliedOptions = {
    filepath,
    ...applyConfigPrecedence(
      context,
      options &&
        optionsNormalizer.normalizeApiOptions(options, context.supportOptions, {
          logger: context.logger,
        })
    ),
  };

  // [prettierx]: inherited option support
  setInheritedOptionValues(context.detailedOptionMap, appliedOptions);

  context.logger.debug(
    `applied config-precedence (${context.argv["config-precedence"]}): ` +
      `${JSON.stringify(appliedOptions)}`
  );

  if (hasPlugins) {
    context.popContextPlugins();
  }

  return appliedOptions;
}

module.exports = {
  getOptionsForFile,
  createMinimistOptions,
  // [prettierx]: inherited option support
  setInheritedOptionValues,
};
