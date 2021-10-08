import { Dispatch, SetStateAction, Fragment } from 'react';
import { Dialog, Transition, Disclosure } from '@headlessui/react';

import Link from '../common/link';
import List from '../ui/list';
import CloseIcon from '~/assets/icons/closeIcon';
import MinusIcon from '~/assets/icons/minusIcon';
import PlusIcon from '~/assets/icons/plusIcon';
import sidebarData from '~data/dashboard/sidebar';

export interface IMobileDrawer {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileDrawer({ isOpen, setIsOpen }: IMobileDrawer): JSX.Element {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="-translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="-translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="mr-auto relative max-w-xs w-full h-full dark:bg-gray-900 bg-gray-100 shadow-xl py-4 pb-12 flex flex-col overflow-y-auto px-4">
            <div className="flex justify-end">
              <button
                type="button"
                className="-mr-2 w-10 h-10 dark:bg-gray-800 p-2 rounded-md flex items-center justify-center dark:text-gray-400 text-gray-800"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <CloseIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Menus */}
            {sidebarData.map(({ listTitle, menus }) => (
              <List
                key={listTitle}
                title={listTitle}
                titleClass="tracking-wide uppercase font-semibold text-base"
                className="mt-4"
              >
                {menus.map(({ name, subMenus, icon: Icon, href }) =>
                  subMenus.length > 0 ? (
                    <Disclosure as={List.Item} key={name} withSpace={false}>
                      {({ open }) => (
                        <div className="w-full">
                          <Disclosure.Button className="dark:hover:bg-darkGray hover:bg-gray-200 w-full flex relative p-3 rounded-xl">
                            <Icon
                              className="w-6 mr-3 dark:text-gray-400 text-gray-500"
                              aria-hidden="true"
                            />
                            <span className="font-semibold mr-6">{name}</span>
                            <span className="absolute right-3 mt-0.5">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>

                          <Disclosure.Panel as={List}>
                            {subMenus.map((menu) => (
                              <List.Item key={menu.label} withSpace={false}>
                                <Link
                                  href={menu.href}
                                  className="flex flex-grow max-w-full pl-11 pr-3 py-3 dark:hover:bg-darkGray hover:bg-gray-200 rounded-xl"
                                >
                                  {menu.label}
                                </Link>
                              </List.Item>
                            ))}
                          </Disclosure.Panel>
                        </div>
                      )}
                    </Disclosure>
                  ) : (
                    <List.Item withSpace={false} key={name}>
                      <Link
                        href={href}
                        className="flex flex-grow max-w-full p-3 dark:hover:bg-darkGray hover:bg-gray-200 rounded-xl"
                      >
                        <Icon
                          className="w-6 mr-3 dark:text-gray-400 text-gray-500"
                          aria-hidden="true"
                        />
                        <span className="font-semibold">{name}</span>
                      </Link>
                    </List.Item>
                  )
                )}
              </List>
            ))}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
