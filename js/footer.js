// Footer class
class Footer {
	constructor(footer){
		this.footer = footer;


		const imagesLight = ['img/twitter.png', 'img/instagram.png', 'img/facebook.png'];
		const imagesBrown = ['img/twitter-brown.png', 'img/instagram-brown.png', 'img/facebook-brown.png'];
		const imagesDark = ['img/twitter-dark.png', 'img/instagram-dark.png', 'img/facebook-dark.png'];

		footer = document.querySelector('footer')
		
		imagesLight.forEach(function(imgFile){
			const footerImg = document.createElement('img')
			footerImg.setAttribute('src', imgFile);
			footer.appendChild(footerImg)
		})
	}
}

footer = new Footer();