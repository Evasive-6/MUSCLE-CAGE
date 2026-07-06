# Muscle Cage Fitness

Premium gym website rebuilt inside the repository folder as a React + Express + MongoDB + JWT stack.

## Layout

- `src/` is the React client.
- `backend/` is the Node/Express API.
- Auth routes issue JWTs and persist users in MongoDB.
- Lead forms save to MongoDB instead of only showing toasts.

## Frontend

Run the client from the repo root:

```bash
yarn install
yarn start
```

Set `REACT_APP_API_URL` if the API is not running on `http://localhost:5000/api`.

## Backend

Run the API from the `backend/` folder:

```bash
cd backend
npm install
npm run dev
```

Copy `backend/.env.example` to `backend/.env` and fill in your MongoDB URL when you have it.

## Routes

- `/` marketing homepage
- `/contact` contact page
- `/auth` login/register
- `/dashboard` protected members dashboard
