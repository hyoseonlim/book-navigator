export interface Book {
  id: number;
  title: string;
  location: string;
  registrationNumber: string;
  callNumber: string;
  author: string;
  translator?: string;
  image: string;
}

export const books: Book[] = [];
