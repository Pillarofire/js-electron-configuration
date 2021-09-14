Usage:

$ electron-config 'Element Name'|'Element Symbol'|'Element Number' [-v]

Options: 

-v:	verbose mode, include everything about element as defined in elements.json.
-t:	text mode, output is text only. Incompatible and overridden by verbose mode.

returns JSON including the object of the configuration string in standard notation (without superscript), unless an error occurs. This does not consider the many exceptions to the Aufbau principle like copper or chromium.

Improvements not yet implemented:
	- Pauli Exclusion Principle and electron spins.
