import { Book } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface BookItemProps {
  book: Book;
  onToggle: (id: string) => void;
  onEdit: (book: Book) => void;
  onDelete: (id: string) => void;
}

export function BookItem({ book, onToggle, onEdit, onDelete }: BookItemProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="line-clamp-2">{book.title}</CardTitle>
        <CardDescription>by {book.author}</CardDescription>
      </CardHeader>
      {book.description && (
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3">{book.description}</p>
        </CardContent>
      )}
      <CardFooter className="flex flex-col gap-2">
        <div className="flex items-center justify-between w-full">
          <Label htmlFor={`status-${book.id}`} className="text-sm">
            Mark as {book.status === 'unread' ? 'Read' : 'Unread'}
          </Label>
          <Switch
            id={`status-${book.id}`}
            checked={book.status === 'read'}
            onCheckedChange={() => onToggle(book.id)}
          />
        </div>
        <div className="flex gap-2 w-full">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => onEdit(book)}
          >
            Edit
          </Button>
          <Button 
            variant="destructive" 
            size="sm" 
            className="flex-1"
            onClick={() => onDelete(book.id)}
          >
            Delete
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}