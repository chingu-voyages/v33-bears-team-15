import BookIcon from '~/assets/icons/bookIcon';
import HomeIcon from '~/assets/icons/homeIcon';

export type SidebarMenuType = {
  name: string;
  subMenus: Array<{ label: string; href: string }>;
  icon: any;
  href: string | null;
};

export type SidebarType = {
  listTitle: string;
  menus: SidebarMenuType[];
};

const sidebarData: SidebarType[] = [
  {
    listTitle: 'General',
    menus: [
      {
        name: 'Home',
        subMenus: [],
        icon: HomeIcon,
        href: '/dashboard/home',
      },
    ],
  },
  {
    listTitle: 'Management',
    menus: [
      {
        name: 'Books',
        subMenus: [
          { label: 'List', href: '/dashboard/books/list' },
          { label: 'Create', href: '/dashboard/books/create' },
        ],
        icon: BookIcon,
        href: null,
      },
    ],
  },
];

export default sidebarData;
