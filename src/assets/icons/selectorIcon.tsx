import type { ComponentPropsWithoutRef } from 'react';

export type ISelectorIcon = ComponentPropsWithoutRef<'svg'>;

function SelectorIcon({ strokeWidth = 2, ...rest }: ISelectorIcon): JSX.Element {
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
        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
      />
    </svg>
  );
}

export default SelectorIcon;
