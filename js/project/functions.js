
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

		// Waits for an element to be loaded and then calls a function
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
		// Method to call when a click on a navigation occurs
        clickHandler: function (navigation, link) {
			// Getting the clicked link position
			const linkPos = getLinkPosIn(navigation, link);

			// Marking the link and transitioning sections
			markCurrentLinks( linkPos ); 
			goToTargetSection( linkPos );
		}
	};

	// Sections are marked (current one) and unmarked (former one) after a slide transition
	function markCurrentSectionOnChange() {
		content.on( "afterChange", function() {
			markCurrentSection(); 
		} );
		
	}

	// Current section receives a class, used to control its presentation on entering
	// and previous section receives a class to possibly control its presentation on exitting
	function markCurrentSection() {
		currentSection.removeClass( sectionCurrentClass ).addClass( sectionIdleClass ); 
		currentSection = getCurrentSection(); 
		currentSection.removeClass( sectionIdleClass ).addClass( sectionCurrentClass );
	}

	// Returns a section by its position
	function getSection( sectionPos ) {
		return sections.eq( sectionPos );
	}

	// Returns the current section
	function getCurrentSection() {
		const currentSectionPos = content.slick( "slickCurrentSlide" );
		return sections.eq( currentSectionPos );
	}

	// Scrolls the page to the specified scroll target 
	// and brings the selected section into view after
	function goToTargetSection( linkPos ) {
		$.smoothScroll( {
			scrollTarget: scrollTarget, 
			afterScroll: function() {
				content.slick( "slickGoTo", linkPos );
			}
		} );
	}

	// Marks clicked link and its other-navigation twin 
	// and unmarks the previously clicked links
	function markCurrentLinks( linkPos ) {
		unmark( currentLinks );
		currentLinks = getLinks( linkPos );
		mark( currentLinks );
	}

	// Unmarks an array of links
	function unmark( links ) {
		$( links ).each( function( pos, link ) {
			unmarkLink( link ); 
		} );
	}

	// Marks an array of links
	function mark( links ) {
		$( links ).each( function( pos, link ) {
			markLink( link );
		} );
	}

	// Removes a style changing class from the specified link
	function unmarkLink( link ) {
		$( link ).removeClass( linkCurrentClass ); 
	}

	// Gives the specified link a class to change its visual style
	function markLink( link ) {
		$( link ).addClass( linkCurrentClass );
	}

	// Returns an array, containing links on a specified position 
	// in both the main and the floating navigations
	function getLinks( linkPos ) {
		return navigations.map( function( nav ) {
			return getLinkIn( nav, linkPos ); 
		} );
	}

	// Returns a link by its position
	function getLinkIn( navigation, linkPos ) {
		return navigation.find( ".link" ).eq( linkPos );
	}

	// Returns the position of a link among the links in a navigation
	function getLinkPosIn( navigation, link ) {
		return navigation.find( ".link" ).index( link ); 
	}
	
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	