# Back-end (Express + MongoDB)

This folder contains the Express backend for the project.

Implementation details
- Main entry: `server.js`
- Frameworks / libs: `express`, `mongoose`, `cors`, (development) `nodemon`
- MongoDB: connects to `mongodb://localhost:27017/mydatabase` by default (see `server.js`).
- API endpoints (defined in `server.js`):
  - GET /items — list all items
  - POST /items — create a new item (JSON body)
  - PUT /items/:id — update an item by id
  - DELETE /items/:id — delete an item by id

How to run
```bash
cd "Back-end"
npm install
npm start
```

Notes and troubleshooting
- The server listens on port 3001 by default.
- Ensure MongoDB is running locally (or change the connection string in `server.js`). Example options:
  - Homebrew (macOS): `brew services start mongodb-community` (if you installed mongodb-community)
  - Docker: `docker run -d -p 27017:27017 --name mongo mongo:6`
- The `start` script uses `nodemon` for development. To run without nodemon: `node server.js`.
- After `npm install` you may see vulnerabilities reported by `npm audit`; run `npm audit fix` where appropriate.
- You may see MongoDB driver warnings about deprecated options (`useNewUrlParser`, `useUnifiedTopology`) — they can be removed from the options object if using modern drivers.

If you'd like, I can:
- Add environment variable support (e.g., `MONGODB_URI`, `PORT`) via `.env` and `dotenv`.
- Add basic request validation and error handling.
