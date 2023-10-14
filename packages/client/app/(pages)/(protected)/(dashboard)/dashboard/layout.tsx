import DashboardContent from './dashboard-components/dashboard-content/DashboardContent';
import DashboardHeader from './dashboard-components/dashboard-header/DashboardHeader';
import DashboardSidebar from './dashboard-components/dashboard-sidebar/DashboardSidebar';

const DashboardLayout: React.FC<DashboardLayout> = ({ children }) => {
  return (
    <div className='grid min-h-screen grid-rows-[auto_1fr] bg-slate-400 md:grid-cols-[minmax(150px,25%)_1fr] md:grid-rows-[auto_1fr]'>
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

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <main className='bg-green-300 md:col-start-2 md:col-end-3 md:row-start-2'>
      {children}
    </main>
  );
};

type ContentProps = {
  children: React.ReactNode;
};
