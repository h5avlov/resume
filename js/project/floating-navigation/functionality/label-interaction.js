
// Methods to use when defining the mouse-over-link interaction
function labelInteractionInit( args ) {
	const { menuLabel, closeButtonLabel, linkLabels } = args.labels; 
	const { LABEL_VISIBLE_CLASS, MENU_LABEL_INITIAL_CLASS } = args.classes; 
	let currentLabel = null; 
	
	return {
		
		anyLabelOff: function() {
			labelOff( currentLabel );
		}, 
		
		labelOn: function( label ) {
			on( label, LABEL_VISIBLE_CLASS );
		}, 
		
		menuLabelOnEnter: function() {
			on( menuLabel, MENU_LABEL_INITIAL_CLASS );
		},
		
		menuLabelOn: function() { 
			this.labelOn( menuLabel );
		}, 
		
		closeButtonLabelOn: function() {
			this.labelOn( closeButtonLabel ); 
		}, 
		
		getLinkLabel: function( linkPos ) {
			return linkLabels[ linkPos ]; 
		}
	};
	
	function labelOff( label ) {
		if ( label !== null ) {
			label.removeClass( LABEL_VISIBLE_CLASS ).removeClass( MENU_LABEL_INITIAL_CLASS );
		}
	} 
		
	function on( label, className ) {
		labelOff( currentLabel );
		label.addClass( className );
		currentLabel = label; 
	} 
	
}














