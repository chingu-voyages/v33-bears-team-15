export type FormSelect = { value: string; label: string };

export interface IBook {
  _id: string;
  name: string;
  description: string;
  author: string;
  publisher: string;
  isbn: number;
  publishedDate: number;
  releaseDate: number;
  totalReviews: number;
  reviews: string[];
  categories: string[];
  srcCoverPath: string;
  srcPath: string;
}

export interface CreateBookDto {
  name: string;
  description: string;
  cover: File;
  file: File;
  isbn: number;
  author: FormSelect;
  categories: FormSelect[];
}
