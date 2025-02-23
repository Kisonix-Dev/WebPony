const searchButton = document.getElementById('searchButton')
const searchInput = document.getElementById('tagSearch')
const resultsContainer = document.getElementById('resultsContainer')
const resultsHeader = document.getElementById('resultsHeader')
const updatesHeader = document.getElementById('updatesHeader')
const updatesContainer = document.getElementById('updatesContainer')
const carouselSection = document.getElementById('carouselSection')
const infoSection = document.getElementById('infoSection')
const pagination = document.getElementById('pagination')

let lastSearchTerm = ''

function performSearch(searchTerm) {
	if (searchTerm === undefined) {
		searchTerm = searchInput.value.trim().toLowerCase()
	} else {
		searchTerm = searchTerm.trim().toLowerCase()
	}

	if (searchTerm === '') {
		console.log('Search failed: empty input.')
		return
	}

	if (searchTerm === lastSearchTerm) {
		console.log('Search failed: tag not changed.')
		return
	}

	lastSearchTerm = searchTerm
	const posts = Array.from(document.querySelectorAll('.post'))
	let foundPosts = 0

	resultsContainer.innerHTML = ''

	posts.forEach(post => {
		post.style.display = 'none'
	})

	const filteredPosts = posts.filter(post => {
		const tags = Array.from(post.querySelectorAll('.tag'))
		return tags.some(tag => tag.textContent.toLowerCase().includes(searchTerm))
	})

	if (filteredPosts.length > 0) {
		filteredPosts.forEach(post => {
			const clonedPost = post.cloneNode(true)
			clonedPost.style.display = 'block'
			resultsContainer.appendChild(clonedPost)
		})
		foundPosts = filteredPosts.length
	}

	if (foundPosts === 0) {
		alert('No posts with these tags found.')
	} else {
		carouselSection.style.display = 'none'
		infoSection.style.display = 'none'
		resultsHeader.style.display = 'block'
		resultsContainer.style.display = 'block'
		updatesHeader.style.display = 'none'
		updatesContainer.style.display = 'none'
		pagination.style.display = 'none'
	}
}

function addTagClickListeners() {
	const tags = document.querySelectorAll('.tag')
	tags.forEach(tag => {
		tag.addEventListener('click', () => {
			const tagText = tag.textContent
			performSearch(tagText)
		})
	})
}

document.addEventListener('DOMContentLoaded', () => {
	addTagClickListeners()

	searchInput.addEventListener('keypress', event => {
		if (event.key === 'Enter') {
			performSearch()
		}
	})
	searchButton.addEventListener('click', () => {
		performSearch()
	})
})

function goToPage(pageNumber) {
	currentPage = pageNumber
	updatePosts()
}
