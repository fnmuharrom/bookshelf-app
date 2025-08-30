import { useState, useEffect } from "react";
import type { Book } from "@/types";
import { BookList } from "@/components/BookList";
import { BookForm } from "@/components/BookForm";
import { SearchInput } from "@/components/SearchInput";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [books, setBooks] = useState<Book[]>(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : [];
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Save books to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (bookData: Omit<Book, "id">) => {
    const newBook: Book = {
      ...bookData,
      id: uuidv4(),
    };
    setBooks([...books, newBook]);
    setIsFormOpen(false);
  };

  const updateBook = (updatedBook: Book) => {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
    setEditingBook(null);
    setIsFormOpen(false);
  };

  const deleteBook = (id: string) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const toggleBookStatus = (id: string) => {
    setBooks(
      books.map((book) =>
        book.id === id
          ? { ...book, status: book.status === "read" ? "unread" : "read" }
          : book
      )
    );
  };

  const handleEditBook = (book: Book) => {
    setEditingBook(book);
    setIsFormOpen(true);
  };

  const handleFormSubmit = (bookData: Omit<Book, "id">) => {
    if (editingBook) {
      updateBook({ ...bookData, id: editingBook.id });
    } else {
      addBook(bookData);
    }
  };

  // Filter books based on search query
  const filterBooks = (books: Book[]) => {
    if (!searchQuery) return books;

    const query = searchQuery.toLowerCase();
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
  };

  const readBooks = filterBooks(books.filter((book) => book.status === "read"));
  const unreadBooks = filterBooks(
    books.filter((book) => book.status === "unread")
  );

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">My Bookshelf</h1>
          <p className="text-muted-foreground mt-2">
            Track your reading progress
          </p>

          <div className="mt-6 max-w-md mx-auto">
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search by title or author..."
            />
          </div>

          <Button
            className="mt-4"
            onClick={() => {
              setEditingBook(null);
              setIsFormOpen(true);
            }}
          >
            Add Book
          </Button>
        </header>

        <main className="space-y-8">
          <BookList
            title="Unread"
            books={unreadBooks}
            onToggle={toggleBookStatus}
            onEdit={handleEditBook}
            onDelete={deleteBook}
          />

          <BookList
            title="Read"
            books={readBooks}
            onToggle={toggleBookStatus}
            onEdit={handleEditBook}
            onDelete={deleteBook}
          />
        </main>

        <BookForm
          open={isFormOpen}
          onOpenChange={setIsFormOpen}
          onSubmit={handleFormSubmit}
          initialData={editingBook || undefined}
        />
      </div>
    </div>
  );
}
