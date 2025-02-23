document.addEventListener('DOMContentLoaded', function () {
	const toggleCardsBtn = document.getElementById('toggleCardsBtn')
	const linkCards = document.getElementById('linkCards')

	if (toggleCardsBtn) {
		toggleCardsBtn.addEventListener('click', function () {
			this.classList.toggle('active')

			const isVisible = linkCards.style.display === 'flex'

			if (isVisible) {
				linkCards.style.opacity = 0
				setTimeout(() => {
					linkCards.style.display = 'none'
				}, 300)
			} else {
				linkCards.style.display = 'flex'
				setTimeout(() => {
					linkCards.style.opacity = 1
				}, 10)
			}

			toggleCardsBtn.textContent = isVisible ? 'Show sections' : 'Hide sections'
		})
	} else {
		console.error('Button not found')
	}
})
