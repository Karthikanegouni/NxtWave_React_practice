# CCBP Timeline

A React app that displays a professional timeline using dynamic cards for courses and projects with react-chrono.

## Live Demo

- [Link](https://timelineak.ccbp.tech/)

## Features

- Renders a vertical timeline using the Chrono component from `react-chrono`
- Custom cards for course and project entries based on their categoryId
- Displays icons: clock for course duration, calendar for project duration (using `react-icons`)
- Responsive design adapting to different screen sizes
- Visit link for each project entry
- Animated transitions and clean UI

## Functionality

- Lists timeline items from a data array of course and project objects
- For items with categoryId "COURSE", renders a course card with a clock icon and duration
- For items with categoryId "PROJECT", renders a project card with a calendar icon, duration, image, and external link
- TimelineView manages rendering by mapping each item to the correct card component
- Chrono component receives the timeline items as its `items` prop

## Cloning This Project

    git clone https://github.com/Karthikanegouni/NxtWave_React_practice.git
    cd NxtWave_React_practice/CCBPTimeline

## Installation & Running

1. Install dependencies:

   npm install

2. Start the development server using Vite:

   npm run dev

3. Visit:

   http://localhost:5173

## Technologies Used

- React
- Vite
- react-chrono
- react-icons
- JavaScript
- CSS

## License

This project is licensed under the MIT License.
