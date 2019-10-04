
// Waiting the DOM to be loaded
$( function() {
	
	const utilities = utilitiesInit();
	utilities.callWhenLoaded( ".summary .background-image", function() {
		$( ".intro" ).addClass( "play" );
	} );
	
	// Delaying page rendering to prevent interfering when playing the intro animation
	setTimeout( function() { 
	
		// Using Handlebars to load templates
		renderTemplates();

		// Turning off the default link behaviour to make them button-like
		utilities.preventDefaultOn( "click", ".link" );
		
		// Referencing some important elements to use later on
		const mainNav = $( ".main-nav" ), 
			navLinks = mainNav.find( ".nav-links" ), 
			links = navLinks.find( ".link" ), 
			mainContent = $( "main" ), 
			footer = $( "footer" ), 
			openNavButton = mainNav.find( ".open-nav-button" );
		
		// Turning the content sections into slides to animate a transition between them
		contentAccess( mainContent ); 
		
		// Main navigation is linked to the content to allow controlling it
		mainNavigationInit( {
			navigation: mainNav,
			content: mainContent
		} );
		
		// Floating navigation loading
		// and getting a reference to it
		// and its open method to use with the open button click handler
		const { floatingNav, openFloatingNavigation } = floatingNavigationInit( footer, navLinks.clone(), floatingNavSettings );
		
		const navigationUtilities = navigationUtilitiesInit( {
			navigations: [ mainNav, floatingNav ], 
			content: mainContent, 
			sectionCurrentClass: "section-open", 
			sectionIdleClass: "section-close", 
			scrollTarget: mainNav, 
			linkCurrentClass: SETTINGS.LINK_CURRENT_CLASS
		} ); 
		
		$( mainNav ).add( floatingNav ).on( "click", function( e ) {
			const target = $( e.target );
			if ( target.is( ".link" ) ) {
				// Clicking on main navigation link or floating navigation link does the same thing
				navigationUtilities.clickHandler( $( this ), target );
			} else if ( target.is( openNavButton ) ) {
				// Open nav button opens floating navigation on click
				openFloatingNavigation();
			} 
		} );
		
		// Graphic representation plugin initializing
		graphicRepresentationInit();
	
	}, SETTINGS.PAGE_LOAD_DELAY );
	
} );
	
	
	
	
	
	





























