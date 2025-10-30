# Task Manager Application

A modern React task management application built with Vite that helps users organize and track their tasks efficiently.

## Features

- Task creation, editing, and deletion
- Theme switching capability (light/dark mode)
- Responsive design
- Local storage persistence
- Task list management
- Modern React components and hooks

## Technologies Used

- React.js
- Vite
- CSS
- Context API for state management
- Local Storage for data persistence

## Project Structure

```
src/
├── api/
│   └── fetchPosts.js
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   ├── PostList.jsx
│   └── TaskManager.jsx
├── context/
│   └── ThemeContext.jsx
├── hooks/
│   └── useLocalStorage.jsx
├── pages/
│   ├── About.jsx
│   └── Home.jsx
└── utils/
    └── helpers.js
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the local development server (typically http://localhost:5173)

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run preview` - Previews the production build locally

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License.
