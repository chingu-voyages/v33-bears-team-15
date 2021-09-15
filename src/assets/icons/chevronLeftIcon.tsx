import type { ComponentPropsWithoutRef } from 'react';

export type IChevronLeftIcon = ComponentPropsWithoutRef<'svg'>;

function ChevronLeftIcon({ strokeWidth = 2, ...rest }: IChevronLeftIcon): JSX.Element {
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
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );
}

export default ChevronLeftIcon;
