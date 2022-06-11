import React from 'react';
import { Title, Container, FormInput, Submit } from '../';

const ConfirmPassword = () => {
  return (
    <>
      <div className='fixed inset-0 bg-primary -z-20 flex justify-center items-center'>
        <Container>
          <form className='bg-secondary rounded p-6 w-96 space-y-6'>
            <Title>Please Enter new Password</Title>

            <FormInput
              label='New Password'
              placeholder='Enter Your New Password'
              name='password'
              type='password'
            />
            <FormInput
              label='Confirm Password'
              placeholder='Confirm Password'
              name='confirmPassword'
              type='password'
            />
            <Submit value='Confirm Password' />
          </form>
        </Container>
      </div>
    </>
  );
};

export default ConfirmPassword;
