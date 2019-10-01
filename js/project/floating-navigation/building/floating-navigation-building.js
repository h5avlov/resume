
function floatingNavigationBuilding( targetContainer, navigationLinksCopy, FLOATING_NAV_BUILDING_SETTINGS ) {
	
	const { FLOATING_NAV_CLASS, BUTTON_CLASS, BUTTON_FLOATING_CLASS, CLOSE_BUTTON_CLASS, LABEL_CLASS, MENU_LABEL_CLASS, LINK_LABEL_CLASS, CLOSE_BUTTON_LABEL_CLASS } = FLOATING_NAV_BUILDING_SETTINGS.CLASSES; 
	const { BUTTON_FLOATING_TEXT, CLOSE_BUTTON_TEXT, MENU_LABEL_TEXT } = FLOATING_NAV_BUILDING_SETTINGS.TEXT; 
	
	// Creating the additional structural elements, required for floating navigation proper functioning
	const floatingNav = $( "<div />" ).addClass( "floating-nav" ), 
		navWrapper = $( "<div />" ).addClass( "nav-wrapper" ), 
		navLinksWrapper = $( "<div />" ).addClass( "nav-links-wrapper" ), 
		labelWrapper = $( "<div />" ).addClass( "label-wrapper" ), 
		linkLabels = buildLinkLabelsList( navigationLinksCopy.find( ".link" ) ), 
		menuLabel = $( "<div />" ).addClass( LABEL_CLASS ).addClass( MENU_LABEL_CLASS ).text( MENU_LABEL_TEXT ), 
		closeButtonLabel = $( "<div />" ).addClass( LABEL_CLASS ).addClass( CLOSE_BUTTON_LABEL_CLASS ), 
		buttonFloating = $( "<button />" ).addClass( BUTTON_FLOATING_CLASS ).addClass( BUTTON_CLASS ).text( BUTTON_FLOATING_TEXT ), 
		buttonClose = $( "<button />" ).addClass( CLOSE_BUTTON_CLASS ).addClass( BUTTON_CLASS ).text( CLOSE_BUTTON_TEXT );
		
	// The floating navigation is initially a copy of the main navigation links list
	let floatingNavBase = navigationLinksCopy.appendTo( targetContainer );
	
	// Building the final structure of the floating navigation and placing it in the main navigation container
	navLinksWrapper.append( floatingNavBase ).append( buttonClose );
	labelWrapper.append( linkLabels ).append( menuLabel ).append( closeButtonLabel );
	navWrapper.append( navLinksWrapper ).append( labelWrapper );
	floatingNav.append( navWrapper ).append( buttonFloating );
	targetContainer.append( floatingNav );
	
	return {
		floatingNav: floatingNav, 
		buttonFloating: buttonFloating, 
		buttonClose: buttonClose
	};
				
	// Mapping each link to a preview element, containing the text of the link
	function buildLinkLabelsList( links ) {
		let list = [];
		links.each( function( pos, link ) { 
			let label = $( "<div />" ).addClass( LABEL_CLASS ).addClass( LINK_LABEL_CLASS ).text( $( link ).text() ); 
			list.push( label ); 
		} );
		return list;
	}
	
}


















