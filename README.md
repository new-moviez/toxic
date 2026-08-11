# TOXIC Movie — Premium Cinematic Website

A production-ready, premium cinematic movie information website for **Toxic – A Fairy Tale for Grown-Ups**, built for GitHub Pages.

---

## 🚀 Quick Start — Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in.
2. Click **"New"** to create a new repository.
3. Name it (e.g., `toxic-movie`).
4. Set it to **Public**.
5. Click **"Create repository"**.

### Step 2: Upload Files

1. Click **"uploading an existing file"** on the repository page.
2. Drag and drop all project files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `robots.txt`
   - `sitemap.xml`
   - `404.html`
   - `README.md`
   - `assets/` folder (with all 5 images)
3. Click **"Commit changes"**.

### Step 3: Enable GitHub Pages

1. Go to your repository **Settings**.
2. In the sidebar, click **Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Choose **main** branch and **/ (root)** folder.
5. Click **Save**.
6. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`

---

## 🖼️ Image Setup

Place all 5 movie images in an `assets/` folder with these exact filenames:

| Filename | Description |
|---|---|
| `assets/toxic-hero.jpg` | IMAGE 2 — Landscape promotional image (Kiara & Yash). Used as Hero background. |
| `assets/toxic-poster-tara.jpg` | IMAGE 1 — Tara Sutaria as Rebecca poster. |
| `assets/toxic-poster-nayanthara.jpg` | IMAGE 3 — Nayanthara as Ganga poster. |
| `assets/toxic-poster-dark.jpg` | IMAGE 4 — Dark cinematic poster (Yash close-up). |
| `assets/toxic-poster-yash.jpg` | IMAGE 5 — Yash as Raya action poster. |

### Image Mapping:
- **IMAGE 1** (Tara Sutaria) → `toxic-poster-tara.jpg`
- **IMAGE 2** (Kiara & Yash landscape) → `toxic-hero.jpg` (HERO BACKGROUND)
- **IMAGE 3** (Nayanthara) → `toxic-poster-nayanthara.jpg`
- **IMAGE 4** (Dark cinematic) → `toxic-poster-dark.jpg`
- **IMAGE 5** (Yash action) → `toxic-poster-yash.jpg`

---

## 🔗 Configuring Button Links

Open `script.js` and edit the `MOVIE_LINKS` object:

```javascript
const MOVIE_LINKS = {
    watchNow:     "https://your-watch-url.com",
    watch1080:    "https://your-1080p-url.com",
    watch720:     "https://your-720p-url.com",
    download:     "https://your-download-url.com",
    newReleases:  "https://your-new-releases-url.com"
};
