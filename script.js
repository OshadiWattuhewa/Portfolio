// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const nav = document.querySelector(".nav");

if (mobileMenuBtn && nav) {
	mobileMenuBtn.addEventListener("click", function () {
		nav.classList.toggle("active");
		this.classList.toggle("active");
	});

	// Close menu when clicking outside
	document.addEventListener("click", function (event) {
		if (!mobileMenuBtn.contains(event.target) && !nav.contains(event.target)) {
			nav.classList.remove("active");
			mobileMenuBtn.classList.remove("active");
		}
	});

	// Close menu when clicking on a nav link
	const navItems = document.querySelectorAll(".nav-item");
	navItems.forEach((item) => {
		item.addEventListener("click", function () {
			nav.classList.remove("active");
			mobileMenuBtn.classList.remove("active");
		});
	});
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute("href"));
		if (target) {
			const headerHeight = document.querySelector(".header").offsetHeight;
			const targetPosition = target.offsetTop - headerHeight;

			window.scrollTo({
				top: targetPosition,
				behavior: "smooth",
			});
		}
	});
});

// Add active state to nav items on scroll
window.addEventListener("scroll", function () {
	const sections = document.querySelectorAll("section[id]");
	const navItems = document.querySelectorAll(".nav-item");

	let current = "";

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (pageYOffset >= sectionTop - 200) {
			current = section.getAttribute("id");
		}
	});

	navItems.forEach((item) => {
		item.classList.remove("active");
		if (item.getAttribute("href") === `#${current}`) {
			item.classList.add("active");
		}
	});
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
	const currentScroll = window.pageYOffset;

	if (currentScroll <= 0) {
		header.style.boxShadow = "none";
	} else {
		header.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.05)";
	}

	lastScroll = currentScroll;
});

// Handle card clicks in hero section
const cardCTAs = document.querySelectorAll(".card-cta");
cardCTAs.forEach((card) => {
	card.addEventListener("click", function () {
		const title = this.querySelector(".card-title").textContent.toLowerCase();
		if (title.includes("projects")) {
			document
				.querySelector("#projects")
				.scrollIntoView({ behavior: "smooth" });
		} else if (title.includes("know")) {
			document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
		} else if (title.includes("contact")) {
			document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
		}
	});
});

// Add loading animation
window.addEventListener("load", function () {
	document.body.classList.add("loaded");
	// Remove preload class to enable transitions
	setTimeout(() => {
		document.body.classList.remove("preload");
	}, 100);
});

// Initialize download CV functionality for pages using script.js
document.addEventListener("DOMContentLoaded", function () {
	// Wait for components to load, then initialize download
	setTimeout(() => {
		if (typeof initDownloadCV === "function") {
			initDownloadCV();
		}
	}, 300);
});

// Lazy loading for images
if ("IntersectionObserver" in window) {
	const imageObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const img = entry.target;
				img.classList.add("loaded");
				observer.unobserve(img);
			}
		});
	});

	const images = document.querySelectorAll("img");
	images.forEach((img) => imageObserver.observe(img));
}

// Add animation on scroll
const observerOptions = {
	threshold: 0.1,
	rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("fade-in");
		}
	});
}, observerOptions);

// Observe sections for animation
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
	observer.observe(section);
});

// Add hover effect to cards
const cards = document.querySelectorAll(
	".experience-card, .skill-card, .project-card"
);
cards.forEach((card) => {
	card.addEventListener("mouseenter", function () {
		this.style.transform = "translateY(-4px)";
	});

	card.addEventListener("mouseleave", function () {
		this.style.transform = "translateY(0)";
	});
});
