$( document ).ready( function() {
	
	let intro = $( ".intro" ), 
		circles = buildCircles();
	intro.append( circles );
	intro.children().wrapAll( "<div class= 'wrapper' />" );
	
} );


// Functions

function buildCircles() {
	let wrapper = $( "<div class= 'circles' />" ), 
		circles = [];
	circles.push( $( "<div class= 'circle left' />" ) );
	circles.push( $( "<div class= 'circle right' />" ) );
	
	return wrapper.append( circles );
}




















