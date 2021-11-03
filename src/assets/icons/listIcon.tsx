import type { ComponentPropsWithoutRef } from 'react';

export interface IListIcon extends ComponentPropsWithoutRef<'svg'> {
  solid?: boolean;
}

function ListIcon({ strokeWidth = 2, ...rest }: IListIcon): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M4 6h16M4 10h16M4 14h16M4 18h16"
      />
    </svg>
  );
}

export default ListIcon;
