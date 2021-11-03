export interface ICategory {
  parent: string | null;
  _id: string;
  name: string;
  description: string;
}

export interface CreateCategoryDto {
  name: string;
  description: string;
}
