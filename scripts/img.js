var modal = document.getElementById('myModal')
var img = document.getElementById('img01')
var modalImg = document.querySelector('.modal-content')

var images = document.querySelectorAll('.img')

images.forEach(function (image) {
	image.onclick = function () {
		modal.style.visibility = 'visible'
		modal.style.opacity = '1'
		modalImg.src = this.src
	}
})

document.getElementById('closeModal').onclick = function () {
	modal.style.visibility = 'hidden'
	modal.style.opacity = '0'
}
