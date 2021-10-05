import type { ComponentPropsWithoutRef } from 'react';

export type IChevronUpIcon = ComponentPropsWithoutRef<'svg'>;

function ChevronUpIcon({ strokeWidth = 2, ...rest }: IChevronUpIcon): JSX.Element {
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
        d="M5 15l7-7 7 7"
      />
    </svg>
  );
}

export default ChevronUpIcon;
