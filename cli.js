#!/usr/bin/env node

const electronConfuguraton = require("./index");

(() => {
	// get aruments
	const args = process.argv;
	const element = args[2];
	const options = [...args];
	options.splice(0,3);
	// Execute the function.
	console.log( electronConfuguraton.ec( element, options ));
})()