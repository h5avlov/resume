$( document ).ready( function() {
	
	const mainNav = $( ".main-nav" ), 
		navLinks = $( ".main-nav .nav-links" ), 
		mainContent = $( "main" ), 
		buttonOpenNav = mainNav.find( ".open-nav-button" );

	// Turning off the default link behaviour to make them button-like
	preventDefaultOn( "click", ".link" );
	
	// Turning the content sections into slides to animate a transition between them
	contentAccess( $( "main" ) );
	
	// Floating navigation loading
	floatingNavigationInit( mainNav, navLinks );
	
	const floatingNav = $( ".floating-nav" );
	
	// Main navigation is linked to the content slider
	mainNavigationInit( {
		nav: mainNav,
		content: mainContent, 
		buttonOpenNav: buttonOpenNav, 
		floatingNav: floatingNav
	} );
	
} );
	
	
	
	
	
	





























