# Pranjal Ram | Portfolio

Personal portfolio for Data Analyst job applications. Plain HTML, CSS and a small amount of JavaScript. No build step, no dependencies, so it deploys to GitHub Pages as-is. All paths are relative, so it works at `username.github.io` or `username.github.io/repo-name/`.

## Structure
```
index.html          all content
css/styles.css      design tokens at the top (:root)
js/main.js          mobile menu, scroll reveal, active nav link
assets/Pranjal_Ram_Resume.pdf   resume download
.nojekyll           tells GitHub Pages to serve files untouched
```

## Run locally
Open `index.html` in a browser, or from this folder run `python -m http.server 8000` and visit http://localhost:8000.

## Update content
Edit `index.html` (each section is labelled by its `id`). Colours and fonts are in `:root` in `css/styles.css`.
To add a photo later: place it in `assets/` and add an `<img>` (with alt text) inside `.hero`.
When the InAmigos internship ends on 18 Oct 2026, change the "Current" badge and add what you actually completed.
When Olist progresses, move items from "Planned" to "Completed so far" and add real findings.

## Resume
Put your PDF at `assets/Pranjal_Ram_Resume.pdf` (same name, replaces the existing file).

## Deploy to GitHub Pages
1. Sign in at github.com, click **New repository**. Name it `pranjallllllll.github.io` for the URL `https://pranjallllllll.github.io`, or any name (e.g. `portfolio`) for `https://pranjallllllll.github.io/portfolio/`. Set it to Public. Create it.
2. Upload: on the new repo page click **uploading an existing file**, drag in everything inside this folder (including `css`, `js`, `assets`, `.nojekyll`), and click **Commit changes**. Or with Git: `git init`, `git add .`, `git commit -m "Add portfolio"`, `git branch -M main`, `git remote add origin <repo-url>`, `git push -u origin main`.
3. Open **Settings > Pages**. Under Build and deployment choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
4. Wait 1 to 2 minutes and refresh the Pages screen. The live URL appears at the top.
5. To update later, edit or re-upload files and commit to `main`. The site redeploys automatically.
