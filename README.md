Usage:

$ electron-config 'Element Name'|'Element Symbol'|'Element Number' [-v]

Options: 

-v	:verbose, include everything about element as defined in elements.json.

returns JSON including the object of the configuration string in standard notation (without superscript). This does not consider the exceptions to the Aufbau principle like copper or chromium.

Improvements not implemented:
	- Pauli Exclusion Principle and electron spins.
