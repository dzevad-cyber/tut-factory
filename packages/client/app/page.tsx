import React from 'react';

const Home = () => {
  const test = {
    one: 1,
    two: 2,
  };

  return (
    <main>
      <Btn className='mx-auto bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3'>
        hello text...
      </Btn>
    </main>
  );
};

export default Home;

const Btn: React.FC<BtnProps> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
