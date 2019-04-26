// Staring JS file

// const header = document.querySelector('header')

// const nav = document.createElement('nav')

// const anchor = document.createElement('a')

// header.appendChild(nav)
// nav.appendChild(anchor)
// console.log(nav)

class Header {
	constructor(header){
		this.header = header;
		// Header containing navigation
		header = document.querySelector('header');
		header.className = 'header-nav';
		console.log(header)

		// Better friends title
		const title = document.createElement('h1');
		title.textContent = 'BETTER FRIENDS REMINDERS';
		header.appendChild(title)

		// Navigation
		const nav = document.createElement('nav')
		
		let anchor = '';
		const linksTags = ['HOME', 'ABOUT'];

		linksTags.forEach(function(linkName){
			anchor = document.createElement('a')
			anchor.textContent = linkName;
			nav.appendChild(anchor)

			if(linkName === 'HOME'){
				anchor.href = 'index.html';
			}
			if(linkName === 'ABOUT'){
				anchor.href = 'about.html';
			}
		})

		header.appendChild(nav)
	}
}

header = new Header();


