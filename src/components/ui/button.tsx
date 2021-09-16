import cn from 'classnames';
import { forwardRef, ComponentProps, JSXElementConstructor } from 'react';

enum Variant {
  primary,
  google,
  twitter,
  modern,
  read,
}

enum Size {
  full,
  half,
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
    'bg-primaryBtn shadow-sm hover:shadow-md text-gray-800 hover:text-black hover:bg-primary-900 border border-green-400';
  const googleClass =
    'bg-gray-100 text-gray-500 shadow-sm hover:shadow-md border border-gray-300 hover:text-gray-700';
  const twitterClass =
    'bg-blue-500 border border-blue-500 text-white-normal hover:text-gray-200';
  const modernClass =
    'bg-gray-50 text-gray-800 uppercase hover:border-gray-300 hover:shadow hover:bg-gray-100 hover:text-gray-700 border border-gray-200';

  const readClass = 'font-bold mt-3 py-2 px-4 rounded bg-primary-700 text-white';
  const rootClass = cn(
    {
      'rounded-md font-semibold transition duration-150 focus:outline-none focus:ring-2 ring-gray-700':
        !reset,
    },
    {
      [primaryClass]: variant === 'primary',
      [googleClass]: variant === 'google',
      [twitterClass]: variant === 'twitter',
      [modernClass]: variant === 'modern',
      [readClass]: variant === 'read',
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

export function ReadBtn(): JSX.Element {
  return (
    <div className="flex justify-center">
      <Button variant="read" size="half">
        Read Now
      </Button>
    </div>
  );
}

export default Button;
