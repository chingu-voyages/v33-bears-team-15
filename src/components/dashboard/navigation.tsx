import { Dispatch, Fragment, SetStateAction } from 'react';
import { Menu, Transition } from '@headlessui/react';

import Link from '../common/link';
import List from '../ui/list';
import Button from '../ui/button';
import Avatar from '../ui/avatar';
import MoonIcon from '~assets/icons/moonIcon';
import SunIcon from '~assets/icons/sunIcon';
import MenuIcon from '~/assets/icons/menuIcon';
import useTheme from '~/hooks/use-theme';
import dropdownData from '~data/dashboard/dropdown';

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

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button>
              <Avatar
                src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg"
                title="Avatar Mock"
                size={36}
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right dark:bg-gray-900 bg-gray-50 divide-y dark:divide-gray-800 divide-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border dark:border-gray-800 border-gray-100">
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
                  <Menu.Item key={label}>
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
                  </Menu.Item>
                ))}

                <Button className="mb-2 mt-4 rounded-lg" variant="shadow">
                  Logout
                </Button>
              </List>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
}
