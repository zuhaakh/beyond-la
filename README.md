# Beyond LA

A dark illustrated Los Angeles map with four clickable locations, individual story pages, photo placeholders, and zoom controls. The map is stylized and not to scale.

Open `index.html` directly in your browser, or use the existing local server. No build, map service, or API key is required. Google Fonts are optional; fallback fonts work offline.

## Add stories and photos

Edit the `locations` array at the top of `script.js`. Each location has `story` and `images` fields:

```js
story: `Write your story here.`,
images: [
  { src: 'images/my-photo.jpg', alt: 'Describe your photo' }
]
```

Create an `images` folder beside `index.html` for your photos. Empty stories stay blank; empty galleries show two photo placeholders. Stories render as plain text.

Each map pin and top navigation link opens its own HTML page: `walk-of-fame.html`, `scientology.html`, `rodeo-drive.html`, or `universal-studios.html`. All four pages share the story and photo data in `script.js`.

## Hosting

This is a static site ready for GitHub Pages. Publish the root of the `main` branch. The `.nojekyll` file disables Jekyll processing.
