import { ReactNode, useState } from 'react';

import SEO, { ISEO } from '../common/SEO';
import Sidebar from '~/components/dashboard/sidebar';
import MobileDrawer from '~/components/dashboard/mobile-drawer';
import Navigation from '../dashboard/navigation';

interface IDashLayout {
  children?: ReactNode;
  customMeta?: ISEO;
}

export default function DashLayout({ children, customMeta }: IDashLayout) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <SEO {...customMeta} />
      <MobileDrawer isOpen={mobileSidebarOpen} setIsOpen={setMobileSidebarOpen} />
      <div className="flex">
        <Sidebar />
        <div className="w-full px-10">
          <Navigation setIsOpen={setMobileSidebarOpen} />
          {children}
        </div>
      </div>
    </>
  );
}
