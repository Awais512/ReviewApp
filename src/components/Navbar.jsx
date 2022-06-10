import React from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import Container from './Container';
const logo = './logo.png';

const Navbar = () => {
  console.log(logo);
  return (
    <div className='bg-secondary shadow-sm shadow-gray-500'>
      <Container className='p-2'>
        <div className='flex justify-between items-center'>
          <img className='h-10' src={logo} alt='' />
          <ul className='flex space-x-4 items-center'>
            <li>
              <button className='bg-dark-subtle p-1 rounded'>
                <BsFillSunFill className='text-secondary' size={24} />
              </button>
            </li>
            <li>
              <input
                type='text'
                className='border-2 border-dark-subtle rounded p-1 bg-transparent text-xl outline-none focus:border-white transition text-white'
                placeholder='Search...'
              />
            </li>
            <li className='text-white font-semibold text-lg'>Login</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
