import type { ComponentPropsWithoutRef } from 'react';

export interface IBookmarkIcon extends ComponentPropsWithoutRef<'svg'> {
  solid?: boolean;
}

function BookmarkIcon({ strokeWidth = 2, solid, ...rest }: IBookmarkIcon): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={solid ? 'currentColor' : 'none'}
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
      />
    </svg>
  );
}

export default BookmarkIcon;
