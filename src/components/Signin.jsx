import React from 'react';
import Container from './Container';
const Signin = () => {
  return (
    <div className='fixed inset-0 bg-primary -z-20 flex justify-center items-center'>
      <Container>
        <form className='bg-secondary rounded p-6 w-96'>
          <h1 className='text-xl text-white font-semibold text-center'>
            Sign In
          </h1>
          <div className='flex flex-col-reverse'>
            <input
              id='password'
              type='password'
              className='bg-transparent rounded border-2 border-dark-subtle focus:bg-primary w-full text-lg outline-none focus:border-white text-white p-2 peer transition'
              placeholder='Enter Your Password'
            />
            <label
              className='font-semibold text-dark-subtle peer-focus:text-white transition self-start'
              htmlFor='password'
            >
              Password
            </label>
            <input
              id='email'
              type='text'
              className='bg-transparent rounded border-2 border-dark-subtle focus:bg-primary w-full text-lg outline-none focus:border-white text-white p-2 peer transition'
              placeholder='Enter Your Email'
            />
            <label
              className='font-semibold text-dark-subtle peer-focus:text-white transition self-start'
              htmlFor='email'
            >
              Email
            </label>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Signin;
