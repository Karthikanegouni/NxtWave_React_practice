# Visit Countries

A React app that demonstrates Lists and Keys by managing a list of countries with visit tracking.

## Features

- Displays a list of countries with a **Visit** button if not visited, or "Visited" text if already visited
- Clicking the **Visit** button marks the country as visited and adds it to the visited countries list
- Visited countries display with a **Remove** button to unmark and remove them from the visited list
- When no countries are visited, a "No Visited Countries" view with an image is displayed
- Each visited country’s image has an alt attribute value of **thumbnail**

## Functionality

- Uses React state to track visited status for each country
- Efficient rendering leveraging keys for dynamic lists
- Updates UI dynamically on user interaction with buttons
- Shows appropriate views based on visited countries count

## Cloning This Project

```bash
    git clone https://github.com/Karthikanegouni/NxtWave_React_practice.git
    cd NxtWave_React_practice/VisitCountries
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

3. Visit in browser:

```bash
   http://localhost:5173
```

## Technologies Used

- React
- Vite
- JavaScript
- CSS

## License

This project is licensed under the MIT License.
