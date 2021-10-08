import { ChangeEvent, useState } from 'react';
import { IdType } from 'react-table';

import Input from '../input';

export interface ISearchField<T> {
  setFieldFiler: (columnId: IdType<T>, updater: string) => void;
  searchKey: string;
  initialState?: string;
  placeholder?: string;
}

export default function SearchField<T extends Record<string, unknown>>({
  setFieldFiler,
  searchKey,
  initialState = '',
  placeholder = 'Search field',
}: ISearchField<T>) {
  const [searchState, setSearch] = useState(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    setSearch(value);
    setFieldFiler(searchKey, value);
  };

  return (
    <Input
      type="search"
      value={searchState}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}
