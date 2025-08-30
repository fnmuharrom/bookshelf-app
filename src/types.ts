export interface Book {
  id: string;
  title: string;
  author: string;
  status: 'read' | 'unread';
  coverImage?: string;
  description?: string;
}