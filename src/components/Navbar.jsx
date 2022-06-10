import React from 'react';
const logo = './logo.png';

const Navbar = () => {
  console.log(logo);
  return (
    <div className='bg-secondary'>
      <div className='text-white p-2 max-w-screen-xl mx-auto '>
        <div className='flex justify-between items-center'>
          <img className='h-10' src={logo} alt='' />
          <ul>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
