import type { ComponentPropsWithoutRef } from 'react';

export type IUploadIcon = ComponentPropsWithoutRef<'svg'>;

function UploadIcon({ fill = 'none', ...rest }: IUploadIcon): JSX.Element {
  return (
    <svg
      version="1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      enableBackground="new 0 0 48 48"
      fill={fill}
      {...rest}
    >
      <g fill="#009688">
        <polygon points="24,10.9 35,24 13,24" />
        <rect x="20" y="40" width="8" height="4" />
        <rect x="20" y="34" width="8" height="4" />
        <rect x="20" y="21" width="8" height="11" />
        <rect x="6" y="4" width="36" height="4" />
      </g>
    </svg>
  );
}

export default UploadIcon;
