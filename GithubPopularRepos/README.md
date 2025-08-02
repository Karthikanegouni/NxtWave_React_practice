# Github Popular Repos

A React app that displays a list of popular GitHub repositories by language. Users can filter repositories using language tabs. Fetches data from a public API and displays repository details dynamically.

## Features

- Fetches popular repositories from GitHub via API
- Filters repositories based on selected programming language
- Displays each repository's:
  - Name
  - Stars count
  - Forks count
  - Issues count
  - Avatar image
- Shows loading spinner while fetching data
- Displays a failure view when an error occurs
- Component-based architecture

## Cloning This Project

```bash
git clone https://github.com/Karthikanegouni/NxtWave_React_practice.git
cd NxtWave_React_practice/GithubPopularRepos
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
- CSS
- Vite
- React Spinners (for loader)

## API Used

- **URL**: `https://apis.ccbp.in/popular-repos?language=LANGUAGE_ID`
- Example: `https://apis.ccbp.in/popular-repos?language=ALL`

## License

This project is licensed under the MIT License.
