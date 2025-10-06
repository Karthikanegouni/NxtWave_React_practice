# Travel Guide

A React JS app built to demonstrate making API calls with `fetch`, including loader states and dynamic lists.

## Features

- Automatically fetches a curated list of travel packages on app load
- Displays a loading spinner ("TailSpin") while fetching data from the API
- Renders each package with:
- Responsive and visually appealing layout

## Functionality

- Makes a GET request to `https://apis.ccbp.in/tg/packages` on initial load
- Displays a loader component until data fetching is complete
- Renders packages in a list, using unique keys.
- Only shows packages after successful data retrieval

## Cloning This Project

```bash
    git clone https://github.com/Karthikanegouni/NxtWave_React_practice.git
    cd NxtWave_React_practice/TravelGuide
```

## Installation & Running

1. Install dependencies:

```bash
   npm install
```

2. Start the development server using Vite:

```bash
   npm run dev
```

3. Visit:

```bash
   http://localhost:5173
```

## Technologies Used

- React
- Vite
- fetch API
- JavaScript
- CSS

## License

This project is licensed under the MIT License.
