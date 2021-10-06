#Installation: 

```$ npm i js-electron-config```

After installation the command line call should be linked. If it is not, you can ```npm link``` from the project directory. This is not tested.

#Usage:

```$ electron-config {'Element Name'|'Element Symbol'|'Element Number'} [-v|-t]```
```$ electron-config U -t```
```1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f4 6s2 6p6 7s2```

#Options: 

-v:	verbose mode, include everything about element as defined in elements.json.
-t:	text mode, output is text only. Incompatible with and overridden by verbose mode.

returns JSON including the object of the configuration string in standard notation (without superscript), unless an error occurs. This does not consider the many exceptions to the Aufbau principle like copper or chromium.

#Improvements not yet implemented:
	- Account for exceptions to the Aufbrau principle.
	- Adding support for shortened Notation i.e. ( Na => [Ne]3s1 )
	- Pauli Exclusion Principle and electron spins.
