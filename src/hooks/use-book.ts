import { useEffect } from 'react';

const useBook = (booksArray: string[]): void => {
  interface Ibook {
    name: string;
    description: string;
    author: string;
    srcPath: string;
  }

  return useEffect((): any => {
    const books: any = booksArray.map(async (id) => {
      try {
        const buffer = await fetch(`${id}`);
        const { name, description, author, srcPath } = await buffer.json();
        const bookData: Ibook = { name, description, author, srcPath };

        return [...books, bookData];
      } catch (error) {
        throw new Error(error);
      }
    });

    return books;
  }, []);
};

export default useBook;
