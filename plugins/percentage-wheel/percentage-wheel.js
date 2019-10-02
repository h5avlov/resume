(function( $ ) {
	$.fn.percentageWheel = function( settings ) {
		
		return this.each( function() {

			// Sets the number of fragments to build the wheel with,
			// and calculates the rotation angle and the corresponding percentage 
			// of two adjacent fragments
			const DEFAULT_WRAPPER_CLASS = "wrapper", 
				DEFAULT_FRAGMENT_CLASS = "fragment", 
				DEFAULT_EXCLUDED_FRAGMENT_CLASS = "fragment-excluded", 
				DEFAULT_FRAGMENT_COUNT = 40,  
				
				// The name of the CSS variable to hold the rotation of each fragment
				ROTATION_PROPERTY_NAME = "--fragment-rotation", 
				
				DEFAULT_ANIMATION_START_DELAY = 0, 
				DEFAULT_FRAGMENT_ANIMATION_DELAY_SHIFT = 0, 
				DEFAULT_FRAGMENT_ANIMATION_DURATION = 0.025;
				
			const wrapperClass = settings.wrapperClassName || DEFAULT_WRAPPER_CLASS, 
				wrapper = $( `<div class= ${wrapperClass} />` ), 
				fragmentClass = settings.fragmentClassName || DEFAULT_FRAGMENT_CLASS,
				excludedFragmentClass = settings.excludedFragmentClass || DEFAULT_EXCLUDED_FRAGMENT_CLASS, 
				fragmentCount = settings.fragmentCount || DEFAULT_FRAGMENT_COUNT, 
				
				rotationStep = 360 / fragmentCount,  
				percentageStep = 100 / fragmentCount, 
				
				level = settings.level, 
				exclusionCount = ( 100 - level ) / percentageStep, 
				startRotation = -exclusionCount / 2 * rotationStep, 
				wrapperRotation = exclusionCount / 2 * rotationStep, 
				animationParameters = getAnimationParameters( ".graphic-representation" ), 
				animationStartDelay = animationParameters.animationStartDelay || DEFAULT_ANIMATION_START_DELAY, 
				fragmentAnimationDelayShift = animationParameters.fragmentAnimationDelayShift || DEFAULT_FRAGMENT_ANIMATION_DELAY_SHIFT, 
				fragmentAnimationDuration = animationParameters.fragmentAnimationDuration || DEFAULT_FRAGMENT_ANIMATION_DURATION;
				
			/* // Initial fragment delay
			let fragmentDelay = animationStartDelay;  */
				
			const fragments = createFragments( fragmentCount, fragmentClass ); 
			setFragmentRotations( fragments, startRotation, rotationStep, ROTATION_PROPERTY_NAME ); 
			markExcludedFragments( fragments, exclusionCount, excludedFragmentClass );
			
			// getMaxExcludedDelay( fragments, exclusionCount );
			
			// Setting animation delays only in case fragments would be animated separately
			if ( settings.isAnimated ) {
				setAnimationDelays( fragments, animationStartDelay, fragmentAnimationDuration, fragmentAnimationDelayShift );
			}
			
			// Fragments are appended to a designated wrapper element
			// and the wrapper to the document after that
			wrapper.append( fragments );
			$( this ).append( wrapper );
			
			setMaxExcludedDelay( wrapper, fragments, exclusionCount ); 
			
		} );
		
		
		// Function declarations
		
		
		function setMaxExcludedDelay( propertyHolder, fragments, exclusionCount ) {
			const value = getPropertyValue( $( fragments[ exclusionCount - 1 ] ), "--fragment-animation-delay" ); 
			setPropertyValue( propertyHolder, "--max-excluded-delay", value + "s" ); 
		}
		
		// An animation delay is calculated and a CSS variable to store it, assigned to each fragment
		function setAnimationDelays( fragments, startDelay, duration, delayShift ) {
			let fragmentDelay = startDelay; 
			for ( let i = 0; i < fragments.length; i++ ) {
				setPropertyValue( fragments[ i ], "--fragment-animation-delay", fragmentDelay + "s" );
				fragmentDelay += duration + delayShift; 
			}
		}
		
		// A CSS class is given to the excluded fragments for applying different style to them in CSS
		function markExcludedFragments( fragments, excludedFragmentCount, excludedFragmentClass ) {
			for ( let i = 0; i < excludedFragmentCount; i++ ) {
				fragments[ i ].addClass( excludedFragmentClass );
			}
		}
		
		// Sets a variable in CSS, holding the rotation for each fragment
		function setFragmentRotations( fragments, startRotation, rotationStep, rotationPropertyName ) {
			for ( let i = 0; i < fragments.length; i++ ) {
				const rotation = startRotation + i * rotationStep;
				setPropertyValue( fragments[ i ], rotationPropertyName, rotation + "deg" ); 
			}
		}
		
		// Creates a list of the specified number of fragments
		function createFragments( fragmentCount, fragmentClass ) {
			let fragments = [];
			while ( fragmentCount-- > 0 ) {
				const fragment = $( `<div class= ${fragmentClass} />` );
				fragments.push( fragment );
			}
			return fragments; 
		}
		
		// Gets the values of all CSS variables, controlling the animation
		function getAnimationParameters( propertyHolderSelector ) {
			return {
				animationStartDelay: getPropertyValue( propertyHolderSelector, "--animation-start-delay" ), 
				fragmentAnimationDuration: getPropertyValue( propertyHolderSelector, "--fragment-animation-duration" ), 
				fragmentAnimationDelayShift: getPropertyValue( propertyHolderSelector, "--fragment-animation-delay-shift" ) 
			};
		}
		
		// Gets the value of a CSS variable 
		function getPropertyValue( propertyHolderSelector, propertyName ) {
			const value = parseFloat( getComputedStyle( $( propertyHolderSelector ).get( 0 ) ).getPropertyValue( propertyName ) );
			return value;
		}
		
		// Sets a CSS variable with the specified name and value
		function setPropertyValue( propertyHolder, propertyName, propertyValue ) {
			propertyHolder.get( 0 ).style.setProperty( propertyName, propertyValue );
		}
		
	};
}( jQuery ) );



















