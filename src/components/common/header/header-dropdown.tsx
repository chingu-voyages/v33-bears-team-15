import { ComponentPropsWithoutRef } from 'react';
import UserIcon from '~/assets/icons/userIcon';
import Button from '~/components/ui/button';
import Dropdown from '~/components/ui/dropdown';
import List from '~/components/ui/list';
import { IUser } from '~/types';
import Link from '../link';

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
      <div className="px-4 py-3.5">
        <span className="dark:text-gray-50 text-gray-900 font-semibold text-lg">
          Hi {user.fullName}!
        </span>
      </div>

      <List className="px-2 py-2">
        {/* {dropdownData.map(({ label, icon: Icon, href }) => (
          <Dropdown.Item as="li" key={label}>
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
        ))} */}

        <Dropdown.Item as="li">
          <Button className="mb-2 mt-4 rounded-lg" variant="shadow" onClick={logoutFn}>
            Logout
          </Button>
        </Dropdown.Item>
      </List>
    </Dropdown>
  );
}
