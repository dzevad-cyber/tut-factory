import DashboardContent from './dashboard-components/dashboard-content/DashboardContent';
import DashboardHeader from './dashboard-components/dashboard-header/DashboardHeader';
import DashboardSidebar from './dashboard-components/dashboard-sidebar/DashboardSidebar';

const DashboardLayout: React.FC<DashboardLayout> = ({ children }) => {
  return (
    <div className='grid min-h-screen md:grid-cols-[minmax(150px,25%)_1fr] md:grid-rows-[auto_1fr]'>
      <DashboardHeader />
      <DashboardSidebar />
      <DashboardContent>{children}</DashboardContent>
    </div>
  );
};

export default DashboardLayout;

type DashboardLayout = {
  children: React.ReactNode;
};
