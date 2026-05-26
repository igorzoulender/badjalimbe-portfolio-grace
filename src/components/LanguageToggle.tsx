import { useTheme } from '@/contexts/ThemeContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useTheme();

  return (
    <div className="inline-flex h-9 items-center rounded-sm border border-border font-mono text-[11px] uppercase tracking-[0.18em]">
      <button
        type="button"
        onClick={() => setLanguage('fr')}
        className={`px-2.5 h-full transition-colors ${
          language === 'fr'
            ? 'text-foreground'
            : 'text-foreground/40 hover:text-foreground/70'
        }`}
        aria-pressed={language === 'fr'}
      >
        FR
      </button>
      <span className="h-3 w-px bg-border" aria-hidden="true" />
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 h-full transition-colors ${
          language === 'en'
            ? 'text-foreground'
            : 'text-foreground/40 hover:text-foreground/70'
        }`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
