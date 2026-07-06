# Muscle Cage Fitness Monorepo

This repository is split into two apps:

- `frontend/` React client
- `backend/` Express + MongoDB API

## Run the frontend

```bash
cd frontend
npm install
npm start
```

If your API is running somewhere other than `http://localhost:5000/api`, set `REACT_APP_API_URL` in `frontend/.env`.

## Run the backend

```bash
cd backend
npm install
npm run dev
```

Copy `backend/.env.example` to `backend/.env` and set your MongoDB URL when you have it.

## Routes

- `/` marketing homepage
- `/contact` contact page
- `/auth` login and registration
- `/dashboard` protected members dashboard
