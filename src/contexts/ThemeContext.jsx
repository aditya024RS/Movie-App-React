import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(() => {
    const savedMode = localStorage.getItem('lightMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('lightMode', JSON.stringify(lightMode));
    if (lightMode) {
      document.documentElement.classList.add('light', 'lightH2');
    } else {
      document.documentElement.classList.remove('light', 'lightH2');
    }
  }, [lightMode]);

  const togglelightMode = () => {
    setLightMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ lightMode, togglelightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};