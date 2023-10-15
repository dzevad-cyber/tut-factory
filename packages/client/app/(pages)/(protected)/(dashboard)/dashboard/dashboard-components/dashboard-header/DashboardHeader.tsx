import { Sheet, SheetContent, SheetTrigger } from '@client/components/ui/sheet';
import { Menu } from 'lucide-react';
import DashboardSidebar from '../dashboard-sidebar/DashboardSidebar';
import { cn } from '@client/client-utils/tailwind/cn';
import { UserButton } from '@clerk/nextjs';

const DashboardHeader = () => {
  return (
    <div
      className={cn(
        'p-base',
        'grid grid-flow-col',
        'md:col-start-2',
        'bg-background',
        'border-border border-b'
      )}
    >
      <div className={cn('grid', 'md:hidden')}>
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side='left' className={cn('p-0')}>
            <DashboardSidebar />
          </SheetContent>
        </Sheet>
      </div>

      {/* nav menu */}
      <div className={cn('grid', 'grid-flow-col', 'justify-self-end')}>
        <UserButton />
      </div>
    </div>
  );
};

export default DashboardHeader;
