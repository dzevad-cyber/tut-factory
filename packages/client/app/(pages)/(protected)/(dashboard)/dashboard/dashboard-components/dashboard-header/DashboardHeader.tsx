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
        <UserButton
          afterSignOutUrl='/'
          appearance={{
            elements: {
              avatarBox: {
                width: '4rem',
                height: '4rem',
              },
              userPreviewMainIdentifier: {
                fontSize: '1.6rem',
              },
              userPreviewSecondaryIdentifier: {
                fontSize: '1.1rem',
                color: 'hsl(20, 14.3%, 4.1%)',
              },
              userButtonPopoverActionButtonIcon: {
                width: '1.2rem',
                height: '1.2rem',
                color: 'hsl(20, 14.3%, 4.1%)',
              },
              userButtonPopoverActionButtonText: {
                fontSize: '1.2rem',
                color: 'hsl(20, 14.3%, 4.1%)',
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
