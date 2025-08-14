# Front-end (React apps)

This folder contains two React example apps used in this repository.

Apps included
- FoodGo: `Front-end/FoodGo/foodgo` — main development app used in this project.
- Hello World: `Front-end/Hello_world_react_app/hello-world` — small example app.

Implementation details (FoodGo)
- Location: `Front-end/FoodGo/foodgo`
- Main entry: `src/index.js` (wraps `App` in `BrowserRouter`)
- Common files: `src/App.js`, `src/components/*` (NavBar, Footer, etc.)
- Dev server: runs on port 3000 by default (React dev server)
- Key dependencies: `react`, `react-dom`, `react-scripts`, `react-bootstrap`, `bootstrap`, `react-router-dom`.

How to run (FoodGo)
```bash
cd "Front-end/FoodGo/foodgo"
npm install
npm start
```

Notes and troubleshooting
- The app imports Bootstrap CSS (`import 'bootstrap/dist/css/bootstrap.min.css'`). If you see a module-not-found error, install Bootstrap with `npm install bootstrap`.
- The dev server will show ESLint warnings about empty/invalid `href` attributes in `src/components/NavBar.js` and `src/components/Footer.js`; these are accessibility warnings — provide real `href` values or replace anchors with buttons to resolve.
- If port 3000 is in use, set a different port with `PORT=3001 npm start` (or stop the conflicting process).
- After installs you may see `npm audit` vulnerabilities; run `npm audit` / `npm audit fix` if desired.

Hello World app (quick)
- Location: `Front-end/Hello_world_react_app/hello-world`
- Run similarly:
```bash
cd "Front-end/Hello_world_react_app/hello-world"
npm install
npm start
```
