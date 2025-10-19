/**
 * Component Loader
 * Dynamically loads HTML components into the main page
 */

class ComponentLoader {
	constructor() {
		this.components = new Map();
		this.loadedComponents = new Set();
	}

	/**
	 * Load a component from a file
	 * @param {string} componentName - Name of the component
	 * @param {string} filePath - Path to the component file
	 * @returns {Promise<string>} - HTML content of the component
	 */
	async loadComponent(componentName, filePath) {
		if (this.loadedComponents.has(componentName)) {
			return this.components.get(componentName);
		}

		try {
			const response = await fetch(filePath);
			if (!response.ok) {
				throw new Error(`Failed to load component: ${componentName}`);
			}
			const html = await response.text();
			this.components.set(componentName, html);
			this.loadedComponents.add(componentName);
			return html;
		} catch (error) {
			console.error(`Error loading component ${componentName}:`, error);
			return `<div class="error">Failed to load ${componentName} component</div>`;
		}
	}

	/**
	 * Load multiple components
	 * @param {Object} componentMap - Object mapping component names to file paths
	 * @returns {Promise<Object>} - Object with loaded components
	 */
	async loadComponents(componentMap) {
		const loadPromises = Object.entries(componentMap).map(([name, path]) =>
			this.loadComponent(name, path)
		);

		const loadedComponents = await Promise.all(loadPromises);
		const result = {};

		Object.keys(componentMap).forEach((name, index) => {
			result[name] = loadedComponents[index];
		});

		return result;
	}

	/**
	 * Insert component into a target element
	 * @param {string} componentName - Name of the component
	 * @param {string} targetSelector - CSS selector for target element
	 */
	insertComponent(componentName, targetSelector) {
		const component = this.components.get(componentName);
		const target = document.querySelector(targetSelector);

		if (component && target) {
			target.innerHTML = component;
		} else {
			console.error(
				`Component ${componentName} not found or target ${targetSelector} not found`
			);
		}
	}

	/**
	 * Initialize and load all components
	 */
	async initialize() {
		const componentMap = {
			header: "components/header.html",
			hero: "components/hero.html",
			projects: "components/projects.html",
			about: "components/about.html",
			contact: "components/contact.html",
			footer: "components/footer.html",
		};

		try {
			await this.loadComponents(componentMap);

			// Insert components into their respective containers
			this.insertComponent("header", "#header-container");
			this.insertComponent("hero", "#hero-container");
			this.insertComponent("projects", "#projects-container");
			this.insertComponent("about", "#about-container");
			this.insertComponent("contact", "#contact-container");
			this.insertComponent("footer", "#footer-container");

			console.log("All components loaded successfully");
		} catch (error) {
			console.error("Error initializing components:", error);
		}
	}
}

// Initialize component loader when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
	const loader = new ComponentLoader();
	loader.initialize();
});
