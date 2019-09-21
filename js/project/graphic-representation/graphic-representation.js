
function graphicRepresentationInit() {
	// The data object to load into the template
	let entries = $( ".skills:not( .slick-cloned ) .entry" );
	
	// Reading the level value in each entry 
	// and calling the percentageWheel() method 
	// to build a wheel, that graphically represents the level value 
	$( skills.entries ).each( function( pos, element ) {
		let value = parseInt( this.level.graphicRepresentation ), 
			current = entries.eq( pos ).find( ".graphic-representation" );
			
		current.percentageWheel( {
			level: value, 
			symmetrical: true, 
			wrapperClassName: "percentage-wheel"
		} );
	} );
}