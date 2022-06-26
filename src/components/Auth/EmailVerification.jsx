import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Title, Container, Submit } from "../";
import { verifyUserEmail } from "../../api/auth";
import { useNotification, useAuth } from "../../hooks";

import { commonModalClasses } from "../../utils/theme";
import FormContainer from "../Form/FormContainer";

const OTP_LENGTH = 6;

const isValidOTP = (otp) => {
  let valid = false;

  for (let val of otp) {
    valid = !isNaN(parseInt(val));
    if (!valid) break;
  }

  return valid;
};

const EmailVerification = () => {
  const { updateNotification } = useNotification();
  const { isAuth, authInfo } = useAuth();
  const { isLoggedIn, profile } = authInfo;
  const isVerified = profile?.isVerified;
  const { state } = useLocation();
  const user = state?.user;
  const navigate = useNavigate();

  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
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
    if (key === "Backspace") {
      focusPrevInputField(index);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidOTP(otp)) {
      return updateNotification("error", "Invalid OTP");
    }
    const {
      error,
      message,
      user: userResponse,
    } = await verifyUserEmail({
      OTP: otp.join(""),
      userId: user.id,
    });
    if (error) return updateNotification("error", error);
    updateNotification("success", message);
    localStorage.setItem("auth-token", userResponse.token);
    isAuth();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  useEffect(() => {
    if (!user) {
      navigate("/not-found");
    }
    if (isLoggedIn && isVerified) navigate("/");
  }, [user, navigate, isLoggedIn]);

  return (
    <>
      <FormContainer>
        <Container>
          <form onSubmit={handleSubmit} className={`${commonModalClasses}`}>
            <div>
              <Title>Please Enter the OTP to Verify Your Email</Title>
              <p className="text-center dark:text-dark-subtle text-light-subtle">
                OTP has been Sent to Your Email
              </p>
            </div>
            <div className="flex justify-center items-center space-x-4">
              {otp.map((_, index) => (
                <input
                  ref={activeOtpIndex === index ? inputRef : null}
                  key={index}
                  type="number"
                  value={otp[index] || ""}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 border-2 dark:border-dark-subtle border-light-subtle dark:focus:border-white focus:border-primary rounded bg-transparent outline-none dark:text-white text-primary text-center font-semibold text-xl spin-button-none firefox"
                />
              ))}
            </div>

            <Submit value="Verify Account" />
          </form>
        </Container>
      </FormContainer>
    </>
  );
};

export default EmailVerification;
