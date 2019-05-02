// Main content class

class Main {
	constructor(main){
	// Main secition of html.
		this.main = main;
		main = document.querySelector('main');
		main.className = 'main';

	// First animation on landing...
		const mainLanding = document.createElement('h1')
		main.appendChild(mainLanding);
		mainLanding.textContent = 'BE a better friend!';
		setTimeout(function(){
			mainLanding.className = 'displayNone';
		}, 3500)

	// Title section containing the sign in button.
		const titleSection = document.querySelector('#mainTitleSection');
		const mainTitle = document.createElement('h2');
		mainTitle.textContent = 'Never Forget The Special Dates!';

	// Button creation and link to application. 
		const signInButton = document.createElement('button')
		signInButton.textContent = 'Sign In Here';
		signInButton.addEventListener('click', function() {
			window.location.href = 'https://friends-reminder.netlify.com/';
		})

		titleSection.appendChild(mainTitle)
		titleSection.appendChild(signInButton)
	}
}

const main = new Main();
class Token {
			constructor(attrs){
			// Grabs the main html element.
				const main = document.querySelector('main')
				const section = document.createElement('section');
				main.appendChild(section)

			// Animation for section card to slide in...
				section.className = 'displayNone';
				setTimeout(function(){
					section.className = 'sections background-image sectionSlide';
				}, 3000)

			// H2 elements in sections html
				const sectionH2 = document.createElement('h2');
				sectionH2.textContent = attrs.secH2;
				section.appendChild(sectionH2)

			// P elements in section html. 
				const pElements = document.createElement('p');
				pElements.textContent = attrs.text;
				section.appendChild(pElements)
			}
		}; // End of Token class


// Cards in the main section. Can be modified to hold whatever is needed. 
const wifeBday = new Token({
	secH2: "Wife's Birthday!",
	text: "Make her the happiest woman on Earth!",
	img: ''
});
const neverMis = new Token({
	secH2: "Never miss the special days!",
	text: "A reminder can save a relationship!",
	img: ''
});
const aniversary = new Token({
	secH2: 'Aniversary!',
	text: 'Make it the best one ever!',
	img: ''
});
const textNotification = new Token({
	secH2: "Text Notifications!",
	text: "Reminder's when you need them!",
	img: ''
});
const GFbday = new Token({
	secH2: "Girlfriend's Birthday",
	text: 'Gotta keep the good times rolling!',
	img: ''
});
const HusbandBday = new Token({
	secH2: "Husband's Birthday",
	text: 'Even if he forgot!',
	img: ''
});
const ParentsAniversary = new Token({
	secH2: 'Parents Aniversary',
	text: "A milestone everyone should celebrate!",
	img: ''
});
const bFF = new Token({
	secH2: 'BFF',
	text: "Been friends forever, time to celebrate!",
	img: ''
});

