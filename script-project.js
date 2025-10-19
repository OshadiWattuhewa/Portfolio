// Project Detail Page JavaScript

// Mobile Menu Toggle (reused from main script)
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const nav = document.querySelector(".nav");

if (mobileMenuBtn && nav) {
	mobileMenuBtn.addEventListener("click", function () {
		nav.classList.toggle("active");
		this.classList.toggle("active");
	});

	document.addEventListener("click", function (event) {
		if (!mobileMenuBtn.contains(event.target) && !nav.contains(event.target)) {
			nav.classList.remove("active");
			mobileMenuBtn.classList.remove("active");
		}
	});

	const navItems = document.querySelectorAll(".nav-item");
	navItems.forEach((item) => {
		item.addEventListener("click", function () {
			nav.classList.remove("active");
			mobileMenuBtn.classList.remove("active");
		});
	});
}

// Tab Navigation Functionality
const sidebarItems = document.querySelectorAll(".sidebar-item");
const sections = document.querySelectorAll(".content-section");

// Initialize - show first section and set active state
function initializeTabs() {
	// Hide all sections
	sections.forEach((section) => {
		section.classList.remove("active");
	});

	// Show first section (Introduction)
	const firstSection = document.querySelector("#introduction");
	if (firstSection) {
		firstSection.classList.add("active");
	}

	// Set first sidebar item as active
	sidebarItems.forEach((item) => {
		item.classList.remove("active");
		const indicator = item.querySelector(".sidebar-indicator");
		if (indicator) {
			indicator.remove();
		}
	});

	const firstItem = document.querySelector(
		'.sidebar-item[href="#introduction"]'
	);
	if (firstItem) {
		firstItem.classList.add("active");
		const newIndicator = document.createElement("div");
		newIndicator.className = "sidebar-indicator";
		firstItem.appendChild(newIndicator);
	}
}

// Tab Click Handler
sidebarItems.forEach((item) => {
	item.addEventListener("click", function (e) {
		e.preventDefault();

		const targetId = this.getAttribute("href");
		const targetSection = document.querySelector(targetId);

		if (targetSection) {
			// Hide all sections
			sections.forEach((section) => {
				section.classList.remove("active");
			});

			// Show target section
			targetSection.classList.add("active");

			// Update sidebar active state
			sidebarItems.forEach((sidebarItem) => {
				sidebarItem.classList.remove("active");
				const indicator = sidebarItem.querySelector(".sidebar-indicator");
				if (indicator) {
					indicator.remove();
				}
			});

			// Set clicked item as active
			this.classList.add("active");
			const newIndicator = document.createElement("div");
			newIndicator.className = "sidebar-indicator";
			this.appendChild(newIndicator);
		}
	});
});

// Initialize tabs when page loads
initializeTabs();

// Add loading animation
window.addEventListener("load", function () {
	document.body.classList.add("loaded");
	setTimeout(() => {
		document.body.classList.remove("preload");
	}, 100);
});

// Initialize download CV functionality for project pages
document.addEventListener("DOMContentLoaded", function () {
	// Wait for components to load, then initialize download
	setTimeout(() => {
		if (typeof initDownloadCV === "function") {
			initDownloadCV();
		}
	}, 300);
});

// Mobile Sidebar Toggle (if needed)
function createMobileSidebarToggle() {
	if (window.innerWidth <= 767) {
		let toggleBtn = document.querySelector(".sidebar-toggle");
		if (!toggleBtn) {
			toggleBtn = document.createElement("button");
			toggleBtn.className = "sidebar-toggle";
			toggleBtn.innerHTML = `
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
					<path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			`;
			document.body.appendChild(toggleBtn);

			const sidebar = document.querySelector(".project-sidebar");
			toggleBtn.addEventListener("click", function () {
				sidebar.classList.toggle("active");
			});

			// Close sidebar when clicking outside
			document.addEventListener("click", function (event) {
				if (
					!sidebar.contains(event.target) &&
					!toggleBtn.contains(event.target)
				) {
					sidebar.classList.remove("active");
				}
			});

			// Close sidebar when clicking on a link
			sidebarItems.forEach((item) => {
				item.addEventListener("click", function () {
					sidebar.classList.remove("active");
				});
			});
		}
	}
}

createMobileSidebarToggle();
window.addEventListener("resize", createMobileSidebarToggle);
