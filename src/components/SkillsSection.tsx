import { useTranslation } from '@/hooks/useTranslation';
import { skillCategories } from '@/data/translations';

const SkillsSection = () => {
  const { t, tr } = useTranslation();

  const stats = [
    { value: '6', label: t('statsProjects') },
    { value: '12+', label: t('statsTech') },
    { value: '6+', label: t('statsClients') },
    { value: '3+', label: t('statsYears') },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border">
      <div className="editorial-wide">
        <header className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-6 mb-16 md:mb-24">
          <div className="md:col-span-4">
            <p className="section-eyebrow">{t('eyebrowSkills')}</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="section-title">{t('skillsTitle')}</h2>
            <p className="mt-6 font-serif text-lg md:text-xl text-foreground/75 leading-relaxed max-w-2xl">
              {t('skillsLead')}
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
          {skillCategories.map((cat, idx) => (
            <div key={cat.titleKey} className="border-t border-border pt-6">
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight text-foreground">
                  {t(cat.titleKey)}
                </h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              <ul className="space-y-3">
                {cat.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="font-serif text-[15px] text-foreground/85 leading-snug"
                  >
                    {tr(skill)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 border-t border-border">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-r border-border last:border-r-0 py-8 md:py-10 first:pl-0 px-4 md:px-6"
            >
              <div className="font-display text-4xl md:text-5xl font-medium tracking-tight text-foreground">
                {stat.value}
              </div>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
