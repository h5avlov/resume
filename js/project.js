$( document ).ready( function() {
	
	// Inserts a copy of the navigation in every section
	$( ".main-nav" ).prependTo( ".section" );
	
	// Highlights the link, corresponding to the current section
	$( ".main-nav" ).each( function( pos ) {
		$( this ).find( ".link" ).eq( pos ).addClass( "current" );
	} );
	
	// Prevents default behaviour for all the nav links
	$( ".link" ).on( "click", function( e ) {
		e.preventDefault();
	} );

} );

$( document ).ready( function() {
	
	// Initializes a slider and makes slides from the sections
	let mainContent = $( "main" );
	mainContent.slick( {
		adaptiveHeight: true,
		arrows: false
		
	} );
	
	// Clicking on a link brings its corresponding section into view
	mainContent.on( "click", function( e ) {
		let target = $( e.target );
		if ( target.is( ".link" ) ) {
			let currentSectionNav = target.closest( ".main-nav" ), 
				nextSectionPos = currentSectionNav.find( ".link" ).index( target );
				
			mainContent.slick( "slickGoTo", nextSectionPos ); 
		}
		
	} );

} );



















