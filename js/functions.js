function navClickHandler( nav, target, content ) {
	if ( !target.is( ".link" ) ) {
		return;
	}
	let links = nav.find( ".link" ), 
		pos = links.index( target );
		
	content.slick( "slickGoTo", pos );
}

function preventDefaultOn( event, elementSelector, containerSelector ) {
	$( containerSelector || document ).on( event, function( e ) {
		if ( !$( e.target ).is( elementSelector ) ) {
			return;
		}
		e.preventDefault();
	} );
}


function navigationClickHandler( target, nav, mainContent ) {
	eventHandler( {
		target: target, 
		element: ".link", 
		handlerArgs: {
			nav: nav, 
			content: mainContent 
		}, 
		handler: function( handlerArgs ) {
			let links = handlerArgs.nav.find( ".link" ), 
				pos = links.index( this.target );
			handlerArgs.content.slick( "slickGoTo", pos );
		}
	} );
}

function eventHandler( args ) {
	if ( !args.target.is( args.element ) ) {
		return;
	}
	args.handler( args.handlerArgs );
}

function isLoaded( element ) {
	return $( element ) !== undefined;
}






















