#! /usr/bin/env node

var del = require('del');
 
console.log("Cleaning files...");
del([
	'.tmp',
	'assets/app'
]).then(paths => {
	console.log('Deleted files and folders:\n', paths.join('\n'));
});