import { useTranslation } from '@/hooks/useTranslation';
import { education } from '@/data/translations';

const EducationSection = () => {
  const { t, tr } = useTranslation();

  const languages = [
    { name: t('french'), level: t('languageNative'), proficiency: 100 },
    { name: t('english'), level: t('languageIntermediate'), proficiency: 60 },
  ];

  return (
    <section id="education" className="py-24 md:py-32 border-t border-border">
      <div className="editorial-wide">
        <header className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-6 mb-16 md:mb-24">
          <div className="md:col-span-4">
            <p className="section-eyebrow">{t('eyebrowEducation')}</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="section-title">{t('educationTitle')}</h2>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-16">
          <div className="lg:col-span-7">
            <p className="section-eyebrow mb-8">— {t('education')}</p>
            <ol className="border-t border-border">
              {education.map((edu, idx) => (
                <li
                  key={idx}
                  className="grid grid-cols-12 gap-x-6 py-8 border-b border-border"
                >
                  <div className="col-span-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                      {edu.period}
                    </p>
                  </div>
                  <div className="col-span-8">
                    <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight text-foreground">
                      {tr(edu.degree)}
                    </h3>
                    <p className="mt-2 font-serif text-base italic text-foreground/70">
                      {edu.institution}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-border">
            <p className="section-eyebrow mb-8">— {t('languagesTitle')}</p>
            <ul className="space-y-8 border-t border-border pt-8">
              {languages.map((lang) => (
                <li key={lang.name}>
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="font-display text-xl font-medium tracking-tight">
                      {lang.name}
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                      {lang.level}
                    </span>
                  </div>
                  <div
                    className="h-px w-full bg-border relative"
                    role="progressbar"
                    aria-valuenow={lang.proficiency}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={lang.name}
                  >
                    <div
                      className="absolute inset-y-0 left-0 bg-accent transition-all duration-700"
                      style={{ width: `${lang.proficiency}%`, height: '2px', top: '-0.5px' }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
