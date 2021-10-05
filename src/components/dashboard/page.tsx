import { ReactNode } from 'react';
import useBreadcrumb from '~/hooks/use-breadcrumb';
import Link from '../common/link';
import Button, { IButton } from '../ui/button';

export interface IPage {
  title: string;
  children?: ReactNode;
  withButton?: boolean;
  buttonProps?: Omit<IButton, 'ref'>;
}

export default function Page({
  children,
  title,
  buttonProps,
  withButton = false,
}: IPage): JSX.Element {
  const breadcrumbs = useBreadcrumb();

  return (
    <section className="py-5 flex flex-col">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <ul className="flex mb-10">
            {breadcrumbs.map(({ label, path }, idx, self) => (
              <li className="flex items-center" key={label}>
                {path ? (
                  <Link href={path} className="font-medium hover:underline">
                    {label}
                  </Link>
                ) : (
                  <span className="text-gray-400 dark:text-gray-500 cursor-default">
                    {label}
                  </span>
                )}
                {self.length - 1 !== idx && (
                  <span className="w-1 h-1 bg-gray-500 rounded-full mx-2.5" />
                )}
              </li>
            ))}
          </ul>
        </div>
        {withButton && (
          <Button
            size="thin"
            colorScheme={buttonProps.colorScheme || 'primary'}
            className={buttonProps.className || 'h-[fit-content] flex items-center'}
            {...buttonProps}
          />
        )}
      </div>

      {children}
    </section>
  );
}
