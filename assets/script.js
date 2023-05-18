const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlideIndex = 0

function slideUpdate(){
	document.querySelector('.banner-img').src = slides[currentSlideIndex].image;
	document.querySelector('.main_tagline').innerHTML = slides[currentSlideIndex].tagLine;
	document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('dot_selected'));
	document.querySelectorAll('.dot')[currentSlideIndex].classList.add('dot_selected');
}

/*** Right Arrow ***/
document.querySelector('.arrow_right').addEventListener('click', () => {
	currentSlideIndex++;
	if (currentSlideIndex > slides.length - 1) {  // Loop
		currentSlideIndex = 0;
	}
	slideUpdate();       // Update the slide content
})

/*** Left Arrow ***/
document.querySelector('.arrow_left').addEventListener('click', () => {
	currentSlideIndex--; // Decrement the slide index
	if (currentSlideIndex < 0) {
		currentSlideIndex = slides.length - 1;
	}
	slideUpdate(); 
})
