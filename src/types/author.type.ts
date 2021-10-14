export interface IAuthor {
  _id: string;
  avatar: string;
  books: string[];
  biography: string;
  name: string;
}

export interface CreateAuthorDto {
  name: string;
  books: string[];
  avatar: File;
  biography: string;
}
