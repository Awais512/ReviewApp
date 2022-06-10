import React from 'react';
import { Container, FormInput, Submit, Title, CustomLink } from '../';

const Signin = () => {
  return (
    <div className='fixed inset-0 bg-primary -z-20 flex justify-center items-center'>
      <Container>
        <form className='bg-secondary rounded p-6 w-96 space-y-6'>
          <Title>Sign In</Title>

          <FormInput
            label='Email'
            placeholder='Enter Your Email'
            name='email'
            type='text'
          />
          <FormInput
            label='Password'
            placeholder='Enter Your Password'
            name='password'
            type='password'
          />
          <Submit value='Sign In' />
          <div className='flex justify-between'>
            <CustomLink
              to='/auth/forget-password'
              className='text-dark-subtle hover:text-white transition'
            >
              Forgot Password
            </CustomLink>
            <CustomLink
              to='/auth/signup'
              className='text-dark-subtle hover:text-white transition'
            >
              Sign Up
            </CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Signin;
