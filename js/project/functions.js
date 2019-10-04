
function utilitiesInit() {
	return {
		// Function to turn off the specified default element behaviour
		preventDefaultOn: function( event, elementSelector, containerSelector ) {
			$( containerSelector || document ).on( event, function( e ) {
				if ( !$( e.target ).is( elementSelector ) ) {
					return;
				}
				e.preventDefault();
			} );
		}, 
		
		callWhenLoaded: function( elementSelector, func ) {
			const containingObject = this;
			if ( $( elementSelector ).length > 0 ) {
				func();
			} else {
				setTimeout( function() {
					containingObject.callWhenLoaded( elementSelector, func );
				}, 100 );
			}
		}
		
	}; 
	
}

function navigationUtilitiesInit( args ) {
	const navigations = args.navigations, 
		content = args.content, 
		sections = content.find( ".slick-slide" ), 
		sectionCurrentClass = args.sectionCurrentClass, 
		sectionIdleClass = args.sectionIdleClass, 
		scrollTarget = args.scrollTarget, 
		linkCurrentClass = args.linkCurrentClass; 
	let currentLinkPos = content.slick( "slickCurrentSlide" ), 
		currentLinks = getLinks( currentLinkPos ), 
		currentSection = getCurrentSection();
		
	markCurrentLinks( currentLinkPos );
	markCurrentSection(); 
	markCurrentSectionOnChange();
	
	return {
		clickHandler: function( navigation, link ) {
			const linkPos = getLinkPosIn( navigation, link );
			
			markCurrentLinks( linkPos ); 
			goToTargetSection( linkPos );
		}
	};
	
	
	function markCurrentSectionOnChange() {
		content.on( "afterChange", function() {
			markCurrentSection(); 
		} );
		
	}
	
	function markCurrentSection() {
		currentSection.removeClass( sectionCurrentClass ).addClass( sectionIdleClass ); 
		currentSection = getCurrentSection(); 
		currentSection.removeClass( sectionIdleClass ).addClass( sectionCurrentClass );
	}
	
	function getSection( sectionPos ) {
		return sections.eq( sectionPos );
	}
	
	function getCurrentSection() {
		const currentSectionPos = content.slick( "slickCurrentSlide" );
		return sections.eq( currentSectionPos );
	}
	
	function goToTargetSection( linkPos ) {
		$.smoothScroll( {
			scrollTarget: scrollTarget, 
			afterScroll: function() {
				content.slick( "slickGoTo", linkPos );
			}
		} );
	}
	
	function markCurrentLinks( linkPos ) {
		unmark( currentLinks );
		currentLinks = getLinks( linkPos );
		mark( currentLinks );
	}
	
	function unmark( links ) {
		$( links ).each( function( pos, link ) {
			unmarkLink( link ); 
		} );
	}
	
	function mark( links ) {
		$( links ).each( function( pos, link ) {
			markLink( link );
		} );
	}
	
	function unmarkLink( link ) {
		$( link ).removeClass( linkCurrentClass ); 
	}
	
	function markLink( link ) {
		$( link ).addClass( linkCurrentClass );
	}
	
	function getLinks( linkPos ) {
		return navigations.map( function( nav ) {
			return getLinkIn( nav, linkPos ); 
		} );
	}
	
	function getLinkIn( navigation, linkPos ) {
		return navigation.find( ".link" ).eq( linkPos );
	}
	
	function getLinkPosIn( navigation, link ) {
		return navigation.find( ".link" ).index( link ); 
	}
	
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	