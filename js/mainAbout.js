// Main content class

class Main {
	constructor(main){
	// Main secition of html.
		this.main = main;
		main = document.querySelector('main');
		main.className = 'main';

	// Title section containing the sign in button.
		const titleSection = document.querySelector('#mainTitleSection');
		const mainTitle = document.createElement('h2');
		mainTitle.textContent = 'Your calendar at your fingertips!';

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

			// Adds a blank calendar day card background image to the section card. 
				section.className = 'sections background-image';

			// H2 elements in sections html.
				const sectionH2 = document.createElement('h2');
				sectionH2.textContent = attrs.secH2;
				section.appendChild(sectionH2)

			// P elements in sections html. 
				const pElements = document.createElement('p');
				pElements.textContent = attrs.text;
				sectionH2.appendChild(pElements)

			// Img's of team members added per their new class. 
				const img = document.createElement('img');
				img.setAttribute('src', attrs.img);
				section.appendChild(img);

				// Animation for section card to slide in...
				section.className = 'displayNone';
				setTimeout(function(){
					section.className = 'sections background-image sectionSlide';
				},0)
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
	img: 'img/robert-1.jpg'
});
const thirdToken = new Token({
	secH2: 'Brandi Apetsi',
	text: '',
	img: 'img/brandi.jpg'
});
const fourthToken = new Token({
	secH2: 'Greg Urban',
	text: '',
	img: 'img/man-placeholder.png'
});
const fifthToken = new Token({
	secH2: 'Brandy Rimes',
	text: '',
	img: 'img/woman-placeholder.jpg'
});

