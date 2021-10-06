import cn from 'classnames';
import { forwardRef, ComponentPropsWithRef } from 'react';

export interface TextareaProps extends ComponentPropsWithRef<'textarea'> {
  isError?: boolean;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const {
    className,
    disabled,
    readOnly,
    isError,
    error,
    hidden,
    rows = 3,
    ...rest
  } = props;

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
      <textarea
        ref={ref}
        className={hidden ? '' : rootClass}
        disabled={disabled}
        readOnly={readOnly}
        rows={rows}
        hidden={hidden}
        {...rest}
      />

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

export default Textarea;
