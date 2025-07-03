# Password Manager

An interactive React application that allows users to store, search, and manage their passwords. This project emphasizes React class components, form handling, dynamic lists, and conditional rendering.

## Live Demo

- [Password Manager](https://pswdmanagerak.ccbp.tech/)

## Features

- Add new password entries (website, username, and password)
- Passwords are masked by default, with the option to reveal
- Dynamic real-time search by website name
- Delete any stored password
- Displays "No Passwords" view if no entries match
- Random background color for each website avatar
- Maintains password count with live updates

## Cloning This Project

```bash
git clone https://github.com/Karthikanegouni/NxtWave_React_practice.git
cd NxtWave_React_practice/PasswordManager
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

3. Visit in your browser:

   ```
   http://localhost:5173
   ```

## Concepts Covered

- React class components
- Controlled form inputs
- State management for input and list updates
- Conditional rendering (empty view, show/hide passwords)
- Search filtering (case-insensitive)
- UUID generation for unique item keys
- Randomized color assignment from a predefined palette

## Technologies Used

- React
- JavaScript
- CSS
- Vite
- `uuid` package for unique ID generation

## License

This project is licensed under the MIT License.
