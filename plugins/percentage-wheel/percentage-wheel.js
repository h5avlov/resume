(function( $ ) {
	$.fn.percentageWheel = function( settings ) {
		
		return this.each( function() {

			// Sets the number of fragments to build the wheel with,
			// and calculates the rotation angle and the corresponding percentage 
			// of two adjacent fragments
			const DEFAULT_WRAPPER_CLASS = "wrapper", 
				DEFAULT_FRAGMENT_CLASS = "fragment", 
				DEFAULT_FRAGMENT_COUNT = 40, 
				WRAPPER_CLASS = settings.wrapperClassName || DEFAULT_WRAPPER_CLASS, 
				FRAGMENT_CLASS = settings.fragmentClassName || DEFAULT_FRAGMENT_CLASS,
				FRAGMENT_COUNT = settings.fragmentCount || DEFAULT_FRAGMENT_COUNT, 
				ROTATION_STEP = 360 / FRAGMENT_COUNT,  
				PERCENTAGE_STEP = 100 / FRAGMENT_COUNT;
				
			let wrapper = $( `<div class= ${WRAPPER_CLASS} />` ), 
				level = settings.level, 
				exclusionCount = ( 100 - level ) / PERCENTAGE_STEP, 
				wrapperRotation = exclusionCount / 2 * ROTATION_STEP; 
				
			// Rotates the wheel to keep its position symmetrical around the x-axis
			let symmetricalCorrection = 0;
			if ( settings.symmetrical ) {
				symmetricalCorrection = exclusionCount / 2;
			}
			
			// Creates the next fragment 
			// and rotates it, according to its position
			for ( let i = 0; i < FRAGMENT_COUNT - exclusionCount; i++ ) {
				let fragment = $( `<div class= ${FRAGMENT_CLASS} />` ), 
					rotation = ROTATION_STEP * ( i + symmetricalCorrection );
				fragment.css( { transform: `rotateZ( ${rotation}deg )` } );
				wrapper.append( fragment );
			}
			
			$( this ).append( wrapper );
		} );
		
	};
}( jQuery ) );



















