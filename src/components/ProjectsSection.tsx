
import { useEffect, useRef } from 'react';
import { ExternalLink, Github, Globe, Calendar, Users, Code, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "ANGE-TOGO",
      subtitle: "Agence Nationale de Gestion de l'Environnement",
      description: "Site web officiel de l'ANGE-TOGO développé dans le cadre du colloque de digitalisation des certificats de conformité environnementale.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      features: [
        "Système de certificats numériques",
        "Interface d'administration",
        "Authentification sécurisée",
        "Tableau de bord analytique"
      ],
      link: "https://ange.tg/",
      category: "Site Institutionnel",
      status: "En production",
      year: "2023-2024",
      team: "Équipe NEO START TECHNOLOGY"
    },
    {
      title: "Plateforme IAI-TOGO",
      subtitle: "Institut Africain d'Informatique - Togo",
      description: "Portail académique complet pour la gestion des étudiants, candidatures, emplois du temps et évaluations de l'IAI-TOGO.",
      image: "/lovable-uploads/fc70df0e-485a-4cb0-bb4c-fd35208186cf.png",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
      features: [
        "Gestion des candidatures en ligne",
        "Système d'emploi du temps dynamique",
        "Gestion des notes et évaluations",
        "Portail étudiant personnalisé",
        "Anonymat des évaluations"
      ],
      link: "https://new.iai-togo.tg/officiel",
      category: "Plateforme Éducative",
      status: "En production",
      year: "2023-2024",
      team: "Développement Full Stack"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.remove('opacity-0', 'translate-y-16');
                card.classList.add('opacity-100', 'translate-y-0');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
      
      <div ref={sectionRef} className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Projets Réalisés</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Découvrez mes projets récents où j'ai pu mettre en pratique mes compétences 
            en développement web et gestion de projet IT.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card opacity-0 transform translate-y-16 transition-all duration-500 ease-out"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden h-full flex flex-col hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                {/* Project Header */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)] opacity-20"></div>
                  {project.title === "Plateforme IAI-TOGO" ? (
                    <img 
                      src={project.image} 
                      alt="IAI-TOGO Platform" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Globe className="w-16 h-16 text-primary animate-pulse" />
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  {/* Project Info */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm border border-border">
                        {project.category}
                      </span>
                      <div className="flex items-center text-foreground/60 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.year}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gradient mb-2">
                      {project.title}
                    </h3>
                    
                    <h4 className="text-lg text-primary mb-4">
                      {project.subtitle}
                    </h4>
                    
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <Code className="w-4 h-4 mr-2 text-primary" />
                      <span className="font-semibold">Technologies utilisées</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-secondary/50 text-foreground/90 rounded-full text-sm border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8 flex-1">
                    <div className="flex items-center mb-3">
                      <Award className="w-4 h-4 mr-2 text-primary" />
                      <span className="font-semibold">Fonctionnalités clés</span>
                    </div>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-foreground/80 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Team Info */}
                  <div className="flex items-center mb-6 text-foreground/60">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.team}</span>
                  </div>

                  {/* Action Button */}
                  <div className="mt-auto">
                    <Button 
                      asChild
                      className="w-full border border-primary/30 hover:bg-primary/10 group bg-transparent"
                      variant="outline"
                    >
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Globe className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                        Visiter le site
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-card/50 backdrop-blur-sm border border-border p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Collaboration & Partenariats
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Ces projets ont été réalisés en collaboration avec <strong>ATD TOGO</strong> et 
              <strong> SWITCH Maker</strong> dans le cadre du programme Schéma Directeur Départemental. 
              Ils témoignent de mon expertise en développement full stack et en gestion de projets IT complexes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
