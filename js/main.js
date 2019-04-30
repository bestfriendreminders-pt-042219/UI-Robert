// Main content class

class Main {
	constructor(main){
		this.main = main;
		main = document.querySelector('main');
		main.className = 'main';
		// console.log(main)

// FIgure out how to insert before. Will come back to. 
		const titleSection = document.querySelector('#mainTitleSection');
		const mainTitle = document.createElement('h2');
		mainTitle.textContent = 'Never Forget The Special Dates!';

		const signInButton = document.createElement('button')
		signInButton.textContent = 'Sign In Here';

		titleSection.appendChild(mainTitle)
		titleSection.appendChild(signInButton)
// console.log(titleSection)	

			
	}
}


const main = new Main();

// This is working, if time allows create an array to populate the main sections with tokens. 
class Token {
			constructor(attrs){

				const main = document.querySelector('main')
				const section = document.createElement('section');
				main.appendChild(section)
				section.className = 'sections background-image';

				const sectionH2 = document.createElement('h2');
				sectionH2.textContent = attrs.secH2;
				section.appendChild(sectionH2)

			// P elements in section classes. 
				const pElements = document.createElement('p');
				pElements.textContent = attrs.text;
				section.appendChild(pElements)
			}
		}; // End of Token class

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

