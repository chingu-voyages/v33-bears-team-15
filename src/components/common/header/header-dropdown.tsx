import { ComponentPropsWithoutRef } from 'react';

import Link from '../link';
import Button from '~/components/ui/button';
import Dropdown from '~/components/ui/dropdown';
import List from '~/components/ui/list';
import UserIcon from '~/assets/icons/userIcon';
import { IUser } from '~/types';

export interface IHeaderDropdown extends ComponentPropsWithoutRef<'div'> {
  user: IUser;
  logoutFn: () => void;
}

export default function HeaderDropdown({ user, className, logoutFn }: IHeaderDropdown) {
  return (
    <Dropdown
      className={className}
      button={
        <div className="rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 w-9 h-9 flex items-center justify-center">
          <UserIcon className="w-5" />
        </div>
      }
    >
      <div className="px-5 py-3.5">
        <span className="dark:text-gray-50 text-gray-900 font-semibold text-lg">
          Hi {user.fullName}!
        </span>
      </div>

      <List className="px-4 py-2">
        <Dropdown.Item as="li">
          {({ active }) => (
            <Link
              href="/profile"
              className={`${
                active ? 'dark:hover:bg-darkGray hover:bg-gray-100' : ''
              } flex rounded-md items-center max-w-full px-2 py-2.5`}
            >
              <span>Public profile</span>
            </Link>
          )}
        </Dropdown.Item>

        <Dropdown.Item as="li">
          {({ active }) => (
            <Link
              href="/settings"
              className={`${
                active ? 'dark:hover:bg-darkGray hover:bg-gray-100' : ''
              } flex rounded-md items-center max-w-full px-2 py-2.5`}
            >
              <span>Your account</span>
            </Link>
          )}
        </Dropdown.Item>

        <Dropdown.Item as="li">
          <Button className="mb-2 mt-4 rounded-lg" variant="shadow" onClick={logoutFn}>
            Logout
          </Button>
        </Dropdown.Item>
      </List>
    </Dropdown>
  );
}
