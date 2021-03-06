import { createContext, useEffect, useState } from "react";
import { getIsAuth, login } from "../api/auth";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
const defaultAuthInfo = {
  profile: null,
  isLoggedIn: false,
  isPending: false,
  error: "",
};

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
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

  const isAuth = async () => {
    const token = localStorage.getItem("auth-token");
    if (!token) return;
    setAuthInfo({ ...authInfo, isPending: true });

    const { error, user } = await getIsAuth(token);
    if (error) {
      return setAuthInfo({ ...authInfo, isPending: false, error });
    }
    setAuthInfo({
      profile: { ...user },
      isPending: false,
      error: "",
      isLoggedIn: true,
    });
  };

  const handleLogout = async () => {
    localStorage.removeItem("auth-token");
    setAuthInfo({ ...defaultAuthInfo });
  };

  useEffect(() => {
    isAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ authInfo, handleLogin, isAuth, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
