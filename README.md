# PG Life – Student Housing

A static website that helps students find and compare student housing —
browse listings, search by city, and see price, room type, and
availability at a glance.

**Live:** https://pg-life-ten-beta.vercel.app/

## Features

- Property listings with photo, location, room type, price, and availability badge
- Search/filter properties by city
- Responsive layout (Bootstrap grid)
- Pure front-end — no build step, no backend, no database

## Tech stack

- HTML5 / CSS3
- Vanilla JavaScript (DOM manipulation, no framework)
- [Bootstrap 5](https://getbootstrap.com/) (via CDN)
- Deployed on [Vercel](https://vercel.com/)

## Project structure

```
frontend/
  index.html       → page markup
  css/style.css     → custom styles
  js/app.js         → property data + search/render logic
```

## Running it locally

No build tools or dependencies required — it's static HTML/CSS/JS.

```bash
git clone https://github.com/Mdmustafasalman748/PG-Life.git
cd PG-Life/frontend
```

Then just open `index.html` in a browser, or serve the folder with any
static file server, e.g.:

```bash
npx serve .
```

## CI

`.github/workflows/ci-cd.yml` runs on every push/PR to `main` and
validates that the required frontend files exist and `index.html` is
well-formed.
