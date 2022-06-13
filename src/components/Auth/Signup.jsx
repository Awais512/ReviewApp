import React from 'react';
import { FormInput, Submit, Title, Container, CustomLink } from '../';
import { commonModalClasses } from '../../utils/theme';
import FormContainer from '../Form/FormContainer';

const Signup = () => {
  return (
    <FormContainer>
      <Container>
        <form className={`${commonModalClasses} w-96 space-y-6`}>
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
    </FormContainer>
  );
};

export default Signup;
