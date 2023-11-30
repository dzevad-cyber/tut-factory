'use client';

// import pagesRoutes from '@client/client-utils/page-routes/pagesRoutes';
import { cn } from '@client/client-utils/tailwind/cn';
import { Button } from '@client/components/ui/button';
import { BarChart, Compass, Layout, List, LucideIcon } from 'lucide-react';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';

const SidebarList = () => {
  // const { routes } = useSidebarRoutes();

  const routes = [
    {
      icon: Layout,
      label: 'Dashboard',
      href: '/dashboard',
      selected: true,
    },
    {
      icon: List,
      label: 'List',
      href: '/dashboard/list',
      selected: false,
    },
    {
      icon: Compass,
      label: 'Map',
      href: '/dashboard/map',
      selected: false,
    },
    {
      icon: BarChart,
      label: 'Analytics',
      href: '/dashboard/analytics',
      selected: false,
    },
  ];

  return (
    <ul className={cn('grid', 'text-sm', 'auto-rows-min')}>
      {/* {routes.map(({ icon: Icon, label, href, selected }) => {
        return (
          <SidebarItem
            key={label}
            icon={Icon}
            label={label}
            href={href}
            selected={selected}
          />
        );
      })} */}
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

// const useSidebarRoutes = () => {
//   const pathName = usePathname();

//   const sidebarRoutesGroupKey = Object.keys(sidebarItems).find((key) => {
//     return pathName.includes(key);
//   });

//   if (!sidebarRoutesGroupKey)
//     return {
//       routes: [],
//     };

//   const sidebarRoutesGroup =
//     sidebarItems[sidebarRoutesGroupKey as keyof typeof sidebarItems];

//   const routes = sidebarRoutesGroup.map((item) => {
//     if (item.href === pathName) {
//       return {
//         ...item,
//         selected: true,
//       };
//     } else {
//       return {
//         ...item,
//         selected: false,
//       };
//     }
//   });

//   return {
//     routes,
//   };
// };

type SidebarItemProps = {
  icon: LucideIcon;
  label: string;
  href: string;
  selected: boolean;
};

export default SidebarList;
