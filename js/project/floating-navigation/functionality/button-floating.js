function buttonFloatingHandlersInit( button, DISPLAY_SETTINGS, BUTTON_FLOATING_VISIBLE_CLASS ) {
	const { MIN_SCROLL_DOWN, TIME_VISIBLE } = DISPLAY_SETTINGS; 
	let timer = -1, 
		isMouseOverButton = false, 
		isButtonOn = false; 
		
	return {
		scroll: function( scrollDistance ) {
			// Prevents the scroll handler from starting a timer to hide the button, when the mouse is over the button
			if ( scrollDistance <= MIN_SCROLL_DOWN || isMouseOverButton ) {
				return; 
			}
			buttonOn();  
			buttonOff(); 
		}, 
		mouseOver: function() {
			clearTimeout( timer );
			isMouseOverButton = true;
		}, 
		mouseOut: function() {
			buttonOff();
			isMouseOverButton = false;
		}
		
	}; 
	
	function buttonOn() {
		if ( isButtonOn ) {
			clearTimeout( timer );
			return; 
		}
		button.addClass( BUTTON_FLOATING_VISIBLE_CLASS );
		isButtonOn = true;
	} 
	
	function buttonOff() {
		timer = setTimeout( function() {
			button.removeClass( BUTTON_FLOATING_VISIBLE_CLASS );
			isButtonOn = false;
		}, TIME_VISIBLE );
	}
	
}















/* $( document ).on( "scroll", function() {
	floatingButtonScrollHandler();
	// floatingNavScrollHandler();
} );

// When visible, and the mouse goes over the button, it stays visible
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
} );

// Floating button appears on screen, when scrolling the page on a predefined distance down
function floatingButtonScrollHandler() {
	let scrollDistance = $( document ).scrollTop();
	// Prevents the scroll handler from starting a timer to hide the button, when the mouse is over the button
	if ( scrollDistance <= MIN_SCROLL_DOWN || isMouseOverButton ) {
		return; 
	}
	buttonOn( buttonFloating, BUTTON_FLOATING_VISIBLE_CLASS ); 
	buttonOffAfter( FLOATING_BUTTON_TIME_VISIBLE, buttonFloating, BUTTON_FLOATING_VISIBLE_CLASS ); 
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
} */

















