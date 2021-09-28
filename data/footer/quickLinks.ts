export type FooterLinksType = { hRef: string; label: string; external?: boolean };

const quickLinks: FooterLinksType[] = [
  {
    hRef: '/',
    label: 'Home',
  },
  {
    hRef: '/about',
    label: 'About',
  },
  {
    hRef: '/signin',
    label: 'Sign in',
  },
  {
    hRef: '/signup',
    label: 'Sign up',
  },
  {
    hRef: '/library',
    label: 'Browse Categories',
  },
];

export default quickLinks;
