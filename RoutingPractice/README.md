# Routing Practice

A simple React application demonstrating basic routing using `react-router-dom`. Includes navigation between Home, About, and Contact pages, along with a custom 404 Not Found route for undefined paths.

## Features

- Navigation between Home, About, and Contact pages
- Styled Header with active route indication
- Custom Not Found page for invalid paths
- Uses `Link` and `Switch` components for client-side routing
- Fully responsive layout

## Routes Setup

| Route      | Component |
| ---------- | --------- |
| `/`        | Home      |
| `/about`   | About     |
| `/contact` | Contact   |
| `*`        | NotFound  |

## Cloning This Project

```bash
git clone https://github.com/Karthikanegouni/NxtWave_React_practice.git
cd NxtWave_React_practice/RoutingPractice
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

- Routing using `react-router-dom`
- `Link`, `Route`, `Switch`, and `Redirect` (v5)
- Component-based layout structure
- Handling 404 routes with `*` wildcard
- Minimal CSS styling for layout and navigation

## Technologies Used

- React
- JavaScript
- Vite
- React Router v5
- CSS

## License

This project is licensed under the MIT License.
