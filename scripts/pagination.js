let currentPage = 1
const postsPerPage = 4 // Number of posts on one page.
const totalPosts = 4 // Total number of posts (Current number).
const totalPages = Math.ceil(totalPosts / postsPerPage)

function changePage(direction) {
	currentPage += direction
	if (currentPage < 1) currentPage = 1
	if (currentPage > totalPages) currentPage = totalPages
	updatePosts()
}

function updatePosts() {
	const posts = document.querySelectorAll('.post')
	posts.forEach((post, index) => {
		post.style.display =
			Math.floor(index / postsPerPage) === currentPage - 1 ? 'block' : 'none'
	})
	document.getElementById(
		'pageInfo'
	).textContent = `Page ${currentPage} of ${totalPages}`
}

updatePosts()
