
function floatingNavigationInit( targetContainer, linksContainerCopy, FLOATING_NAV_SETTINGS ) {
	
	const { CLOSE_BUTTON_CLASS, BUTTON_FLOATING_CLASS } = FLOATING_NAV_SETTINGS.BUILDING.CLASSES;
	
	const { BUTTON_FLOATING_VISIBLE_CLASS, LINK_CURRENT_CLASS, LABEL_VISIBLE_CLASS, MENU_LABEL_INITIAL_CLASS } = FLOATING_NAV_SETTINGS.FUNCTIONALITY.CLASSES; 
	
	// Floating navigation building and appending to the specified container element
	const { floatingNav, buttonFloating, buttonClose } = floatingNavigationBuilding( targetContainer, linksContainerCopy, FLOATING_NAV_SETTINGS.BUILDING );
	const navLinks = floatingNav.find( ".nav-links" ), 
		links = navLinks.find( ".link" );
		
	// const { floatingNav, buttonFloating, buttonClose } = floatingNavComponents;
	const labelInteraction = labelInteractionInit( LABEL_VISIBLE_CLASS, MENU_LABEL_INITIAL_CLASS );
	const floatingNavHandlers = floatingNavHandlersInit( floatingNav, labelInteraction, FLOATING_NAV_SETTINGS.FUNCTIONALITY.CLASSES ); 
	// const navLinksHandlers = navLinksHandlersInit( labelInteraction );
	// const linksHandlers = linksHandlersInit( labelInteraction, navigationUtilities ); 
	const buttonFloatingHandlers = buttonFloatingHandlersInit( buttonFloating, FLOATING_NAV_SETTINGS.FUNCTIONALITY.BUTTON_FLOATING_DISPLAY_SETTINGS, BUTTON_FLOATING_VISIBLE_CLASS ); 
	// const buttonCloseHandlers = buttonCloseHandlersInit( labelInteraction );
	
	
	
	$( document ).on( "scroll", function() {
		buttonFloatingHandlers.scroll( $( document ).scrollTop() );
		floatingNavHandlers.scroll();
	} );
	
	floatingNav.on( "click", function( e ) {
		const target = $( e.target );
		if ( target.is( buttonFloating ) ) {
			floatingNavHandlers.open();
		} else if ( target.is( buttonClose ) ) {
			floatingNavHandlers.close(); 
		} else if ( target.is( ".link" ) ) {
			floatingNavHandlers.close(); 
		}
		
	} );
	
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
	
	floatingNav.on( "mouseleave", function( e ) {
		const target = $( e.target );
		if ( target.is( buttonClose ) ) {
			labelInteraction.menuButtonLabelOn();
		} else if ( target.is( buttonFloating ) ) {
			buttonFloatingHandlers.mouseOut(); 
		}
	} );
	
	/* buttonClose.on( "mouseover", function() {
		labelInteraction.closeButtonLabelOn(); 
	} ); */
	
	buttonClose.on( "mouseleave", function() {
		labelInteraction.menuLabelOn(); 
	} );
	
	/* navLinks.on( "mouseover", function() {
		navLinksHandlers.mouseOver();
	} ); */
	
	navLinks.on( "mouseleave", function() {
		labelInteraction.menuLabelOn(); 
	} );
	
	/* navLinks.on( "click", function( e ) {
		navLinksHandlers.click( $( e.target ) );
	} ); */
	
	/* floatingNav.find( ".link" ).on( "mouseover", function( e ) {
		linksHandlers.mouseOver( $( e.target ) );

	} ); */
	
	/* $( ".link" ).on( "mouseleave", function() {
		linksHandlers.mouseOut();
	} ); */
	
	
	// const buttonOpenNavHandler = buttonOpenNavInit( floatingNavHandlers.open );
	$( ".open-nav-button" ).on( "click", function() {
		floatingNavHandlers.open(); 
	} );
	
	
	function getLinkPos( link ) {
		return links.index( link ); 
	}
	
}





















