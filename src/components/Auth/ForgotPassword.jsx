import React, { useState } from "react";
import { Title, Container, FormInput, Submit, CustomLink } from "../";
import { forgotPassword } from "../../api/auth";
import { useNotification } from "../../hooks";
import { isValidEmail } from "../../utils/helper";
import { commonModalClasses } from "../../utils/theme";
import FormContainer from "../Form/FormContainer";

const validateUserInfo = ({ email, password }) => {
  if (!email.trim()) return { ok: false, error: "Email is missing!" };
  if (!isValidEmail(email)) return { ok: false, error: "Invalid email!" };

  return { ok: true };
};

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const { updateNotification } = useNotification();

  const handleChange = ({ target }) => {
    const { value } = target;
    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email))
      return updateNotification("error", "Invalid Email");
    const { error, message } = await forgotPassword(email);
    if (error) return updateNotification("error", error);
    updateNotification("success", message);
  };

  return (
    <>
      <FormContainer>
        <Container>
          <form
            onSubmit={handleSubmit}
            className={`${commonModalClasses} w-96`}
          >
            <Title>Please Enter Your Email</Title>

            <FormInput
              value={email}
              onChange={handleChange}
              label="Email"
              placeholder="Enter Your Email"
              name="email"
              type="text"
            />
            <Submit value="Send Link" />
            <div className="flex justify-between">
              <CustomLink
                to="/auth/signin"
                className="text-dark-subtle hover:text-white transition"
              >
                Sign In
              </CustomLink>
              <CustomLink
                to="/auth/signup"
                className="text-dark-subtle hover:text-white transition"
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
