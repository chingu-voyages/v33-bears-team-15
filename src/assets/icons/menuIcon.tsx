import type { ComponentPropsWithoutRef } from 'react';

export type IMenuIcon = ComponentPropsWithoutRef<'svg'>;

function MenuIcon({ strokeWidth = 2, ...rest }: IMenuIcon): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M4 6h16M4 12h8m-8 6h16"
      />
    </svg>
  );
}

export default MenuIcon;
