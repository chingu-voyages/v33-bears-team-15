import type { ComponentPropsWithoutRef } from 'react';

export type IEllipsisIcon = ComponentPropsWithoutRef<'svg'>;

function EllipsisIcon({
  strokeWidth = 2,
  fill = 'none',
  ...rest
}: IEllipsisIcon): JSX.Element {
  return (
    <svg
      fill={fill}
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        strokeWidth={strokeWidth}
        d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z"
      />
    </svg>
  );
}

export default EllipsisIcon;
