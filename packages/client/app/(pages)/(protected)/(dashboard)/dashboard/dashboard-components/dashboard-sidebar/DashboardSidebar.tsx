import Logo from '@client/components/logo/Logo';
import { Button } from '@client/components/ui/button';
import { Compass, Layout, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const DashboardSidebar = () => {
  return (
    <div className='bg-muted hidden auto-rows-min pl-5 pt-5 md:col-start-1 md:col-end-2 md:row-span-full md:grid md:min-h-screen md:gap-y-10'>
      <Logo />
      <SidebarList />
    </div>
  );
};

export default DashboardSidebar;

const SidebarList = () => {
  return (
    <ul className='grid gap-y-3 text-sm'>
      {sidebarItems.map(({ icon: Icon, label, href, selected }) => {
        return (
          <SidebarItem
            key={label}
            icon={Icon}
            label={label}
            href={href}
            selected={selected}
          />
        );
      })}
    </ul>
  );
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  href,
  selected,
}) => {
  return (
    <li>
      <Button
        className='grid w-full grid-flow-col grid-cols-[min-content_min-content_1fr] justify-start gap-x-3 p-0'
        variant='ghost'
        asChild
      >
        <Link href={href}>
          <Icon size={14} />
          {label}
          {selected ? (
            <span className='min-h-full w-2 self-end justify-self-end bg-blue-500' />
          ) : null}
        </Link>
      </Button>
    </li>
  );
};

const sidebarItems: SidebarItemProps[] = [
  {
    icon: Layout,
    label: 'Dashboard',
    href: '/dashboard',
    selected: true,
  },
  {
    icon: Compass,
    label: 'Browse',
    href: '/search',
    selected: false,
  },
];

type SidebarItemProps = {
  icon: LucideIcon;
  label: string;
  href: string;
  selected: boolean;
};
