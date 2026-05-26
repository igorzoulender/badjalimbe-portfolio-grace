import { Github, Mail, ArrowDown } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center pt-28 pb-20"
    >
      <div className="editorial-wide w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-12">
          <div className="lg:col-span-8 animate-fade-in">
            <p className="section-eyebrow mb-8">{t('heroEyebrow')}</p>

            <h1 className="font-display font-medium leading-[0.95] tracking-tight text-foreground">
              <span className="block text-[clamp(2.75rem,8vw,7rem)]">Grace Félix</span>
              <span className="block text-[clamp(2.75rem,8vw,7rem)] italic font-normal text-foreground/90">
                Badjalimbe<span className="text-accent">.</span>
              </span>
            </h1>

            <p className="mt-10 font-serif text-xl md:text-2xl leading-relaxed text-foreground/85 max-w-2xl">
              {t('heroLead')}
            </p>

            <p className="mt-4 font-serif text-base md:text-lg italic text-ink-muted max-w-2xl">
              {t('heroSpecialization')}
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#projects"
                className="link-underline font-mono text-xs uppercase tracking-[0.2em]"
              >
                {t('seeWork')}
                <span aria-hidden="true" className="ml-2">→</span>
              </a>
              <a
                href="#contact"
                className="link-underline font-mono text-xs uppercase tracking-[0.2em] text-accent"
              >
                {t('getInTouch')}
              </a>

              <div className="hidden md:block h-4 w-px bg-border" aria-hidden="true" />

              <a
                href="https://github.com/igorzoulender"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center gap-2 text-foreground/60 transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                <span className="font-mono text-xs uppercase tracking-[0.18em]">GitHub</span>
              </a>
              <a
                href="mailto:gracefelix.b@gmail.com"
                aria-label="Email"
                className="inline-flex items-center gap-2 text-foreground/60 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                <span className="font-mono text-xs uppercase tracking-[0.18em]">Email</span>
              </a>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:pl-10 lg:border-l lg:border-border animate-fade-in [animation-delay:120ms]">
            <div className="space-y-8 lg:pt-2">
              <div>
                <p className="section-eyebrow mb-3">{t('heroIntro')}</p>
                <p className="font-serif text-sm text-ink-muted leading-relaxed">
                  Laravel · Nuxt.js · React · Flutter · TypeScript.
                </p>
              </div>

              <div>
                <p className="section-eyebrow mb-3">{t('heroLocation')}</p>
                <p className="font-serif text-sm text-ink-muted">
                  6°08′ N · 1°13′ E
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className="relative inline-flex h-2 w-2"
                  aria-hidden="true"
                >
                  <span className="absolute inset-0 rounded-full bg-accent/60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/80">
                  {t('heroAvailability')}
                </p>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-16 lg:mt-24 flex items-center justify-between border-t border-border pt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted hidden sm:block">
            Scroll
          </p>
          <ArrowDown className="h-4 w-4 text-ink-muted animate-bounce" aria-hidden="true" />
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            © 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
