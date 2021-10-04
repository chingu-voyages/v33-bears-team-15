/* eslint-disable react/display-name */
import {
  forwardRef,
  MutableRefObject,
  PropsWithChildren,
  useEffect,
  useRef,
} from 'react';
import { CellProps, HeaderProps, Hooks, TableToggleCommonProps } from 'react-table';

const IndeterminateCheckbox = forwardRef<HTMLInputElement, TableToggleCommonProps>(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef<HTMLInputElement | null>(null);
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      (resolvedRef as MutableRefObject<HTMLInputElement>).current.indeterminate =
        indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <input
        type="checkbox"
        className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-500 dark:hover:border-gray-400 bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-800 outline-none dark:focus:ring-gray-500 dark:focus:ring-offset-gray-800 focus:checked:bg-gray-700"
        ref={resolvedRef}
        {...rest}
      />
    );
  }
);

export default function useCustomCheckbox<T extends Record<string, unknown>>(
  hooks: Hooks<T>
) {
  hooks.visibleColumns.push((columns) => [
    {
      id: 'selection',
      Header: ({
        getToggleAllPageRowsSelectedProps,
      }: PropsWithChildren<HeaderProps<T>>) => (
        <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
      ),
      Cell: ({ row }: PropsWithChildren<CellProps<T>>) => (
        <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
      ),
    },
    ...columns,
  ]);
}
