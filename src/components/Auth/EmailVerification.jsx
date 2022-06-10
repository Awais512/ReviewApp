import { useState } from 'react';
import { Title, Container, FormInput, Submit, CustomLink } from '../';

const OTP_LENGTH = 6;

const EmailVerification = () => {
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(''));

  return (
    <>
      <div className='fixed inset-0 bg-primary -z-20 flex justify-center items-center'>
        <Container>
          <form className='bg-secondary rounded p-6 space-y-6'>
            <div>
              <Title>Please Enter the OTP to Verify Your Email</Title>
              <p className='text-center text-dark-subtle'>
                OTP has been Sent to Your Email
              </p>
            </div>
            <div className='flex justify-center items-center space-x-4'>
              {otp.map((_, index) => (
                <input
                  type='number'
                  className='w-12 h-12 border-2 border-dark-subtle focus:border-white rounded bg-transparent outline-none text-white text-center font-semibold text-xl spin-button-none firefox'
                />
              ))}
            </div>

            <Submit value='Verify Email' />
          </form>
        </Container>
      </div>
    </>
  );
};

export default EmailVerification;
