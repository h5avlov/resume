
function contentAccess( content ) {
	// Initializes a slider on page content 
	// to allow for animated transition between sections
	content.slick( {
		adaptiveHeight: true,
		fade: true, 
		arrows: false,
		swipe: false, 
		speed: 500, 
		initialSlide: 0 
		
	} );
}

