import { Dispatch, SetStateAction } from 'react';

import Link from '../common/link';
import List from '../ui/list';
import Button from '../ui/button';
import Avatar from '../ui/avatar';
import MoonIcon from '~assets/icons/moonIcon';
import SunIcon from '~assets/icons/sunIcon';
import MenuIcon from '~/assets/icons/menuIcon';
import useTheme from '~/hooks/use-theme';
import dropdownData from '~data/dashboard/dropdown';
import Dropdown from '../ui/dropdown';

export interface INavigation {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Navigation({ setIsOpen }: INavigation) {
  const { toggle, isDark } = useTheme();

  return (
    <nav className="sticky top-0 h-20 bg-lightFaded dark:bg-darkFaded flex items-center w-full lg:justify-end justify-between">
      <button type="button" className="lg:hidden" onClick={() => setIsOpen(true)}>
        <span className="sr-only">Open menu</span>
        <MenuIcon className="w-6" aria-hidden="true" />
      </button>

      <div className="flex items-center">
        {isDark ? (
          <button type="button" onClick={() => toggle('light')} className="mr-5">
            <SunIcon className="w-6 dark:text-gray-50 text-gray-900" />
          </button>
        ) : (
          <button type="button" onClick={() => toggle('dark')} className="mr-5">
            <MoonIcon className="w-6 dark:text-gray-50 text-gray-900" />
          </button>
        )}

        <Dropdown
          button={
            <Avatar
              src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg"
              title="Avatar Mock"
              size={36}
            />
          }
        >
          <div className="px-4 py-3.5">
            <div className="flex flex-col cursor-default">
              <span className="dark:text-gray-50 text-gray-900 font-semibold text-lg">
                Admin Mock
              </span>
              <span className="leading-5">admin@dekoo.tk</span>
            </div>
          </div>
          <List className="px-2 py-2">
            {dropdownData.map(({ label, icon: Icon, href }) => (
              <Dropdown.Item key={label}>
                {({ active }) => (
                  <Link
                    href={href}
                    className={`${
                      active ? 'dark:hover:bg-darkGray hover:bg-gray-100' : ''
                    } flex rounded-md items-center max-w-full px-2 py-2.5`}
                  >
                    <Icon
                      className="w-6 mr-3 dark:text-gray-400 text-gray-500"
                      aria-hidden="true"
                    />
                    <span>{label}</span>
                  </Link>
                )}
              </Dropdown.Item>
            ))}

            <Button className="mb-2 mt-4 rounded-lg" variant="shadow">
              Logout
            </Button>
          </List>
        </Dropdown>
      </div>
    </nav>
  );
}
