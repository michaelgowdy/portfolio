var theme = 'light';
var computerBlack;
var computerParchment;

window.onload = function () {
	computerBlack = 'assets/computer_black.gif';
	computerParchment = 'assets/computer_parchment.gif';
}

function toggleTheme() {
  var element = document.body;
  element.classList.toggle('dark-mode');

	var icon = document.getElementById('theme-icon');
	icon.innerText = icon.innerText == 'power' ? 'power_off' : 'power';

	var computer = document.getElementById('computer_gif');
	if(computer.src.includes(computerBlack)) {
		computer.src = computerParchment;
	}
	else {
		computer.src = computerBlack;
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