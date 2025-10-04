# Character Counter

A React app showcasing Lists and Keys by letting users submit any text and view its character count.

## Features

- Text input for entering any user string
- Add button to submit user input
- Each submission is added to a dynamic list with its character count displayed
- If no inputs are added, shows a "No User Inputs" view

## Functionality

- Uses the `uuid` package to assign a unique ID to each user input item
- Initially, shows an image and message indicating no inputs (with alt="no user inputs")
- After adding inputs, displays all submissions as a list using React keys
- Character count is updated for each input as added
- Input box is cleared after each successful submission

## Cloning This Project

```bash
    git clone https://github.com/Karthikanegouni/NxtWave_React_practice.git
    cd NxtWave_React_practice/CharacterCounter
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
- uuid
- Vite
- JavaScript
- CSS

## License

This project is licensed under the MIT License.
