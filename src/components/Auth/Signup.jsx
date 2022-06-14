import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormInput, Submit, Title, Container, CustomLink } from '../';
import { createUser } from '../../api/auth';
import { isValidEmail } from '../../utils/helper';
import { commonModalClasses } from '../../utils/theme';
import FormContainer from '../Form/FormContainer';

const validateUserInfo = ({ name, email, password }) => {
  const isValidName = /^[a-z A-Z]+$/;

  if (!name.trim()) return { ok: false, error: 'Name is missing!' };
  if (!isValidName.test(name)) return { ok: false, error: 'Invalid name!' };

  if (!email.trim()) return { ok: false, error: 'Email is missing!' };
  if (!isValidEmail(email)) return { ok: false, error: 'Invalid email!' };

  if (!password.trim()) return { ok: false, error: 'Password is missing!' };
  if (password.length < 8)
    return { ok: false, error: 'Password must be 8 characters long!' };

  return { ok: true };
};

const Signup = () => {
  const navigate = useNavigate();
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
    const { ok, error } = validateUserInfo(userInfo);
    if (!ok) return console.log(error);
    const response = await createUser(userInfo);
    if (response.error) return console.log(response.error);
    response.user &&
      navigate('/auth/verify-email', {
        state: { user: response.user },
        replace: true,
      });
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
