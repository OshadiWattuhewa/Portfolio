# Component Structure

This directory contains the modular components that make up the portfolio website. Each component is a separate HTML file that can be loaded dynamically.

## Components

### 1. Header (`header.html`)

- Navigation menu
- Social media links
- Download CV button
- Mobile menu toggle

### 2. Hero (`hero.html`)

- Introduction section
- Profile image
- Call-to-action cards
- Hero grid layout

### 3. Projects (`projects.html`)

- Projects showcase
- Project cards with descriptions
- Links to detailed project pages

### 4. About (`about.html`)

- Personal introduction
- Work experience timeline
- Core UX skills
- Tools experience
- Skills grid layout

### 5. Contact (`contact.html`)

- Contact information
- Email and LinkedIn details
- Contact methods cards

### 6. Footer (`footer.html`)

- Simple footer with email

## Component Loader (`component-loader.js`)

The `ComponentLoader` class handles:

- Dynamic loading of HTML components
- Caching of loaded components
- Error handling for failed loads
- Automatic insertion into target containers

### Usage

The component loader automatically initializes when the DOM is ready and loads all components into their respective containers:

```javascript
// Components are automatically loaded into these containers:
// #header-container
// #hero-container
// #projects-container
// #about-container
// #contact-container
// #footer-container
```

## Benefits of Component Structure

1. **Modularity**: Each section is self-contained and reusable
2. **Maintainability**: Easy to update individual components
3. **Performance**: Components can be cached and loaded on demand
4. **Scalability**: Easy to add new components or modify existing ones
5. **Separation of Concerns**: Clear separation between different page sections

## File Structure

```
components/
├── header.html
├── hero.html
├── projects.html
├── about.html
├── contact.html
├── footer.html
├── component-loader.js
└── README.md
```

## Adding New Components

1. Create a new HTML file in the `components/` directory
2. Add the component to the `componentMap` in `component-loader.js`
3. Add a corresponding container div in `index.html`
4. Update the `insertComponent` calls in the loader

## Development Notes

- Components are loaded via fetch API, so they require a web server to run
- All components maintain their original styling and functionality
- The component loader includes error handling for failed component loads
- Components are cached after first load for better performance
