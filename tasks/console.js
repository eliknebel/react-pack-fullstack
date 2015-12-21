#! /usr/bin/env node

var childProcess = require('child_process');

console.log("Launching webpack...");
var webpackCommand = "webpack-dev-server --port 8080 --config webpack.config.hot.js --content-base ./client/ --progress --colors --inline --hot";
childProcess.exec(webpackCommand);

console.log("Lifting Sails...");
process.env.NODE_ENV = 'webpackhot';
childProcess.execSync(process.cwd() + "/node_modules/.bin/sails console", {stdio: [0,1,2]});