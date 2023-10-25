import { cn } from '@client/client-utils/tailwind/cn';
import ToggleTheme from '@client/components/client-components/toggle-theme/ToggleTheme';
import Logo from '@client/components/logo/Logo';
import SidebarList from '@client/components/sidebar-list/SidebarList';
import React, { ReactNode } from 'react';

const DashboardSidebar = () => {
  return (
    <div
      className={cn(
        'grid',
        'grid-rows-[min-content_1fr_min-content]',
        'min-h-full',
        'bg-background',
        'border-border border-r'
      )}
    >
      <Logo />
      <SidebarList />
      <div className={cn('p-10')}>
        <ToggleTheme />
      </div>
    </div>
  );
};

export const DashboardSiebarWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div
      className={cn('hidden', 'md:grid', 'md:col-[1_/_2]', 'md:row-span-full')}
    >
      {children}
    </div>
  );
};

export default DashboardSidebar;
