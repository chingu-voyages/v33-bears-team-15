import Image from 'next/image';
import { Disclosure } from '@headlessui/react';

import { memo } from 'react';
import Link from '../common/link';
import List from '../ui/list';
import Avatar from '../ui/avatar';
import MinusIcon from '~/assets/icons/minusIcon';
import PlusIcon from '~/assets/icons/plusIcon';
import Logo from '~assets/images/logo.png';
import sidebarData from '~data/dashboard/sidebar';
import useAuth from '~/hooks/use-auth';

function Sidebar() {
  const { currentUser, isAdmin, isSuperAdmin } = useAuth();
  // const { isAdmin, isSuperAdmin } = getUserRoles(currentUser?.role);

  if (!currentUser) {
    return <h1>Loading</h1>;
  }

  return (
    <aside className="hidden lg:block w-[355px] py-7 px-5 border-r dark:border-gray-700 border-gray-300 min-h-screen">
      {/* Logo */}
      <Link href="/dashboard/home" title="Dekoo Branding">
        <Image width={125} height={37} src={Logo} alt="Dekoo" priority />
      </Link>

      {/* Avatar */}
      <div className="flex px-6 py-4 dark:bg-darkGray bg-gray-100 rounded-2xl mt-6 mb-10">
        <Avatar
          src={`${process.env.NEXT_PUBLIC_API_HOSTNAME}${currentUser.avatar}`}
          title={currentUser.username || currentUser.fullName}
          alt={currentUser.username || currentUser.fullName}
          size={44}
        />
        <div className="ml-4 flex flex-col">
          <Link
            href="/dashboard/home"
            className="dark:text-gray-50 text-gray-900 font-semibold"
          >
            {currentUser.fullName}
          </Link>
          <span className="leading-5 text-sm">
            {isAdmin && 'admin'}
            {isSuperAdmin && 'super-admin'}
          </span>
        </div>
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
                    <Disclosure.Button className="dark:hover:bg-darkGray hover:bg-gray-100 w-full flex relative p-3 rounded-xl">
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
                            className="flex flex-grow max-w-full pl-11 pr-3 py-3 dark:hover:bg-darkGray hover:bg-gray-100 rounded-xl"
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
                  className="flex flex-grow max-w-full p-3 dark:hover:bg-darkGray hover:bg-gray-100 rounded-xl"
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
    </aside>
  );
}

export default memo(Sidebar);
