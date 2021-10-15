import BookIcon from '~/assets/icons/bookIcon';
import CollectionIcon from '~/assets/icons/collectionIcon';
import HomeIcon from '~/assets/icons/homeIcon';
import UserIcon from '~/assets/icons/userIcon';

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
      {
        name: 'Categories',
        subMenus: [
          { label: 'List', href: '/dashboard/categories/list' },
          { label: 'Create', href: '/dashboard/categories/create' },
        ],
        icon: CollectionIcon,
        href: null,
      },
      {
        name: 'Authors',
        subMenus: [
          { label: 'List', href: '/dashboard/authors/list' },
          { label: 'Create', href: '/dashboard/authors/create' },
        ],
        icon: UserIcon,
        href: null,
      },
    ],
  },
];

export default sidebarData;
