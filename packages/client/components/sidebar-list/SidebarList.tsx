import { cn } from '@client/client-utils/tailwind/cn';
import { Button } from '@client/components/ui/button';
import { Compass, Layout, LucideIcon } from 'lucide-react';
import Link from 'next/link';

const SidebarList = () => {
  return (
    <ul className={cn('pl-base grid gap-y-3 text-sm')}>
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
        className={cn(
          'grid',
          'grid-cols-[min-content_min-content_1fr]',
          'grid-flow-col',
          'justify-start',
          'w-full',
          'gap-x-3',
          'p-0'
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

export default SidebarList;
