import cn from 'classnames';
import { forwardRef, ComponentProps, JSXElementConstructor, ForwardedRef } from 'react';

const DEFAULT_TAG = 'button';

enum Variant {
  google,
  twitter,
  modern,
  read,
  outlined,
  shadow,
}

enum Scheme {
  primary,
  black,
  none,
}

enum Size {
  thin,
  small,
  normal,
  wide,
  half,
  full,
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
  withShadow?: boolean;
}

const Button = forwardRef<ForwardedRef<typeof DEFAULT_TAG>, IButton>((props, ref) => {
  const {
    type = 'button',
    label,
    as: Component = DEFAULT_TAG,
    className,
    variant,
    size = 'full',
    colorScheme,
    disabled,
    children,
    loading,
    reset = false,
    withShadow = true,
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
  const readClass =
    'mt-8 mb-5 bg-gray-100 text-gray-800 uppercase hover:border-gray-300 hover:shadow hover:opacity-90 hover:text-gray-900 border border-gray-200 py-3.5 px-12 flex justify-center items-center rounded-sm font-bold tracking-wide';
  const outlinedClass =
    'font-bold uppercase text-sm bg-transparent hover:bg-primary-800 text-primary-700 dark:hover:text-gray-800 hover:text-gray-100 border border-primary-700 rounded';
  const shadowClass =
    'bg-gray-100 text-gray-500 hover:text-gray-800 dark:bg-darkGray dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-sm uppercase';

  const rootClass = cn(
    {
      'rounded-md font-semibold transition duration-150 focus:outline-none focus:ring-2 ring-gray-700':
        !reset,
    },
    {
      [googleClass]: variant === 'google',
      [twitterClass]: variant === 'twitter',
      [modernClass]: variant === 'modern',
      [readClass]: variant === 'read',
      [outlinedClass]: variant === 'outlined',
      [shadowClass]: variant === 'shadow',
      //
      [primaryClass]: colorScheme === 'primary',
      [blackClass]: colorScheme === 'black',
      [transparentClass]: colorScheme === 'none',
      //
      'w-full py-2.5 flex justify-center items-center': size === 'full',
      'py-1.5 px-6 max-w-max': size === 'thin',
      'py-2.5 px-3 max-w-max': size === 'small',
      'py-2.5 px-6 max-w-max': size === 'normal',
      'py-2 px-8 max-w-max': size === 'wide',
      'opacity-25': disabled,
      'shadow-sm hover:shadow-md': withShadow,
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
