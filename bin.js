#!/usr/bin/env node

const yargs = require("yargs");

const appName = yargs.argv._[0];

if (!appName) {
  console.log("😩 You must enter an app name - hint: npx create-api-now myApp");
  process.exit(1);
}

console.log(`🚀 Creating api ${appName}`);
