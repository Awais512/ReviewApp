import { createContext, useState } from "react";
import { login } from "../api/auth";

export const AuthContext = createContext();
const defaultAuthInfo = {
  profile: null,
  isLoggedIn: false,
  isPending: false,
  error: "",
};

export default function AuthProvider({ children }) {
  const [authInfo, setAuthInfo] = useState({ ...defaultAuthInfo });

  const handleLogin = async (email, password) => {
    setAuthInfo({ ...authInfo, isPending: true });
    const { error, user } = await login({ email, password });
    if (error) {
      return setAuthInfo({ ...authInfo, isPending: false, error });
    }
    setAuthInfo({
      profile: { ...user },
      isPending: false,
      error: "",
      isLoggedIn: true,
    });
    localStorage.setItem("auth-token", user.token);
  };

  const handleLogout = async () => {};

  return (
    <AuthContext.Provider value={{ authInfo, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
