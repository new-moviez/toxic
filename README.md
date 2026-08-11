# TOXIC - Premium Cinematic Movie Website

A production-ready, premium cinematic promotional website for the movie **TOXIC - A Fairy Tale for Grown-Ups**. Built with pure HTML5, CSS3, and Vanilla JavaScript for deployment on GitHub Pages.

![TOXIC Movie](https://image.tmdb.org/t/p/original/gldXlcAUrTneLYNxeus94VhNBHs.jpg)

## 🎬 Features

- **Premium Cinematic Design** - Dark, sophisticated UI with glassmorphism effects
- **Fully Responsive** - Perfect on all devices from mobile to 4K displays
- **SEO Optimized** - Complete meta tags, structured data, and sitemap
- **Image Gallery** - Interactive lightbox with keyboard navigation
- **Smooth Animations** - Scroll reveals, transitions, and Ken Burns effects
- **Accessible** - WCAG compliant with keyboard navigation support
- **Performance Optimized** - Fast loading, lazy images, minimal JavaScript
- **Social Sharing** - Facebook, X (Twitter), WhatsApp integration
- **No Dependencies** - Pure vanilla JavaScript, no frameworks needed

## 📁 File Structure

```
toxic-movie-website/
├── index.html          # Main website page
├── style.css           # Complete styling
├── script.js           # All JavaScript functionality
├── 404.html            # Custom 404 error page
├── robots.txt          # Search engine directives
├── sitemap.xml         # XML sitemap for SEO
└── README.md           # This file
```

## 🚀 Quick Start - Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Enter repository name (e.g., `toxic-movie`)
5. Make it **Public**
6. Click **Create repository**

### Step 2: Upload Files

**Option A: Upload via GitHub Web Interface**

1. In your new repository, click **uploading an existing file**
2. Drag and drop all project files:
   - index.html
   - style.css
   - script.js
   - 404.html
   - robots.txt
   - sitemap.xml
   - README.md
3. Click **Commit changes**

**Option B: Upload via Git Command Line**

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
# Copy all files to this directory
git add .
git commit -m "Initial commit - TOXIC movie website"
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **main** branch
5. Click **Save**
6. Wait 1-2 minutes for deployment

Your website will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/
```

## ⚙️ Configuration

### Update Movie Links

Open `script.js` and edit the `MOVIE_LINKS` object (lines 18-24):

```javascript
const MOVIE_LINKS = {
    watchNow: "https://your-watch-url.com",
    watch1080: "https://your-1080p-url.com",
    watch720: "https://your-720p-url.com",
    download: "https://your-download-url.com",
    newReleases: "https://your-new-releases-url.com"
};
```

### Update Site URL

In `script.js`, update the site configuration (lines 13-15):

```javascript
const SITE_CONFIG = {
    siteUrl: "https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/"
};
```

Also update in:
- `index.html` - All canonical and Open Graph URLs
- `robots.txt` - Sitemap URL
- `sitemap.xml` - Website URL

**Quick Find & Replace:**
- Find: `USERNAME.github.io/REPOSITORY`
- Replace: `your-username.github.io/your-repo-name`

### Update Movie Information

Edit `index.html` to add verified movie information:

**Movie Info Cards** (around line 215):
```html
<p class="info-value">Your actual genre</p>
<p class="info-value">Your actual language</p>
<p class="info-value">Your actual release date</p>
```

**Cast & Crew** (around line 356):
Update the cast section when official information is available.

**Story Section** (around line 307):
Add the official plot synopsis when available.

## 🖼️ Images

The website uses 5 official TOXIC movie images:

1. **Hero Background** - Main cinematic landscape image
2. **Promotional Image** - Featured landscape artwork
3. **Vertical Poster** - Standard movie poster
4. **Dark Poster** - Alternative dark cinematic poster
5. **Additional Poster** - Extra promotional artwork

All images are loaded from TMDB CDN. To use your own images:

1. Create an `assets/` folder in your repository
2. Upload your images
3. Replace image URLs in `index.html`

Example:
```html
<!-- Change from -->
<img src="https://image.tmdb.org/t/p/original/gldXlcAUrTneLYNxeus94VhNBHs.jpg" alt="...">

<!-- To -->
<img src="assets/toxic-hero.jpg" alt="...">
```

## 🔍 SEO Optimization

### Submit Sitemap to Google

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`
3. Verify ownership (choose HTML file upload method)
4. Go to **Sitemaps** in left sidebar
5. Enter: `sitemap.xml`
6. Click **Submit**

### Request Indexing

1. In Google Search Console, go to **URL Inspection**
2. Enter your homepage URL
3. Click **Request Indexing**
4. Repeat for important pages

### Structured Data Validation

1. Go to [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Enter your website URL
3. Check for errors
4. Fix any issues in the JSON-LD script in `index.html`

## 📱 Testing

### Test Responsiveness

- **Chrome DevTools**: Press F12 → Toggle device toolbar
- **Responsive Design Checker**: [Responsinator](http://www.responsinator.com/)
- Test on actual devices when possible

### Test Performance

1. Go to [PageSpeed Insights](https://pagespeed.web.dev/)
2. Enter your website URL
3. Check both Mobile and Desktop scores
4. Aim for 90+ scores

### Test SEO

- [SEO Site Checkup](https://seositecheckup.com/)
- [Meta Tags Checker](https://metatags.io/)
- [Schema Markup Validator](https://validator.schema.org/)

### Test Accessibility

- [WAVE Web Accessibility Tool](https://wave.webaim.org/)
- Screen reader testing
- Keyboard navigation testing (Tab, Enter, Escape, Arrow keys)

## 🎨 Customization

### Change Color Scheme

Edit CSS variables in `style.css` (lines 10-21):

```css
:root {
    --color-burgundy: #8b1538;      /* Primary brand color */
    --color-gold: #d4af37;          /* Accent color */
    --color-red: #c41e3a;           /* Secondary color */
    /* ... modify as needed */
}
```

### Modify Typography

Update font families (line 27):

```css
--font-primary: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

To use Google Fonts:
1. Add link in `index.html` `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap" rel="stylesheet">
```

2. Update CSS variable:
```css
--font-primary: 'Montserrat', sans-serif;
```

### Add New Sections

1. Copy an existing section structure from `index.html`
2. Update content and IDs
3. Add navigation link in header
4. Style in `style.css` if needed

## 🐛 Troubleshooting

### Images Not Loading

- Check image URLs are correct
- Verify images are publicly accessible
- Check browser console for errors
- Try clearing cache (Ctrl+Shift+R)

### GitHub Pages Not Working

- Ensure repository is public
- Check Pages settings are configured correctly
- Wait 5-10 minutes after enabling
- Check GitHub Pages status at https://www.githubstatus.com/

### Buttons Not Working

- Verify URLs are updated in `script.js`
- Check browser console for JavaScript errors
- Ensure `script.js` is loaded (check Network tab)

### Mobile Menu Issues

- Check viewport meta tag is present
- Test on actual mobile device
- Verify JavaScript is enabled
- Check for conflicting CSS

## 📊 Analytics (Optional)

### Add Google Analytics

1. Create account at [Google Analytics](https://analytics.google.com/)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔒 Security

- All external links use `rel="noopener noreferrer"`
- No inline JavaScript in HTML
- Content Security Policy ready
- XSS protection via proper encoding

## ⚡ Performance Tips

1. **Optimize Images**
   - Use WebP format when possible
   - Compress images (TinyPNG, Squoosh)
   - Specify width/height attributes

2. **Enable Caching**
   - GitHub Pages automatically caches static files
   - Browser caching happens automatically

3. **Minimize HTTP Requests**
   - All CSS in one file
   - All JS in one file
   - Limited external resources

## 🆘 Support

### Common Issues

**Q: Can I use this for a different movie?**  
A: Yes! Update all text, images, and metadata to match your movie.

**Q: Can I modify the design?**  
A: Absolutely! The code is fully customizable.

**Q: Do I need a custom domain?**  
A: No, but you can configure one in GitHub Pages settings.

**Q: Can I add a blog section?**  
A: Yes, but you'd need to manually create HTML pages or use Jekyll.

### Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [HTML5 Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

## 📄 License

This website template is free to use for personal and commercial projects.

## 🎯 Checklist Before Going Live

- [ ] Update all USERNAME/REPOSITORY placeholders
- [ ] Configure MOVIE_LINKS in script.js
- [ ] Update movie information with verified facts
- [ ] Replace placeholder images (if needed)
- [ ] Test on multiple devices
- [ ] Check all links work
- [ ] Verify SEO meta tags
- [ ] Submit sitemap to Google
- [ ] Test page load speed
- [ ] Enable GitHub Pages
- [ ] Check website is accessible at live URL
- [ ] Share on social media!

## 🌟 Credits

**TOXIC Movie Website**  
Design & Development: Premium Cinematic Template  
Movie Images: TMDB  
Icons: SVG inline graphics

---

**Made with ❤️ for TOXIC - A Fairy Tale for Grown-Ups**

For questions or issues, please open an issue on GitHub.