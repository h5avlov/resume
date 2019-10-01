
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
			footer = $( "footer" );
		
		// Turning the content sections into slides to animate a transition between them
		contentAccess( mainContent ); 
		
		// Main navigation is linked to the content to allow controlling it
		mainNavigationInit( {
			navigation: mainNav,
			links: links, 
			content: mainContent/* , 
			navigationUtilities: navigationUtilities */
			/* , 
			classNames: {
				currentLink: SETTINGS.LINK.LINK_CURRENT_CLASS
			} */
		} );
		
		// Floating navigation loading
		floatingNavigationInit( footer, navLinks.clone(), FLOATING_NAV_SETTINGS );
		// and getting a reference to
		const floatingNav = $( ".floating-nav" ); 
		
		const navigationUtilities = navigationUtilitiesInit( {
			navigations: [ mainNav, floatingNav ], 
			content: mainContent, 
			sectionCurrentClass: "section-open", 
			sectionIdleClass: "section-close", 
			scrollTarget: mainNav, 
			linkCurrentClass: SETTINGS.LINK.LINK_CURRENT_CLASS
		} ); 
		
		$( mainNav ).add( floatingNav ).on( "click", function( e ) {
			const target = $( e.target );
			if ( !target.is( ".link" ) ) {
				return; 
			}
			navigationUtilities.clickHandler( $( this ), target );
		} );
		
		graphicRepresentationInit();
		
		// smoothScrollInit( floatingNav, mainNav );
	
	}, SETTINGS.PAGE.PAGE_LOAD_DELAY );
	
} );
	
	
	
	
	
	





























