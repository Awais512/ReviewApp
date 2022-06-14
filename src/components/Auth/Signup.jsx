import React, { useState } from 'react';
import { FormInput, Submit, Title, Container, CustomLink } from '../';
import { commonModalClasses } from '../../utils/theme';
import FormContainer from '../Form/FormContainer';

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = userInfo;

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userInfo);
  };
  return (
    <FormContainer>
      <Container>
        <form
          onSubmit={handleSubmit}
          className={`${commonModalClasses} w-96 space-y-6`}
        >
          <Title>Sign Up</Title>

          <FormInput
            onChange={handleChange}
            value={name}
            label='Name'
            placeholder='Enter Your Name'
            name='name'
            type='text'
          />
          <FormInput
            onChange={handleChange}
            value={email}
            label='Email'
            placeholder='Enter Your Email'
            name='email'
            type='text'
          />
          <FormInput
            onChange={handleChange}
            value={password}
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
