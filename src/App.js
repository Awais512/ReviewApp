import {
  Navbar,
  Signin,
  Signup,
  Home,
  EmailVerification,
  ForgotPassword,
  ConfirmPassword,
} from './components';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/signin' element={<Signin />} />
        <Route path='/auth/signup' element={<Signup />} />
        <Route path='/auth/verify-email' element={<EmailVerification />} />
        <Route path='/auth/forget-password' element={<ForgotPassword />} />
        <Route path='/auth/confirm-password' element={<ConfirmPassword />} />
      </Routes>
    </>
  );
}

export default App;
