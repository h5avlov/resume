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
	title: "Welcome", 
	text: [ 
		"Hello, welcome to a page, I designed and coded to give some info about me and to share my view of how web design could look. My name is Hristo and I am a freelance web designer, devoted not only to creating designs and animations, aimed to stun the visitor, but to writing clean and organized code too. I like Sci-Fi, Japanese anime, talking about life, the universe and everything, combat and power sports and, as a bike rider, believe that you are not really riding, unless you are not heading uphill." 
	], 
	image: {
		src: "summary.png"
	}
};


const education = {
	title: "Education", 
	text: "What you will find here is just a list of majors, not so impressive in any way. In fact, I have not graduated in my Information Technology MS, but I don't count it a failure as far as it served as an eye opener for me and introduced me to the amazing field of web development.", 
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


const courses = {
	title: "Courses", 
	text: "A non-exhaustive list of the courses in programming I've taken at the Software University, that gave me a better understanding of the code part of web development. I signed up for the Data Structures and QA courses too, but was running short of time and didn't complete them.", 
	image: {
		src: "courses.png" 
	}, 
	
	labels: {
		course: "Course", 
		educationalFacility: "Educational Facility",
		year: "Year"
	}, 
	
	entries: [
        {
			course: "C# Fundamentals", 
			educationalFacility: "Software University", 
			year: "2018",
			description: ""
		}, 

		{
			course: "Java OOP", 
			educationalFacility: "Software University", 
			year: "2018",
			description: ""
		} 
	]

};


const workExperience = {
	title: "Work Experience", 
	text: "I am a freelance web designer and developer for a few years now and my previous jobs are not really relevant to my current work and sought after career development. So I didn't feel the need to give a mention of them.", 
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
	text: "All percentages are subjected to deviation, and I am proud that my very first jQuery plugin powers up the given percentage visual representation as a circle of trapezoid fragments below.", 
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
			
			description: "As the means to define your page structure, I find HTML is very important and not to overlook. I try to write as semantic and structured HTML code, as I could. And sometimes my HTML is a not as close to what you would think is the baseline - in my view, what everybody writes and calls 'semantic' often is actually not semantic at all."
		
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
			
			description: "Although I hated JavaScript at first, because personally prefer strongly typed programming languages, like Java and C#, it's a really nice programming language actually with its ease of use. I still like TypeScript more, but JavaScript moves forward quickly enough. From the point of view of an UI/UX designer AJAX is vital, making possible to display the new content in a more intuitive, smooth and even animated way."
		
		}, 
        
        {
			skill: "React", 
			
			level: {
				wordRepresentation: "Fundamental", 
				graphicRepresentation: "50%"
			}, 
			
			description: "React is everything I missed a few years ago, when I thought it's a nice idea to split a web page to separate parts, each using its separate markup, styles and behaviour. That way, to construct a page, all one would have to do was just combine a finite number of such parts, making small tweaks in markup, styles or behaviour. I find the possibility to use React mainly as a templating engine to generate static site with Gatsby is really awesome."
		
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
			value: "0877203718", 
			className: "phone" 
		}, 
		
		{
			label: "Email", 
			value: "xpavlov@abv.bg", 
			className: "email"
		}, 
		
		{
			label: "Website", 
			value: "icopavlov.github.io", 
			className: "website", 
            webAddress: true 
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
			text: courses.title, 
			targetSelector: ".courses", 
			className: "courses-link" 
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





















