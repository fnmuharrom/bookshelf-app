**Bookshelf App Summary**

**Objective:**  
Create a simple React-based bookshelf app to manage reading lists with local storage persistence.

**Tech Stack:**

- React (functional components with hooks)
- shadcn/ui for pre-built components
- Local storage for data persistence

**Core Features:**

1. **Dual Book Lists:**
   - "Read" and "Unread" sections to categorize books.
2. **Book Management:**
   - Add new books (default status: "Unread").
   - Toggle status between Read/Unread (moves between lists).
   - Edit book details (e.g., title, author).
   - Delete books from either list.
3. **Data Persistence:**
   - Automatically save/load books from local storage.
4. **UI/UX Requirements:**
   - Soft pastel color scheme (comfortable for extended use).
   - Fully responsive design (mobile/desktop).
   - Clean interface with shadcn/ui components (buttons, modals, inputs).

**Flow:**

1. **Home Screen:**
   - Two vertical sections (or horizontal on desktop) for "Read" and "Unread" books.
   - "Add Book" button to trigger a form modal.
2. **Add/Edit Book:**
   - Form with fields (e.g., title, author, optional cover image).
   - Default status: "Unread" (editable during creation/update).
3. **Book Actions (Per Item):**
   - Toggle button to switch status (e.g., "Mark as Read" → moves to Read list).
   - Edit/Delete buttons (edit opens pre-filled form modal).
4. **Data Persistence:**
   - All changes instantly sync to local storage.

**Styling Guidelines:**

- **Colors:** Soft pastels (e.g., mint green, lavender, pale blue) with neutral backgrounds.
- **Layout:** Grid/Card-based book lists, responsive to screen size.
- **Components:** Use shadcn/ui for modals, buttons, and inputs for consistency.

**Components Structure:**

- `App`: Main state management (books array, CRUD functions, local storage sync).
- `BookList`: Displays books in a section (Read/Unread).
- `BookItem`: Individual book card with toggle/edit/delete buttons.
- `BookForm`: Modal for adding/editing books (reusable).

**Data Structure (Example):**

```javascript
{
  id: "uuid-or-timestamp",
  title: "Book Title",
  author: "Author Name",
  status: "read" | "unread", // or boolean
  // Optional: coverImage, description, etc.
}
```

**Next Steps:**

1. Set up React app with Tailwind and shadcn/ui.
2. Implement state management for books (useState + useEffect for local storage).
3. Build components (BookList, BookItem, BookForm).
4. Add CRUD functions and toggle logic.
5. Apply responsive pastel styling.

This app will help users track their reading progress without backend requirements.
