#! /usr/bin/env node

var childProcess = require('child_process');

console.log("Running webpack...");
childProcess.execSync("webpack", {stdio: [0,1,2]});

console.log("Lifting Sails...");
childProcess.execSync("node app.js", {stdio: [0,1,2]});