import React from 'react';
import Container from './Container';
import FormInput from './Form/FormInput';
import Submit from './Form/Submit';
import Title from './Form/Title';
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
            <a
              className='text-dark-subtle hover:text-white transition'
              href='/forgot'
            >
              Forgot Password
            </a>
            <a
              className='text-dark-subtle hover:text-white transition'
              href='/signin'
            >
              Sign In
            </a>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
