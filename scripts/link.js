function copyToClipboard() {
	const url = window.location.href
	const button = document.querySelector('.copy-button-link')

	navigator.clipboard
		.writeText(url)
		.then(() => {
			const originalText = button.textContent
			button.textContent = ' Link copied '

			setTimeout(() => {
				button.textContent = originalText
			}, 2000)
		})
		.catch(err => {
			console.error(' Copy error ', err)
		})
}
