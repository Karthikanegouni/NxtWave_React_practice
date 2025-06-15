import GoogleSuggestions from './components/GoogleSuggestions'

import './App.css'


const suggestionsList = [
  { id: 1, suggestion: 'React best practices' },
  { id: 2, suggestion: 'MongoDB vs PostgreSQL' },
  { id: 3, suggestion: 'Node.js performance tips' },
  { id: 4, suggestion: 'Express middleware examples' },
  { id: 5, suggestion: 'Latest trends in JavaScript' },
  { id: 6, suggestion: 'MERN stack project ideas' },
  { id: 7, suggestion: 'How to deploy MERN apps on Vercel' },
  { id: 8, suggestion: 'JWT authentication with MERN stack' },
  { id: 9, suggestion: 'Using Redux Toolkit in React' },
  { id: 10, suggestion: 'Creating REST APIs with Express' },
  { id: 11, suggestion: 'Server-side rendering with React' },
  { id: 12, suggestion: 'MongoDB aggregation framework' },
  { id: 13, suggestion: 'Handling file uploads in Node.js' },
  { id: 14, suggestion: 'Securing Express apps' },
  { id: 15, suggestion: 'State management in React' },
  { id: 16, suggestion: 'React Hooks deep dive' },
  { id: 17, suggestion: 'Top NPM packages for MERN devs' },
  { id: 18, suggestion: 'Next.js vs Create React App' },
  { id: 19, suggestion: 'Unit testing in React with Jest' },
  { id: 20, suggestion: 'API rate limiting in Express' },
  { id: 21, suggestion: 'Common MongoDB query patterns' },
  { id: 22, suggestion: 'Working with Mongoose schemas' },
  { id: 23, suggestion: 'Implementing OAuth in MERN apps' },
  { id: 24, suggestion: 'Real-time chat app with MERN & Socket.IO' },
  { id: 25, suggestion: 'Pagination with MongoDB and Express' },
  { id: 26, suggestion: 'React error boundaries explained' },
  { id: 27, suggestion: 'Dockerizing a MERN app' },
  { id: 28, suggestion: 'CI/CD for MERN stack projects' },
  { id: 29, suggestion: 'Environment variables in Node.js' },
  { id: 30, suggestion: 'Email service integration in Node.js' },
  { id: 31, suggestion: 'Understanding the event loop in Node.js' },
  { id: 32, suggestion: 'Using ESLint and Prettier in React apps' },
  { id: 33, suggestion: 'Optimizing React performance' },
  { id: 34, suggestion: 'Creating a custom Express error handler' },
  { id: 35, suggestion: 'Role-based access control in MERN stack' },
  { id: 36, suggestion: 'Dark mode toggle in React' },
  { id: 37, suggestion: 'Using context API in large applications' },
  { id: 38, suggestion: 'Handling async/await errors in Express' },
  { id: 39, suggestion: 'Mongoose virtuals and population' },
  { id: 40, suggestion: 'Stripe integration with MERN stack' },
  { id: 41, suggestion: 'Scheduling jobs with node-cron' },
  { id: 42, suggestion: 'React component libraries comparison' },
  { id: 43, suggestion: 'Building an e-commerce site with MERN' },
  { id: 44, suggestion: 'Common security vulnerabilities in MERN apps' },
  { id: 45, suggestion: 'React Router v6 guide' },
  { id: 46, suggestion: 'Working with sessions in Express' },
  { id: 47, suggestion: 'Real-time notifications with MERN stack' },
  { id: 48, suggestion: 'MongoDB performance tuning tips' },
  { id: 49, suggestion: 'Bundling MERN apps for production' },
  { id: 50, suggestion: 'Top GitHub MERN projects to contribute to' },
];


const App = () => <GoogleSuggestions suggestionsList={suggestionsList} />

export default App
