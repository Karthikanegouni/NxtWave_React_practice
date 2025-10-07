# Tech Era

A React app that fetches and displays a list of courses and individual course details, demonstrating API calls and routing using React Router.

## Features

- Fetches courses list from API and displays their names and logos on the Home Route
- Displays a loader spinner while data is being fetched
- Shows a failure view with retry option if fetching courses fails
- Navigates to Course Item Details Route on clicking a course card
- Fetches and displays detailed information about a specific course by ID
- Shows loader and failure views appropriately on the Course Details Route
- Provides a Not Found page for invalid URL paths
- Clicking the website logo navigates back to the Home Route

## API Endpoints

- List of courses: `https://apis.ccbp.in/te/courses`
- Course details: `https://apis.ccbp.in/te/courses/:id`

## Cloning This Project

```bash
git clone https://github.com/Karthikanegouni/NxtWave_React_practice.git
cd NxtWave_React_practice/TechEra
```

## Installation & Running

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser:

```bash
http://localhost:5173
```

## License

This project is licensed under the MIT License.
