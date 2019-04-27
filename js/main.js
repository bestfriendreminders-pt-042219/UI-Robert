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
		// main.appendChild(titleSection)
		titleSection.appendChild(mainTitle)
		// titleSection.className = 'mainTitleSection';
		mainTitle.textContent = 'Your calendar at your fingertips!';


	}
}


const main = new Main();

class Token {
	constructor(main){
		this.main = main;
		main = document.querySelector('main')
		const section = document.createElement('section');
		main.appendChild(section)

		// console.log(main)
		section.className = 'sections';

	}
};

const token = new Token();