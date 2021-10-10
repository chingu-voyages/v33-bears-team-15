import cn from 'classnames';
import { ComponentPropsWithRef, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

const DEFAULT_TAG = 'div';

export interface IDropdown extends ComponentPropsWithRef<typeof DEFAULT_TAG> {
  button: any;
}

export default function Dropdown({ button, className, children }: IDropdown) {
  const rootClass = cn('relative inline-block text-left', className);

  return (
    <Menu as={DEFAULT_TAG} className={rootClass}>
      <div>
        <Menu.Button>{button}</Menu.Button>
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
        <Menu.Items className="absolute right-0 w-72 mt-2 origin-top-right dark:bg-gray-900 bg-gray-50 divide-y dark:divide-gray-800 divide-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border dark:border-gray-800 border-gray-100">
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

Dropdown.Item = Menu.Item;
