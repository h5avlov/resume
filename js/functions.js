/* function navClickHandler( nav, target, content ) {
	if ( !target.is( ".link" ) ) {
		return;
	}
	let links = nav.find( ".link" ), 
		pos = links.index( target );
		
	content.slick( "slickGoTo", pos );
} */

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



function openFloatingNav( floatingNav ) {
	const label = floatingNav.find( ".label" );
	label.remove( LABEL_VISIBLE_CLASS ).remove( LABEL_INITIAL_CLASS ).addClass( LABEL_INITIAL_CLASS );
	changeClasses( floatingNav, NAV_CLOSE_CLASS, NAV_OPEN_CLASS );
}

function closeFloatingNav( floatingNav ) {
	const label = floatingNav.find( ".preview-wrapper .label" );
	label.removeClass( LABEL_INITIAL_CLASS ).removeClass( LABEL_VISIBLE_CLASS );
	changeClasses( floatingNav, NAV_OPEN_CLASS, NAV_CLOSE_CLASS );
}

function changeClasses( element, classA, classB ) {
	element.removeClass( classA ).addClass( classB );
}






















