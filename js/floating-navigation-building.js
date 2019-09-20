function floatingNavigationBuilding( mainNav, navLinks ) {
	
	// Creating the additional structural elements, required for floating navigation proper functioning
	const floatingNav = $( "<div />" ).addClass( "floating-nav" ), 
		navWrapper = $( "<div />" ).addClass( "nav-wrapper" ), 
		navLinksWrapper = $( "<div />" ).addClass( "nav-links-wrapper" ), 
		previewWrapper = $( "<div />" ).addClass( "preview-wrapper" ), 
		preview = previewList( navLinks.find( ".link" ) ), 
		label = $( "<div />" ).addClass( LABEL_CLASS ).text( LABEL_TEXT ), 
		closeButtonPreview = $( "<div />" ).addClass( CLOSE_BUTTON_PREVIEW_CLASS ), 
		buttonFloating = $( "<button />" ).addClass( BUTTON_FLOATING_CLASS ).addClass( BUTTON_CLASS ).text( BUTTON_FLOATING_TEXT ), 
		closeNavButton = $( "<button />" ).addClass( CLOSE_NAV_BUTTON_CLASS ).addClass( BUTTON_CLASS ).text( CLOSE_NAV_BUTTON_TEXT );
		
	// The floating navigation is initially a copy of the main navigation links list
	let floatingNavBase = navLinks.clone().appendTo( mainNav );
	
	// Building the final structure of the floating navigation and placing it in the main navigation container
	navLinksWrapper.append( floatingNavBase ).append( closeNavButton );
	previewWrapper.append( preview ).append( label ).append( closeButtonPreview );
	navWrapper.append( navLinksWrapper ).append( previewWrapper );
	floatingNav.append( navWrapper ).append( buttonFloating );
	mainNav.append( floatingNav );
				
	// Mapping each link to a preview element, containing the text of the link
	function previewList( links ) {
		let previewList = [];
		links.each( function( pos, link ) { 
			let preview = $( "<div />" ).addClass( "preview" ).text( $( link ).text() ); 
			previewList.push( preview ); 
		} );
		return previewList;
	}
	
}


















