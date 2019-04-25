// Staring JS file

// const header = document.querySelector('header')

// const nav = document.createElement('nav')

// const anchor = document.createElement('a')

// header.appendChild(nav)
// nav.appendChild(anchor)
// console.log(nav)

class Header {
	constructor(header){
		// this.header = header;
		this.header = document.querySelector('header');
		console.log(this.header)
		const nav = document.createElement('nav')
		
		const anchor = document.createElement('a')
		anchor.textContent = 'HOME'

		this.header.appendChild(nav)
		nav.appendChild(anchor)
		
	}
}

// const header = document.querySelector('header');
header = new Header();