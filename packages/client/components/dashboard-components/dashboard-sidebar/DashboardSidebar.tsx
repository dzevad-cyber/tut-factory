import { cn } from '@client/client-utils/tailwind/cn';
import Logo from '@client/components/logo/Logo';
import SidebarList from '@client/components/sidebar-list/SidebarList';
import React, { ReactNode } from 'react';

const DashboardSidebar = () => {
  return (
    <div
      className={cn(
        'grid gap-y-5',
        'auto-rows-min',
        'min-h-full',
        'bg-background',
        'border-border border-r'
      )}
    >
      <Logo />
      <SidebarList />
    </div>
  );
};

export const DashboardSiebarWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div className={cn('hidden md:grid', 'md:col-[1_/_2] md:row-span-full')}>
      {children}
    </div>
  );
};

export default DashboardSidebar;
