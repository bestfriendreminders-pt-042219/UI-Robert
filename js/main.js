// Main content class

class Main {
	constructor(main){
		this.main = main;
		main = document.querySelector('main');
		main.className = 'main';
		console.log(main)

		const mainTitle = document.createElement('h1');
		mainTitle.textContent = 'somthin is here!'
		main.appendChild(mainTitle)
	}
}

main = new Main();