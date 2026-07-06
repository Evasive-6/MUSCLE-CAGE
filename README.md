# Muscle Cage

Muscle Cage is a modern fitness and gym membership web app built as a two-part monorepo:

- `frontend/` is a React client for the public site, auth flow, and members dashboard.
- `backend/` is an Express + MongoDB API that handles authentication, contact leads, and member access.

## What It Does

- Polished fitness landing experience with hero content, sections, and responsive navigation.
- Member auth with register, login, and protected dashboard access.
- Lead capture for contact and enquiry forms.
- MongoDB-backed persistence for users and leads.

## Tech Stack

- React 19
- React Router
- Tailwind CSS + custom UI primitives
- Express 4
- Mongoose 8
- JWT authentication
- MongoDB Atlas or local MongoDB

## Project Structure

```text
MUSCLE-CAGE/
	frontend/   React app
	backend/    API server and database models
```

## Quick Start

Install dependencies in both apps:

```bash
cd backend
npm install

cd ../frontend
npm install
```

Open two terminals and start both apps:

```bash
# terminal 1
cd backend
npm run dev

# terminal 2
cd frontend
npm start
```

The frontend runs on `http://localhost:3000` by default and the API runs on `http://localhost:5000`.

## Environment Variables

Create `backend/.env` with values like these:

```env
PORT=5000
CLIENT_ORIGIN=http://localhost:3000
MONGO_URL=your-mongodb-connection-string
DB_NAME=muscle_cage
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d
```

If the frontend API is hosted somewhere else, set `frontend/.env`:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

## Available Scripts

### Backend

```bash
npm run dev
npm start
```

### Frontend

```bash
npm start
npm run build
npm test
```

## Main Routes

### Frontend Pages

- `/` home page
- `/contact` contact page
- `/blog/:slug` blog article view
- `/privacy` privacy policy
- `/terms` terms and conditions
- `/auth` sign in and sign up
- `/dashboard` protected members dashboard

### API Endpoints

- `GET /api/health` health check
- `POST /api/auth/register` create an account
- `POST /api/auth/login` sign in
- `GET /api/auth/me` current user profile
- `POST /api/leads/contact` submit a contact form
- `POST /api/leads/enquiry` submit a membership enquiry
- `GET /api/leads/recent` latest leads for authenticated users

## Notes

- The backend connects to MongoDB through Mongoose in `backend/src/config/db.js`.
- The frontend attaches the stored JWT automatically to API requests.
- `dashboard` access is protected and depends on a valid auth token.

## Live Deployment

- Frontend: https://muscle-cage-ra6kbn064-eva101.vercel.app
- The frontend is configured to use `REACT_APP_API_URL=https://muscle-cage.onrender.com/api`.
