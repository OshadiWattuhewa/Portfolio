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

	// Set initial breadcrumb
	updateBreadcrumbForTab("#introduction");
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

			// Update breadcrumb based on active tab
			updateBreadcrumbForTab(targetId);
		}
	});
});

// Update breadcrumb based on active tab
function updateBreadcrumbForTab(targetId) {
	const breadcrumbActive = document.querySelector(".breadcrumb-item.active");
	if (!breadcrumbActive) return;

	// Map section IDs to breadcrumb text
	const breadcrumbMap = {
		"#introduction": "TravelMate - Introduction",
		"#pain-points": "TravelMate - Pain points & goals",
		"#solution": "TravelMate - Solution blueprint",
		"#journey": "TravelMate - Journey maps",
		"#prototypes": "TravelMate - Prototypes",
		"#feedback": "TravelMate - Feedback",
		"#future": "TravelMate - Future Goals",
	};

	// Get the new breadcrumb text
	const newBreadcrumbText = breadcrumbMap[targetId] || "TravelMate";

	// Update breadcrumb text
	breadcrumbActive.textContent = newBreadcrumbText;

	// Remove any stored original text and clickability
	if (breadcrumbActive.dataset.originalText) {
		delete breadcrumbActive.dataset.originalText;
	}
	breadcrumbActive.style.textDecoration = "none";
	breadcrumbActive.style.cursor = "default";
	breadcrumbActive.removeEventListener("click", handleBreadcrumbClick);
	breadcrumbActive.removeEventListener("click", handleJourneyBreadcrumbClick);
}

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
				<div class="survey-image-container">
					<img src="assets/survey3.png" alt="Survey Results - Age Distribution" class="survey-image" />
				</div>
				<div class="survey-image-container">
					<img src="assets/survey4.png" alt="Survey Results - Travel Preferences" class="survey-image" />
				</div>
				<div class="survey-image-container">
					<img src="assets/survey5.png" alt="Survey Results - Planning Methods" class="survey-image" />
				</div>
				<div class="survey-image-container">
					<img src="assets/survey6.png" alt="Survey Results - Pain Points" class="survey-image" />
				</div>
				<div class="survey-image-container">
					<img src="assets/survey7.png" alt="Survey Results - Technology Usage" class="survey-image" />
				</div>
				<div class="survey-image-container">
					<img src="assets/survey8.png" alt="Survey Results - Budget Considerations" class="survey-image" />
				</div>
				<div class="survey-image-container">
					<img src="assets/survey9.png" alt="Survey Results - Social Media Influence" class="survey-image" />
				</div>
				<div class="survey-image-container">
					<img src="assets/survey10.png" alt="Survey Results - Accommodation Preferences" class="survey-image" />
				</div>
				<div class="survey-image-container">
					<img src="assets/survey11.png" alt="Survey Results - Future Travel Plans" class="survey-image" />
				</div>
			</div>

			<!-- Painpoints Analysis -->
			<div class="painpoints-analysis">
				<h2 class="painpoints-title">Painpoints</h2>
				<p class="painpoints-description">
					To identify pain points I have conducted a survey as well as I created a persona in case if missed something during survey.
				</p>

				<!-- About User Section -->
				<div class="painpoints-section">
					<h3 class="section-subtitle">About user</h3>
					<p class="section-description">Survey findings about user characteristics.</p>
					<div class="user-findings">
						<div class="finding-card">Making travel itinerary is challenging for majority.</div>
						<div class="finding-card">Most people travel inspired by social media.</div>
						<div class="finding-card">Money is a main concern</div>
						<div class="finding-card">Majority doesn't use any itinerary apps</div>
						<div class="finding-card">Majority maintaining a bucket list</div>
					</div>
				</div>

				<!-- Priority Section -->
				<div class="painpoints-section">
					<h3 class="section-subtitle">Priority (users %)</h3>
					<p class="section-description">Identify the priority when planning a trip after decided the destination.</p>
					<div class="priority-grid">
						<div class="priority-card priority-1">
							<div class="priority-number">1</div>
							<div class="priority-content">
								<h4>Things to do (94.1%)</h4>
								<p>Most people want to check 'Things to do list' after they pick a destination.</p>
							</div>
						</div>
						<div class="priority-card priority-2">
							<div class="priority-number">2</div>
							<div class="priority-content">
								<h4>Transport (88.2%)</h4>
								<p>Transport and routes also play another important role.</p>
							</div>
						</div>
						<div class="priority-card priority-3">
							<div class="priority-number">3</div>
							<div class="priority-content">
								<h4>Accommodation (82.4%)</h4>
								<p>Third main concern is accommodation</p>
							</div>
						</div>
						<div class="priority-card priority-4">
							<div class="priority-number">4</div>
							<div class="priority-content">
								<h4>Food & restaurants (76.5%)</h4>
								<p>Seems like people love to explore news food and restaurants.</p>
							</div>
						</div>
						<div class="priority-card priority-5">
							<div class="priority-number">5</div>
							<div class="priority-content">
								<h4>Shopping (41.2%)</h4>
								<p>People also interested in shopping.</p>
							</div>
						</div>
						<div class="priority-card priority-6">
							<div class="priority-number">6</div>
							<div class="priority-content">
								<h4>Culture (35.3%)</h4>
								<p>Comparatively less people interested about culture related things. but of course these things can defiantly change we do more comprehensive survey targeting majority crowd.</p>
							</div>
						</div>
						<div class="priority-card other-concerns">
							<div class="priority-content">
								<h4>Other concerns</h4>
								<ul>
									<li>Personalize travel recommendations.</li>
									<li>Finding best time to visit</li>
									<li>Changes in weather, getting people on board or finding a convenient time.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<!-- Mainly Use Apps Section -->
				<div class="painpoints-section">
					<h3 class="section-subtitle">Mainly use apps</h3>
					<p class="section-description">Identify the priority when planning a trip after decided the destination.</p>
					<div class="apps-card">
						<h4>Apps</h4>
						<ul class="apps-list">
							<li>Chatgpt</li>
							<li>Booking.com</li>
							<li>Agoda</li>
							<li>Tiktok</li>
							<li>Google maps</li>
							<li>airbnb</li>
							<li>google sheets</li>
							<li>Search engines</li>
							<li>klook</li>
							<li>Google reviews</li>
							<li>just google</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	`;

	// Add survey view class
	painPointsSection.classList.add("survey-view");

	// Update breadcrumb - make it clickable to return to initial view
	const surveyBreadcrumb = document.querySelector(".breadcrumb-item.active");
	if (surveyBreadcrumb) {
		// Store the original text before appending
		const originalBreadcrumbText = surveyBreadcrumb.textContent;
		surveyBreadcrumb.dataset.originalText = originalBreadcrumbText; // Store in dataset

		// Create new breadcrumb structure with separate clickable and non-clickable parts
		surveyBreadcrumb.innerHTML = `
			<span class="breadcrumb-clickable">${originalBreadcrumbText}</span>
			<span class="breadcrumb-separator"> > </span>
			<span class="breadcrumb-subsection">Survey</span>
		`;

		// CRITICAL: Explicitly remove ALL text decoration from parent container FIRST
		surveyBreadcrumb.style.textDecoration = "none !important";
		surveyBreadcrumb.style.textDecorationColor = "transparent";
		surveyBreadcrumb.style.textDecorationStyle = "none";
		surveyBreadcrumb.style.textDecorationLine = "none";
		surveyBreadcrumb.style.borderBottom = "none";
		surveyBreadcrumb.style.textUnderlineOffset = "none";
		surveyBreadcrumb.style.textUnderlinePosition = "none";

		// Make only the clickable part have the wavy underline
		const clickablePart = surveyBreadcrumb.querySelector(
			".breadcrumb-clickable"
		);
		if (clickablePart) {
			clickablePart.style.textDecorationColor = "#3b82f6";
			clickablePart.style.textDecorationStyle = "wavy";
			clickablePart.style.cursor = "pointer";

			// Remove any existing click handlers to avoid duplicates
			clickablePart.removeEventListener("click", handleBreadcrumbClick);

			// Add click handler to return to initial view
			clickablePart.addEventListener("click", handleBreadcrumbClick);
		}
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

	// Update breadcrumb - make it clickable to return to initial view
	const personaBreadcrumb = document.querySelector(".breadcrumb-item.active");
	if (personaBreadcrumb) {
		// Store the original text before appending
		const originalBreadcrumbText = personaBreadcrumb.textContent;
		personaBreadcrumb.dataset.originalText = originalBreadcrumbText; // Store in dataset

		// Create new breadcrumb structure with separate clickable and non-clickable parts
		personaBreadcrumb.innerHTML = `
			<span class="breadcrumb-clickable">${originalBreadcrumbText}</span>
			<span class="breadcrumb-separator"> > </span>
			<span class="breadcrumb-subsection">Persona</span>
		`;

		// CRITICAL: Explicitly remove ALL text decoration from parent container FIRST
		personaBreadcrumb.style.textDecoration = "none !important";
		personaBreadcrumb.style.textDecorationColor = "transparent";
		personaBreadcrumb.style.textDecorationStyle = "none";
		personaBreadcrumb.style.textDecorationLine = "none";
		personaBreadcrumb.style.borderBottom = "none";
		personaBreadcrumb.style.textUnderlineOffset = "none";
		personaBreadcrumb.style.textUnderlinePosition = "none";

		// Make only the clickable part have the wavy underline
		const clickablePart = personaBreadcrumb.querySelector(
			".breadcrumb-clickable"
		);
		if (clickablePart) {
			clickablePart.style.textDecorationColor = "#3b82f6";
			clickablePart.style.textDecorationStyle = "wavy";
			clickablePart.style.cursor = "pointer";

			// Remove any existing click handlers to avoid duplicates
			clickablePart.removeEventListener("click", handleBreadcrumbClick);

			// Add click handler to return to initial view
			clickablePart.addEventListener("click", handleBreadcrumbClick);
		}
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

	// Update breadcrumb - make it clickable to return to initial view
	const summaryBreadcrumb = document.querySelector(".breadcrumb-item.active");
	if (summaryBreadcrumb) {
		// Store the original text before appending
		const originalBreadcrumbText = summaryBreadcrumb.textContent;
		summaryBreadcrumb.dataset.originalText = originalBreadcrumbText; // Store in dataset

		// Create new breadcrumb structure with separate clickable and non-clickable parts
		summaryBreadcrumb.innerHTML = `
			<span class="breadcrumb-clickable">${originalBreadcrumbText}</span>
			<span class="breadcrumb-separator"> > </span>
			<span class="breadcrumb-subsection">Summary</span>
		`;

		// CRITICAL: Explicitly remove ALL text decoration from parent container FIRST
		summaryBreadcrumb.style.textDecoration = "none !important";
		summaryBreadcrumb.style.textDecorationColor = "transparent";
		summaryBreadcrumb.style.textDecorationStyle = "none";
		summaryBreadcrumb.style.textDecorationLine = "none";
		summaryBreadcrumb.style.borderBottom = "none";
		summaryBreadcrumb.style.textUnderlineOffset = "none";
		summaryBreadcrumb.style.textUnderlinePosition = "none";

		// Make only the clickable part have the wavy underline
		const clickablePart = summaryBreadcrumb.querySelector(
			".breadcrumb-clickable"
		);
		if (clickablePart) {
			clickablePart.style.textDecorationColor = "#3b82f6";
			clickablePart.style.textDecorationStyle = "wavy";
			clickablePart.style.cursor = "pointer";

			// Remove any existing click handlers to avoid duplicates
			clickablePart.removeEventListener("click", handleBreadcrumbClick);

			// Add click handler to return to initial view
			clickablePart.addEventListener("click", handleBreadcrumbClick);
		}
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
		<div class="journey-map-text-content">
			<h1 class="project-title">${journeyContent.title}</h1>
			<p class="project-description">
				${journeyContent.description}
			</p>
		</div>
			<div class="journey-map-container">
				<div class="journey-map-image-container">
					<img src="${journeyContent.image}" alt="${journeyContent.title}" class="journey-map-image" />
				</div>
			</div>
		</div>
	`;

	// Add journey map view class
	journeySection.classList.add("journey-map-view");

	// Update breadcrumb - make it clickable to return to initial view
	const journeyBreadcrumb = document.querySelector(".breadcrumb-item.active");
	if (journeyBreadcrumb) {
		// Store the original text before appending
		const originalBreadcrumbText = journeyBreadcrumb.textContent;
		journeyBreadcrumb.dataset.originalText = originalBreadcrumbText; // Store in dataset

		// Get journey map title
		let journeyContent = getJourneyMapContent(journeyType);

		// Create new breadcrumb structure with separate clickable and non-clickable parts
		journeyBreadcrumb.innerHTML = `
			<span class="breadcrumb-clickable">${originalBreadcrumbText}</span>
			<span class="breadcrumb-separator"> > </span>
			<span class="breadcrumb-subsection">${journeyContent.title}</span>
		`;

		// CRITICAL: Explicitly remove ALL text decoration from parent container FIRST
		journeyBreadcrumb.style.textDecoration = "none !important";
		journeyBreadcrumb.style.textDecorationColor = "transparent";
		journeyBreadcrumb.style.textDecorationStyle = "none";
		journeyBreadcrumb.style.textDecorationLine = "none";
		journeyBreadcrumb.style.borderBottom = "none";
		journeyBreadcrumb.style.textUnderlineOffset = "none";
		journeyBreadcrumb.style.textUnderlinePosition = "none";

		// Make only the clickable part have the wavy underline
		const clickablePart = journeyBreadcrumb.querySelector(
			".breadcrumb-clickable"
		);
		if (clickablePart) {
			clickablePart.style.textDecorationColor = "#3b82f6";
			clickablePart.style.textDecorationStyle = "wavy";
			clickablePart.style.cursor = "pointer";

			// Remove any existing click handlers to avoid duplicates
			clickablePart.removeEventListener("click", handleJourneyBreadcrumbClick);

			// Add click handler to return to initial view
			clickablePart.addEventListener("click", handleJourneyBreadcrumbClick);
		}
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

// Handle journey breadcrumb click to return to initial view
function handleJourneyBreadcrumbClick(e) {
	e.preventDefault();
	showOriginalJourneyContent();
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

	// Restore breadcrumb - remove clickability and restore original text
	if (breadcrumbActive) {
		// Restore original text if stored
		if (breadcrumbActive.dataset.originalText) {
			breadcrumbActive.textContent = breadcrumbActive.dataset.originalText;
			delete breadcrumbActive.dataset.originalText;
		}

		// Remove all styling and event listeners
		breadcrumbActive.style.textDecoration = "none";
		breadcrumbActive.style.borderBottom = "none";
		breadcrumbActive.style.textDecorationLine = "none";
		breadcrumbActive.style.cursor = "default";
		breadcrumbActive.removeEventListener("click", handleJourneyBreadcrumbClick);

		// Remove any clickable parts that might exist
		const clickablePart = breadcrumbActive.querySelector(
			".breadcrumb-clickable"
		);
		if (clickablePart) {
			clickablePart.removeEventListener("click", handleJourneyBreadcrumbClick);
		}
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

// Handle breadcrumb click to return to initial view
function handleBreadcrumbClick(e) {
	e.preventDefault();
	showOriginalContent();
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

	// Restore breadcrumb - remove clickability and restore original text
	if (breadcrumbActive) {
		// Restore original text if stored
		if (breadcrumbActive.dataset.originalText) {
			breadcrumbActive.textContent = breadcrumbActive.dataset.originalText;
			delete breadcrumbActive.dataset.originalText;
		}

		// Remove all styling and event listeners
		breadcrumbActive.style.textDecoration = "none";
		breadcrumbActive.style.borderBottom = "none";
		breadcrumbActive.style.textDecorationLine = "none";
		breadcrumbActive.style.cursor = "default";
		breadcrumbActive.removeEventListener("click", handleBreadcrumbClick);

		// Remove any clickable parts that might exist
		const clickablePart = breadcrumbActive.querySelector(
			".breadcrumb-clickable"
		);
		if (clickablePart) {
			clickablePart.removeEventListener("click", handleBreadcrumbClick);
		}
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
