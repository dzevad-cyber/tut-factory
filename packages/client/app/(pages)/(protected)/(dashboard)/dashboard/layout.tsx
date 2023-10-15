import { cn } from '@client/client-utils/tailwind/cn';
import DashboardContent from './dashboard-components/dashboard-content/DashboardContent';
import DashboardHeader from './dashboard-components/dashboard-header/DashboardHeader';
import DashboardSidebar, {
  DashboardSiebarWrapper,
} from './dashboard-components/dashboard-sidebar/DashboardSidebar';

const DashboardLayout: React.FC<DashboardLayout> = ({ children }) => {
  return (
    <div
      className={cn(
        'bg-slate-300',
        'grid',
        'min-h-screen',
        'grid-rows-[auto_1fr]',
        'md:grid-cols-[minmax(150px,25%)_1fr]'
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
