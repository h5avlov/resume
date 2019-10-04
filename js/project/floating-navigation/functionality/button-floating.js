function buttonFloatingHandlersInit( buttonFloatingSettings ) {
	const { MIN_SCROLL_DOWN, BUTTON_FLOATING_TIME_VISIBLE } = buttonFloatingSettings.displaySettings, 
		{ BUTTON_FLOATING_VISIBLE_CLASS } = buttonFloatingSettings.classes, 
		buttonFloating = buttonFloatingSettings.element; 
	let timer = -1, 
		isMouseOverButton = false, 
		isButtonOn = false; 
		
	return {
		// Page scroll button behaviour: 
		// button is shown for a specified time interval 
		scroll: function( scrollDistance ) {
			// Prevents the scroll handler from starting a timer to hide the button, 
			// when the page is scrolled down under a specified minimal distance, 
			// or the mouse is over the button
			if ( scrollDistance <= MIN_SCROLL_DOWN || isMouseOverButton ) {
				return; 
			}
			buttonOn();  
			buttonOff(); 
		}, 
		// Mouse over button behaviour: 
		// the timer, hiding the button is stopped
		mouseOver: function() {
			clearTimeout( timer );
			isMouseOverButton = true;
		}, 
		// Mouse out button behaviour:
		//the timer is started again
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
		buttonFloating.addClass( BUTTON_FLOATING_VISIBLE_CLASS );
		isButtonOn = true;
	} 
	
	function buttonOff() {
		timer = setTimeout( function() {
			buttonFloating.removeClass( BUTTON_FLOATING_VISIBLE_CLASS );
			isButtonOn = false;
		}, BUTTON_FLOATING_TIME_VISIBLE );
	}
	
}
















