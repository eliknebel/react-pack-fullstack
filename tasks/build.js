#! /usr/bin/env node

var childProcess = require('child_process');

console.log("Running build...");
childProcess.execSync("webpack", {stdio: [0,1,2]});