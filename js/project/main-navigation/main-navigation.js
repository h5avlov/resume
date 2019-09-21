
function mainNavigationInit( args ) {
	const mainNav = args.nav, 
		mainContent = args.content, 
		buttonOpenNav = args.buttonOpenNav, 
		floatingNav = args.floatingNav;
	
	// Moving navigation from header to main on top of the content sections, 
	// simplifying its presentation
	mainContent.prepend( mainNav );
	
	// Button to replace the main navigation 
	// and open floating navigation on small screens
	buttonOpenNav.on( "click", function() {
		openFloatingNav( floatingNav ); 
	} );
	
	// Clicking a button goes to the corresponding section
	mainNav.on( "click", function( e ) {
		navigationClickHandler( $( e.target ), mainNav, mainContent );
	} );
	
	// Function to highlight the button in the navigation, corresponding to the current section
	( function mainNavHighlighting( links, slider ) {
		let currentLink; 
		currentLink = highlightCurrentLink( links, slider.slick( "slickCurrentSlide" ) );
		mainContent.on( "afterChange", function() {
			currentLink = highlightCurrentLink( links, slider.slick( "slickCurrentSlide" ) );
		} );
		
		function highlightCurrentLink( links, currentSlidePos ) {
			if ( currentLink !== undefined ) {
				currentLink.removeClass( CURRENT_LINK_CLASS );
			}
			return getCurrentLink( links, currentSlidePos ).addClass( CURRENT_LINK_CLASS );
		}
		
		function getCurrentLink( links, currentSlidePos ) {
			return links.eq( currentSlidePos ); 
		}
	}( mainNav.find( ".link" ), mainContent ) );
	
}




















