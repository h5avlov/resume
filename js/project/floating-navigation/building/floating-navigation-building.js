
function floatingNavigationBuilding( targetContainer, navigationLinksCopy, floatingNavSettings ) {
	// Getting data from the settings object
	const {
		FLOATING_NAV_CLASS, 
		NAV_LINKS_WRAPPER_CLASS, 
		NAV_WRAPPER_CLASS, 
		
		BUTTON_CLASS, 
		BUTTON_FLOATING_CLASS, 
		BUTTON_FLOATING_TEXT,
		BUTTON_CLOSE_CLASS, 
		BUTTON_CLOSE_TEXT, 
		
		LABEL_CLASS, 
		LABEL_WRAPPER_CLASS, 
		MENU_LABEL_CLASS, 
		MENU_LABEL_TEXT, 
		CLOSE_BUTTON_LABEL_CLASS, 
		LINK_LABEL_CLASS
	} = floatingNavSettings;
	
	// Creating the additional structural elements, required for floating navigation proper functioning
	const floatingNav = $( "<div />" ).addClass( FLOATING_NAV_CLASS ), 
		navWrapper = $( "<div />" ).addClass( NAV_WRAPPER_CLASS ), 
		navLinksWrapper = $( "<div />" ).addClass( NAV_LINKS_WRAPPER_CLASS ), 
		labelWrapper = $( "<div />" ).addClass( LABEL_WRAPPER_CLASS ), 
		links = navigationLinksCopy.find( ".link" ), 
		linkLabels = buildLinkLabelsList( links ), 
		menuLabel = $( "<div />" ).addClass( LABEL_CLASS ).addClass( MENU_LABEL_CLASS ).text( MENU_LABEL_TEXT ), 
		closeButtonLabel = $( "<div />" ).addClass( LABEL_CLASS ).addClass( CLOSE_BUTTON_LABEL_CLASS ), 
		buttonFloating = $( "<button />" ).addClass( BUTTON_FLOATING_CLASS ).addClass( BUTTON_CLASS ).text( BUTTON_FLOATING_TEXT ), 
		buttonClose = $( "<button />" ).addClass( BUTTON_CLOSE_CLASS ).addClass( BUTTON_CLASS ).text( BUTTON_CLOSE_TEXT );
		
	// The floating navigation is initially a copy of the main navigation links list
	let floatingNavBase = navigationLinksCopy.appendTo( targetContainer );
	
	// Building the final structure of the floating navigation and placing it in the main navigation container
	navLinksWrapper.append( floatingNavBase ).append( buttonClose );
	labelWrapper.append( linkLabels ).append( menuLabel ).append( closeButtonLabel );
	navWrapper.append( navLinksWrapper ).append( labelWrapper );
	floatingNav.append( navWrapper ).append( buttonFloating );
	targetContainer.append( floatingNav );
	
	// Returns references to the created elements
	return {
		floatingNav, 
		navWrapper, 
		navLinksWrapper, 
		labelWrapper, 
		navLinks: navigationLinksCopy, 
		links, 
		linkLabels, 
		menuLabel, 
		closeButtonLabel, 
		buttonFloating, 
		buttonClose
	};
				
	// Function for mapping each link to a preview element, containing the text of the link
	function buildLinkLabelsList( links ) {
		let list = [];
		links.each( function( pos, link ) { 
			let label = $( "<div />" ).addClass( LABEL_CLASS ).addClass( LINK_LABEL_CLASS ).text( $( link ).text() ); 
			list.push( label ); 
		} );
		return list;
	}
	
}


















