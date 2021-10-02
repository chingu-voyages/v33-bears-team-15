import CogIcon from '~/assets/icons/cogIcon';
import HomeIcon from '~/assets/icons/homeIcon';

export type DropdownDataType = {
  label: string;
  icon: any;
  href: string;
};

const dropdownData = [
  {
    label: 'Home',
    icon: HomeIcon,
    href: '/dashboard/home',
  },
  {
    label: 'Settings',
    icon: CogIcon,
    href: '/dashboard/settings',
  },
] as const;

export default dropdownData;
