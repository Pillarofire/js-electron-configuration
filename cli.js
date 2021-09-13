#!/usr/bin/env node

const ec = require("./index");

(() => {
	// get aruments
	const args = process.argv;

	// Execute the function.
	console.log(ec.ec(args[2], [...args]));
})()