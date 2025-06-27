# Comments App

A user-friendly comments app where users can post, like, and delete comments. This app keeps track of the total number of comments and how long ago each comment was posted. Built using React class components and demonstrates effective use of state, list rendering, UUID generation, and external libraries like `date-fns`.

## Features

- Users can submit a name and comment
- Submitted comments appear instantly in the list
- Each comment has a unique ID using `uuid`
- Tracks and displays total comments count
- Each comment shows how long ago it was posted
- Like/unlike individual comments
- Delete comments and automatically update count

## Cloning This Project

```bash
git clone https://github.com/Karthikanegouni/NxtWave_React_practice.git
cd NxtWave_React_practice/CommentsApp
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

- React class components
- State updates using previous state
- Controlled input fields and form submission
- Conditional rendering (like button toggle)
- List traversal and dynamic deletion
- Generating unique IDs using `uuid`
- Date formatting using `date-fns`

## Technologies Used

- React
- JavaScript
- CSS
- Vite
- uuid
- date-fns

## License

This project is licensed under the MIT License.
