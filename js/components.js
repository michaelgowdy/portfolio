
// header
class THeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<header>
				<a
					id="title"
					class="title"
					href="#"
					onclick="toggleContactToWork()"
				></a>

				<nav id="navbar">
					<a
						id="work"
						class="work"
						href="#work"
						onclick="toggleWorkToContact()"
					></a>

					<a
						id="contact"
						class="contact hidden"
						href="#contact"
						onclick="toggleContactToWork()"
					></a>

					<a href="#" class="theme-toggle" onclick="toggleTheme()">
						<span id="theme-icon" class="material-symbols-outlined">
								power
						</span>
					</a>
				</nav>
			</header>
		`;
	}
}
customElements.define("t-header", THeader);

// main section
class TMainSection extends HTMLElement {
  connectedCallback() {
    // const heading = this.getAttribute("heading");
    // const details = this.getAttribute("details");

    this.innerHTML = `
			<img id="computer_gif" src="assets/computer_black.gif">
			<a href="mailto:michaelmichaelgowdy@gmail.com">
				<u>michaelmichaelgowdy@gmail.com</u>
			</a>
    `;
  }
}
customElements.define("t-main-section", TMainSection);