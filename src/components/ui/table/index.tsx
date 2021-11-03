/* eslint-disable react/no-array-index-key */
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
  Cell,
} from 'react-table';

import Button from '../button';
import SearchField from './search-field';
import ChevronLeftIcon from '~/assets/icons/chevronLeftIcon';
import ChevronRightIcon from '~/assets/icons/chevronRightIcon';
import useCustomCheckbox from './use-custom-checkbox';
import ChevronDownIcon from '~/assets/icons/chevronDownIcon';
import ChevronUpIcon from '~/assets/icons/chevronUpIcon';
import SelectorIcon from '~/assets/icons/selectorIcon';
import Link from '~/components/common/link';

export interface ITable<T extends Record<string, unknown>> extends TableOptions<T> {
  searchKey: string;
  name?: string;
  editHref?: string;
  editAccessor?: string;
  onAdd?: (instance: TableInstance<T>) => MouseEventHandler;
  onDelete?: (instance: TableInstance<T>) => MouseEventHandler;
  onEdit?: (instance: TableInstance<T>) => MouseEventHandler | string;
  onClick?: (row: Row<T>) => void;
}

export default function Table<T extends Record<string, unknown>>(
  props: PropsWithChildren<ITable<T>>
): JSX.Element {
  const { data, columns, searchKey, editHref, editAccessor, ...rest } = props;

  const memoRows = useMemo(() => data, []);
  const memoCols = useMemo(
    () => [
      ...columns,
      {
        accessor: 'edit',
        Cell: ({ row: { original } }: Cell<T, any>) => {
          return (
            <Link
              className="font-semibold text-green-600 dark:text-green-400"
              href={`${editHref}/${original[editAccessor]}`}
            >
              Edit
            </Link>
          );
        },
      },
    ],
    []
  );

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
      initialState: { pageSize: 5 },
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
            {headerGroups.map((headerGroup, headerIdx) => {
              return (
                <tr
                  {...headerGroup.getHeaderGroupProps()}
                  key={`table__headRow-${headerIdx}`}
                  className="w-full h-16 border-gray-300 dark:border-gray-700 border-b py-8"
                >
                  {headerGroup.headers.map((column, columnIdx, self) => {
                    const isNotLastColumn = columnIdx !== self.length - 1;
                    const isNotFirstColumn = columnIdx !== 0;

                    return (
                      <th
                        {...column.getHeaderProps()}
                        key={`table__headGroup-${columnIdx}`}
                        scope="col"
                        className="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                      >
                        {isNotLastColumn ? (
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
                                isNotFirstColumn && (
                                  <SelectorIcon className="w-5 ml-1.5" />
                                )
                              )}
                            </span>
                          </div>
                        ) : (
                          column.render('Header')
                        )}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, rowIdx) => {
              prepareRow(row);

              return (
                <tr
                  {...row.getRowProps()}
                  key={`table__bodyRow-${rowIdx}`}
                  className="border-gray-300 dark:border-gray-700 border-b"
                >
                  {row.cells.map((cell, cellIdx) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        key={`table__bodyCell-${cellIdx}`}
                        className="pl-8 pr-6 py-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4"
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
        <div className="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-4 py-3 flex items-center justify-between border-t border-gray-300 dark:border-gray-700 sm:px-6 rounded-b-xl">
          <div className="flex flex-1 sm:flex-row flex-col sm:items-center sm:justify-between">
            <p className="text-sm mb-4 sm:mb-0">
              Showing <span className="font-semibold">{pageIndex + 1}</span> of{' '}
              <span className="font-semibold">{pageOptions.length}</span> results
            </p>

            <div className="flex sm:flex-row flex-col-reverse relative">
              <div className="text-sm flex items-center sm:mt-0 sm:mr-6 mt-4">
                <span className="mr-2">Rows per page:</span>
                <select
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                  }}
                  className="form-select focus:ring-0 focus:border-gray-500 dark:focus:border-gray-500 hover:border-gray-500 dark:hover:border-gray-500 shadow-sm border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-800 dark:placeholder-gray-400 placeholder-gray-500"
                >
                  {[5, 10, 25].map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <Button
                  className="px-2 rounded-l-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-500 hover:text-gray-800 dark:hover:text-gray-400"
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                  reset
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </Button>

                <Button
                  className="px-2 rounded-r-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-500 hover:text-gray-800 dark:hover:text-gray-400"
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                  reset
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
