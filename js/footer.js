// Footer class
class Footer {
	constructor(footer){
		this.footer = footer;


		const images = ['img/twitter.png', 'img/instagram.png', 'img/facebook.png']

		footer = document.querySelector('footer')
		
		images.forEach(function(imgFile){
			const footerImg = document.createElement('img')
		console.log(footerImg)
			footerImg.setAttribute('src', imgFile);
			footer.appendChild(footerImg)
		})
	}
}

footer = new Footer();