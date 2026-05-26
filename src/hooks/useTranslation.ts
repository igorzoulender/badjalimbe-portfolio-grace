import { useTheme } from '@/contexts/ThemeContext';
import { translations, type Language, type TranslationKey } from '@/data/translations';

export const useTranslation = () => {
  const { language } = useTheme();

  const t = (key: TranslationKey): string => translations[language][key] ?? key;

  const tr = <T extends string>(value: Record<Language, T>): T => value[language];

  return { t, tr, language };
};
