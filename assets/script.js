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

const mainImg = document.querySelector('.banner-img')
const mainTagline = document.querySelector('.main_tagline')
const dots = document.querySelectorAll('.dot');

document.querySelector('.arrow_right').addEventListener('click', arrowRight)

let currentSlideIndex = 0;

function arrowRight() {
	currentSlideIndex++;
	mainImg.src = slides[currentSlideIndex].image
	mainTagline.innerHTML = slides[currentSlideIndex].tagLine;
	dots[currentSlideIndex].classList.add('dot_selected');
}

/* Left Arrow */
document.querySelector('.arrow_left').addEventListener('click', arrowLeft)
function arrowLeft() {
	currentSlideIndex--;
	mainImg.src = slides[currentSlideIndex].image;
	mainTagline.innerHTML = slides[currentSlideIndex].tagLine;
	dots[currentSlideIndex].classList.add('dot_selected');
}
