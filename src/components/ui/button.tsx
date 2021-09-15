import cn from 'classnames';
import { forwardRef, ComponentProps, JSXElementConstructor, ForwardedRef } from 'react';

const DEFAULT_TAG = 'button';

enum Variant {
  google,
  twitter,
  modern,
}

enum Scheme {
  primary,
  black,
  none,
}

enum Size {
  full,
  normal,
  small,
}

export interface IButton extends ComponentProps<typeof DEFAULT_TAG> {
  label?: string;
  href?: string;
  as?: string | JSXElementConstructor<any>;
  variant?: keyof typeof Variant;
  colorScheme?: keyof typeof Scheme;
  size?: keyof typeof Size;
  disabled?: boolean;
  loading?: boolean;
  external?: boolean;
  reset?: boolean;
}

const Button = forwardRef<ForwardedRef<typeof DEFAULT_TAG>, IButton>((props, ref) => {
  const {
    type = 'button',
    label,
    as: Component = DEFAULT_TAG,
    className,
    variant,
    size = 'full',
    colorScheme = 'primary',
    disabled,
    children,
    loading,
    reset = false,
    ...rest
  } = props;

  const primaryClass =
    'bg-primaryBtn text-gray-800 hover:text-black hover:bg-primary-900 border border-green-400';
  const blackClass =
    'bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-black border border-gray-900';
  const transparentClass = 'bg-transparent';
  const googleClass =
    'bg-gray-100 text-gray-500 border border-gray-300 hover:text-gray-700';
  const twitterClass =
    'bg-blue-500 border border-blue-500 text-white-normal hover:text-gray-200';
  const modernClass =
    'bg-gray-50 text-gray-800 uppercase hover:border-gray-300 hover:shadow hover:bg-gray-100 hover:text-gray-700 border border-gray-200';

  const rootClass = cn(
    {
      'rounded-md font-semibold transition duration-150 focus:outline-none focus:ring-2 ring-gray-700 shadow-sm  hover:shadow-md':
        !reset,
    },
    {
      [googleClass]: variant === 'google',
      [twitterClass]: variant === 'twitter',
      [modernClass]: variant === 'modern',
      //
      [primaryClass]: colorScheme === 'primary',
      [blackClass]: colorScheme === 'black',
      [transparentClass]: colorScheme === 'none',
      //
      'w-full py-2.5 flex justify-center items-center': size === 'full',
      'py-2.5 px-6': size === 'normal',
      'py-2.5 px-3': size === 'small',
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
