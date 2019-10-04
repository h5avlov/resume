
function floatingNavigationInit( targetContainer, linksContainerCopy, floatingNavSettings ) {
	
	// Getting data from the settings object
	const {
		NAV_OPEN_CLASS, 
		NAV_CLOSE_CLASS, 
		
		LABEL_VISIBLE_CLASS,  
		MENU_LABEL_INITIAL_CLASS, 
		
		BUTTON_FLOATING_VISIBLE_CLASS, 
		MIN_SCROLL_DOWN,
		BUTTON_FLOATING_TIME_VISIBLE 
	} = floatingNavSettings;
	
	// Floating navigation building and appending to the specified container element
	floatingNavElements = floatingNavigationBuilding( targetContainer, linksContainerCopy, floatingNavSettings );
	
	// The navigation building function returns references to the elements it created 
	const { floatingNav, 
		buttonFloating, 
		buttonClose, 
		navLinks, 
		links, 
		linkLabels, 
		menuLabel, 
		closeButtonLabel } = floatingNavElements; 
		
	// Initializing an object, holding the floating navigation behaviour on mouse over
	const labelInteraction = labelInteractionInit( {
		labels: { linkLabels, menuLabel, closeButtonLabel }, 
		classes: { LABEL_VISIBLE_CLASS, MENU_LABEL_INITIAL_CLASS } 
	} );
	
	// Initializing an object, holding floating navigation behaviour on click
	const floatingNavHandlers = floatingNavHandlersInit( { 
		element: floatingNav, 
		classes: { NAV_OPEN_CLASS, NAV_CLOSE_CLASS } 
	}, labelInteraction ); 
	
	// Initializing an object, holding floating button behaviour 
	const buttonFloatingHandlers = buttonFloatingHandlersInit( {
		element: buttonFloating, 
		classes: { BUTTON_FLOATING_VISIBLE_CLASS }, 
		displaySettings: { MIN_SCROLL_DOWN, BUTTON_FLOATING_TIME_VISIBLE }
	} ); 
	
	
	// When the page is scrolled, 
	// floating button may appear 
	// and floating navigation is closed in case it's open
	$( document ).on( "scroll", function() {
		buttonFloatingHandlers.scroll( $( document ).scrollTop() );
		floatingNavHandlers.scroll();
	} );
	
	// Clicking: 
	floatingNav.on( "click", function( e ) {
		const target = $( e.target );
		if ( target.is( buttonFloating ) ) {
			// on the floating button opens the floating navigation
			floatingNavHandlers.open();
		} else if ( target.is( buttonClose ) ) {
			// on the close-navigation-button closes the floating navigation
			floatingNavHandlers.close(); 
		} else if ( target.is( ".link" ) ) {
			// on a link hides the floating navigation and the selected section is brought to view
			floatingNavHandlers.close(); 
		}
		
	} );
	
	// When the cursor is placed over a link or the close button within the floating navigation,
	// a label is shown to visualize the associated with clicking on it action 
	floatingNav.on( "mouseover", function( e ) {
		const target = $( e.target );
		if ( target.is( buttonClose ) ) {
			labelInteraction.closeButtonLabelOn(); 
		} else if ( target.is( buttonFloating ) ) {
			buttonFloatingHandlers.mouseOver(); 
		} else if ( target.is( ".link" ) ) {
			const linkPos = getLinkPos( target );
			labelInteraction.labelOn( labelInteraction.getLinkLabel( linkPos ) );
		}
		
	} );
	
	// When the cursor leaves the floating button,
	// the timer to hide the button is turned on again
	floatingNav.on( "mouseleave", function( e ) {
		const target = $( e.target );
		if ( target.is( buttonFloating ) ) {
			buttonFloatingHandlers.mouseOut(); 
		}
	} );
	
	// When the cursor leaves the close button,
	// its own label is hidden and the initial navigation label is shown
	buttonClose.on( "mouseleave", function() {
		labelInteraction.menuLabelOn(); 
	} );
	
	// When the cursor leaves the nav links container,
	// the initial navigation label is shown
	navLinks.on( "mouseleave", function() {
		labelInteraction.menuLabelOn(); 
	} );
	
	
	return {
		floatingNav: floatingNav, 
		openFloatingNavigation: function() {
			floatingNavHandlers.open();
		}
	}; 
	
	
	// Finds the position of link in a list of links
	function getLinkPos( link ) {
		return links.index( link ); 
	}
	
}





















