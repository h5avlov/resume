
/* function mainNavigationInit( args ) {
	let mainNav = args.nav, 
		mainContent = args.content;
	
	// Moving navigation from header to main on top of the content sections
	mainContent.prepend( mainNav );
	
	mainNav.on( "click", function( e ) {
		navClickHandler( mainNav, $( e.target ), mainContent );
	} );
} */

function mainNavigationInit( args ) {
	const mainNav = args.nav, 
		mainContent = args.content, 
		buttonOpenNav = args.buttonOpenNav, 
		floatingNav = args.floatingNav;
	
	// Moving navigation from header to main on top of the content sections
	mainContent.prepend( mainNav );
	
	buttonOpenNav.on( "click", function() {
		openFloatingNav( floatingNav ); 
	} );
	
	mainNav.on( "click", function( e ) {
		navigationClickHandler( $( e.target ), mainNav, mainContent );
	} );
	
	mainNavHighlighting( mainNav.find( ".link" ), mainContent );
	
	function mainNavHighlighting( links, slider ) {
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
	}
	
}




















