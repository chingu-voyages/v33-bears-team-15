import Image from 'next/image';
import cn from 'classnames';
import { ReactNode } from 'react';

import MoonIcon from '~/assets/icons/moonIcon';
import SunIcon from '~/assets/icons/sunIcon';
import Link from './common/link';
import Container from './ui/container';
import useTheme from '~/hooks/use-theme';

enum HeaderVariant {
  normal,
  image,
  solid,
}
export interface IHeader {
  variant?: keyof typeof HeaderVariant;
  withBorder?: boolean;
  sticky?: boolean;
  children?: ReactNode;
}

export default function Header({
  withBorder,
  variant = 'normal',
  sticky = false,
}: IHeader): JSX.Element {
  const { toggle, isDark } = useTheme();

  const rootClass = cn('z-30 relative', {
    'border-b dark:border-gray-700 border-gray-300 h-16': withBorder,
    'h-24': !withBorder,
    'bg-lightGray dark:bg-gray-900': variant === 'solid',
    'bg-lightFaded dark:bg-darkFaded': variant === 'normal',
    'sticky top-0': sticky,
  });
  const textClass = cn({
    'dark:text-gray-50 text-gray-900': variant === 'normal',
    'text-gray-50': variant === 'image',
  });

  return (
    <header className={rootClass}>
      <Container className="flex justify-between items-center h-full">
        <Link href="/">
          <Image width={125} height={37} src="/images/logo.png" />
        </Link>

        <div className="flex items-center">
          {isDark ? (
            <button type="button" onClick={() => toggle('light')}>
              <SunIcon className={`w-6 ${textClass}`} />
            </button>
          ) : (
            <button type="button" onClick={() => toggle('dark')}>
              <MoonIcon className={`w-6 ${textClass}`} />
            </button>
          )}

          <Link href="/signin" className={`ml-6 ${textClass} font-semibold`}>
            Sign In
          </Link>
        </div>
      </Container>
    </header>
  );
}
