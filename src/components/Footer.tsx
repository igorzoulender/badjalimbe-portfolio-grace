import { ArrowUp, Github, Mail } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-16">
      <div className="editorial-wide py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="space-y-3">
            <div className="font-display text-2xl font-semibold tracking-tight">
              Grace Félix BADJALIMBE
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
              {t('designed')}
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/igorzoulender"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="mailto:gracefelix.b@gmail.com"
              aria-label="Email"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/60 transition-colors hover:text-foreground"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              {t('backToTop')}
            </button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            © {year} Grace Félix BADJALIMBE — {t('allRightsReserved')}.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Lomé · Togo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
