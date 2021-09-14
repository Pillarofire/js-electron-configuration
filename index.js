const fs = require('fs');

const ec = (element, options) => {
	let elements;

	try {
		elements = JSON.parse(
			fs.readFileSync('elements.json', 'utf-8')
		);
	} catch (error) {
		console.error(error);
		return JSON.stringify({error:"Error occured reading elements.json."} );
	}
	let electronsRemaining, foundElement;
	if (!element) return JSON.stringify({error:"Expecting: C or oxygen or 23"});
	if (isNaN(element)) {
		foundElement = elements.find((a) => {
			return a.name.toLowerCase() == element.toLowerCase() ||
				a.symbol.toLowerCase() == element.toLowerCase();
		});
		if (!foundElement) return JSON.stringify({error:"element not found"});
		electronsRemaining = foundElement.number;
	} else {
		foundElement = elements.find((a) => a.number === parseInt(element));
		if (!foundElement) return JSON.stringify({error:"element not found"});
		electronsRemaining = element;
	}
	const pattern = [
		{ '1s': 2 },
		{ '2s': 2 },
		{ '2p': 6 }, { '3s': 2 },
		{ '3p': 6 }, { '4s': 2 },
		{ '3d': 10 }, { '4p': 6 }, { '5s': 2 },
		{ '4d': 10 }, { '5p': 6 }, { '6s': 2 },
		{ '4f': 14 }, { '5d': 10 }, { '6p': 6 }, { '7s': 2 },
		{ '5f': 14 }, { '6d': 10 }, { '7p': 6 },
		{ '5g': 18 }, { '6f': 14 }, { '7d': 10 },
		{ '6g': 18 }, { '7f': 14 },
		{ '6h': 22 }, { '7g': 18 },
		{ '7h': 22 },
		{ '7i': 26 }
	];

	const config = [];
	// For each element in the pattern
	pattern.forEach((shell, i) => {
		// get the name of the key on that element, (i.e. 3p)
		const shellDesignator = Object.keys(shell)[0];
		if (electronsRemaining > shell[shellDesignator]) {
			// if there are electrons left to assign, put that many there.
			config.push(shellDesignator + '' + shell[shellDesignator]);
			// decrement els by the number associated with the shell
			electronsRemaining -= shell[shellDesignator];
		} else if (electronsRemaining > 0) {
			let ee = "";
			for (i = 0; i < shell[shellDesignator] - electronsRemaining; i++) { ee += '+'; }
			config.push(shellDesignator + '' + electronsRemaining);
			foundElement["positive_charge"] = shell[shellDesignator] - electronsRemaining;
			electronsRemaining = 0;
		}
	});
	let result;
	const configStr = config.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join(" ");
	if (options.includes('-v')) {
		foundElement["configuration"] = configStr;
		// spread the whole element entry and return that with the configuration string added.
		result = JSON.stringify({ ...foundElement });
	} else {		
		if( options.includes('-t')){
			result = configStr;
		} else {
			result = JSON.stringify({ "configuration": configStr });
		}
	}

	return result;
}

exports.ec = ec;


