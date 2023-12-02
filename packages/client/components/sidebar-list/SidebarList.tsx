'use client';

import { cn } from '@client/client-utils/tailwind/cn';
import { Button } from '@client/components/ui/button';
import { BarChart, Compass, Layout, List, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarList = () => {
  const pathname = usePathname();

  return (
    <ul className={cn('grid', 'text-sm', 'auto-rows-min')}>
      <SidebarItem
        icon={Layout}
        label='Dashboard'
        href='/dashboard'
        selected={pathname === '/dashboard'}
      />
      <SidebarItem
        icon={List}
        label='Browse'
        href='/dashboard/browse'
        selected={pathname === '/dashboard/browse'}
      />
      <SidebarItem
        icon={Compass}
        label='Teacher'
        href='/dashboard/teacher'
        selected={pathname === '/dashboard/teacher'}
      />
      <SidebarItem
        icon={BarChart}
        label='Analytics'
        href='/dashboard/analytics'
        selected={pathname === '/dashboard/analytics'}
      />
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
        className={cn(
          'grid',
          'grid-cols-[min-content_min-content_1fr]',
          'grid-flow-col',
          'justify-start',
          'w-full',
          'gap-x-3',
          'p-0',
          'pl-10',
          'h-16'
        )}
        variant='ghost'
        asChild
      >
        <Link href={href}>
          <Icon size={14} />
          {label}
          {selected ? (
            <span
              className={cn(
                'min-h-full',
                'w-2',
                'self-end',
                'justify-self-end',
                'bg-primary'
              )}
            />
          ) : null}
        </Link>
      </Button>
    </li>
  );
};

type SidebarItemProps = {
  icon: LucideIcon;
  label: string;
  href: string;
  selected: boolean;
};

export default SidebarList;
