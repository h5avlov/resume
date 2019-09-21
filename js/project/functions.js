
// Function to turn off the specified default element behaviour
function preventDefaultOn( event, elementSelector, containerSelector ) {
	$( containerSelector || document ).on( event, function( e ) {
		if ( !$( e.target ).is( elementSelector ) ) {
			return;
		}
		e.preventDefault();
	} );
}


function callWhenLoaded( elementSelector, func ) {
	if ( $( elementSelector ).length > 0 ) {
		func();
	} else {
		setTimeout( function() {
			callWhenLoaded( elementSelector, func );
		}, 100 );
	}
}


// Calls the eventHandler function on the navigation to make navigation buttons functional
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


// For use with event delegation:
// assigns an event listener to the target element in case the target is the desired element
function eventHandler( args ) {
	if ( !args.target.is( args.element ) ) {
		return;
	}
	args.handler( args.handlerArgs );
}


// Functions to open and close the floating navigation, 
// declared to be accessible for each button, controlling the navigation state

function openFloatingNav( floatingNav ) {
	const label = floatingNav.find( ".label" );
	label.remove( LABEL_VISIBLE_CLASS ).remove( LABEL_INITIAL_CLASS ).addClass( LABEL_INITIAL_CLASS );
	changeClasses( floatingNav, NAV_CLOSE_CLASS, NAV_OPEN_CLASS );
}

function closeFloatingNav( floatingNav ) {
	const label = floatingNav.find( ".label" );
	label.removeClass( LABEL_INITIAL_CLASS ).removeClass( LABEL_VISIBLE_CLASS );
	changeClasses( floatingNav, NAV_OPEN_CLASS, NAV_CLOSE_CLASS );
}

// Function to control given element's state by removing a class and adding another, 
// e.g. removing the "open" class and adding the "close" class
function changeClasses( element, classA, classB ) {
	element.removeClass( classA ).addClass( classB );
}






















