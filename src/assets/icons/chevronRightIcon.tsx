import type { ComponentPropsWithoutRef } from 'react';

export type IChevronRightIcon = ComponentPropsWithoutRef<'svg'>;

function ChevronRightIcon({ strokeWidth = 2, ...rest }: IChevronRightIcon): JSX.Element {
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
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}

export default ChevronRightIcon;
