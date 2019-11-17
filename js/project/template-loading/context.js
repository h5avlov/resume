const person = {
	labels: {
		name: "Name", 
		position: "Position", 
		photo: "Photo"
	}, 

	name: "Ico Pavlov", 
	position: "Web Designer + Developer", 
	photo: {
		src: "picture-not-available-300x300.png" 
	}

};


const summary = {
	title: "Summary", 
	text: "Hello, welcome to a page, I created with presenting my view of web design in mind. My name is Hristo and I am a freelance web designer, who enjoys creating designs and animations to stun the visitor, and likes writing code too. I have earned a BS degree in  Mechanical Engineering from TU - Sofia, like reading and watching Sci-Fi, have a good time talking about life, the universe and everything, so to say, believe that you are not really riding a bike unless you aren't heading uphill...", 
	image: {
		src: "summary.png"
	}
};


const education = {
	title: "Education", 
	text: "What you would find here is just a list of majors, not so impressive in any way. In fact, I have not graduated in my Information Technology MS, but I don't count it a failure as far as it served as an eye opener for me and introduced me to the amazing field of web development.", 
	image: {
		src: "education.png"
	}, 
	
	labels: {
		major: "Major", 
		educationalFacility: "Educational Facility",
		year: "Year"
	}, 
	
	entries: [
        {
			major: "MS in Information Technology", 
			educationalFacility: "Technical University - Sofia", 
			year: "2008",
			description: ""
		}, 
        
        {
			major: "BS in Mechanical Engineering", 
			educationalFacility: "Technical University - Sofia", 
			year: "2002",
			description: ""
		}, 
        
        {
			major: "Professional in Robototechnics", 
			educationalFacility: "TEA 'Kirov'", 
			year: "1998",
			description: ""
		}
	]

};


const workExperience = {
	title: "Work Experience", 
	text: "I am a freelance web designer and developer for a few years now and my previous jobs are not really relevant to my current work and sought after carrer development. So I didn't feel the need to give a mention of them.", 
	image: {
		src: "work-experience.png"
	}, 
	
	labels: {
		position: "Job Position", 
		employerOrganization: "Employer Organization",
		year: "Year"
	}, 
	
	entries: [
		{
			position: "Web Designer and Developer", 
			employerOrganization: "Freelance", 
			year: "2019",
			description: ""
		}
	]

};


const skills = {
	title: "Skills", 
	text: "I am trying to give my honest view of the matter at hand here, some rounding and bounding may occur, no doubt about it. All percentages are subjected to deviation but as soon as it came up, my very first jQuery plugin powers up the given percentage visual representation as a circle of trapezoid fragments below.", 
	image: {
		src: "skills.png"
	}, 
	
	labels: {
		skill: "Skill", 
		level: {
			wordRepresentation: "Word Representation", 
			graphicRepresentation: "Graphic Representation"
		}
	},
	
	entries: [
		{
			skill: "HTML", 
			
			level: {
				wordRepresentation: "Advanced", 
				graphicRepresentation: "95%"
			}, 
			
			description: "As the means to define your page structure, I find HTML is very important and not to overlook. I try to write as semantic and structured HTML code as I could. And sometimes my HTML is a not as close to what you would think is the baseline - in my view, what everybody writes and calls 'semantic' is actually not semantic at all."
		
		}, 
        
        {
			skill: "CSS", 
			
			level: {
				wordRepresentation: "Advanced", 
				graphicRepresentation: "92%"
			}, 
			
			description: "Giving the page its color and shape, CSS is what makes it or breaks it. I am not a fan of frameworks like Bootstrap, that although often useful and easy for non dedicated coders, put demands for the underlying HTML to deviate from semantics. On the other hand, I like preprocessors and their aim to move the frontier of CSS in the right direction."
		
		}, 
        
        {
			skill: "JS", 
			
			level: {
				wordRepresentation: "Very Good", 
				graphicRepresentation: "80%"
			}, 
			
			description: "Although I hated JavaScript at first, because personally prefer strongly typed programming languages like Java and C#, it's a really nice language actually. I like the idea of TypeScript. I like AJAX for  making possible to make a nice animation to the new content the user demanding."
		
		}, 
        
        {
			skill: "React", 
			
			level: {
				wordRepresentation: "Fundamental", 
				graphicRepresentation: "50%"
			}, 
			
			description: "React is everything I missed a few years ago when I thought it's a clever idea to split a web page to separate parts each using its separate markup, styles and behaviour. On top of that React is not as complicated as someone would expect and the emergence of Gatsby makes me delighted."
		
		}, 
        
        {
			skill: "WordPress", 
			
			level: {
				wordRepresentation: "Fundamental", 
				graphicRepresentation: "50%"
			}, 
			
			description: "I find the idea to give a person the power to make a whole website in minutes, is great. Great websites always would need a proffessional touch so I don't think WordPress robs developers in some way. It's quite the opposite I think - only in the right hands WordPress would reveal its true power."
		
		} 
	]

};


const contact = {
	title: "Contact Me", 
	
	entries: [
		{
			label: "Phone", 
			value: "", 
			className: "phone"
		}, 
		
		{
			label: "Email", 
			value: "xpavlov@abv.bg", 
			className: "email"
		}, 
		
		{
			label: "Website", 
			value: "handcraftedwebdesign.online", 
			className: "website"
		}
	]

};


const mainNavigation = {
	title: "Where Do You Wanna Go?", 
	
	links: [
		{
			text: summary.title, 
			targetSelector: ".summary", 
			className: "summary-link"
		}, 
		
		{
			text: education.title, 
			targetSelector: ".education", 
			className: "education-link"
		}, 
		
		{
			text: workExperience.title, 
			targetSelector: ".work-experience", 
			className: "work-experience-link"
		}, 
		
		{
			text: skills.title, 
			targetSelector: ".skills", 
			className: "skills-link"
		}
	]
};





















