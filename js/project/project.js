$( document ).ready( function() {
	
	// Time to delay page rendering, depending on the intro animation duration
	const pageLoadDelay = 0;
	
	// Delaying page rendering to prevent interfering when playing the intro animation
	setTimeout( function() { 
	
		// Using Handlebars to load templates
		renderTemplates();
		
		// Referencing some important elements to use later on
		const mainNav = $( ".main-nav" ), 
			navLinks = $( ".main-nav .nav-links" ), 
			mainContent = $( "main" ), 
			buttonOpenNav = mainNav.find( ".open-nav-button" );

		// Turning off the default link behaviour to make them button-like
		preventDefaultOn( "click", ".link" );
		
		// Turning the content sections into slides to animate a transition between them
		contentAccess( mainContent );
		
		// Floating navigation loading
		floatingNavigationInit( mainNav, navLinks );
		// and getting a reference to
		const floatingNav = $( ".floating-nav" );
		
		// Main navigation is linked to the content to allow controlling it
		mainNavigationInit( {
			nav: mainNav,
			content: mainContent, 
			buttonOpenNav: buttonOpenNav, 
			floatingNav: floatingNav
		} );
		
		graphicRepresentationInit();
	
	}, pageLoadDelay );
	
} );
	
	
	
	
	
	





























