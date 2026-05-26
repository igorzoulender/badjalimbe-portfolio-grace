import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
      className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-foreground/70 transition-colors hover:text-foreground hover:border-foreground/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
};

export default ThemeToggle;
