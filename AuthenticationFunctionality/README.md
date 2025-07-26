# Authentication Functionality

A simple app demonstrating route protection using JWT authentication with React and Vite.

## Features

- Login authentication with JWT token
- Protected routes: Home & About
- Redirect unauthenticated users to `/login`
- Redirect authenticated users away from `/login`
- Logout functionality
- Handles undefined routes with a Not Found page

## Getting Started

1. Clone the repo:

   ```bash
   git clone https://github.com/Karthikanegouni/NxtWave_React_practice.git
   cd NxtWave_React_practice/AuthenticationFunctionality
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open in browser:

   ```
   http://localhost:5173
   ```

## Demo Credentials

```txt
Username: rahul
Password: rahul@2021
```

## Routes

- `/login` – Public route
- `/` – Protected Home route
- `/about` – Protected About route
- Any unknown route → Not Found

## Tech Stack

- React
- Vite
- React Router
- js-cookie

## License

MIT
