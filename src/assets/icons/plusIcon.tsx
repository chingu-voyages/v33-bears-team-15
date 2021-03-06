import type { ComponentPropsWithoutRef } from 'react';

export type IPlusIcon = ComponentPropsWithoutRef<'svg'>;

function PlusIcon({ strokeWidth = 2, ...rest }: IPlusIcon): JSX.Element {
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
        d="M12 4v16m8-8H4"
      />
    </svg>
  );
}

export default PlusIcon;
