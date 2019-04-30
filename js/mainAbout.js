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
		mainTitle.textContent = 'Your calendar at your fingertips!';

		const signInButton = document.createElement('button')
		signInButton.textContent = 'Sign In Here';

		titleSection.appendChild(mainTitle)
		titleSection.appendChild(signInButton)
console.log(titleSection)		
	}
}


const main = new Main();

// This is working, if time allows create an array to populate the main sections with tokens. 
class Token {
			constructor(attrs){
				
				// this.main = attrs.main;
				// this.secH2 = attrs.secH2;
				const main = document.querySelector('main')
				const section = document.createElement('section');
				main.appendChild(section)
				section.className = 'sections background-image';
			// H2 in section elements
				const sectionH2 = document.createElement('h2');
				sectionH2.textContent = attrs.secH2;
				section.appendChild(sectionH2)
				// console.log(attrs.secH2)
				// console.log(main)

			// P elements in section classes. 
				const pElements = document.createElement('p');
				pElements.textContent = attrs.text;
				sectionH2.appendChild(pElements)

			// Img in sections
				const img = document.createElement('img');
				img.setAttribute('src', attrs.img);
				section.appendChild(img);
			}
		}; // End of Token class

const leila = new Token({
		secH2: 'Leila Berrouaye',
		text: '',
		img: 'img/leila.jpg'
	});

const robert = new Token({
		secH2: 'Robert Kulp',
		text: '',
		img: ''
	});
const thirdToken = new Token({
		secH2: '',
		text: '',
		img: ''
	});
const fourthToken = new Token({
	secH2: '',
	text: '',
	img: ''
});
const fifthToken = new Token({
	secH2: 'And Another',
	text: 'A long winded explanation of nothing.',
	img: ''
});

