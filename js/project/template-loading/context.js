const person = {
	labels: {
		name: "Name", 
		position: "Position", 
		photo: "Photo"
	}, 

	name: "Ico Pavlov", 
	position: "Web Designer + Developer", 
	photo: {
		src: "abc2fdc6dfea08a7bff4359e48255a96.jpg"
	}

};


const summary = {
	title: "Summary", 
	text: "Maecenas malesuada arcu vitae ornare viverra. Nam ultrices turpis a mi fringilla convallis. Proin maximus libero sed urna sollicitudin ultricies. Vestibulum iaculis efficitur dolor sit amet tempus. Phasellus luctus, diam vitae ultrices faucibus, ante dolor vestibulum justo, ut suscipit tortor purus at felis. Cras varius varius augue, tempor lobortis enim posuere eget. Sed et turpis ac eros blandit ultrices et ut lectus.", 
	image: {
		src: "summary.png"
	}
};


const education = {
	title: "Education", 
	text: "Maecenas malesuada arcu vitae ornare viverra. Nam ultrices turpis a mi fringilla convallis. Proin maximus libero sed urna sollicitudin ultricies. Vestibulum iaculis efficitur dolor sit amet tempus. Phasellus luctus, diam vitae ultrices faucibus, ante dolor vestibulum justo, ut suscipit tortor purus at felis. Cras varius varius augue, tempor lobortis enim posuere eget. Sed et turpis ac eros blandit ultrices et ut lectus.", 
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
			major: "Master of Arts", 
			educationalFacility: "Harvard University", 
			year: "2016",
			description: "Nam ultrices turpis a mi fringilla convallis. Proin maximus libero sed urna sollicitudin ultricies. Vestibulum iaculis efficitur dolor sit amet tempus. Phasellus luctus, diam vitae ultrices faucibus, ante dolor vestibulum justo, ut suscipit tortor purus at felis."
		}, 
		
		{
			major: "Bachelor of Arts", 
			educationalFacility: "Harvard University", 
			year: "2014",
			description: "Nam ultrices turpis a mi fringilla convallis. Proin maximus libero sed urna sollicitudin ultricies. Vestibulum iaculis efficitur dolor sit amet tempus. Phasellus luctus, diam vitae ultrices faucibus, ante dolor vestibulum justo, ut suscipit tortor purus at felis."
		}, 
		
		{
			major: "Communications And Design Specialist", 
			educationalFacility: "Blue Mountain High School", 
			year: "2010",
			description: "Nam ultrices turpis a mi fringilla convallis. Proin maximus libero sed urna sollicitudin ultricies. Vestibulum iaculis efficitur dolor sit amet tempus. Phasellus luctus, diam vitae ultrices faucibus, ante dolor vestibulum justo, ut suscipit tortor purus at felis."
		}
		
	]

};


const workExperience = {
	title: "Work Experience", 
	text: "Maecenas malesuada arcu vitae ornare viverra. Nam ultrices turpis a mi fringilla convallis. Proin maximus libero sed urna sollicitudin ultricies. Vestibulum iaculis efficitur dolor sit amet tempus. Phasellus luctus, diam vitae ultrices faucibus, ante dolor vestibulum justo, ut suscipit tortor purus at felis. Cras varius varius augue, tempor lobortis enim posuere eget. Sed et turpis ac eros blandit ultrices et ut lectus.", 
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
			position: "UI/UX Design Lead", 
			employerOrganization: "Rocket Designs", 
			year: "2018",
			description: "Nam ultrices turpis a mi fringilla convallis. Proin maximus libero sed urna sollicitudin ultricies. Vestibulum iaculis efficitur dolor sit amet tempus. Phasellus luctus, diam vitae ultrices faucibus, ante dolor vestibulum justo, ut suscipit tortor purus at felis."
		}, 
		
		{
			position: "Junior UI/UX Designer", 
			employerOrganization: "Rocket Designs", 
			year: "2017",
			description: "Nam ultrices turpis a mi fringilla convallis. Proin maximus libero sed urna sollicitudin ultricies. Vestibulum iaculis efficitur dolor sit amet tempus. Phasellus luctus, diam vitae ultrices faucibus, ante dolor vestibulum justo, ut suscipit tortor purus at felis."
		}, 
		
		{
			position: "Digital Communications Associate", 
			employerOrganization: "Weberest Digital Agency", 
			year: "2017",
			description: "Nam ultrices turpis a mi fringilla convallis. Proin maximus libero sed urna sollicitudin ultricies. Vestibulum iaculis efficitur dolor sit amet tempus. Phasellus luctus, diam vitae ultrices faucibus, ante dolor vestibulum justo, ut suscipit tortor purus at felis."
		}, 
		
		{
			position: "Marketing Assistant", 
			employerOrganization: "Blue Moon Lab", 
			year: "2016",
			description: "Nam ultrices turpis a mi fringilla convallis. Proin maximus libero sed urna sollicitudin ultricies. Vestibulum iaculis efficitur dolor sit amet tempus. Phasellus luctus, diam vitae ultrices faucibus, ante dolor vestibulum justo, ut suscipit tortor purus at felis."
		}
	]

};


const skills = {
	title: "Skills", 
	text: "Maecenas malesuada arcu vitae ornare viverra. Nam ultrices turpis a mi fringilla convallis. Proin maximus libero sed urna sollicitudin ultricies. Vestibulum iaculis efficitur dolor sit amet tempus. Phasellus luctus, diam vitae ultrices faucibus, ante dolor vestibulum justo, ut suscipit tortor purus at felis. Cras varius varius augue, tempor lobortis enim posuere eget. Sed et turpis ac eros blandit ultrices et ut lectus.", 
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
				graphicRepresentation: "90%"
			}, 
			
			description: "Nam ultrices turpis a mi fringilla convallis. Proin maximus libero sed urna sollicitudin ultricies. Vestibulum iaculis efficitur dolor sit amet tempus. Phasellus luctus, diam vitae ultrices faucibus, ante dolor vestibulum justo, ut suscipit tortor purus at felis."
		
		}, 
		
		{
			skill: "CSS", 
			
			level: {
				wordRepresentation: "Advanced", 
				graphicRepresentation: "85%"
			}, 
			
			description: "Nam ultrices turpis a mi fringilla convallis. Proin maximus libero sed urna sollicitudin ultricies. Vestibulum iaculis efficitur dolor sit amet tempus. Phasellus luctus, diam vitae ultrices faucibus, ante dolor vestibulum justo, ut suscipit tortor purus at felis."
		
		}, 
		
		{
			skill: "JS", 
			
			level: {
				wordRepresentation: "Intermediate", 
				graphicRepresentation: "75%"
			}, 
			
			description: "Nam ultrices turpis a mi fringilla convallis. Proin maximus libero sed urna sollicitudin ultricies. Vestibulum iaculis efficitur dolor sit amet tempus. Phasellus luctus, diam vitae ultrices faucibus, ante dolor vestibulum justo, ut suscipit tortor purus at felis."
		
		}
	]

};


const contact = {
	title: "Contact Me", 
	
	entries: [
		{
			label: "Phone", 
			value: "0888 123 456", 
			className: "phone"
		}, 
		
		{
			label: "Email", 
			value: "icopavlov@gmail.com", 
			className: "email"
		}, 
		
		{
			label: "Website", 
			value: "icopavlov.com", 
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





















