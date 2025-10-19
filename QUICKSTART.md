# Quick Start Guide

## Getting Started in 5 Minutes

### Step 1: Download or Clone

- Download this repository or clone it to your local machine

### Step 2: Add Images

You have three options for images:

#### Option A: Use Placeholder Services (Fastest)

Replace the image paths in `index.html` with these URLs:

- Profile: `https://via.placeholder.com/90/667eea/ffffff?text=Profile`
- Work samples: `https://via.placeholder.com/400x200/764ba2/ffffff?text=Sample`
- Projects: `https://via.placeholder.com/550x246/667eea/ffffff?text=Project`

#### Option B: Use Actual Images

1. Create an `assets/` folder in the project root
2. Add these images:
   - `profile.jpg` - Your profile photo (90x90px)
   - `work-sample-1.jpg` to `work-sample-3.jpg` - Portfolio samples
   - `project-travelmate.jpg` - Travel mate project
   - `project-designs.jpg` - Design work showcase
   - Tool logos: `figma-logo.png`, `sketch-logo.png`, etc.

#### Option C: Generate Placeholders

1. Open `assets/placeholder-generator.html` in your browser
2. Right-click and save each placeholder
3. Place them in the `assets/` folder

### Step 3: Customize Content

Edit `index.html` and update:

- Personal information
- Project descriptions
- Contact details
- Social media links

### Step 4: Open in Browser

- Simply open `index.html` in any modern web browser
- No build process or server required!

## Testing on Mobile

### Option 1: Browser DevTools

1. Open the site in Chrome/Firefox
2. Press F12 to open Developer Tools
3. Click the device toolbar icon (Ctrl+Shift+M)
4. Select different device sizes to test

### Option 2: Local Server

If you have Python installed:

```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

Or use VS Code's Live Server extension.

## Customization Checklist

- [ ] Replace all placeholder images
- [ ] Update personal name and title
- [ ] Add your bio and experience
- [ ] Update project information
- [ ] Change email addresses
- [ ] Update social media links
- [ ] Customize colors (optional)
- [ ] Add Google Analytics (optional)

## File Structure at a Glance

```
index.html          ← Main HTML (edit content here)
script.js           ← JavaScript interactions
README.md           ← Full documentation
QUICKSTART.md       ← This file

styles/
├── main.css        ← Colors, fonts, variables
├── header.css      ← Navigation styling
├── hero.css        ← Hero section
├── projects.css    ← Projects section
├── about.css       ← About section
├── contact.css     ← Contact section
├── footer.css      ← Footer
├── animations.css  ← Animations & effects
└── responsive.css  ← Mobile responsive

assets/
└── [your images]   ← Place images here
```

## Common Questions

**Q: Do I need Node.js or any build tools?**
A: No! This is pure HTML/CSS/JS. Just open index.html.

**Q: How do I change colors?**
A: Edit the CSS variables in `styles/main.css` (lines 2-20)

**Q: Can I use this for my own portfolio?**
A: Yes! Feel free to customize it for your needs.

**Q: How do I deploy this online?**
A: Upload all files to any web host, or use free services like:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

**Q: The images aren't showing!**
A: Make sure image paths in HTML match your actual file names in the assets folder.

## Need Help?

- Check the full README.md for detailed documentation
- Review the code comments in each file
- Test in different browsers if something looks off

## Next Steps

Once you have the basic site running:

1. Optimize images (compress for web)
2. Add more projects
3. Connect a contact form (using services like Formspree)
4. Set up custom domain
5. Add analytics

Happy coding! 🚀
