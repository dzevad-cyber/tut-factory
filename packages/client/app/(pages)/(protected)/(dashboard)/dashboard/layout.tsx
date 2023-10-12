const DashboardLayout: React.FC<DashboardLayout> = ({ children }) => {
  return (
    <div className='grid'>
      {/* navbar*/}
      <div>NavBar</div>
      {/* sidebar */}
      <div>Sidebar</div>
      {/* content */}
      <main>Content</main>
    </div>
  );
};

export default DashboardLayout;

type DashboardLayout = {
  children: React.ReactNode;
};
