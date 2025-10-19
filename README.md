# Oshadi Wattuhewa - UX Designer Portfolio

A modern, responsive portfolio website for UX Designer Oshadi Wattuhewa, built with clean HTML and CSS.

## Features

- **Fully Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Component-Based Structure**: Organized into separate, reusable components
- **Clean CSS Architecture**: Uses CSS custom properties (variables) for easy theming
- **Mobile-First Approach**: Ensures great user experience on all screen sizes
- **Smooth Animations**: Engaging interactions and transitions
- **Semantic HTML**: Accessible and SEO-friendly markup
- **Modern UI**: Based on professional Figma design

## Project Structure

```
osh-port/
├── index.html              # Main HTML file
├── script.js              # JavaScript interactions
├── styles/
│   ├── main.css          # Base styles and CSS variables
│   ├── header.css        # Header/navigation component
│   ├── hero.css          # Hero section component
│   ├── projects.css      # Projects section component
│   ├── about.css         # About section component
│   ├── contact.css       # Contact section component
│   ├── footer.css        # Footer component
│   └── responsive.css    # Mobile responsive styles
└── assets/               # Images and media files
    ├── profile.jpg
    ├── work-sample-1.jpg
    ├── work-sample-2.jpg
    ├── work-sample-3.jpg
    ├── project-travelmate.jpg
    ├── project-designs.jpg
    └── [tool logos]
```

## Sections

1. **Header**: Navigation with logo, menu items, social links, and Download CV button
2. **Hero Section**: Introduction with profile image, headline, and interactive grid cards
3. **Projects Section**: Featured projects with images and descriptions
4. **About Section**:
   - Brief bio
   - Work experience cards
   - Core UX skills
   - Tools and technologies
5. **Contact Section**: Email and LinkedIn contact information
6. **Footer**: Simple footer with email

## Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1024px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## CSS Custom Properties

The design system uses CSS variables for consistency:

- **Colors**: Gray scale palette
- **Spacing**: 4px base unit system (4, 8, 12, 16, 24, 32, 48, 64, 80, 96)
- **Typography**: Inter font family with multiple weights
- **Font Sizes**: 14px to 56px
- **Border Radius**: 8px to 96px for various UI elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Setup Instructions

1. Clone or download this repository
2. Replace placeholder images in the `assets/` folder with actual images:
   - `profile.jpg` - Profile photo (90x90px recommended)
   - `work-sample-1.jpg`, `work-sample-2.jpg`, `work-sample-3.jpg` - Work samples
   - `project-travelmate.jpg` - Travel mate project screenshot
   - `project-designs.jpg` - Design work screenshot
   - Tool logos (Figma, Sketch, Adobe XD, CSS, HTML)
3. Update personal information in `index.html`:
   - Email addresses
   - LinkedIn URL
   - Social media links
4. Open `index.html` in a web browser

## Customization

### Colors

Edit the CSS variables in `styles/main.css`:

```css
:root {
	--color-primary: #your-color;
	--color-secondary: #your-color;
}
```

### Fonts

The project uses Google Fonts (Inter). To change fonts:

1. Update the Google Fonts link in `index.html`
2. Change `--font-family` in `styles/main.css`

### Content

All content can be edited directly in `index.html`. Each section is clearly commented for easy navigation.

## Performance Optimizations

- Lazy loading for images
- Optimized CSS with minimal specificity
- Efficient JavaScript with event delegation
- No external dependencies (except Google Fonts)

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels for icon buttons
- Keyboard navigation support
- Sufficient color contrast ratios
- Responsive text sizing

## License

© 2025 Oshadi Wattuhewa. All rights reserved.

## Contact

- Email: oshadiwattuhewa@gmail.com
- LinkedIn: https://www.linkedin.com/in/oshadiwattuhewa/

---

**Note**: This is a static website. For dynamic features or a content management system, consider integrating with a backend or using a static site generator.
