import type { ComponentPropsWithoutRef } from 'react';

export type ICheckIcon = ComponentPropsWithoutRef<'svg'>;

function CheckIcon({ strokeWidth = 2, ...rest }: ICheckIcon): JSX.Element {
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
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default CheckIcon;
