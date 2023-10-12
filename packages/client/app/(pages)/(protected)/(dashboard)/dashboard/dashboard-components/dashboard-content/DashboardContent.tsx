const DashboardContent: React.FC<ContentProps> = ({ children }) => {
  return (
    <main className='bg-green-300 md:col-start-2 md:col-end-3 md:row-start-2'>
      {children}
    </main>
  );
};

export default DashboardContent;

type ContentProps = {
  children: React.ReactNode;
};
