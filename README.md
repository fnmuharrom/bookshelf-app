# Bookshelf App

A simple React-based bookshelf app to manage reading lists with local storage persistence.

## Features

- Dual book lists: "Read" and "Unread" sections
- Add new books with title, author, and description
- Edit existing books
- Toggle status between Read/Unread (moves between lists)
- Delete books from either list
- Data persistence using local storage
- Responsive design with shadcn/ui components

## Tech Stack

- React (functional components with hooks)
- TypeScript
- shadcn/ui for pre-built components
- Tailwind CSS for styling
- Local storage for data persistence

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
4. Open your browser to http://localhost:5173

## Project Structure

```
src/
├── components/
│   ├── BookForm.tsx       # Form for adding/editing books
│   ├── BookItem.tsx       # Individual book card component
│   ├── BookList.tsx       # List component for displaying books
│   └── ui/                # shadcn/ui components
├── lib/
│   └── utils.ts           # Utility functions
├── types.ts               # TypeScript type definitions
├── App.tsx                # Main application component
└── main.tsx               # Entry point
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run lint` - Runs the linter
- `npm run preview` - Previews the built app

## Data Structure

Books are stored in local storage with the following structure:

```typescript
interface Book {
  id: string;
  title: string;
  author: string;
  status: 'read' | 'unread';
  description?: string;
}
```

## Styling

The app uses a soft pastel color scheme with responsive design principles. All UI components are built with shadcn/ui and styled with Tailwind CSS.