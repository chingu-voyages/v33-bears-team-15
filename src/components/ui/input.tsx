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
      'focus:border-red-400 dark:focus:border-red-500 bg-gray-200 dark:bg-gray-700 text-gray-400 placeholder-gray-400 dark:placeholder-gray-500 cursor-not-allowed select-none':
        disabled || readOnly,
      'focus:border-red-400 dark:focus:border-red-400 border-red-600 dark:border-red-700':
        isError,
      'focus:border-gray-500 dark:focus:border-gray-500 hover:border-gray-500 dark:hover:border-gray-500 dark:focus:border-gray-500':
        !disabled || !readOnly || !isError,
    },
    className
  );

  return (
    <div className="relative">
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
        <div className="absolute right-2 top-0 translate-y-1/2 cursor-pointer text-gray-400">
          {inputType === 'password' ? (
            <button type="button" onClick={() => setInputType('text')}>
              <EyeIcon className="w-5" />
            </button>
          ) : (
            <button type="button" onClick={() => setInputType('password')}>
              <EyeOffIcon className="w-5" />
            </button>
          )}
        </div>
      )}

      {isError && (
        <span
          role="alert"
          className="block text-sm dark:text-red-500 text-red-700 mt-1 pl-0.5"
        >
          {error}
        </span>
      )}
    </div>
  );
});

export default Input;
