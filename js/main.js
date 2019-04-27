// Main content class

class Main {
	constructor(main){
		this.main = main;
		main = document.querySelector('main');
		main.className = 'main';
		console.log(main)

// FIgure out how to insert before. Will come back to. 
		const titleSection = document.querySelector('#mainTitleSection');
		const mainTitle = document.createElement('h1');
// console.log(titleSection)
		titleSection.appendChild(mainTitle)
		mainTitle.textContent = 'Your calendar at your fingertips!';
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
				section.className = 'sections';
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
			}
		}; // End of Token class

const token = new Token({
		secH2: 'SOmething goes here',
		text: 'A long winded explanation of nothing.'
	});

const anotherToken = new Token({
		secH2: 'Another token!',
		text: 'A long winded explanation of nothing.'
	});
const thirdToken = new Token({
		secH2: 'And another',
		text: 'A long winded explanation of nothing.'
	});
const fourthToken = new Token({
	secH2: 'And Another',
	text: 'A long winded explanation of nothing.'
});
const fifthToken = new Token({
	secH2: 'And Another',
	text: 'A long winded explanation of nothing.'
});
const sixthToken = new Token({
	secH2: 'Another',
	text: 'A long winded explanation of nothing.'
});



