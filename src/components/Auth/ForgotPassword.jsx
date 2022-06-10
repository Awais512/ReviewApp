import React from 'react';
import { Title, Container, FormInput, Submit, CustomLink } from '../';

const ForgotPassword = () => {
  return (
    <>
      <div className='fixed inset-0 bg-primary -z-20 flex justify-center items-center'>
        <Container>
          <form className='bg-secondary rounded p-6 w-96 space-y-6'>
            <Title>Please Enter Your Email</Title>

            <FormInput
              label='Email'
              placeholder='Enter Your Email'
              name='email'
              type='text'
            />
            <Submit value='Send Link' />
            <div className='flex justify-between'>
              <CustomLink
                to='/auth/signin'
                className='text-dark-subtle hover:text-white transition'
              >
                Sign In
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
    </>
  );
};

export default ForgotPassword;
