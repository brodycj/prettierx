#!/usr/bin/env node

"use strict";

// [@prettier-x/formatter-2021-0x]
// import CLI object from root module for testing purposes
require("..").cli.run(process.argv.slice(2));
