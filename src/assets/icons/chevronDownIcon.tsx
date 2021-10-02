import type { ComponentPropsWithoutRef } from 'react';

export type IChevronDownIcon = ComponentPropsWithoutRef<'svg'>;

function ChevronDownIcon({ strokeWidth = 2, ...rest }: IChevronDownIcon): JSX.Element {
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
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

export default ChevronDownIcon;
