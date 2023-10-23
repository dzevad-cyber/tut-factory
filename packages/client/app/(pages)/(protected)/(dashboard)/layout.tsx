import { cn } from '@client/client-utils/tailwind/cn';
import DashboardContent from '@client/components/dashboard/content/DashboardContent';
import DashboardHeader from '@client/components/dashboard/header/DashboardHeader';
import DashboardSidebar, {
  DashboardSiebarWrapper,
} from '@client/components/dashboard/sidebar/DashboardSidebar';

const DashboardLayout: React.FC<DashboardLayout> = ({ children }) => {
  return (
    <div
      className={cn(
        'grid',
        'min-h-screen',
        'grid-rows-[auto_1fr]',
        'md:grid-cols-[minmax(150px,15%)_1fr]'
      )}
    >
      <DashboardHeader />
      <DashboardSiebarWrapper>
        <DashboardSidebar />
      </DashboardSiebarWrapper>
      <DashboardContent>{children}</DashboardContent>
    </div>
  );
};

export default DashboardLayout;

type DashboardLayout = {
  children: React.ReactNode;
};
