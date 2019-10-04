
function contentAccess( content ) {
	// Initializes a slider on page content 
	// to allow for animated transition between sections
	content.slick( {
		adaptiveHeight: true,
		fade: true, 
		arrows: false,
		swipe: false, 
		speed: SETTINGS.SECTION_TRANSITION_DURATION, 
		initialSlide: SETTINGS.INITIAL_SECTION_POSITION
	} );
}

