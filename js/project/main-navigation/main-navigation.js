function mainNavigationInit( args ) {
	const mainNav = args.navigation, 
		links = args.links, 
		mainContent = args.content, 
		buttonOpenNav = mainNav.find( ".open-nav-button" ), 
		currentLinkClass = args.currentLink;
		
	/* const navigationUtilities = navigationUtilitiesInit( {
		navigation: mainNav,
		links: links,
		currentLinkClass: currentLinkClass, 
		content: mainContent
	} ); */
	
	// Moving navigation from header to main on top of the content sections, 
	// simplifying its presentation
	mainContent.prepend( mainNav );
	
	// Clicking a button goes to the corresponding section
	/* mainNav.on( "click", function( e ) {
		const target = $( e.target ); 
		
		// navigationClickHandler( mainNav, target, scrollTarget, mainContent, 200 ); 
		navigationUtilities.clickHandler( target );
	} ); */
	
	// Function to highlight the button in the navigation, corresponding to the current section
	/* ( function mainNavHighlighting( links, slider ) {
		let nextLink; 
		mainContent.on( "beforeChange", function( event, slick, currentSlidePos, nextSlidePos ) {
			nextLink = highlightNextLink( links, nextSlidePos );
		} );
		
		function highlightNextLink( links, nextSlidePos ) {
			if ( nextLink !== undefined ) {
				nextLink.removeClass( currentLinkClass );
			}
			return getNextLink( links, nextSlidePos ).addClass( currentLinkClass );
		}
		
		function getNextLink( links, nextSlidePos ) {
			return links.eq( nextSlidePos ); 
		} */
		
		/* function getSlidePos( slide ) {
			alert( slide );
			
			const slides = slider.find( ".slide" );
			return slides.index( slide );
			
		} */
		
		/* function highlightCurrentLink( links, currentSlidePos ) {
			if ( currentLink !== undefined ) {
				currentLink.removeClass( currentLinkClass );
			}
			return getCurrentLink( links, currentSlidePos ).addClass( currentLinkClass );
		}
		
		function getCurrentLink( links, currentSlidePos ) {
			return links.eq( currentSlidePos ); 
		} */
	/* }( links, mainContent ) ); */
	
}




















