/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-nested-ternary */
import { MouseEventHandler, PropsWithChildren, useMemo } from 'react';
import {
  useSortBy,
  useTable,
  useFilters,
  TableInstance,
  TableOptions,
  usePagination,
  useRowSelect,
  Row,
} from 'react-table';

import Button from '../button';
import SearchField from './search-field';
import ChevronLeftIcon from '~/assets/icons/chevronLeftIcon';
import ChevronRightIcon from '~/assets/icons/chevronRightIcon';
import useCustomCheckbox from './use-custom-checkbox';
import ChevronDownIcon from '~/assets/icons/chevronDownIcon';
import ChevronUpIcon from '~/assets/icons/chevronUpIcon';

export interface ITable<T extends Record<string, unknown>> extends TableOptions<T> {
  name: string;
  searchKey: string;
  onAdd?: (instance: TableInstance<T>) => MouseEventHandler;
  onDelete?: (instance: TableInstance<T>) => MouseEventHandler;
  onEdit?: (instance: TableInstance<T>) => MouseEventHandler;
  onClick?: (row: Row<T>) => void;
}

export default function Table<T extends Record<string, unknown>>(
  props: PropsWithChildren<ITable<T>>
): JSX.Element {
  const { data, columns, searchKey, ...rest } = props;

  const memoRows = useMemo(() => data, []);
  const memoCols = useMemo(() => columns, []);

  const hooks = [useFilters, useSortBy, usePagination, useRowSelect, useCustomCheckbox];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    setFilter,
  } = useTable<T>(
    {
      columns: memoCols,
      data: memoRows,
      ...rest,
    },
    ...hooks
  );

  return (
    <div className="mx-auto container bg-gray-50 dark:bg-gray-800 shadow-lg rounded-xl mb-20">
      {/* Top section */}
      <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
        <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
          <SearchField
            setFieldFiler={setFilter}
            searchKey={searchKey}
            placeholder="Search book name"
          />
        </div>
      </div>
      <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
        {/* React Table */}
        <table className="min-w-full bg-gray-50 dark:bg-gray-800" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => {
              const { key: headerGroupKey, ...getHeaderGroupProps } =
                headerGroup.getHeaderGroupProps();

              return (
                <tr
                  {...getHeaderGroupProps}
                  key={headerGroupKey}
                  className="w-full h-16 border-gray-300 dark:border-gray-700 border-b py-8"
                >
                  {headerGroup.headers.map((column) => {
                    const { key: headerKey, ...getHeaderProps } = column.getHeaderProps();

                    return (
                      <th
                        {...getHeaderProps}
                        key={headerKey}
                        scope="col"
                        className="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                      >
                        <div
                          {...column.getSortByToggleProps()}
                          className="flex items-center"
                        >
                          {column.render('Header')}
                          <span>
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <ChevronDownIcon className="w-5 ml-1.5" />
                              ) : (
                                <ChevronUpIcon className="w-5 ml-1.5" />
                              )
                            ) : (
                              ''
                            )}
                          </span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);

              return (
                <tr
                  {...row.getRowProps()}
                  key={row.index}
                  className="h-24 border-gray-300 dark:border-gray-700 border-b"
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        key={cell.value}
                        className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4"
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <Button
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Previous
            </Button>
            <Button
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Next
            </Button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{pageIndex + 1}</span> of{' '}
                <span className="font-medium">{pageOptions.length}</span> results
              </p>
            </div>
            <div className="flex relative">
              <div className="text-sm text-gray-700 flex items-center mr-6">
                <span className="mr-2">Rows per page:</span>
                <select
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                  }}
                  className="block focus:ring-0 focus:border-gray-500 dark:focus:border-gray-500 hover:border-gray-500 dark:hover:border-gray-500 shadow-sm border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 dark:placeholder-gray-400 placeholder-gray-500"
                >
                  {[5, 10, 25].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      {pageSize}
                    </option>
                  ))}
                </select>
              </div>

              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <Button
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </Button>

                <Button
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
