import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { projects } from '@/data/translations';

const ProjectsSection = () => {
  const { t, tr } = useTranslation();

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-border">
      <div className="editorial-wide">
        <header className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-6 mb-16 md:mb-24">
          <div className="md:col-span-4">
            <p className="section-eyebrow">{t('eyebrowProjects')}</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="section-title">{t('projectsTitle')}</h2>
            <p className="mt-6 font-serif text-lg md:text-xl text-foreground/75 leading-relaxed max-w-2xl">
              {t('projectsLead')}
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 md:gap-y-24">
          {projects.map((project, idx) => (
            <article key={project.title} className="group flex flex-col">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden bg-muted aspect-[4/3] border border-border"
                aria-label={`${project.title} — ${tr(project.subtitle)}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </a>

              <div className="mt-6 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                <span>
                  N° {String(idx + 1).padStart(2, '0')} · {tr(project.category)}
                </span>
                <span>{project.year}</span>
              </div>

              <h3 className="mt-4 font-display text-2xl md:text-3xl font-medium tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 font-serif text-base italic text-foreground/70">
                {tr(project.subtitle)}
              </p>
              <p className="mt-4 font-serif text-[15px] md:text-base text-foreground/80 leading-relaxed">
                {tr(project.description)}
              </p>

              <div className="mt-6">
                <p className="section-eyebrow mb-3">{t('techStack')}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="section-eyebrow mb-3">{t('features')}</p>
                <ul className="space-y-1.5">
                  {project.features.map((f, i) => (
                    <li
                      key={i}
                      className="font-serif text-[15px] text-foreground/80 leading-snug pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-px before:bg-accent"
                    >
                      {tr(f)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                  {tr(project.team)}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-mono text-[11px] uppercase tracking-[0.18em] inline-flex items-center gap-1.5"
                >
                  {t('visitSite')}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
