import cn from "classnames";
import { forwardRef, ComponentPropsWithRef, JSXElementConstructor } from "react";

export interface IContainer extends ComponentPropsWithRef<"div"> {
  as?: string | JSXElementConstructor<any>;
  reset?: boolean;
  maxW?: string;
}

const DEFAULT_TAG = "div";

const Container = forwardRef<HTMLDivElement, IContainer>((props, ref): JSX.Element => {
  const {
    as: Component = DEFAULT_TAG,
    className,
    children,
    reset,
    maxW = "",
    ...rest
  } = props;

  const rootClass = cn(
    maxW,
    {
      "lg:px-14 md:px-12 px-4 mx-auto w-full": !reset,
      "max-w-screen-3xl": !maxW,
    },
    className
  );

  return (
    <Component ref={ref} className={rootClass} {...rest}>
      {children}
    </Component>
  );
});

export default Container;
