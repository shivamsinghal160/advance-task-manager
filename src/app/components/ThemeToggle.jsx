'use client';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import useIsMounted from '../hooks/useIsMounted';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isMounted = useIsMounted();

  // ⛔ Don't render until mounted on client
  if (!isMounted) return null;

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
