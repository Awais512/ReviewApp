import React from 'react';
import Container from './Container';
import FormInput from './Form/FormInput';
import Title from './Form/Title';
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
        </form>
      </Container>
    </div>
  );
};

export default Signin;
