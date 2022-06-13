import React from 'react';
import { Title, Container, FormInput, Submit, CustomLink } from '../';
import { commonModalClasses } from '../../utils/theme';
import FormContainer from '../Form/FormContainer';

const ForgotPassword = () => {
  return (
    <>
      <FormContainer>
        <Container>
          <form className={`${commonModalClasses} w-96`}>
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
      </FormContainer>
    </>
  );
};

export default ForgotPassword;
