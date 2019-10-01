function labelInteractionInit( labelVisibleClass, labelInitialClass ) {
	const labelWrapper = $( ".label-wrapper" ), 
		menuLabel = labelWrapper.find( ".menu-label" ), 
		closeButtonLabel = labelWrapper.find( ".close-button-label" ), 
		linkLabels = labelWrapper.find( ".link-label" ); 
	let currentLabel = null; 
	
	return {
		/* labelOn: function( label, className ) {
			this.off( currentLabel );
			label.addClass( className );
			currentLabel = label; 
		},  */
		/* on: function( label ) {
			this.off( currentLabel );
			label.addClass( labelVisibleClass );
			currentLabel = label; 
		},  */
		labelOff: function( label ) {
			if ( label !== null ) {
				label.removeClass( labelVisibleClass ).removeClass( labelInitialClass );
			}
		}, 
		anyLabelOff: function() {
			this.labelOff( currentLabel );
		}, 
		on: function( label, className ) {
			this.labelOff( currentLabel );
			label.addClass( className );
			currentLabel = label; 
		}, 
		labelOn: function( label ) {
			this.on( label, labelVisibleClass );
		}, 
		menuLabelOnEnter: function() {
			this.on( menuLabel, labelInitialClass );
		}, 
		menuLabelOn: function() { 
			this.labelOn( menuLabel );
		}, 
		closeButtonLabelOn: function() {
			this.labelOn( closeButtonLabel ); 
		}, 
		
		getLinkLabel: function( linkPos ) {
			return linkLabels.eq( linkPos ); 
		}
	};
	
}














