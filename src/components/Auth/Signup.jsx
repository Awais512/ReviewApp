import React from 'react';
import { Link } from 'react-router-dom';
import { FormInput, Submit, Title, Container, CustomLink } from '../';

const Signup = () => {
  return (
    <div className='fixed inset-0 bg-primary -z-20 flex justify-center items-center'>
      <Container>
        <form className='bg-secondary rounded p-6 w-96 space-y-6'>
          <Title>Sign Up</Title>

          <FormInput
            label='Name'
            placeholder='Enter Your Name'
            name='name'
            type='text'
          />
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

          <Submit value='Sign up' />
          <div className='flex justify-between'>
            <CustomLink
              to='/auth/forget-password'
              className='text-dark-subtle hover:text-white transition'
            >
              Forgot Password
            </CustomLink>
            <CustomLink
              to='/auth/signin'
              className='text-dark-subtle hover:text-white transition'
            >
              Sign In
            </CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
