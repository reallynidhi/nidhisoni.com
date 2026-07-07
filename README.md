# nidhisoni.com

A plain, permanent personal website. No frameworks, no build step, no dependencies — just HTML files and one stylesheet. If you can edit a text file, you can maintain this site for the next twenty years.

## What's here

```
index.html                          — home / about
writing.html                        — list of essays
writing/why-this-site-exists.html   — first post (copy this as a template)
now.html                            — current focus, hobbies, events
photos.html                         — photo gallery
photos/                             — put image files here
style.css                           — all colors, fonts, spacing
```

## How to add a blog post

1. Copy `writing/why-this-site-exists.html` and rename it, e.g. `writing/on-craft.html`
2. Edit the `<title>`, the `<h1>`, the date, and the body paragraphs
3. Open `writing.html` and add one line to the top of the list:
   ```html
   <li><span class="date">Aug 2026</span> <a href="writing/on-craft.html">On craft</a></li>
   ```

## How to add photos

1. Resize the photo to about 1600px wide (keeps the site fast)
2. Put it in the `photos/` folder
3. In `photos.html`, replace a placeholder block with:
   ```html
   <figure>
     <img src="photos/your-photo.jpg" alt="What's in the photo">
     <figcaption>A short caption.</figcaption>
   </figure>
   ```

For your portrait on the home page: save it as `photos/portrait.jpg`, then in `index.html` replace the placeholder `<div>` with `<img src="photos/portrait.jpg" alt="Nidhi Soni">`.

## How to publish it (free, ~20 minutes)

The simplest durable setup is **GitHub Pages** (free hosting) + your GoDaddy domain.

1. Create a free account at github.com if you don't have one
2. Create a new **public** repository named exactly `nidhisoni.com`
3. Upload all these files to it (drag and drop works on github.com)
4. In the repo: Settings → Pages → Source: "Deploy from a branch" → branch `main`, folder `/ (root)` → Save
5. Still in Settings → Pages, enter `nidhisoni.com` under "Custom domain" and enable "Enforce HTTPS" (appears after DNS works)

Then point GoDaddy at it:

6. GoDaddy → My Products → nidhisoni.com → DNS
7. Add four **A records**, each with name `@`, pointing to:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
8. Add a **CNAME record**: name `www`, value `<your-github-username>.github.io`
9. Delete any GoDaddy "Parked" A records. DNS can take up to an hour to propagate.

(GitHub's addresses above are current as of 2026; if anything fails, search "GitHub Pages custom domain" for the up-to-date docs. Netlify or Cloudflare Pages work equally well if you ever prefer them.)

## Updating the site later

Edit the file on github.com directly (pencil icon), or edit locally and re-upload. Every save republishes automatically within a minute or two.

## Design notes

- Everything visual is in `style.css`. The palette is defined at the top.
- The one accent color, a muted brass (`--brass`), is a quiet nod to the goldsmiths of Vadodara. Change or remove it freely.
- Fonts are system fonts (Georgia + Helvetica) on purpose: nothing to load, nothing to break, same look in 2046.
