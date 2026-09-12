# The Pamflet & Porcelain Society

Plain HTML/CSS/JS rebuild of the site, ready to push to GitHub and host for free
on GitHub Pages. No build step, no framework — open `index.html` in a browser
and it works as-is.

## Files

```
index.html            Home
for-authors.html       For Authors (placeholder copy — see note below)
author-spotlight.html  Author Spotlight (placeholder copy)
review-policy.html     Review Policy (placeholder copy)
contact.html           Submit a Book, with a working submission form
styles.css             All styling
script.js              Contact form handling
```

**Note on the inner pages:** I only had the full text of the homepage. The
other four pages carry the same design and navigation, but their body copy is
placeholder text marked with a callout box — swap in your real copy and the
styling will already match.

**Note on images:** the logo and hero photo currently point at the original
files still hosted on your `lovable.app` site, so everything renders
immediately. To fully own the assets, download them and save them into an
`assets/` folder as `logo.png` and `hero-books.jpg`, then swap those two URLs
in `index.html` (and the logo URL in the other pages) back to
`assets/logo.png` / `assets/hero-books.jpg`.

## Push it to GitHub

```bash
cd pamflet-porcelain
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## Turn on GitHub Pages

1. On GitHub, open the repo → **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. GitHub gives you a live URL in a minute or two, usually
   `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

To use your own domain (e.g. `pamfletandporcelain.com`) instead of the
`github.io` one, add a `CNAME` file with just that domain name in it, and
point your domain's DNS at GitHub Pages per
[GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Making the contact form actually send

GitHub Pages only serves static files — it can't run server code, so the
form on `contact.html` needs somewhere to send to:

- **Easiest: [Formspree](https://formspree.io)** — free tier, no code.
  Create a form there, copy the endpoint it gives you, and paste it into
  `contact.html` in place of
  `https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID`.
- **Your own stack:** since you already work with GoHighLevel, you can point
  the form's `action` at a GHL form endpoint or inbound webhook instead —
  same swap, just a different URL.

Until you set a real endpoint, submitting the form opens a pre-filled email
to `thepamfletporcelainsociety@gmail.com` instead, so it's never a dead end.
