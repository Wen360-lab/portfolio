import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label="Changer de thème"
      className="relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300"
      style={{ background: isDark ? 'var(--navy)' : 'var(--blue-light)' }}
    >
      {/* Le rond qui se déplace */}
      <span
        className="absolute flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300"
        style={{ transform: isDark ? 'translateX(34px)' : 'translateX(4px)' }}
      >
        {isDark ? <Moon size={14} color="var(--navy)" /> : <Sun size={14} color="var(--orange)" />}
      </span>
    </button>
  );
}

export default ThemeToggle;