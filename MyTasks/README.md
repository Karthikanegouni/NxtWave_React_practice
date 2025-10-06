# My Tasks

A React JS app for creating, viewing, and filtering tasks using Lists and Keys. Easily add tasks with tags, view all tasks, and filter by tag—all backed by dynamic list rendering with unique keys using the `uuid` package.

## Live Demo

- [https://mytasksak.ccbp.tech](https://mytasksak.ccbp.tech)

## Features

- Add new tasks with a name and tag
- Each tag is color coded and can be used as a filter
- Filter tasks by clicking tag buttons, or view all tasks
- Remove the filter to see the complete task list
- See a friendly "No Tasks Added Yet!" graphic and message if there are no tasks

## Functionality

- Tasks and tags fields are initially empty (tag defaults to the first in `tagsList`)
- Adding a new task adds it to the task list (with a `uuid` as unique key), then resets form to initial values
- Clicking a tag button activates a filter, showing only matching tasks
- Clicking the same tag again removes the filter and shows all tasks
- All list and render logic uses proper React keys for efficient UI updates

## Project Structure

- All components placed inside a `src/components` directory
- Do **not** change or rename any given component folder names
- Uses the `uuid` package for unique identifiers

## Tech Stack

- React
- Vite
- uuid
- JavaScript
- CSS

## Installation & Running

1. Clone the project:

```bash
    git clone https://github.com/Karthikanegouni/NxtWave_React_practice.git
    cd NxtWave_React_practice/MyTasks
```

2. Install dependencies:

```bash
    npm install
```

3. Start the development server:

```bash
    npm run dev
```

4. Open in your browser:

   [http://localhost:5173](http://localhost:5173)

## License

This project is licensed under the MIT License.
