# EBank React Application

eBank is a secure online banking application built with React that demonstrates authentication, protected routing, and session management. Users can log in with valid credentials, access the account dashboard, and log out safely, ensuring a seamless banking experience.

## Demo

Access the live application here: [https://ebankak.ccbp.tech](https://ebankak.ccbp.tech)

## Features

- **Login**: Secure login using User ID and PIN with server validation.
- **Protected Routes**: Ensures only authenticated users access sensitive pages such as Home.
- **Session Management**: Maintains user login state with JWT tokens stored in cookies and expires after 30days.
- **Logout**: Clears session and redirects users to the login page.
- **Dynamic Routing**: Navigates smoothly between Login, Home, and Not Found pages.
- **Error Handling**: Displays appropriate messages and views on failed login or route access.

## Tech Stack

- React (17.0.1)
- React Router DOM (5.2.0)
- JavaScript
- Styled-Components
- js-cookie
- Fetch API
- vite

## API Endpoints

- **Login**: `https://apis.ccbp.in/ebank/login` (POST request)
  - Request data: `{"user_id": 142420, "pin": 231225}`
  - Success: returns `jwt_token`
  - Failure: returns error message and status code

## Routes

- `/ebank/login` — Login page for user authentication
- `/` — Home page accessible after login
- `/not-found` - Handles unknown URLs with a Not Found page

## How to Set Up

Clone the repository and install dependencies:

```bash
git clone https://github.com/Karthikanegouni/NxtWave_React_practice.git
cd NxtWave_React_practice/eBank
```

Run the Project

```bash
npm install
npm run dev
```

Navigate to [http://localhost:5173](http://localhost:5173) to view the application in your browser.

## Credentials for Testing

- User ID: 142420
- PIN: 231225

## License

This project is licensed under the MIT License.
