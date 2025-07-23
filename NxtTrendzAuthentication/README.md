# Nxt Trendz - Authentication

A simple React app with JWT-based login functionality. It demonstrates protected routing, form validation, and error handling using authentication API.

## Features

- Login form with controlled inputs
- Validates user credentials via API
- Displays error messages on failed login
- Navigates to home on successful login
- JWT token stored in cookies for authentication
- Protected routes to prevent unauthenticated access

## Cloning This Project

```bash
git clone https://github.com/Karthikanegouni/NxtWave_React_practice.git
cd NxtWave_React_practice/NxtTrendzAuthentication
```

## Installation and Running

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server using Vite:

   ```bash
   npm run dev
   ```

3. Open in your browser:

   ```
   http://localhost:5173
   ```

## Technologies Used

- React
- JavaScript
- React Router
- JS Cookie
- Vite
- CSS

## API Reference

- **Login URL**: `https://apis.ccbp.in/login`
- **Method**: `POST`
- **Success**: Returns JWT token
- **Failure**: Returns error message

## License

This project is licensed under the MIT License.
