function toggleTheme() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function showElement(id) {
	var element = document.getElementById(id);
	element.classList.remove('hidden');
}

function hideElement(id) {
	var element = document.getElementById(id);
	element.classList.add('hidden');
}

function toggleWorkToContact() {
	showElement('contact');
	hideElement('work');
}

function toggleContactToWork() {
	showElement('work');
	hideElement('contact');
}

function swapText(id, newText) {
	document.getElementById(id).textContent = newText;
}