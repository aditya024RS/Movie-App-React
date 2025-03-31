import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.jsx';

export const ThemeToggle = () => {
  const { lightMode, togglelightMode } = useContext(ThemeContext);

  return (
    <button
      onClick={togglelightMode}
      className="fixed bottom-4 right-4 p-3 rounded-full bg-gray-200 light:bg-gray-700 z-50 shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label={lightMode ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {lightMode ? (
        <span className="text-yellow-300 text-xl">☀️</span>
      ) : (
        <span className="text-gray-800 text-xl">🌙</span>
      )}
    </button>
  );
};