# Read More/Less

A simple React app to display a text snippet with **Read More/Less** functionality using React Hooks and Styled Components.

## Demo

![Read More/Less Demo](https://assets.ccbp.in/frontend/content/react-js-hooks/read-more-less-output-v0.gif)

The app initially shows a shortened version of the text (first 170 characters) with a **Read More** button.  
Clicking **Read More** expands the text and shows a **Read Less** button to collapse it back.

## Features

- Shortens the text to the first 170 characters initially
- Toggle between **Read More** and **Read Less**
- Styled with **Styled Components**
- Uses **Roboto** font for the heading
- Responsive design

## Installation

```bash
git clone https://github.com/Karthikanegouni/NxtWave_React_practice.git
cd NxtWave_React_practice/ReadMore
npm install
npm start
```

## Usage

- The `ReadMoreReadLess` component receives `reactHooksDescription` as a prop.
- Displays either shortened or full text based on toggle state.

## Technologies Used

- React
- React Hooks
- Styled Components
- CSS (Roboto font)
