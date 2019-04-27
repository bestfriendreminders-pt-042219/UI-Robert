// Footer class
class Footer {
	constructor(footer){
		this.footer = footer;

		footer = document.querySelector('footer')
		// footer.style.height = '200px';
		// footer.style.backgroundColor = '#090707';
		// console.log(footer)
		const footerImg = document.createElement('img')
		console.log(footerImg)
		footerImg.setAttribute('src', 'img/twitter.jpg');
		footer.appendChild(footerImg)
	}
}

footer = new Footer();