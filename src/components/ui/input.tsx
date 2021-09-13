import cn from 'classnames';
import { forwardRef, ComponentPropsWithRef, useState } from 'react';
import EyeIcon from '~/assets/icons/eyeIcon';
import EyeOffIcon from '~/assets/icons/eyeOffIcon';

export interface InputProps extends ComponentPropsWithRef<'input'> {
  isError?: boolean;
  error?: string;
  showPasswordToggle?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    type = 'text',
    className,
    disabled,
    readOnly,
    isError,
    error,
    hidden,
    showPasswordToggle,
    ...rest
  } = props;

  const [inputType, setInputType] = useState<HTMLInputElement['type']>(type);

  const rootClass = cn(
    'block focus:ring-0 w-full shadow-sm border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-800 dark:placeholder-gray-400 placeholder-gray-500',
    {
      'focus:border-red-300 bg-gray-100 text-gray-500 cursor-not-allowed select-none':
        disabled || readOnly,
      'focus:border-gray-600 dark:focus:border-gray-500': !disabled || !readOnly,
    },
    className
  );

  return (
    <div className="relative w-full">
      <input
        type={inputType}
        ref={ref}
        className={hidden ? '' : rootClass}
        disabled={disabled}
        readOnly={readOnly}
        hidden={hidden}
        {...rest}
      />
      {showPasswordToggle && (
        <div className="absolute right-2 top-0 translate-y-1/2">
          {inputType === 'password' ? (
            <button type="button" onClick={() => setInputType('text')}>
              <EyeIcon className="w-5 cursor-pointer text-gray-400" />
            </button>
          ) : (
            <button type="button" onClick={() => setInputType('password')}>
              <EyeOffIcon className="w-5 cursor-pointer text-gray-400" />
            </button>
          )}
        </div>
      )}

      {isError && (
        <span role="alert" className="block text-sm text-secondary mt-1 pl-0.5">
          {error}
        </span>
      )}
    </div>
  );
});

export default Input;
