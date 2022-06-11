import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Title, Container, Submit } from '../';

const OTP_LENGTH = 6;

const EmailVerification = () => {
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(''));
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);

  const inputRef = useRef();

  const focusNextInputField = (index) => {
    setActiveOtpIndex(index + 1);
  };

  const focusPrevInputField = (index) => {
    let nextIndex;
    const diff = index - 1;
    nextIndex = diff !== 0 ? diff : 0;

    setActiveOtpIndex(nextIndex);
  };

  const handleOtpChange = ({ target }, index) => {
    const { value } = target;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1, value.length);

    if (!value) focusPrevInputField(index);
    else focusNextInputField(index);

    setOtp([...newOtp]);
  };

  const handleKeyDown = ({ key }, index) => {
    if (key === 'Backspace') {
      focusPrevInputField(index);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

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
                  ref={activeOtpIndex === index ? inputRef : null}
                  key={index}
                  type='number'
                  value={otp[index] || ''}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
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
