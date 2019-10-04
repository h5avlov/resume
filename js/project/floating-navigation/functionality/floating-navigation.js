function floatingNavHandlersInit( floatingNavSettings, labelInteraction ) {
	const floatingNav = floatingNavSettings.element, 
		{ NAV_OPEN_CLASS, NAV_CLOSE_CLASS } = floatingNavSettings.classes; 
	let isFloatingNavOpen = false; 
	
	return {
		close: function() {
			labelInteraction.anyLabelOff();
			swapClasses( NAV_OPEN_CLASS, NAV_CLOSE_CLASS );
			isFloatingNavOpen = false;
		}, 
		open: function() {
			labelInteraction.menuLabelOnEnter();
			swapClasses( NAV_CLOSE_CLASS, NAV_OPEN_CLASS ); 
			isFloatingNavOpen = true;
		}, 
		scroll: function() {
			if ( isFloatingNavOpen ) {
				this.close(); 
			}
		}
		/* , 
		isOpen: function() {
			return isFloatingNavOpen; 
		} */
	};
	
	// Function to control floating nav state by removing a class and adding another, 
	// e.g. removing the "open" class and adding the "close" class
	function swapClasses( classA, classB ) {
		floatingNav.removeClass( classA ).addClass( classB );
	}
	
}















