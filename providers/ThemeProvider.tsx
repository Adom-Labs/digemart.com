import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const ThemeContext = createContext<{ theme: string; toggleTheme: () => void }>({
  theme: '',
  toggleTheme: () => {},
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('');

  function toggleTheme() {
    let current = document.documentElement.getAttribute('data-theme');
    let newTheme: string = 'light';

    if (current === 'night') {
      newTheme = 'light';
    }

    if (current === 'light') {
      newTheme = 'night';
    }

    if (!current || current === 'undefined') {
      newTheme = 'night';
    }

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    return;
  }
  useEffect(() => {
    let t = localStorage.getItem('theme');

    if (t) {
      document.documentElement.setAttribute('data-theme', t);
      return setTheme(t);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      return setTheme('light');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
