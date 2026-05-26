import { useTranslation } from '@/hooks/useTranslation';
import { experiences } from '@/data/translations';

const ExperienceSection = () => {
  const { t, tr } = useTranslation();

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border">
      <div className="editorial-wide">
        <header className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-6 mb-16 md:mb-24">
          <div className="md:col-span-4">
            <p className="section-eyebrow">{t('eyebrowExperience')}</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="section-title">{t('experienceTitle')}</h2>
            <p className="mt-6 font-serif text-lg md:text-xl text-foreground/75 leading-relaxed max-w-2xl">
              {t('experienceLead')}
            </p>
          </div>
        </header>

        <ol className="border-t border-border">
          {experiences.map((exp, idx) => (
            <li
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-6 py-10 md:py-14 border-b border-border"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                  {tr(exp.period)}
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70">
                  {exp.company}
                </p>
                <p className="mt-1 font-serif text-sm italic text-ink-muted">
                  {tr(exp.location)}
                </p>
              </div>

              <div className="md:col-span-9">
                <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-foreground leading-tight">
                  {tr(exp.title)}
                </h3>
                <p className="mt-4 font-serif text-base md:text-lg text-foreground/80 leading-relaxed max-w-3xl">
                  {tr(exp.description)}
                </p>

                <div className="mt-8 space-y-8">
                  {exp.projects.map((project, pIdx) => (
                    <article key={pIdx}>
                      <div className="flex items-baseline gap-3 mb-3">
                        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                          {t('keyDeliverables')} ·{' '}
                          {String(pIdx + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h4 className="font-display text-lg md:text-xl font-medium tracking-tight text-foreground">
                        {tr(project.name)}
                      </h4>
                      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                        {project.achievements.map((a, i) => (
                          <li
                            key={i}
                            className="font-serif text-[15px] text-foreground/80 leading-snug pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-px before:bg-accent"
                          >
                            {tr(a)}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
