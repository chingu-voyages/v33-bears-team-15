import type { ComponentPropsWithoutRef } from 'react';

export type IMinusIcon = ComponentPropsWithoutRef<'svg'>;

function MinusIcon({ strokeWidth = 2, ...rest }: IMinusIcon): JSX.Element {
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
        d="M18 12H6"
      />
    </svg>
  );
}

export default MinusIcon;
