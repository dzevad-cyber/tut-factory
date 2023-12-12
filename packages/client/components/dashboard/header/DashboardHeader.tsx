import { Sheet, SheetContent, SheetTrigger } from '@client/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@client/client-utils/tailwind/cn';
import DashboardSidebar from '../sidebar/DashboardSidebar';

const DashboardHeader = () => {
  return (
    <header
      className={cn(
        'grid grid-flow-col',
        'md:col-start-2',
        'bg-background',
        'border-border border-b',
        'h-24',
        'px-10'
      )}
    >
      <section className={cn('grid', 'md:hidden')}>
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side='left' className={cn('p-0')}>
            <DashboardSidebar />
          </SheetContent>
        </Sheet>
      </section>
      <div
        className={cn(
          'grid',
          'grid-flow-col',
          'justify-self-end',
          'items-center',
          'gap-x-5'
        )}
      ></div>
    </header>
  );
};

export default DashboardHeader;
