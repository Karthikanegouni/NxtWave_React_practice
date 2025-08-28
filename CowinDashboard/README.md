# CoWIN Dashboard

A React-based dashboard that visualizes COVID-19 vaccination data using dynamic charts. It integrates with an API to display vaccination trends, demographics, and coverage statistics, while handling loading and error states gracefully.

## Live Demo

[View Here](https://akcowindash.ccbp.tech)

## Features

- Fetches vaccination data from API
- Displays **last 7 days vaccination coverage** using a Bar Chart
- Displays vaccination distribution **by gender** using a Pie Chart
- Displays vaccination distribution **by age group** using another Pie Chart
- Implements a **loader** during API calls
- Shows a **Failure View** on API errors
- Fully responsive and styled for a polished UI

## Cloning This Project

    git clone https://github.com/Karthikanegouni/NxtWave_React_practice.git
    cd NxtWave_React_practice/CowinDashboard

## Installation and Running

1. Install dependencies:

   npm install

2. Start the development server using Vite:

   npm run dev

3. Open in your browser:

   http://localhost:5173

## Technologies Used

- React
- JavaScript
- Recharts (for data visualization)
- CSS
- react-spinners
- Vite

## API Reference

- **Endpoint**: `https://apis.ccbp.in/covid-vaccination-data`
- **Method**: `GET`
- **Success Response**:  
  Returns vaccination data including last 7 days coverage, gender distribution, and age distribution.
- **Failure**:  
  Returns error, used to trigger Failure View.

## Components Overview

- `CowinDashboard` → Main container, handles API calls and renders child components
- `VaccinationCoverage` → Bar chart for last 7 days vaccinations
- `VaccinationByGender` → Pie chart for vaccination split by gender
- `VaccinationByAge` → Pie chart for vaccinations split by age groups

## License

This project is licensed under the MIT License.
