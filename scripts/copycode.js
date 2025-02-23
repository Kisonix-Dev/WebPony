function copyToClipboard() {
	const codeBlock = document.getElementById('codeBlock')
	const textArea = document.createElement('textarea')
	textArea.value = codeBlock.innerText
	document.body.appendChild(textArea)
	textArea.select()
	document.execCommand('copy')
	document.body.removeChild(textArea)

	const copyButton = document.getElementById('copyButton')
	copyButton.classList.add('copied')
	copyButton.textContent = 'Code copied!'

	setTimeout(() => {
		copyButton.classList.remove('copied')
		copyButton.textContent = 'Copy code'
	}, 2000)
}
