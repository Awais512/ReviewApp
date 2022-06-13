import React from 'react';
import { Container, FormInput, Submit, Title, CustomLink } from '../';
import { commonModalClasses } from '../../utils/theme';
import FormContainer from '../Form/FormContainer';

const Signin = () => {
  return (
    <FormContainer>
      <Container>
        <form className={`${commonModalClasses} w-96`}>
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
    </FormContainer>
  );
};

export default Signin;
