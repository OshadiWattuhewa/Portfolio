/**
 * Component Templates
 * Contains all HTML components as template strings
 */

const Components = {
	header: `
		<header class="header">
			<div class="header-container">
				<div class="header-content">
					<a href="index.html" class="logo">OshadiWattuhewa</a>

					<nav class="nav">
						<a href="index.html#projects" class="nav-item">Projects</a>
						<a href="index.html#about" class="nav-item">About me</a>
						<a href="index.html#contact" class="nav-item">Contact me</a>
					</nav>

					<div class="header-actions">
						<div class="social-links">
							<a href="https://dribbble.com/oshadiwattuhewa" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Dribbble">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
									<path
										d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM19.46 9.5C19.79 10.29 20 11.13 20 12C17.95 11.67 15.84 11.56 13.75 11.68C13.44 11.03 13.13 10.39 12.8 9.76C15.14 8.83 17.24 7.5 18.86 5.89C19.88 7.05 20.58 8.48 19.46 9.5ZM17.45 4.47C15.97 5.94 14.04 7.16 11.87 8.03C10.93 6.32 9.87 4.7 8.69 3.17C9.11 3.06 9.55 3 10 3C13.31 3 16.22 4.75 17.45 7.31V4.47ZM6.97 3.97C8.14 5.47 9.19 7.06 10.12 8.74C7.59 9.51 4.83 9.92 2 9.97C2.45 7.05 4.37 4.61 6.97 3.97ZM2 12.01V12C5.17 11.98 8.27 11.5 11.15 10.59C11.49 11.26 11.82 11.94 12.14 12.62C8.84 13.61 6.03 15.51 4.06 18.06C2.75 16.53 2 14.62 2 12.55V12.01ZM5.69 19.65C7.42 17.43 9.9 15.75 12.79 14.87C13.61 17.14 14.26 19.49 14.71 21.89C13.86 22.11 12.95 22.23 12 22.23C9.58 22.23 7.37 21.29 5.69 19.65ZM16.64 21.07C16.23 18.88 15.64 16.75 14.89 14.68C16.71 14.5 18.58 14.65 20.42 15.11C19.95 17.57 18.55 19.7 16.64 21.07Z"
										fill="currentColor"
									/>
								</svg>
							</a>
							<a href="https://www.linkedin.com/in/oshadiwattuhewa/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
									<path
										d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
										fill="currentColor"
									/>
								</svg>
							</a>
						</div>
						<button class="btn-download">
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
								<path
									d="M7 1.16667V9.91667M7 9.91667L10.5 6.41667M7 9.91667L3.5 6.41667M1.16667 12.8333H12.8333"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							Download CV
						</button>
					</div>

					<!-- Mobile Menu Button -->
					<button class="mobile-menu-btn" aria-label="Toggle menu">
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>
		</header>
	`,

	hero: `
		<section class="hero">
			<div class="hero-container">
				<div class="hero-content">
					<div class="hero-left">
						<div class="hero-intro">
							<div class="profile-circle">
								<img
									src="assets/OshadiW.jpg"
									alt="Oshadi Wattuhewa"
									class="profile-image"
								/>
							</div>
							<div class="intro-text">
								<p class="greeting">Hello !</p>
								<p class="intro-name">
									<span>I'm Oshadi Wattuhewa</span>
									<span>.</span>
									<span>UX Designer</span>
								</p>
							</div>
						</div>

						<h2 class="hero-title">
							Passionate about turning your ideas into seamless digital
							experiences
						</h2>

						<p class="hero-description">
							Product design . User experience . InteractionDesign .
							DesignThinking
						</p>
					</div>

					<div class="hero-right">
						<div class="hero-grid">
							<div class="grid-row">
								<div class="grid-card card-large">
									<div class="card-image">
										<img src="assets/projects.png" alt="Design work sample" />
									</div>
								</div>
								<a href="#projects" class="grid-card card-cta">
									<div class="card-content">
										<h3 class="card-title">Check my projects</h3>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
											<path
												d="M5 12H19M19 12L12 5M19 12L12 19"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</div>
								</a>
							</div>

							<div class="grid-row">
								<a href="#about" class="grid-card card-cta">
									<div class="card-content">
										<h3 class="card-title">Get to know me</h3>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
											<path
												d="M5 12H19M19 12L12 5M19 12L12 19"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</div>
								</a>
								<div class="grid-card card-large">
									<div class="card-image">
										<img src="assets/aboutme.png" alt="Design work sample" />
									</div>
								</div>
							</div>

							<div class="grid-row">
								<div class="grid-card card-large">
									<div class="card-image">
										<img src="assets/contact.png" alt="Design work sample" />
									</div>
								</div>
								<a href="#contact" class="grid-card card-cta">
									<div class="card-content">
										<h3 class="card-title">Contact me</h3>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
											<path
												d="M5 12H19M19 12L12 5M19 12L12 19"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	`,

	projects: `
		<section class="projects" id="projects">
			<div class="projects-container">
				<h2 class="projects-title">My projects</h2>

				<div class="projects-grid">
					<a href="project-travelmate.html" class="project-card">
						<div class="project-image">
							<img
								src="assets/design-shots/cover3.jpg"
								alt="Travel mate project"
							/>
						</div>
						<div class="project-content">
							<div class="project-info">
								<h3 class="project-name">Travel mate</h3>
								<p class="project-description">
									TravelMate is a travel itinerary app to plan your memorable
									trips. Based on your preference we will suggest a travel
									itinerary for you. Also its a platform to connect with other
									travellers and build your own travel community.
								</p>
							</div>
							<div class="project-link">
								<span>See more</span>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
									<path
										d="M3.33331 8H12.6666M12.6666 8L7.99998 3.33333M12.6666 8L7.99998 12.6667"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</div>
					</a>

					<a href="project-design-shots.html" class="project-card">
						<div class="project-image">
							<img src="assets/design-shots/cover2.jpg" alt="My designs work" />
						</div>
						<div class="project-content">
							<div class="project-info">
								<h3 class="project-name">My designs work</h3>
								<p class="project-description">
									My design work on different applications
								</p>
							</div>
							<div class="project-link">
								<span>See more</span>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
									<path
										d="M3.33331 8H12.6666M12.6666 8L7.99998 3.33333M12.6666 8L7.99998 12.6667"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</div>
					</a>
				</div>
			</div>
		</section>
	`,

	about: `
		<section class="about" id="about">
			<div class="about-container">
				<div class="about-intro">
					<h2 class="about-title">About me</h2>
					<p class="about-description">
						I am a UX Designer with 8 years of experience in delivering
						user-centered, intuitive digital experiences. Passionate about
						solving problems through user-friendly designs that meet user needs
						and expectations, and make everyday experiences easier and more
						enjoyable.
					</p>
				</div>

				<!-- Work Experience -->
				<div class="about-section">
					<h3 class="section-title">Work Experience</h3>
					<div class="experience-grid">
						<div class="experience-card">
							<div class="experience-header">
								<div class="experience-info">
									<h4 class="experience-title">UX Consultant - Redblox</h4>
									<p class="experience-period">(2025 - present)</p>
								</div>
							</div>
							<p class="experience-description">
								With 8 years of experience, having grown from an intern to a UX
								Lead and specialise in user-centered design, from research and
								discovery to final hand-off.
							</p>
							<div class="project-experience-title">Projects</div>
							<div class="project-experience-item">
									<div class="project-experience-sub-title">Nightingale Solution</div>
									<p class="project-experience-description">
										A smart elderly monitoring app that provides real-time health tracking and emergency alerts to ensure the safety and well-being of senior citizens.
									</p>
							</div>
						</div>

						<div class="experience-card">
							<div class="experience-header">
								<div class="experience-info">
									<h4 class="experience-title">UX Lead - 99X</h4>
									<p class="experience-period">(2017 - 2025)</p>
								</div>
							</div>
							<p class="experience-description">
								With 8 years of experience, having grown from an intern to a UX
								Lead and specialise in user-centered design, from research and
								discovery to final hand-off.
							</p>
							<div class="project-experience-title">Projects</div>

							<div class="project-experience">
								<div class="project-experience-item">
									<div class="project-experience-sub-title">BUS AS</div>
									<p class="project-experience-description">
										Scandinavia's largest automotive supplier of software solutions for vehicle trade-in assessments.
									</p>
								</div>
								<div class="project-experience-item">
									<div class="project-experience-sub-title">Oscar inspector</div>
									<p class="project-experience-description">
										Vehicle error prediction report generation, analysing and using car info over 3 decades.
									</p>
								</div>
							<div>
							</div>
						</div>
							</div>
					</div>
				</div>

				<!-- Key responsibilities -->
						<div class="experience-card">
						<h4 class="experience-title">Key responsibilities</h4>
							<ul class="responsibilities-list">
								<li class="responsibility-item"><span>Conducting user research</span> to gather insights and inform design decisions.</li>
								<li class="responsibility-item"><span>Creating wireframes and prototypes</span> to visualize design concepts and interactions.</li>
								<li class="responsibility-item"><span>Collaborating with cross-functional teams</span> including developers, product managers, and stakeholders to ensure design feasibility and alignment with business goals.</li>
								<li class="responsibility-item"><span>Conducting usability testing</span> to validate design solutions and gather user feedback for iterative improvements.</li>
								<li class="responsibility-item"><span>Staying updated with industry trends</span> and best practices in UX design to continuously enhance skills and knowledge.</li>
							</ul>
						</div>

				<!-- Core UX Skills -->
				<div class="about-section">
					<h3 class="section-title">Core UX Skills</h3>
					<div class="skills-grid">
						<div class="skill-card">
							<img src="assets/LineSegments.svg" alt="Research & Experience Mapping" />
						<div class="skill-content">
							<div class="skill-content">
								<h4 class="skill-title">User Research & Experience Mapping</h4>
								<p class="skill-description">
									Persona creations, Usability testing, interviews, surveys,
									heuristic evaluation, journey maps, service blueprints
								</p>
							</div>
						</div>
						</div>

						<div class="skill-card">
							<img src="assets/TreeView.svg" alt="Research & Experience Mapping" />
							<div class="skill-content">
								<h4 class="skill-title">Experience Design</h4>
								<p class="skill-description">
									Information architecture, interaction design, prototyping,
									wireframing
								</p>
							</div>
						</div>

						<div class="skill-card">
							<img src="assets/Handshake.svg" alt="Research & Experience Mapping" />
							<div class="skill-content">
								<h4 class="skill-title">Visual & UI Design</h4>
								<p class="skill-description">
									High-fidelity UI, design systems, accessibility design
								</p>
							</div>
						</div>

						<div class="skill-card">
							<img src="assets/Handshake.svg" alt="Research & Experience Mapping" />
							<div class="skill-content">
								<h4 class="skill-title">Collaboration</h4>
								<p class="skill-description">
									Design handoff, workshops, stakeholder communication
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Tools Experience -->
				<div class="about-section">
					<h3 class="section-title">Experience with</h3>
					<div class="tools-list">
						<div class="tool-icon">
							<img src="assets/figma.png" alt="Figma" />
						</div>
						<div class="tool-icon">
							<img src="assets/frame.png" alt="Framer" />
						</div>
						<div class="tool-icon">
							<img src="assets/ps.png" alt="Photoshop" />
						</div>
						<div class="tool-icon">
							<img src="assets/css.png" alt="CSS" />
						</div>
						<div class="tool-icon">
							<img src="assets/html.png" alt="HTML" />
						</div>
					</div>
				</div>

				
			</div>
		</section>
	`,

	contact: `
		<section class="contact" id="contact">
			<div class="contact-container">
				<div class="contact-wrapper">
					<div class="contact-content">
						<div class="contact-header">
							<h2 class="contact-title">Contact me</h2>
							<p class="contact-subtitle">
								Let's create something meaningful together
							</p>
						</div>

						<div class="contact-methods">
							<div class="contact-card">
								<div class="contact-icon">
									<img src="assets/mail-line.svg" alt="Email" />
								</div>
								<div class="contact-info">
									<h3 class="contact-method">E-mail</h3>
									<p class="contact-detail">Oshadiwattuhewa@gmail.com</p>
								</div>
							</div>

							<div class="contact-card">
								<div class="contact-icon">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path
											d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
											fill="currentColor"
										/>
									</svg>
								</div>
								<div class="contact-info">
									<h3 class="contact-method">LinkedIn</h3>
									<p class="contact-detail">
										https://www.linkedin.com/in/oshadiwattuhewa/
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	`,

	footer: `
		<footer class="footer">
			<div class="footer-container">
				<p class="footer-text">oshadiwattuhewa@gmail.com</p>
			</div>
		</footer>
	`,
};

// Simple component loader that works without a web server
function loadComponents() {
	// Load each component into its container
	document.getElementById("header-container").innerHTML = Components.header;
	document.getElementById("hero-container").innerHTML = Components.hero;
	document.getElementById("projects-container").innerHTML = Components.projects;
	document.getElementById("about-container").innerHTML = Components.about;
	document.getElementById("contact-container").innerHTML = Components.contact;
	document.getElementById("footer-container").innerHTML = Components.footer;

	console.log("All components loaded successfully");

	// Test if download button exists after loading
	setTimeout(() => {
		const downloadBtn = document.querySelector(".btn-download");
		console.log(
			"Download button exists after component loading:",
			!!downloadBtn
		);
		if (downloadBtn) {
			console.log("Download button found:", downloadBtn);
		}
	}, 100);
}

// Sticky header enhancement
function initStickyHeader() {
	const header = document.querySelector(".header");

	if (!header) return;

	// Add scroll event listener
	window.addEventListener("scroll", () => {
		const scrollY = window.scrollY;

		if (scrollY > 10) {
			header.classList.add("header-scrolled");
		} else {
			header.classList.remove("header-scrolled");
		}
	});
}

// Download CV functionality
function initDownloadCV() {
	// Try multiple times to find the button as components load
	let attempts = 0;
	const maxAttempts = 10;

	const tryInitDownload = () => {
		const downloadBtn = document.querySelector(".btn-download");

		if (downloadBtn) {
			console.log("Download button found, attaching event listener");
			// Remove any existing event listeners
			downloadBtn.removeEventListener("click", handleDownloadCV);
			// Add the event listener
			downloadBtn.addEventListener("click", handleDownloadCV);
		} else if (attempts < maxAttempts) {
			attempts++;
			console.log(
				`Download button not found, attempt ${attempts}/${maxAttempts}`
			);
			setTimeout(tryInitDownload, 200);
		} else {
			console.error("Download button not found after maximum attempts");
		}
	};

	// Start trying after a short delay
	setTimeout(tryInitDownload, 100);
}

// Separate function for the download handler
function handleDownloadCV(e) {
	e.preventDefault();
	console.log("Download CV button clicked!");

	// Create a temporary link element
	const link = document.createElement("a");
	link.href = "assets/CV-oshadi.pdf";
	link.download = "CV-oshadi.pdf";
	link.target = "_blank";

	// Append to body, click, and remove
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);

	console.log("CV download initiated");
}

// Load components when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
	console.log("DOM loaded, starting component loading...");
	loadComponents();
	initStickyHeader();

	// Initialize download CV after components are loaded
	setTimeout(() => {
		console.log("Initializing download CV...");
		initDownloadCV();
	}, 200);
});
