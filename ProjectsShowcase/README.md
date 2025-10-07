# Projects Showcase

A React application that fetches and displays projects filtered by category. Demonstrates API fetching, conditional rendering for loading, success, and failure states, and category-based filtering using a setState callback pattern.

## Live Demo

[View Here](https://projectsshowak.ccbp.tech)

## Features

- Fetches projects from `https://apis.ccbp.in/ps/projects` with category query parameter.
- Initial category is `ALL`; user can select other categories from a dropdown.
- Displays a loader while fetching data.
- Shows projects on successful fetch.
- Displays a failure view with retry button on fetch failure.

## Usage

1. Clone the repository:

```bash
git clone https://github.com/Karthikanegouni/NxtWave_React_practice.git
cd NxtWave_React_practice/ProjectsShowcase
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the app in the browser at:

```bash
http://localhost:5173
```

## Tech Stack

- React
- Fetch API
- react-loader-spinner
- JavaScript
- CSS
- Vite

## License

This project is licensed under the MIT License.
