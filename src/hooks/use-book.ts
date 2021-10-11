import { useEffect, useState } from 'react';

interface Ibook {
  name: string;
  description: string;
  author: string;
  srcPath: string;
}
/**
 * Takes in an arrays of books ids and returns the fetched data of each
 *
 * @param booksArray
 */
export default function useBook(booksArray: string[]): any {
  const [books, setBooks] = useState<any[]>([]);

  useEffect((): any => {
    const fetchBooks = async () => {
      const data: any = booksArray.map(async (id) => {
        try {
          const buffer = await fetch(`https://svr.dekoo.tk/api/v1/books/${id}`);
          const { name, description, author, srcPath } = await buffer.json();
          const bookData: Ibook = { name, description, author, srcPath };
          return bookData;
        } catch (err) {
          throw new Error(err);
        }
      });
      setBooks(data);
    };
    if (!booksArray.length) fetchBooks();
  }, []);
  return books;
}
