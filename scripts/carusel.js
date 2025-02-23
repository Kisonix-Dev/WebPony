let currentSlide = 0

function showSlide(index) {
	const slides = document.querySelectorAll('.carousel-slide img')
	const indicators = document.querySelectorAll('.indicator')

	if (index >= slides.length) {
		currentSlide = 0
	} else if (index < 0) {
		currentSlide = slides.length - 1
	} else {
		currentSlide = index
	}

	const offset = -currentSlide * 100
	document.querySelector(
		'.carousel-container'
	).style.transform = `translateX(${offset}%)`

	indicators.forEach((indicator, i) => {
		indicator.classList.toggle('active', i === currentSlide)
	})
}

setInterval(() => {
	showSlide(currentSlide + 1)
}, 5000)

showSlide(currentSlide)
