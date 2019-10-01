
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
	
	/* function unmarkCurrentSection() {
		currentSection.removeClass( sectionCurrentClass ).addClass( sectionIdleClass ); 
	} */
	
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
			// 	setTimeout( function() {
					content.slick( "slickGoTo", linkPos );
			//	}, 0 ); 
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/* getLinksIn: function( navigation ) {
			
	}, 
	
	getLinkPos: function( links, link ) {
		
	}, 
	
	goToTargetSection: function( targetSectionPos ) {
		
	} */














/* function navigationUtilitiesInit( args ) {
	const navigations = args.navigations, 
		mainContent = args.content, 
		currentLinkClass = args.currentLinkClass, 
		scrollTarget = args.scrollTarget, 
		delay = 0;
		
	$( navigations ).on( "click", function( e ) {
		const target = $( e.target );
		if ( !target.is( ".link" ) ) {
			return; 
		}
		
		navigationClickHandler( $( this ), target ); 
		navigationHighlighting( target ); 
		// currentLink = markLink( target ); 
		
	} );
	
	function navigationClickHandler( navigation, link ) {
		const links = getNavLinksFor( navigation ), 
			linkPos = getLinkPosIn( links, link ); 
		$.smoothScroll( {
			scrollTarget: scrollTarget, 
			afterScroll: function() {
				goToTargetSection( linkPos );
			}
		} );
		
		// Moves to the specified position 
		function goToTargetSection( targetSectionPos ) {
			setTimeout( function() {
				mainContent.slick( "slickGoTo", targetSectionPos );
			}, delay );
		}
		
		function getLinkPosIn( links, link ) {
			return links.index( link ); 
		}
		
		function getNavLinksFor( navigation ) {
			return navigation.find( ".link" ); 
		}
	}
	
	
	function navigationHighlighting() { 
		let currentLink = getLink( getCurrentSectionPos() ); 
		markLink();
	
		function unmarkCurrentLink() {
			if ( currentLink !== null ) {
				currentLink.removeClass( currentLinkClass );
			}
		}
		
		function markLink( link ) {
			unmarkCurrentLink();
			link.addClass( currentLinkClass );
			currentLink = link;
		}
		
		function getLink( linkPos ) {
			return links.eq( linkPos );
		}
		
		function getCurrentSectionPos() {
			return mainContent.slick( "slickCurrentSlide" );
		}
	}

} */















/* return {
		clickHandler: function( target ) {
			if ( !target.is( ".link" ) ) {
				return; 
			}
			
			markLink( target ); 
			const targetSectionPos = this.getTargetSectionPos( target ); 
			
			// The page is scrolled to the top of the content area, 
			// and then the selected section is displayed
			$.smoothScroll( { 
				scrollTarget: scrollTarget, 
				afterScroll: function() {
					goToTargetSection( targetSectionPos ); 
				} 
			} ); 
			
			// Moves to the specified position 
			function goToTargetSection( targetSectionPos ) {
				setTimeout( function() {
					mainContent.slick( "slickGoTo", targetSectionPos );
				}, delay );
			}
		}, 
		
		// Finds the position of the section to go to
		getTargetSectionPos: function( link ) {
			return links.index( link );
		}
		
	};	 */






















