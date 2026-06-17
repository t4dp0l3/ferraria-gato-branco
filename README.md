# Ferraria do Gato Branco — website

A plain HTML/CSS/JS site. No build step, no framework, no Figma sync.
Open `index.html` in a browser and it works. Edit the files directly.

## Adding or changing gallery photos

1. Put the photo file in `images/gallery/`
   - JPG or PNG, doesn't matter
   - Keep an eye on file size — resize photos to roughly 1600px wide before
     uploading so the site stays fast. Any phone photo editor or
     https://squoosh.app can do this in seconds.
2. Open `gallery-data.js`
3. Copy one of the existing `{ ... }` blocks, paste it into the list
4. Change `image` to your new filename, fill in the other fields
5. Save. Refresh the page. Done — no rebuild, no upload step beyond the file itself.

To remove a piece, just delete its `{ ... }` block from `gallery-data.js`.
To reorder, drag the blocks up or down in the list — order in the file is
the order they appear on the site (within each category).

## Categories

The `category` field must be one of:
`gates`, `railings`, `lighting`, `signage`, `restoration`, `other`

These map to the filter buttons on the gallery section. If you want a new
category button, you'll need to add it in two places:
- `index.html` — add a `<button class="filter-btn" data-filter="yourcategory">Label</button>`
- `script.js` — add `yourcategory: "Label"` to the `categoryLabels` object at the top

## The request form

Right now the form falls back to opening the visitor's email client with
the details pre-filled (a `mailto:` link). That works immediately, no setup.

To get proper form submissions emailed to you directly instead:

1. Go to https://formspree.io and make a free account
2. Create a new form, it'll give you a URL like
   `https://formspree.io/f/abcd1234`
3. Open `index.html`, find this line near the request form:
   `action="https://formspree.io/f/YOUR_FORM_ID"`
4. Replace `YOUR_FORM_ID` with your actual ID
5. Save. Submissions will now arrive by email automatically.

## Hosting it for real (GitHub Pages)

1. Push these files to your GitHub repo (replace whatever was there before —
   delete the old Figma-generated files first to avoid confusion)
2. In the repo, go to Settings → Pages
3. Under "Source", choose the `main` branch and `/ (root)` folder
4. Save — GitHub gives you a URL like `https://t4dp0l3.github.io/Blacksmithwebsitewithgallery/`
5. Optional: add a custom domain later under the same Pages settings

Pushing changes after that point is just: edit a file, commit, push.
The live site updates within a minute or two automatically.

## File map

```
index.html       — page structure and content
style.css         — all visual design
script.js         — gallery rendering, filters, lightbox, form logic
gallery-data.js   — the list of pieces (THIS is what you edit most often)
images/
  cat-mark.png    — the logo
  gallery/        — photos referenced by gallery-data.js
```
