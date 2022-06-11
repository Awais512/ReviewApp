import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Title, Container, Submit } from '../';

const OTP_LENGTH = 6;

const EmailVerification = () => {
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(''));
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);

  const input = useRef();

  const focusNextInputField = (i) => {
    setActiveOtpIndex(i + 1);
  };
  const focusPrevInputField = (i) => {
    let nextIndex;
    const diff = i - 1;
    nextIndex = diff !== 0 ? diff : 0;
    setActiveOtpIndex(nextIndex);
  };

  const handleOtpChange = ({ target }, i) => {
    const { value } = target;
    const newOtp = [...otp];
    newOtp[i] = value.substring(value.length - 1, value.length);
    if (!value) {
      focusPrevInputField(i);
    } else focusNextInputField(i);
    setOtp([...newOtp]);
  };

  useEffect(() => {
    input.current?.focus();
  }, [activeOtpIndex]);
  console.log(input);

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
              {otp.map((_, i) => (
                <input
                  ref={activeOtpIndex === i ? input : null}
                  key={i}
                  onChange={(e) => handleOtpChange(e, i)}
                  value={otp[i] || ''}
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
