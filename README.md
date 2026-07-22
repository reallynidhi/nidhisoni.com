# nidhisoni.com

A plain, permanent personal website. No frameworks, no build step — just HTML files, one stylesheet, and one tiny script for the light/dark toggle. If you can edit a text file, you can maintain this for the next twenty years.

## Files

```
index.html       — Home (your welcome + bio)
projects.html    — Projects (Soné, Niso)
bookshelf.html   — Bookshelf (your 20 books)
work.html        — Work (your four roles)
blog.html        — Blog (links to almost real on Substack)
style.css        — all colors, fonts, spacing (light + dark)
theme.js         — the light/dark toggle
```

## Two things to do before you publish

**1. Add your social handles.** Every page footer has four links with `YOUR_HANDLE` in them. Find and replace:
- `https://x.com/YOUR_HANDLE` → your X profile
- `https://www.linkedin.com/in/YOUR_HANDLE` → your LinkedIn
- `mailto:hello@nidhisoni.com` → the email you want people to use
The Substack link is already set to nidhithinks.substack.com.

(Tip: on GitHub you can edit one file at a time; do this on each of the five pages. Or open all files in any text editor and use Find & Replace across the folder.)

**2. Check the bio and content read as *you*.** I kept your words almost verbatim on the Home page. Read it once out loud and tweak anything that isn't quite right.

## Dark / light mode

Light is the default. The ☾/☀ button in the top-right toggles it, and the choice is remembered on the visitor's device. All colors for both modes live at the top of `style.css` in the two blocks (`:root` for light, `html[data-theme="dark"]` for dark) — change a hex value there and it updates everywhere.

## How to add things later

**A book** — in `bookshelf.html`, copy a line and edit it:
```html
<li><span>Book Title</span> <span class="author">Author Name</span></li>
```
The numbers renumber themselves automatically. To link a book, wrap the title: `<a href="...">Book Title</a>`.

**A blog post** — in `blog.html`, open the post on Substack, copy its link, add a line (newest first):
```html
<li><span class="date">Aug 2026</span> <a href="PASTE_LINK">Post title</a></li>
```

**A project** — in `projects.html`, copy an `<h2>` + `<p>` block and edit.

**A job** — in `work.html`, copy an `.entry` block and edit.

## Updating the live site

Your site is hosted on GitHub Pages at nidhisoni.com. To change anything:
1. Go to your `nidhisoni.com` repository on github.com
2. Click the file you want to edit → the pencil icon → make changes → **Commit changes**
3. It republishes automatically within a minute.

To replace everything at once, delete the old files in the repo and upload this folder's contents again.

## Design notes

- The one accent color, a muted brass (`--brass`), is a quiet nod to the goldsmiths of Vadodara. Change or remove it freely.
- Fonts are system fonts (Georgia + Helvetica) on purpose: nothing to load, nothing to break, same look in 2046.
- "Bytes and Bullets" in the bookshelf has no author listed — add one when you like.
