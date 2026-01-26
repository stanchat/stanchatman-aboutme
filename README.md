# Stanley Chatman — Dark Mode Portfolio (GitHub Pages)

This is a static personal site (HTML/CSS/JS) designed to look custom-coded, run fast, and be easy to update.

## Quick start (local)
Open `index.html` directly, or run a tiny local server:

```bash
# from the project folder
python -m http.server 8080
```

Then open http://localhost:8080

## How to update content
Edit `data.js`:
- headline, summary, links
- experience entries
- projects
- writing (Medium + Scrum.org)
- certifications
- stats (key numbers)

## Add your real profile photo
1. Put your photo here: `assets/profile.jpg`
2. Update `data.js`:
   - `profileImage: "./assets/profile.jpg"`

## Add your resume PDF
1. Put your resume PDF at: `assets/Stanley-Chatman-Resume.pdf`
2. Or rename and update `script.js` line:
   - `$("#resumeLink").href = "./assets/<YOUR_FILE>.pdf";`

## Deploy to GitHub Pages
### Option A (recommended): `docs/` folder
1. Create a new repo, e.g. `stanchatman.github.io` (or any repo name)
2. Copy this project into the repo.
3. In GitHub:
   - Settings → Pages
   - Build and deployment → Source: **Deploy from a branch**
   - Branch: `main`, Folder: `/root` (or `/docs` if you move files there)

### Option B: `gh-pages` branch
Use any standard GitHub Pages workflow to publish.

## Notes
- Minimal neon accents (cyan/violet)
- Smooth scrolling
- Responsive nav + tabs
- Single-file data model (`data.js`) so it’s easy to keep current
