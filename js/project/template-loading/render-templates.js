
// Calling a function to load each section content 
function renderTemplates() {
	
	loadTemplate( ".person", "#person-template", person );
	loadTemplate( "nav", "#nav-template", mainNavigation );
	loadTemplate( ".summary", "#summary-template", summary );
	loadTemplate( ".education", "#education-template", education );
	loadTemplate( ".courses", "#courses-template", courses );
	loadTemplate( ".work-experience", "#work-experience-template", workExperience ); 
	loadTemplate( ".work", "#work-template", work ); 
	loadTemplate( ".skills", "#skills-template", skills );
	loadTemplate( ".contact", "#contact-template", contact );
	
	function loadTemplate( renderedContentHolderSelector, templateHolderSelector, templateContext ) {
		let template = $( templateHolderSelector ).html(),
			templateCompiled = Handlebars.compile( template ),
			contentRendered = templateCompiled( templateContext );
		$( renderedContentHolderSelector ).append( contentRendered );
	}

}