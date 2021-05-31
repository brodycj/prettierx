"use strict";

const path = require("path");
const shell = require("shelljs");
const tempy = require("tempy");

// [prettierx]: typescript/flow-parser optional dep support
const pkg = require("../package.json");

shell.config.fatal = true;

const client = process.env.NPM_CLIENT || "yarn";

// [prettierx]: typescript/flow-parser optional dep support
function getInstallCommand(args) {
  switch (client) {
    case "npm":
      // npm fails when engine requirement only with `--engine-strict`
      return `npm install ${args} --engine-strict`;
    case "pnpm":
      // Note: current pnpm can't work with `--engine-strict` and engineStrict setting in `.npmrc`
      return `pnpm add ${args}`;
    default:
      // yarn fails when engine requirement not compatible by default
      return `yarn add ${args}`;
  }
}

module.exports = (packageDir) => {
  const tmpDir = tempy.directory();
  const file = shell.exec("npm pack", { cwd: packageDir }).stdout.trim();
  shell.mv(path.join(packageDir, file), tmpDir);
  const tarPath = path.join(tmpDir, file);

  shell.exec(`${client} init -y`, { cwd: tmpDir, silent: true });

  // [prettierx]: typescript/flow-parser optional dep support
  shell.exec(getInstallCommand(`"${tarPath}"`), { cwd: tmpDir });

  // [prettierx]: typescript/flow-parser optional dep support
  const optionalDeps = new Set()

  for (const dependency of Object.keys(pkg.peerDependenciesMeta)) {
    if (pkg.peerDependenciesMeta[dependency].optional) {
      optionalDeps.add(dependency);
    }
  }

  if (optionalDeps.size > 0) {
    shell.exec(getInstallCommand([...optionalDeps].join(" ")), { cwd: tmpDir });
  }

  // [prettierx]
  return path.join(tmpDir, "node_modules/prettierx");
};
