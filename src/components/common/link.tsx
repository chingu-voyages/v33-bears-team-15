import NextLink, { LinkProps } from "next/link";
import cn from "classnames";
import { forwardRef, AnchorHTMLAttributes } from "react";

interface ILink extends LinkProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  external?: boolean;
  fixPosition?: boolean;
}

const Link = forwardRef<HTMLAnchorElement, ILink>((props, ref): JSX.Element => {
  const {
    href,
    replace,
    children,
    className,
    external = false,
    fixPosition = false,
    ...rest
  } = props;

  const rootClass = cn(
    {
      flex: fixPosition,
      inline: !fixPosition,
    },
    className
  );

  const matchInternal = String(href).startsWith("/") || String(href).startsWith("#");

  if (external || !matchInternal) {
    return (
      <a
        className={rootClass}
        ref={ref}
        href={href as string}
        rel="noopener noreferrer"
        target="_blank"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} replace={replace} passHref>
      <a ref={ref} className={rootClass} {...rest}>
        {children}
      </a>
    </NextLink>
  );
});

export default Link;
