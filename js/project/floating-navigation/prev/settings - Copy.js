
// Specifying class names, mainly used for triggering animations 
// and values
const FLOATING_NAV_SETTINGS = {
	
	FLOATING_NAV_CLASS: "floating-nav", 
	NAV_OPEN_CLASS: "nav-open", 
	NAV_CLOSE_CLASS: "nav-close", 
	
	BUTTON_FLOATING: {
		BUTTON_FLOATING_CLASS: "floating-button", 
		BUTTON_FLOATING_VISIBLE_CLASS: "visible", 
		BUTTON_FLOATING_TEXT: MAIN_NAV.OPEN_NAV_BUTTON.OPEN_NAV_BUTTON_TEXT, 
		
		DISPLAY_SETTINGS: { 
			MIN_SCROLL_DOWN_PERCENTAGE: 40, 
			MIN_SCROLL_DOWN: $( window ).height() * ( PAGE.MIN_SCROLL_DOWN_PERCENTAGE / 100 ),
			TIME_VISIBLE: 1000
		}
		
	}, 
	
	CLOSE_BUTTON: {
		CLOSE_BUTTON_CLASS: "close-nav-button",
		CLOSE_BUTTON_TEXT: "Close navigation", 
	}, 
	
	LABELS: {
		LABEL_CLASS: "label",
		LABEL_VISIBLE_CLASS: "label-visible", 
		
		MENU: {
			MENU_LABEL_CLASS: "menu-label", 
			MENU_LABEL_INITIAL_CLASS: "label-enter", 
			MENU_LABEL_TEXT: "Menu"
		}, 
		
		LINK: { 
			LINK_LABEL_CLASS: "link-label"
		}, 
		
		CLOSE_BUTTON: {
			CLOSE_BUTTON_LABEL_CLASS: "close-button-label"
			
		}
	}
	
}




















