
// Specifying class names, mainly used for triggering animations 
// and values
const SETTINGS = { 
	PAGE: {
		PAGE_LOAD_DELAY: 0 
	}, 
	
	BUTTON_FLOATING_DISPLAY: {
		MIN_SCROLL_DOWN_PERCENTAGE: 40, 
		MIN_SCROLL_DOWN: $( window ).height() * ( MIN_SCROLL_DOWN_PERCENTAGE / 100 ),
		TIME_VISIBLE: 1000 
	}, 
	
	FLOATING_NAV: {
		CLASSES: {
			STRUCTURAL: {
				FLOATING_NAV_CLASS: "floating-nav" 
			}, 
			INTERACTIVE: {
				NAV_OPEN_CLASS: "nav-open", 
				NAV_CLOSE_CLASS: "nav-close" 
			}
		}
	}, 
	
	BUTTONS: {
		CLASSES: {
			STRUCTURAL: {
				BUTTON_CLASS: "button", 
				OPEN_NAV_BUTTON_CLASS: "open-nav-button", 
				CLOSE_NAV_BUTTON_CLASS: "close-nav-button",
				BUTTON_FLOATING_CLASS: "floating-button" 
			}, 
			
			INTERACTIVE: {
				BUTTON_FLOATING_VISIBLE_CLASS: "visible", 
				CURRENT_LINK_CLASS: "current-link" 
			}
		}, 
		
		TEXT: {
			OPEN_NAV_BUTTON: "Menu", 
			CLOSE_NAV_BUTTON: "Close navigation", 
			BUTTON_FLOATING: OPEN_NAV_BUTTON
		}
		
	},
	
	LABELS: {
		CLASSES: {
			STRUCTURAL: {
				LABEL_CLASS: "label",
				MENU_LABEL_CLASS: "menu-label", 
				LINK_LABEL_CLASS: "link-label", 
				CLOSE_BUTTON_LABEL_CLASS: "close-button-label" 
			}, 
			INTERACTIVE: {
				LABEL_VISIBLE_CLASS: "label-visible", 
				MENU_LABEL_INITIAL_CLASS: "label-enter" 
			}
		}, 
		TEXT: {
			MENU_LABEL_TEXT: "Menu"
		}
	}
}

















