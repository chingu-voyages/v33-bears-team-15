import cn from 'classnames';
import Image, { ImageProps } from 'next/image';
import { ComponentProps, forwardRef } from 'react';

export interface IAvatar extends ImageProps {
  size?: number;
}

function Avatar({
  src,
  title = 'Custom Avatar',
  className,
  size = 100,
  layout = 'fixed',
  ...rest
}: IAvatar): JSX.Element {
  const rootClass = cn('rounded-full shadow-sm bg-gray-900', className);

  return (
    <Image
      src={src}
      alt={title}
      title={title}
      width={size}
      height={size}
      layout={layout}
      className={rootClass}
      {...rest}
    />
  );
}

export type IAvatarGroup = ComponentProps<'div'>;

Avatar.Group = forwardRef<HTMLDivElement, IAvatarGroup>(function AvatarGroup(
  { children, ...rest },
  ref
) {
  return (
    <div ref={ref} className="flex -space-x-2 overflow-hidden" {...rest}>
      {children}
    </div>
  );
});

export default Avatar;
