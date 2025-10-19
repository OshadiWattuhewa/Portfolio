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

// Content Section Click Handlers
document.addEventListener("DOMContentLoaded", function () {
	const contentSectionItems = document.querySelectorAll(
		".content-section-item"
	);

	contentSectionItems.forEach((item) => {
		item.addEventListener("click", function () {
			const sectionText = item.querySelector("h3");
			if (sectionText) {
				const sectionName = sectionText.textContent.trim();
				if (sectionName === "Survey") {
					toggleSurveyContent();
				} else if (sectionName === "Persona") {
					togglePersonaContent();
				} else if (sectionName === "Summary") {
					toggleSummaryContent();
				} else if (sectionName === "Signup and onboarding") {
					toggleJourneyMapContent("signup-onboarding");
				} else if (sectionName === "Plan new trip") {
					toggleJourneyMapContent("plan-new-trip");
				} else if (sectionName === "My saved trips") {
					toggleJourneyMapContent("my-saved-trips");
				} else if (sectionName === "Explore feed") {
					toggleJourneyMapContent("explore-feed");
				} else if (sectionName === "My profile") {
					toggleJourneyMapContent("my-profile");
				} else if (
					sectionName === "Connect with other travellers in the community."
				) {
					toggleJourneyMapContent("connect-travellers");
				}
			}
		});
	});
});

// Survey Content Toggle Functionality
function toggleSurveyContent() {
	const painPointsSection = document.querySelector("#pain-points");
	const breadcrumbActive = document.querySelector(".breadcrumb-item.active");

	if (!painPointsSection) return;

	// Check if we're currently showing survey content
	const isShowingSurvey = painPointsSection.classList.contains("survey-view");

	if (isShowingSurvey) {
		// Return to original content
		showOriginalContent();
	} else {
		// Show survey content
		showSurveyContent();
	}
}

// Persona Content Toggle Functionality
function togglePersonaContent() {
	const painPointsSection = document.querySelector("#pain-points");
	const breadcrumbActive = document.querySelector(".breadcrumb-item.active");

	if (!painPointsSection) return;

	// Check if we're currently showing persona content
	const isShowingPersona = painPointsSection.classList.contains("persona-view");

	if (isShowingPersona) {
		// Return to original content
		showOriginalContent();
	} else {
		// Show persona content
		showPersonaContent();
	}
}

// Summary Content Toggle Functionality
function toggleSummaryContent() {
	const painPointsSection = document.querySelector("#pain-points");
	const breadcrumbActive = document.querySelector(".breadcrumb-item.active");

	if (!painPointsSection) return;

	// Check if we're currently showing summary content
	const isShowingSummary = painPointsSection.classList.contains("summary-view");

	if (isShowingSummary) {
		// Return to original content
		showOriginalContent();
	} else {
		// Show summary content
		showSummaryContent();
	}
}

// Journey Map Content Toggle Functionality
function toggleJourneyMapContent(journeyType) {
	const journeySection = document.querySelector("#journey");
	const breadcrumbActive = document.querySelector(".breadcrumb-item.active");

	if (!journeySection) return;

	// Check if we're currently showing journey map content
	const isShowingJourneyMap =
		journeySection.classList.contains("journey-map-view");

	if (isShowingJourneyMap) {
		// Return to original content
		showOriginalJourneyContent();
	} else {
		// Show journey map content
		showJourneyMapContent(journeyType);
	}
}

// Show Survey Content
function showSurveyContent() {
	const painPointsSection = document.querySelector("#pain-points");
	const breadcrumbActive = document.querySelector(".breadcrumb-item.active");

	if (!painPointsSection) return;

	// Store original content if not already stored
	if (!document.getElementById("originalContent")) {
		const originalHTML = painPointsSection.innerHTML;
		const originalDiv = document.createElement("div");
		originalDiv.id = "originalContent";
		originalDiv.innerHTML = originalHTML;
		originalDiv.style.display = "none"; // Hide the stored content
		document.body.appendChild(originalDiv);
	}

	// Replace section content with survey content
	painPointsSection.innerHTML = `
		<div class="survey-results">
			<h1 class="project-title">Survey outputs</h1>
			<p class="project-description">
				This survey conducted through people live in different countries. Most participants from Sri Lanka and survey was conducted among participants aged 25 to 35.
			</p>
			
			<div class="survey-images">
				<div class="survey-image-container">
					<img src="assets/survey1.png" alt="Survey Results - Travel Frequency" class="survey-image" />
				</div>
				<div class="survey-image-container">
					<img src="assets/survey2.png" alt="Survey Results - Country Distribution" class="survey-image" />
				</div>
			</div>
		</div>
	`;

	// Add survey view class
	painPointsSection.classList.add("survey-view");

	// Update breadcrumb - keep same text but make it clickable
	const dynamicBreadcrumb = document.getElementById("dynamicBreadcrumb");
	if (dynamicBreadcrumb) {
		// Keep the same text: "TravelMate - Pain points & goals"
		dynamicBreadcrumb.style.textDecoration = "underline";
		dynamicBreadcrumb.style.textDecorationColor = "#3b82f6";
		dynamicBreadcrumb.style.textDecorationStyle = "wavy";
		dynamicBreadcrumb.style.cursor = "pointer";

		// Add click handler for survey view
		dynamicBreadcrumb.addEventListener("click", function (e) {
			e.preventDefault();
			showOriginalContent();
		});
	}
}

// Show Persona Content
function showPersonaContent() {
	const painPointsSection = document.querySelector("#pain-points");
	const breadcrumbActive = document.querySelector(".breadcrumb-item.active");

	if (!painPointsSection) return;

	// Store original content if not already stored
	if (!document.getElementById("originalContent")) {
		const originalHTML = painPointsSection.innerHTML;
		const originalDiv = document.createElement("div");
		originalDiv.id = "originalContent";
		originalDiv.innerHTML = originalHTML;
		originalDiv.style.display = "none"; // Hide the stored content
		document.body.appendChild(originalDiv);
	}

	// Replace section content with persona content
	painPointsSection.innerHTML = `
		<div class="persona-results">
			<h1 class="project-title">Persona</h1>
			<p class="project-description">
				This survey conducted through people live in different countries. Most participants from Sri Lanka and survey was conducted among participants aged 25 to 35.
			</p>
			
			<div class="persona-content">
				<div class="persona-section demographics">
					<h3>Demographics</h3>
					<ul>
						<li>Name - Pasindu</li>
						<li>Male</li>
						<li>Age 31</li>
						<li>Travel as soon as got a free time</li>
						<li>Average salary holder, But willing to spend money to travel</li>
						<li>Single</li>
						<li>Solo traveler (Most of the times)</li>
						<li>A person who likes to party</li>
						<li>Health conscious person</li>
					</ul>
				</div>
				
				<div class="persona-section think-feel">
					<h3>Think & Feel</h3>
					<ul>
						<li>Spending too much time when planning the trips, no idea from where to start. what is best order to visit places, what's the best route etc.</li>
						<li>Really stressful when making day plans.</li>
						<li>After selecting a place, wants to cover places as much as he can doesn't like to miss important places.</li>
						<li>Worrying about where to gather useful accurate data.</li>
						<li>After visit every places, feels like better if we have done more research about some places.</li>
						<li>Too much apps available for transports/accommodations etc. no idea what fits the best.</li>
						<li>Like to party, so always searching good places on social media.</li>
						<li>No better way to collect info about specific place, sometimes has to go through lengthy videos to get an idea about a specific places. And it's boring.</li>
						<li>Frustrated, there's no easy way to find things based on his need. Where to for yoga, where to go for night life etc..</li>
						<li>Privacy & security is a main concern.</li>
						<li>No idea what is the best time to travel specific places (whether it's winter, summer etc.)</li>
						<li>Doesn't have much idea about culture and food unique to specific places.</li>
						<li>Daily inspired by social media posts, making bucket lists to visit and keeping records of places to visit or photo locations all over the places.</li>
						<li>Limited awareness of available data and internet options.</li>
						<li>Search over google and social media for best shopping places when it comes to clothing, grocery and shoes etc...</li>
						<li>Currently posting my travel related things in different social media platforms but love to keep post things</li>
					</ul>
				</div>
				
				<div class="persona-section hear-see">
					<h3>Hear & See</h3>
					<ul>
						<li>Inspired by social media posts, about wonderful places, restaurants, food and different cultures.</li>
						<li>Exaggerated comments / Reviews and Photos</li>
						<li>Hear about exaggerated pictures about some places in social media and the gap between expectations and reality.</li>
						<li>Impressive travel deals through social media.</li>
					</ul>
				</div>
				
				<div class="persona-section painpoints">
					<h3>Painpoints</h3>
					<ul>
						<li>Spending too much time planning trips, with no clear idea of where to start, the best order to visit places, or the best routes.</li>
						<li>Uncertainty about the best time to travel to specific places (e.g., winter vs. summer).</li>
						<li>Frustration due to the lack of an easy way to find things based on specific needs, such as locations for yoga or nightlife.</li>
						<li>Difficulty in collecting information about specific places, often requiring lengthy and boring video consumption.</li>
						<li>Stress related to transport options between different places and the average time for each visit.</li>
						<li>Worry about accommodations.</li>
						<li>Awareness of exaggerated pictures on social media and the discrepancy between expectations and reality.</li>
					</ul>
				</div>
				
				<div class="persona-section goals">
					<h3>Goals</h3>
					<ul>
						<li>An easy and time-saving method to plan trips and explore details.</li>
						<li>Suggestions for proper routes for particular trips.</li>
						<li>An attractive and user-friendly way to present data that encourages active interaction and inspiration from content (e.g., places to visit, food, culture).</li>
						<li>Customized travel itineraries based on user needs and goals.</li>
						<li>Access to more trustworthy reviews and content based on real user experiences.</li>
						<li>Finding budget-friendly, neat, and tidy places for accommodations.</li>
						<li>Daily inspiration from social media posts, leading to the creation of bucket lists for visits.</li>
						<li>Access to travel deals.</li>
					</ul>
				</div>
				
				<div class="persona-section say-do">
					<h3>Say & Do</h3>
					<ul>
						<li>Always trying budget friendly neat and tidy places for accommodations.</li>
						<li>Google search find things to do and maintaining that list in notepad/Google sheets/ pen paper or in a note book.</li>
						<li>Ask from chat gpt and creating itineraries.</li>
						<li>Considering real user reviews rather than fake exaggerated reviews.</li>
						<li>Using different apps for accommodation/transportation / and to find places to visit and syncing all them is frustrated.</li>
						<li>Always asking things from previously travel friends/ neighbours before you travel to specific place.</li>
						<li>The apps are different from country to country. Always needs to do research what's the best to use.</li>
						<li>Using google sheets to plan the trip info, Time/ routes/ places to visit day plan etc.</li>
						<li>No better way to collect info about specific place, sometimes has to go through lengthy videos on social media to get an idea about a specific places or read blogs.</li>
						<li>Always taking pictures and posting on social media. And really concerned about people responds.</li>
						<li>Always try to good find photo locations, that saw on social media.</li>
						<li>Always checking best budget friendly options to travel.</li>
						<li>Saving travel posts and photo locations here and there on different social media platforms.</li>
					</ul>
				</div>
			</div>
		</div>
	`;

	// Add persona view class
	painPointsSection.classList.add("persona-view");

	// Update breadcrumb - keep same text but make it clickable
	const dynamicBreadcrumb = document.getElementById("dynamicBreadcrumb");
	if (dynamicBreadcrumb) {
		// Keep the same text: "TravelMate - Pain points & goals"
		dynamicBreadcrumb.style.textDecoration = "underline";
		dynamicBreadcrumb.style.textDecorationColor = "#3b82f6";
		dynamicBreadcrumb.style.textDecorationStyle = "wavy";
		dynamicBreadcrumb.style.cursor = "pointer";

		// Add click handler for persona view
		dynamicBreadcrumb.addEventListener("click", function (e) {
			e.preventDefault();
			showOriginalContent();
		});
	}
}

// Show Summary Content
function showSummaryContent() {
	const painPointsSection = document.querySelector("#pain-points");
	const breadcrumbActive = document.querySelector(".breadcrumb-item.active");

	if (!painPointsSection) return;

	// Store original content if not already stored
	if (!document.getElementById("originalContent")) {
		const originalHTML = painPointsSection.innerHTML;
		const originalDiv = document.createElement("div");
		originalDiv.id = "originalContent";
		originalDiv.innerHTML = originalHTML;
		originalDiv.style.display = "none"; // Hide the stored content
		document.body.appendChild(originalDiv);
	}

	// Replace section content with summary content
	painPointsSection.innerHTML = `
		<div class="summary-results">
			<h1 class="project-title">Summary</h1>
			<p class="project-description">
				Please find the summary of pain-points gathered using survey and persona.
			</p>
			
			<div class="summary-content">
				<div class="summary-section painpoints">
					<h3>Painpoints</h3>
					<div class="summary-cards">
						<div class="summary-card">Spending too much time when planning the trips, no idea from where to start. what is best order to visit places, whats the best route, prepare day plans etc.</div>
						<div class="summary-card">Saving travel posts and photo locations here and there on different social media platforms.</div>
						<div class="summary-card">Worrying about where to gather useful accurate data.</div>
						<div class="summary-card">After visit every places, feels like better if we have done more research about some places.</div>
						<div class="summary-card">Stressful about transport options between different places, and average time for each visit.</div>
						<div class="summary-card">No better way to collect info about specific place, sometimes has to go through lengthy videos to get an idea about a specific places. And it's boring.</div>
						<div class="summary-card">Hear about exaggerated pictures about some places in social media and the gap between expectations and reality.</div>
						<div class="summary-card">Always checking best budget friendly options to travel</div>
						<div class="summary-card">Search over google and social media for best/affortable shopping places when it comes to clothing, grocery and shoes etc...</div>
						<div class="summary-card">Hard to keep track on expected budget, when adding new items on itinerary.</div>
						<div class="summary-card">Different transport apps from country to country. Always needs to do research what's the best to use.</div>
						<div class="summary-card">Always asking things from previously travel friends/ neighbours before you travel to specific place.</div>
						<div class="summary-card">Limited awareness of available data and internet options</div>
						<div class="summary-card">Using different apps for accommodation/ transportation / Things to do and syncing all them is frustrated.</div>
					</div>
				</div>
				
				<div class="summary-section goals">
					<h3>Goals</h3>
					<div class="summary-cards">
						<div class="summary-card">Easy, and time saving one platform to plan trips, explore details.</div>
						<div class="summary-card">List down user friendly way to, find things to do, good restaurants, shopping places and adventures etc....</div>
						<div class="summary-card">Proper route suggestions for particular trips.</div>
						<div class="summary-card">One platform to save all posts, blogs, videos etc...</div>
						<div class="summary-card">Common platform to connect with other travellers to get more trust worthy travel tips and possible to build travel community.</div>
						<div class="summary-card">Present more trust worthy reviews and contents based on real user reviews.</div>
						<div class="summary-card">Easy way to handle total trip budget.</div>
						<div class="summary-card">Always checking best budget friendly options to travel</div>
						<div class="summary-card">Customised travel itineraries based on user needs and goals.</div>
						<div class="summary-card">Possible to make travel bucket list or trips save inspirational posts.</div>
						<div class="summary-card">Possible to post travel experiences and share with community.</div>
					</div>
				</div>
			</div>
		</div>
	`;

	// Add summary view class
	painPointsSection.classList.add("summary-view");

	// Update breadcrumb - keep same text but make it clickable
	const dynamicBreadcrumb = document.getElementById("dynamicBreadcrumb");
	if (dynamicBreadcrumb) {
		// Keep the same text: "TravelMate - Pain points & goals"
		dynamicBreadcrumb.style.textDecoration = "underline";
		dynamicBreadcrumb.style.textDecorationColor = "#3b82f6";
		dynamicBreadcrumb.style.textDecorationStyle = "wavy";
		dynamicBreadcrumb.style.cursor = "pointer";

		// Add click handler for summary view
		dynamicBreadcrumb.addEventListener("click", function (e) {
			e.preventDefault();
			showOriginalContent();
		});
	}
}

// Show Journey Map Content
function showJourneyMapContent(journeyType) {
	const journeySection = document.querySelector("#journey");
	const breadcrumbActive = document.querySelector(".breadcrumb-item.active");

	if (!journeySection) return;

	// Store original content if not already stored
	if (!document.getElementById("originalJourneyContent")) {
		const originalHTML = journeySection.innerHTML;
		const originalDiv = document.createElement("div");
		originalDiv.id = "originalJourneyContent";
		originalDiv.innerHTML = originalHTML;
		originalDiv.style.display = "none"; // Hide the stored content
		document.body.appendChild(originalDiv);
	}

	// Get journey map content based on type
	let journeyContent = getJourneyMapContent(journeyType);

	// Replace section content with journey map content
	journeySection.innerHTML = `
		<div class="journey-map-results">
			<h1 class="project-title">${journeyContent.title}</h1>
			<p class="project-description">
				${journeyContent.description}
			</p>
			
			<div class="journey-map-container">
				<div class="journey-map-image-container">
					<img src="${journeyContent.image}" alt="${journeyContent.title}" class="journey-map-image" />
				</div>
			</div>
		</div>
	`;

	// Add journey map view class
	journeySection.classList.add("journey-map-view");

	// Update breadcrumb - keep same text but make it clickable
	const dynamicBreadcrumb = document.getElementById("dynamicBreadcrumb");
	if (dynamicBreadcrumb) {
		// Keep the same text: "TravelMate - Journey maps"
		dynamicBreadcrumb.style.textDecoration = "underline";
		dynamicBreadcrumb.style.textDecorationColor = "#3b82f6";
		dynamicBreadcrumb.style.textDecorationStyle = "wavy";
		dynamicBreadcrumb.style.cursor = "pointer";

		// Add click handler for journey map view
		dynamicBreadcrumb.addEventListener("click", function (e) {
			e.preventDefault();
			showOriginalJourneyContent();
		});
	}
}

// Get Journey Map Content
function getJourneyMapContent(journeyType) {
	const journeyMaps = {
		"signup-onboarding": {
			title: "Signup and onboarding",
			description: "New user signup, old user signing and onboarding process.",
			image: "assets/onboarding.jpg",
		},
		"plan-new-trip": {
			title: "Plan new trip",
			description: "User flows related to new trip creation and exploration",
			image: "assets/trip.jpg",
		},
		"my-saved-trips": {
			title: "My saved trips",
			description: "User saved trips and system suggested Itineries",
			image: "assets/saved.jpg",
		},
		"explore-feed": {
			title: "Explore feed",
			description: "Explore different content posted by other travellers.",
			image: "assets/explore.jpg",
		},
		"my-profile": {
			title: "My profile",
			description: "Post your experiences",
			image: "assets/profile.jpg",
		},
		"connect-travellers": {
			title: "Connect with other travellers in the community",
			description: "Follow / chat and interact with other travelers",
			image: "assets/community.jpg",
		},
	};

	return journeyMaps[journeyType] || journeyMaps["signup-onboarding"];
}

// Show Original Journey Content
function showOriginalJourneyContent() {
	const journeySection = document.querySelector("#journey");
	const breadcrumbActive = document.querySelector(".breadcrumb-item.active");
	const originalContent = document.getElementById("originalJourneyContent");

	if (!journeySection || !originalContent) return;

	// Restore original content
	journeySection.innerHTML = originalContent.innerHTML;

	// Remove journey map view class
	journeySection.classList.remove("journey-map-view");

	// Restore breadcrumb - keep same text but remove clickability
	const dynamicBreadcrumb = document.getElementById("dynamicBreadcrumb");
	if (dynamicBreadcrumb) {
		// Keep the same text: "TravelMate - Journey maps"
		dynamicBreadcrumb.style.textDecoration = "none";
		dynamicBreadcrumb.style.cursor = "default";

		// Remove click handler for initial view
		dynamicBreadcrumb.replaceWith(dynamicBreadcrumb.cloneNode(true));
	}

	// Re-attach event listeners to the restored content
	attachJourneyClickHandlers();
}

// Attach Journey Click Handlers
function attachJourneyClickHandlers() {
	const journeyContentItems = document.querySelectorAll(
		"#journey .content-section-item"
	);

	journeyContentItems.forEach((item) => {
		// Remove existing event listeners
		const newItem = item.cloneNode(true);
		item.parentNode.replaceChild(newItem, item);

		newItem.addEventListener("click", function () {
			const sectionText = newItem.querySelector("h3");
			if (sectionText) {
				const sectionName = sectionText.textContent.trim();
				if (sectionName === "Signup and onboarding") {
					toggleJourneyMapContent("signup-onboarding");
				} else if (sectionName === "Plan new trip") {
					toggleJourneyMapContent("plan-new-trip");
				} else if (sectionName === "My saved trips") {
					toggleJourneyMapContent("my-saved-trips");
				} else if (sectionName === "Explore feed") {
					toggleJourneyMapContent("explore-feed");
				} else if (sectionName === "My profile") {
					toggleJourneyMapContent("my-profile");
				} else if (
					sectionName === "Connect with other travellers in the community."
				) {
					toggleJourneyMapContent("connect-travellers");
				}
			}
		});
	});
}

// Show Original Content
function showOriginalContent() {
	const painPointsSection = document.querySelector("#pain-points");
	const breadcrumbActive = document.querySelector(".breadcrumb-item.active");
	const originalContent = document.getElementById("originalContent");

	if (!painPointsSection || !originalContent) return;

	// Restore original content
	painPointsSection.innerHTML = originalContent.innerHTML;

	// Remove view classes
	painPointsSection.classList.remove(
		"survey-view",
		"persona-view",
		"summary-view"
	);

	// Restore breadcrumb - keep same text but remove clickability
	const dynamicBreadcrumb = document.getElementById("dynamicBreadcrumb");
	if (dynamicBreadcrumb) {
		// Keep the same text: "TravelMate - Pain points & goals"
		dynamicBreadcrumb.style.textDecoration = "none";
		dynamicBreadcrumb.style.cursor = "default";

		// Remove click handler for initial view
		dynamicBreadcrumb.replaceWith(dynamicBreadcrumb.cloneNode(true));
	}

	// Re-attach event listeners to the restored content
	attachContentClickHandlers();
}

// Attach Content Section Click Handlers
function attachContentClickHandlers() {
	const contentSectionItems = document.querySelectorAll(
		".content-section-item"
	);

	contentSectionItems.forEach((item) => {
		// Remove existing event listeners
		const newItem = item.cloneNode(true);
		item.parentNode.replaceChild(newItem, item);

		newItem.addEventListener("click", function () {
			const sectionText = newItem.querySelector("h3");
			if (sectionText) {
				const sectionName = sectionText.textContent.trim();
				if (sectionName === "Survey") {
					toggleSurveyContent();
				} else if (sectionName === "Persona") {
					togglePersonaContent();
				} else if (sectionName === "Summary") {
					toggleSummaryContent();
				} else if (sectionName === "Signup and onboarding") {
					toggleJourneyMapContent("signup-onboarding");
				} else if (sectionName === "Plan new trip") {
					toggleJourneyMapContent("plan-new-trip");
				} else if (sectionName === "My saved trips") {
					toggleJourneyMapContent("my-saved-trips");
				} else if (sectionName === "Explore feed") {
					toggleJourneyMapContent("explore-feed");
				} else if (sectionName === "My profile") {
					toggleJourneyMapContent("my-profile");
				} else if (
					sectionName === "Connect with other travellers in the community."
				) {
					toggleJourneyMapContent("connect-travellers");
				}
			}
		});
	});
}

// Initialize breadcrumb functionality
document.addEventListener("DOMContentLoaded", function () {
	const dynamicBreadcrumb = document.getElementById("dynamicBreadcrumb");

	if (dynamicBreadcrumb) {
		// Set initial state - not clickable
		dynamicBreadcrumb.style.cursor = "default";
		dynamicBreadcrumb.style.textDecoration = "none";
	}
});
