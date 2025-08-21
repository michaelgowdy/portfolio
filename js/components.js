
// header
class THeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<header>
				<a
					id="title"
					href="#"
					onmouseover="swapText('title', 'ydwog_leahcim')"
					onmouseout="swapText('title', 'michael_gowdy')"
					onclick="toggleContactToWork()"
				>
					michael_gowdy
				</a>

				<nav id="navbar">
					<a
						id="work"
						href="#work"
						onmouseover="swapText('title', 'krow')"
						onmouseout="swapText('title', 'michael_gowdy')"
						onclick="toggleWorkToContact()"
					>
						work
					</a>

					<a
						id="contact"
						class="hidden"
						href="#contact"
						onmouseover="swapText('title', 'tcatnoc')"
						onmouseout="swapText('title', 'michael_gowdy')"
						onclick="toggleContactToWork()"
					>
						contact
					</a>

					<a href="#" class="theme-toggle" onclick="toggleTheme()">
						<span class="material-symbols-outlined">
								contrast
						</span>
					</a>
				</nav>
			</header>
		`;
	}
}
customElements.define("t-header", THeader);

// main section
// class TMainSection extends HTMLElement {
//   connectedCallback() {
//     const heading = this.getAttribute("heading");
//     const details = this.getAttribute("details");

//     this.innerHTML = `
//       <div class="main-section">
//         <h2>${heading}</h2>
//         <p>${details}</p>
//       </div>
//     `;
//   }
// }
// customElements.define("t-main-section", TMainSection);

// hamburger
// <img src="img/ham-open.svg" class="ham" />
// const ham = document.querySelector(".ham");
// const nav = document.querySelector("nav");
// ham.addEventListener("click", toggle);
// nav.addEventListener("click", toggle);
// function toggle() {
//   ham.src = ham.src.includes("img/ham-close.svg")
//     ? "img/ham-open.svg"
//     : "img/ham-close.svg";
//   nav.classList.toggle("show");
// }