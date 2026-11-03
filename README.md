# Ferraria do Gato Branco – Website Notes

A simple HTML/CSS/JS website. No frameworks, no build tools, no complicated nonsense.

Open `index.html` in a browser to test changes. Edit the files directly.

## Changing text / translations

All general website text is in **`translations.js`**.

- Three languages: Portuguese (`pt`), English (`en`) and Spanish (`es`).
- Find the relevant key and update the text in all three language sections.
- Don't change the key names.

Gallery text is separate, in **`gallery-data.js`**. Each piece has its own translated `title`, `material` and `note`.

No translation yet? Leave it as `""`. The site won't break.

## Adding gallery photos

1. Resize the photo to roughly 1600px wide. No need for 12 MB gate photos.
2. Put it in `images/gallery/`.
3. Open `gallery-data.js`.
4. Copy an existing entry and change the details.
5. Save, refresh and check.

To remove a piece, delete its entry. To change the order, move the entries around in the file.

Current categories:

`gates`, `railings`, `lighting`, `signage`, `restoration`, `other`

Adding a new category requires two changes:
- `index.html` – add the filter button.
- `script.js` – add the label to `categoryLabels`.

## Request form

Currently uses `mailto:`. Opens the visitor's email client with the details filled in.

To receive submissions directly by email, use [Formspree](https://formspree.io):

1. Create a free account and a new form.
2. Copy the form URL.
3. In `index.html`, find the form's `action` attribute.
4. Replace `YOUR_FORM_ID` with the actual ID.

## Publishing changes

Hosted on GitHub Pages.

After making changes:

1. Test locally by opening `index.html`.
2. Commit and push the updated files to GitHub.
3. Wait a minute or two for GitHub Pages to update.

For initial setup: Repository → Settings → Pages → `main` branch → `/ (root)`.

## File map

```text
index.html       — Website structure
style.css        — Styling
script.js        — Gallery, filters, lightbox, form, language switching
translations.js  — Main website translations
gallery-data.js  — Gallery entries and translations
images/
  cat-mark.png   — Logo
  gallery/       — Gallery photos
```

**Future me:** Most changes will probably involve `translations.js` or `gallery-data.js`. Start there before poking around elsewhere. No need to make a simple job complicated.
