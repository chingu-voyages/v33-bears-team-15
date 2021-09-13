import cn from 'classnames';
import { forwardRef, ComponentProps, JSXElementConstructor } from 'react';

enum Variant {
  primary,
  google,
  twitter,
  modern,
}

enum Size {
  full,
}

export interface ButtonProps extends ComponentProps<'button'> {
  label?: string;
  href?: string;
  as?: string | JSXElementConstructor<any>;
  variant?: keyof typeof Variant;
  size?: keyof typeof Size;
  disabled?: boolean;
  loading?: boolean;
  external?: boolean;
  reset?: boolean;
}

const DEFAULT_TAG = 'button';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    type = 'button',
    label,
    as: Component = DEFAULT_TAG,
    className,
    variant = 'primary',
    size = 'full',
    disabled,
    children,
    loading,
    reset = false,
    ...rest
  } = props;

  const primaryClass =
    'bg-green-600 text-gray-50 hover:bg-primary-900 border border-green-700 hover:border-green-600';
  const googleClass =
    'bg-gray-100 text-gray-500 border border-gray-300 hover:text-gray-700';
  const twitterClass =
    'bg-blue-500 border border-blue-500 text-white-normal hover:text-gray-200';
  const modernClass =
    'bg-gray-50 text-gray-800 uppercase hover:border-gray-300 hover:shadow hover:bg-gray-100 hover:text-gray-700 border border-gray-200';

  const rootClass = cn(
    { 'rounded-md font-semibold': !reset },
    {
      [primaryClass]: variant === 'primary',
      [googleClass]: variant === 'google',
      [twitterClass]: variant === 'twitter',
      [modernClass]: variant === 'modern',
      'w-full py-2.5 flex justify-center items-center': size === 'full',
      'opacity-25': disabled,
    },
    className
  );

  return (
    <Component type={type} ref={ref} className={rootClass} disabled={disabled} {...rest}>
      {loading ? 'Loading...' : label || children}
    </Component>
  );
});

export default Button;
