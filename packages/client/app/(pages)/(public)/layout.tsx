const PublicPagesLayout: React.FC<PublicPagesLayoutProps> = ({ children }) => {
  return (
    <div className='grid min-h-screen content-center justify-center'>
      {children}
    </div>
  );
};

export default PublicPagesLayout;

type PublicPagesLayoutProps = {
  children: React.ReactNode;
};
