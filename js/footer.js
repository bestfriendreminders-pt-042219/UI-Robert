// Footer class
class Footer {
	constructor(footer){
		this.footer = footer;

	// Can change the shade or color of social media images by choosing one of the three arrays below. 
		const imagesLight = ['img/twitter.png', 'img/instagram.png', 'img/facebook.png', 'img/github.png'];
		const imagesBrown = ['img/twitter-brown.png', 'img/instagram-brown.png', 'img/facebook-brown.png', 'img/github-brown.png'];
		const imagesDark = ['img/twitter-dark.png', 'img/instagram-dark.png', 'img/facebook-dark.png', 'img/github-dark.png'];

		footer = document.querySelector('footer')
	// forEach function to populate the three social media images into the footer. 
	// Change the array in the forEach function below to access the different shades of image. 
		imagesBrown.forEach(function(imgFile){
			const footerImg = document.createElement('img')
			footerImg.setAttribute('src', imgFile);
			footer.appendChild(footerImg)
		})
	}
}

footer = new Footer();