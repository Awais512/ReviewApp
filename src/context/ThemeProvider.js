import { useEffect } from 'react';
import { createContext } from 'react';
export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const toggleTheme = () => {
    const toggle = document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    document.documentElement.classList.add(theme);
  }, []);
  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
