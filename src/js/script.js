document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('nav')
	const addShawdow = () => {
		if (window.scrollY >= 80) {
			nav.classList.add('nav-shadow')
		} else {
			nav.classList.remove('nav-shadow')
		}
	}
	window.addEventListener('scroll', addShawdow)
})
