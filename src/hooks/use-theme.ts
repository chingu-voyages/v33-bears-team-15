import { useCallback, useEffect, useState } from 'react';

// @TODO We need a better API to work with
// `localStorage`. Need to add to a `utils`
export default function useTheme() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = useCallback((type: 'dark' | 'light') => {
    if (type === 'dark') {
      document.documentElement.classList.add('dark');

      localStorage.setItem('theme', 'dark');
      localStorage.setItem('checked', JSON.stringify(true));
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');

      localStorage.setItem('theme', 'light');
      localStorage.setItem('checked', JSON.stringify(false));
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add(localStorage.getItem('theme'));
    }

    if (localStorage.getItem('checked')) {
      setIsDark(JSON.parse(localStorage.getItem('checked')));
    }
  }, []);

  return { toggle: toggleTheme, isDark, isLight: !isDark };
}
