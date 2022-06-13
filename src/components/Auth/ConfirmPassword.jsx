import React from 'react';
import { Title, Container, FormInput, Submit } from '../';
import { commonModalClasses } from '../../utils/theme';
import FormContainer from '../Form/FormContainer';

const ConfirmPassword = () => {
  return (
    <>
      <FormContainer>
        <Container>
          <form className={`${commonModalClasses} w-96`}>
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
      </FormContainer>
    </>
  );
};

export default ConfirmPassword;
