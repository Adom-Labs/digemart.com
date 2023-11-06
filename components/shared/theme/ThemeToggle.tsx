import { useTheme } from '@/providers/ThemeProvider';
import { ReactNode } from 'react';
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <span>
      {!theme ? (
        <ToggleBtn handler={toggleTheme}>
          <BiSolidMoon />
        </ToggleBtn>
      ) : theme === 'night' ? (
        <ToggleBtn handler={toggleTheme}>
          <BiSolidSun />
        </ToggleBtn>
      ) : (
        <ToggleBtn handler={toggleTheme}>
          <BiSolidMoon />
        </ToggleBtn>
      )}
    </span>
  );
}

export default ThemeToggle;

export function ToggleBtn({
  children,
  handler,
}: {
  children: ReactNode;
  handler: any;
}) {
  return (
    <button
      className='btm-sm btn-ghost dark:text-gray-50 btn-square btn-circle btn text-xl'
      onClick={handler}
    >
      {children}
    </button>
  );
}
