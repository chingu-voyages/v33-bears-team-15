import { ReactNode, useState } from 'react';

import Sidebar from '~/components/dashboard/sidebar';
import MobileSidebar from '~/components/dashboard/mobile-sidebar';

interface IDashLayout {
  children?: ReactNode;
}

export default function DashLayout({ children }: IDashLayout) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <MobileSidebar isOpen={mobileSidebarOpen} setIsOpen={setMobileSidebarOpen} />

      <div className="flex">
        {/* Filters */}
        <Sidebar />
        {/* Product grid */}
        <div className="lg:col-span-3">{children}</div>
      </div>
    </>
  );
}
