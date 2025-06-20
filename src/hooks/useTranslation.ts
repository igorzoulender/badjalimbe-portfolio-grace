
import { useTheme } from '@/contexts/ThemeContext';
import { translations, TranslationKey } from '@/data/translations';

export const useTranslation = () => {
  const { language } = useTheme();
  
  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };
  
  return { t, language };
};
