
// Calling functions to build the floating navigation and to assign its behaviour
args: {
	targetContainer, 
	navigationLinksCopy, 
	
	classNames: {
		general: {
			navOpenClass, 
			navCloseClass
		}, 
		structural: {
			labelClass, 
			labelText, 
			buttonClass, 
			buttonFloatingClass, 
			buttonFloatingText, 
			closeButtonClass, 
			closeButtonText, 
			closeButtonPreviewText
		}, 
		functional: {
			
		}
	}
	
}
function floatingNavigationInit( args ) {
	const navElements = floatingNavigationBuilding( args.targetContainer, args.navigationLinksToCopy, args.classNames );
	floatingNavigationFunctionality( navElements );
	
}