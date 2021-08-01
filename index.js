const fs = require( 'fs' );

const ec = ( element, options ) => {
	let elements;

	try {
		elements = JSON.parse(fs.readFileSync('elements.json','utf-8'));
	} catch ( error ) {
		console.error(error);
	}
	var els, e;
	if( !element ) return "Expecting: C or oxygen or 23";
	if ( isNaN(element) ){
		e = elements.find( (a)=>{
			return a.name.toLowerCase()==element.toLowerCase() || a.symbol.toLowerCase()==element.toLowerCase();
		});
		if( !e ) return "element not found";
		els = e.number;
	} else {
		e = elements.find( (a)=>{
			return a.number===parseInt(element); });
		if( !e ) return "element not found";
		els = element;
	}
  let pat = [
    {'1s':2},
    {'2s':2},
    {'2p':6},{'3s':2},
    {'3p':6},{'4s':2},
    {'3d':10},{'4p':6},{'5s':2},
    {'4d':10},{'5p':6},{'6s':2},
    {'4f':14},{'5d':10},{'6p':6},{'7s':2},
    {'5f':14},{'6d':10},{'7p':6},
    {'5g':18},{'6f':14},{'7d':10},
    {'6g':18},{'7f':14},
    {'6h':22},{'7g':18},
    {'7h':22},
    {'7i':26}
  ];
  
  var config = [];
  pat.forEach( (c,i,a) => {
    let p = Object.keys(c)[0];
    if( els > c[p] ){
      config.push(p+''+c[p]);
      els-=c[p];
    } else if( els > 0 ){
      let ee = "";
      for( i=0;i<c[p]-els;i++ ){ ee+='+'; }
      config.push(p+''+els);
	    e["positive_charge"] = c[p]-els;
      els = 0;
    }
  });
	let result;
	if( options=='-v' ){
		e["configuration"]= config.sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0)).join(" ");
		// spread the whole element entry and return that with the configuration string added.
		result = { ...e }
	} else {
		result = {"configuration": config.sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0)).join(" ") }
	}
  
	return result;
}


(()=>{
	// get aruments
	const args = process.argv;

	// Execute the function.
  console.log( ec( args[2], args[3] ) );
})()

