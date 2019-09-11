/*-----------------------------------------------------------------*/
/*	Handlebars
/*-----------------------------------------------------------------*/

/**
 * Loading section content through Handlebars
 */
$( document ).ready( function() {
	
	loadTemplate( ".person", "#person-template", person );
	loadTemplate( "nav", "#nav-template", mainNavigation );
	loadTemplate( ".home", "#home-template", home );
	loadTemplate( ".education", "#education-template", education );
	loadTemplate( ".work-experience", "#work-experience-template", workExperience );
	loadTemplate( ".skills", "#skills-template", skills );
	loadTemplate( ".contact", "#contact-template", contact );
	
	function loadTemplate( renderedContentHolderSelector, templateHolderSelector, templateContext ) {
		let template = $( templateHolderSelector ).html(),
			templateCompiled = Handlebars.compile( template ),
			contentRendered = templateCompiled( templateContext );
		$( renderedContentHolderSelector ).append( contentRendered );
	}

} );