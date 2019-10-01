
function floatingNavigationFunctionality( navElements,  ) {
	const floatingNav = navElements.floatingNav, 
		buttonOpen = navElements.buttonFloating, 
		buttonClose = navElements.buttonClose, 
		label = navElements.label;
	/* let timer = 0, 
		isMouseOverButton = false;  */
	
	
	/* // When visible, and the mouse goes over the button, it stays visible
	buttonFloating.on( "mouseover", function() {
		clearTimeout( timer );
		isMouseOverButton = true;
	} );
	
	// Placing the mouse out of the button hides it after the specified time interval
	buttonFloating.on( "mouseleave", function() { 
		buttonOffAfter( FLOATING_BUTTON_TIME_VISIBLE, buttonFloating, BUTTON_FLOATING_VISIBLE_CLASS );
		isMouseOverButton = false;
	} );
	
	// Opens the floating navigation on floating button click
	buttonFloating.on( "click", function() {
		openFloatingNav( floatingNav ); 
	} ); */
	
	/* // Closes the floating navigation on close button click
	buttonClose.on( "click", function() {
		closeFloatingNav( floatingNav ); 
	} ); */
	
	// Closes floating navigation on click over a navigation button
	/* floatingNav.on( "click", function( e ) {
		floatingNavClickHandler();
	} ); */
	
	const labelInteraction = labelInteractionInit();
	
	const floatingNav = floatingNavEventHandlers(); 
	const navLinks = navLinks( labelInteraction );
	const links = links( labelInteraction, utilities.nav.navigationClickHandler, utilities.nav.getTargetSectionPos ); 
	const buttonOpen = buttonOpen();
	const buttonClose = buttonCloseEventHandlers( labelInteraction );
	
	
	
	$( document ).on( "scroll", function() {
		buttonOpen.scroll( $( document ).scrollTop() );
		if ( floatingNav.isOpen() ) {
			floatingNav.close(); 
		}
	} );
	
	floatingNav.on( "click", function() {
		if ( target.is( ".floating-button" ) ) {
			floatingNav.open();
		} else if ( target.is( ".close-nav-button" ) ) {
			floatingNav.close(); 
		} else if ( target.is( ".link" ) ) {
			navLinks.click();
		}
		
	} );
	
	navLinks.on( "mouseover", function() {
		navLinks.mouseOver();
	} );
	
	navLinks.on( "mouseleave", function() {
		navLinks.mouseOut();
	} );
	
	navLinks.on( "click", function( e ) {
		navLinks.click( $( e.target );
	} );
	
	$( ".link" ).on( "mouseover", function( e ) {
		links.mouseOver( $( e.target ) );

	} );
	
	$( ".link" ).on( "mouseleave", function() {
		links.mouseOut();
	} );
	
	
	
	
	
	
	
	/* // Displays the text of the button as a large label as a way to make clear its target
	$( ".link" ).on( "mouseover", function() {
		buttonMouseOverHandler( $( this ) ); 
	} );
	
	// Hides the button preview when mouse pointer exits it
	$( ".link" ).on( "mouseleave", function() {
		buttonMouseLeaveHandler( $( this ) ); 
	} );
	
	// Initial text is displayed before and after a button is visited
	$( ".nav-links" ).on( "mouseover", function() {
		navLinksMouseOverHandler( $( this ) ); 
	} );
	
	// Initial text is displayed before and after a button is visited
	$( ".nav-links" ).on( "mouseleave", function( e ) {
		navLinksMouseLeaveHandler( $( this ) ); 
	} ); */
	
	
	// Event handlers, assigning the mouse over behaviour on the navigation buttons
	
	/* function buttonMouseOutHandler( button ) {
		labelOff( getCorrespondingPreview( links, link, previews ) ); 
	}
	
	function buttonMouseOverHandler( button ) {
		labelOn( getCorrespondingPreview( button ) );
	}
	
	function navLinksMouseOverHandler( navLinks ) {
		labelOff( navLinks );
	}
	
	function navLinksMouseLeaveHandler( navLinks ) {
		labelOn( navLinks );
	} */
	
	/* function labelOn( label ) {
		label.addClass( PREVIEW_VISIBLE_CLASS );
	}
	
	function labelOff( label ) {
		label.removeClass( LABEL_INITIAL_CLASS ).removeClass( LABEL_VISIBLE_CLASS );
	}
	
	function floatingNavClickHandler(  ) {
		const mainContent =  $( "main" ), 
			target = $( e.target ), 
			scrollTarget = $( ".main-nav" ); 
		navigationClickHandler( floatingNav, target, scrollTarget, mainContent, 200 ); 
	} */
	
	/* // Displays a preview of the close button function
	$( ".close-nav-button" ).on( "mouseover", function() {
		$( ".label" ).removeClass( LABEL_INITIAL_CLASS ).removeClass( LABEL_VISIBLE_CLASS );
		$( ".close-button-preview" ).addClass( CLOSE_BUTTON_PREVIEW_VISIBLE_CLASS );
	} );
	
	// Hides the close button preview
	$( ".close-nav-button" ).on( "mouseout", function() {
		$( ".label" ).addClass( LABEL_VISIBLE_CLASS );
		$( ".close-button-preview" ).removeClass( CLOSE_BUTTON_PREVIEW_VISIBLE_CLASS );
	} ); */
	
	
	// When the floating navigation is on, scrolling down or up closes it
	/* function floatingNavScrollHandler() {
		if ( isFloatingNavOpen() ) {
			closeFloatingNav( floatingNav );
		}
	} */
	
	/* // Floating button appears on screen, when scrolling the page on a predefined distance down
	function floatingButtonScrollHandler() {
		let scrollDistance = $( document ).scrollTop();
		// Prevents the scroll handler from starting a timer to hide the button, when the mouse is over the button
		if ( scrollDistance <= MIN_SCROLL_DOWN || isMouseOverButton ) {
			return; 
		}
		buttonOn( buttonFloating, BUTTON_FLOATING_VISIBLE_CLASS ); 
		buttonOffAfter( FLOATING_BUTTON_TIME_VISIBLE, buttonFloating, BUTTON_FLOATING_VISIBLE_CLASS ); 
	} */
	

	
	// Base functions
	
	/* const state = function() {
		const timer;
		return {
			isOpen: function( element ) {
				return element.hasClass( NAV_OPEN_CLASS );
			}, 
			labelOn: function( label ) {
				label.addClass( PREVIEW_VISIBLE_CLASS );
			}, 
			labelOff: function( label ) {
				label.removeClass( LABEL_INITIAL_CLASS ).removeClass( LABEL_VISIBLE_CLASS );
			}, 
			getCorrespondingLabel: function( link, links, labels ) {
				const linkPos = links.index( link ), 
					label = labels.eq( linkPos );
				return label;
			}
		}
	}; */
	
	/* function isFloatingNavOpen() {
		return floatingNav.hasClass( NAV_OPEN_CLASS );
	}
	
	function getCorrespondingLabel( link, links, previews ) {
		let linkPos = links.index( link ), 
			preview = previews.eq( linkPos );
		return preview;
	}
	
	function linkPreviewOn( linkPreview ) {
		linkPreview.addClass( PREVIEW_VISIBLE_CLASS );
	}
	
	function linkPreviewOff( linkPreview ) {
		linkPreview.removeClass( PREVIEW_VISIBLE_CLASS );
	}
	
	function labelOn( label ) {
		label.addClass( PREVIEW_VISIBLE_CLASS );
	}
	
	function labelOff( label ) {
		label.removeClass( LABEL_INITIAL_CLASS ).removeClass( LABEL_VISIBLE_CLASS );
	}
	
	function floatingNavClickHandler(  ) {
		const mainContent =  $( "main" ), 
			target = $( e.target ), 
			scrollTarget = $( ".main-nav" ); 
		navigationClickHandler( floatingNav, target, scrollTarget, mainContent, 200 ); 
	} */
	
	/* function openFloatingNav( floatingNav ) {
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
	} */
	
	/* function buttonOn( button, visibleClassName ) {
		if ( timer > 0 ) {
			clearTimeout( timer );
		}
		button.addClass( visibleClassName );
	}
	
	function buttonOffAfter( buttonTimeOn, button, visibleClassName ) {
		timer = setTimeout( function() {
			button.removeClass( visibleClassName );
		}, buttonTimeOn );
	} */
	
}





















