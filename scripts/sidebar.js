const toggleButton = document.getElementById('toggleSidebar')
const sidebar = document.getElementById('sidebar')

toggleButton.addEventListener('click', () => {
	sidebar.classList.toggle('open')
})
