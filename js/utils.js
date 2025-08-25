var theme = 'light';

function toggleTheme() {
	theme = theme == 'light' ? 'dark' : 'light';

  var element = document.body;
	var icon = document.getElementById('theme-icon');
	
  element.classList.toggle('dark-mode');

	if(theme == 'light') {
		icon.innerText = 'power';
		showElement('computer_black');
		hideElement('computer_parchment');
	}
	if(theme == 'dark') {
		icon.innerText = 'power_off';
		showElement('computer_parchment');
		hideElement('computer_black');
	}
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