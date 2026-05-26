import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

const NotFound = () => {
  const location = useLocation();
  const { t, language } = useTranslation();

  useEffect(() => {
    console.error('404 — route inexistante :', location.pathname);
  }, [location.pathname]);

  const copy =
    language === 'fr'
      ? {
          eyebrow: 'Erreur 404',
          title: 'Page introuvable',
          lead:
            'La page que vous cherchez n’existe pas, a été déplacée, ou n’a jamais existé.',
          home: 'Retour à l’accueil',
        }
      : {
          eyebrow: 'Error 404',
          title: 'Page not found',
          lead:
            'The page you’re looking for doesn’t exist, was moved, or never existed.',
          home: 'Back to home',
        };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="editorial text-center">
        <p className="section-eyebrow mb-8">{copy.eyebrow}</p>
        <h1 className="font-display text-6xl md:text-8xl font-medium tracking-tight">
          404<span className="text-accent">.</span>
        </h1>
        <p className="mt-6 font-display text-2xl md:text-3xl text-foreground/80">
          {copy.title}
        </p>
        <p className="mt-4 font-serif text-base md:text-lg text-ink-muted max-w-md mx-auto">
          {copy.lead}
        </p>
        <a
          href="/"
          className="mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] link-underline"
        >
          ← {copy.home}
        </a>
        <p className="sr-only">{t('home')}</p>
      </div>
    </div>
  );
};

export default NotFound;
