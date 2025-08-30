import type { Book } from "@/types";
import { BookItem } from "@/components/BookItem";

interface BookListProps {
  title: string;
  books: Book[];
  onToggle: (id: string) => void;
  onEdit: (book: Book) => void;
  onDelete: (id: string) => void;
}

export function BookList({
  title,
  books,
  onToggle,
  onEdit,
  onDelete,
}: BookListProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">
        {title} ({books.length})
      </h2>
      {books.length === 0 ? (
        <p className="text-muted-foreground text-center py-8">
          No books in this list. Add a book to get started!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onToggle={onToggle}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
