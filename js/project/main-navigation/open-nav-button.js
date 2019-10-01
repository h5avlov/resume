function buttonOpenNavInit( floatingNavHandlersOpen ) {
	return {
		click: function() {
			floatingNavHandlersOpen();
		}
		
	}; 
	
}