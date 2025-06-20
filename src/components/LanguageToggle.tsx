
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useTheme();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="cyber-border hover:bg-primary/10"
    >
      <Languages className="w-4 h-4 mr-1" />
      <span className="text-xs font-medium">
        {language.toUpperCase()}
      </span>
    </Button>
  );
};

export default LanguageToggle;
