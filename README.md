# e-plantShopping

Paradise Nursery is a houseplant storefront built with React, Redux Toolkit,
and React Router. It has three pages — a landing page, a categorized product
catalog, and a shopping cart — backed by a single Redux slice for cart state.

**Live site:** _add your GitHub Pages URL here after deploying_
**Repository:** _add your GitHub repository URL here_

## Features

- **Landing page** — background image, company story, and a "Get Started"
  button into the catalog.
- **Product listing page** — nine plants across three categories, each with a
  thumbnail, name, price, and an Add to Cart button that disables once the
  plant is in the cart.
- **Shopping cart page** — per-item thumbnail, name, unit price, line total,
  quantity controls, a remove button, cart-wide totals, a "Coming Soon"
  checkout button, and a Continue Shopping link back to the catalog.
- **Header** — appears on the catalog and cart pages, with navigation to all
  three routes and a live item count on the cart icon.
- Hand-drawn SVG plant illustrations (no external image requests) in a
  consistent herbarium / botanical-plate style.

## Tech stack

- [React](https://react.dev/) 19 + [Vite](https://vite.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/) + [react-redux](https://react-redux.js.org/) for cart state
- Plain `useState` in `App.jsx` drives navigation between the landing,
  product, and cart views (no router) so the app works anywhere without
  server-side rewrite rules
- [Fraunces](https://fonts.google.com/specimen/Fraunces) +
  [Inter](https://fonts.google.com/specimen/Inter) via `@fontsource`
  (self-hosted, no external font requests)

## Project structure

```
src/
  components/
    Header.jsx            shared nav + cart icon
    AboutUs.jsx            company copy for the landing page
    PlantIllustration.jsx  SVG plant artwork
    ProductList.jsx        product listing page
    CartItem.jsx            shopping cart page
  redux/
    CartSlice.jsx          cart reducer + selectors
    store.js               Redux store
  data/
    plants.js               plant + category catalog
  App.jsx                   routes + landing page
  App.css / index.css       styles and design tokens
```

## Getting started

```bash
npm install
npm run dev      # local development server
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow
(`.github/workflows/deploy.yml`) that builds the app and publishes `dist/` to
GitHub Pages on every push to `main`.

1. Push this repository to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually) and the site will deploy
   automatically. The deployed URL appears in the workflow run summary and
   under **Settings → Pages**.

Alternatively, deploy manually with the `gh-pages` package:

```bash
npm install -D gh-pages
npm run build
npx gh-pages -d dist
```

## License

This project was built for educational purposes as part of a Coursera
front-end capstone project.
