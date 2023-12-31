import { cn } from '@client/client-utils/tailwind/cn';

const DashboardContent: React.FC<ContentProps> = ({ children }) => {
  return <main className={cn('bg-background', 'p-7')}>{children}</main>;
};

export default DashboardContent;

type ContentProps = {
  children: React.ReactNode;
};
