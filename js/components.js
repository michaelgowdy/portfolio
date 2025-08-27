
class THead extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>michael gowdy</title>
				<link rel="preconnect" href="https://fonts.googleapis.com">
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
				<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
				<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
				<link rel="stylesheet" href="style.css">
			</head>
		`;
	}
}
customElements.define("t-head", THead);

// header
class THeader extends HTMLElement {
	connectedCallback() {
    const navOption = this.getAttribute("navOption");
		const href = this.getAttribute("href");

		this.innerHTML = `
			<header>
				<a
					id="title"
					class="title"
					href="/portfolio"
					onclick="toggleContactToWork()"
				></a>

				<nav id="navbar">
					<a
						id="${navOption}"
						class="${navOption}"
						href="${href}"
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

// contact main section
class TContactMainSection extends HTMLElement {
  connectedCallback() {
    // const heading = this.getAttribute("heading");
    // const details = this.getAttribute("details");

    this.innerHTML = `
			<img id="computer_black" src="assets/computer_black.gif">
			<img id="computer_parchment" class="hidden" src="assets/computer_parchment.gif">
			<a href="mailto:michaelmichaelgowdy@gmail.com">
				<u>michaelmichaelgowdy@gmail.com</u>
			</a>
    `;
  }
}
customElements.define("t-contact-main-section", TContactMainSection);

// work main section
class TWorkMainSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
			<a href="https://michaelgowdy.github.io/uglybrunch" target="_blank">
				<u>ugly brunch</u> [2022]
			</a>
    `;
  }
}
customElements.define("t-work-main-section", TWorkMainSection);