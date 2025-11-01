# Task Manager

A small React + Vite task manager demo built during Week 3 of the course "Mastering Front-End Development".

Live demo: https://rad-klepon-ca8d38.netlify.app

## Summary

This project is a lightweight task manager app demonstrating React (JSX), component structure, local state management, and styling. It was created as part of a frontend lab to practice building reusable components and wiring a small app with Vite.

## Features

- Add, list, and remove tasks
- Simple responsive layout
- Reusable components: Button, Card, Navbar, Footer, TaskManager, PostList
- Uses Vite for fast development and build

## Quick start (Windows PowerShell)

1. Install dependencies

```powershell
npm install
```

2. Run the dev server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
```

4. Preview the production build

```powershell
npm run preview
```

## NPM scripts

The following scripts are defined in `package.json`:

- `dev` — start Vite dev server
- `build` — build production assets to `dist`
- `preview` — locally preview the production build
- `predeploy` — runs the build before deploying
- `deploy` — deploy `dist` to GitHub Pages (uses `gh-pages`)

To deploy to GitHub Pages (the project already includes a `homepage` field):

```powershell
npm run predeploy; npm run deploy
```

## Project structure

Relevant files and folders:

- `index.html` — app entry
- `src/main.jsx` — React entry point
- `src/App.jsx` — main app component
- `src/components/` — UI components (Button, Card, Navbar, Footer, PostList, TaskManager)
- `src/pages/` — top-level pages (Home, About)
- `src/api/` — API helpers (fetchPosts.js)
- `src/context/` — React context (`ThemeContext.jsx`)
- `src/hooks/` — custom hooks (useLocalStorage)
- `src/utils/` — utilities
- `public/` — static assets

## Contributing

Small improvements welcome. Suggested steps:

1. Fork the repo
2. Create a feature branch
3. Make changes, add tests where appropriate
4. Open a pull request with a clear description of changes

## License

This project is provided for learning purposes. Add a proper license if you plan to reuse this commercially.

## Author

Paul Kioko (repository owner)

---


