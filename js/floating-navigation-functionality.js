
function floatingNavigationFunctionality() {
	let floatingNav = $( ".floating-nav" ), 
		buttonFloating = $( ".floating-button" ), 
		buttonClose = $( ".floating-nav .close-nav-button" ), 
		label = $( ".preview-wrapper .label" ), 
		timer = 0, 
		isMouseOverButton = false; 
	
	$( document ).on( "scroll", function() {
		floatingButtonScrollHandler();
		floatingNavScrollHandler();
	} );
	
	// When the mouse goes over the button, it stays visible
	buttonFloating.on( "mouseover", function() {
		clearTimeout( timer );
		isMouseOverButton = true;
	} );
	
	// Placing the mouse out of the button hides it after the specified time interval
	buttonFloating.on( "mouseleave", function() { 
		buttonOffAfter( FLOATING_BUTTON_TIME_VISIBLE, buttonFloating, BUTTON_FLOATING_VISIBLE_CLASS );
		isMouseOverButton = false;
	} );
	
	// Opens the floating nav on click
	buttonFloating.on( "click", function() {
		openFloatingNav( floatingNav ); 
	} );
	
	// Closes the floating navigation on click over the close button
	buttonClose.on( "click", function() {
		closeFloatingNav( floatingNav ); 
	} );
	
	// Closes floating navigation on click over a link
	floatingNav.on( "click", function( e ) {
		if ( $( e.target ).is( ".link" ) ) {
			closeFloatingNav( floatingNav );
		}
	} );
	
	
	$( ".link" ).on( "mouseover", function() {
		label.removeClass( LABEL_INITIAL_CLASS ).removeClass( LABEL_VISIBLE_CLASS );
		getCorrespondingPreview( $( this ) ).addClass( PREVIEW_VISIBLE_CLASS );
	} );
	
	$( ".link" ).on( "mouseleave", function() {
		getCorrespondingPreview( $( this ) ).removeClass( PREVIEW_VISIBLE_CLASS );
	} );
	
	$( ".nav-links" ).on( "mouseleave", function( e ) {
		label.addClass( LABEL_VISIBLE_CLASS );
	} );
	
	
	$( ".close-nav-button" ).on( "mouseover", function() {
		$( ".label" ).removeClass( LABEL_INITIAL_CLASS ).removeClass( LABEL_VISIBLE_CLASS );
		$( ".close-button-preview" ).addClass( CLOSE_BUTTON_PREVIEW_VISIBLE_CLASS );
	} );
	
	$( ".close-nav-button" ).on( "mouseout", function() {
		$( ".label" ).addClass( LABEL_VISIBLE_CLASS );
		$( ".close-button-preview" ).removeClass( CLOSE_BUTTON_PREVIEW_VISIBLE_CLASS );
	} );
	
	
	function floatingNavScrollHandler() {
		if ( isFloatingNavOpen() ) {
			closeFloatingNav( floatingNav );
		}
	}
	
	function floatingButtonScrollHandler() {
		let scrollDistance = $( document ).scrollTop();
		// Prevents the scroll handler from starting a timer to hide the button, when the mouse is over the button
		if ( scrollDistance <= MIN_SCROLL_DOWN || isMouseOverButton ) {
			return; 
		}
		buttonOn( buttonFloating, BUTTON_FLOATING_VISIBLE_CLASS ); 
		buttonOffAfter( FLOATING_BUTTON_TIME_VISIBLE, buttonFloating, BUTTON_FLOATING_VISIBLE_CLASS ); 
	}
	

	
	// Base functions
	
	function isFloatingNavOpen() {
		return floatingNav.hasClass( NAV_OPEN_CLASS );
	}
	
	function getCorrespondingPreview( link ) {
		let links = link.closest( ".nav-links" ).find( ".link" ), 
			linkPos = links.index( link ), 
			preview = $( ".preview" ).eq( linkPos );
		return preview;
	}
	
	function linkPreviewOn( linkPreview ) {
		linkPreview.addClass( PREVIEW_VISIBLE_CLASS );
	}
	
	function linkPreviewOff( linkPreview ) {
		linkPreview.removeClass( PREVIEW_VISIBLE_CLASS );
	}
	
	function openFloatingNav( floatingNav ) {
		label.remove( LABEL_VISIBLE_CLASS ).remove( LABEL_INITIAL_CLASS ).addClass( LABEL_INITIAL_CLASS );
		changeClasses( floatingNav, NAV_CLOSE_CLASS, NAV_OPEN_CLASS );
	}
	
	function closeFloatingNav( floatingNav ) {
		label.removeClass( LABEL_INITIAL_CLASS ).removeClass( LABEL_VISIBLE_CLASS );
		changeClasses( floatingNav, NAV_OPEN_CLASS, NAV_CLOSE_CLASS );
	}
	
	function changeClasses( element, classA, classB ) {
		element.removeClass( classA );
		element.addClass( classB );
	}
	
	function buttonOn( button, visibleClassName ) {
		if ( timer > 0 ) {
			clearTimeout( timer );
		}
		button.addClass( visibleClassName );
	}
	
	function buttonOffAfter( buttonTimeOn, button, visibleClassName ) {
		timer = setTimeout( function() {
			button.removeClass( visibleClassName );
		}, buttonTimeOn );
	}
	
}





















