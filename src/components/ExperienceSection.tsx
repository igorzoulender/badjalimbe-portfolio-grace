import { useEffect, useRef } from "react";
import { Calendar, MapPin, Building, CheckCircle } from "lucide-react";

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: "Développeur Full Stack Web",
      company: "Freelance",
      period: "2025",
      location: "Maleek - Gold",
      description: "Dévéloppement du site web de Maleek - Gold",
      projects: [
        {
          name: "Plateforme d’intermédiation pour l’achat d’or au Burkina Faso",
          achievements: [
            "Navigation claire et structurée",
            "Présentation des services",
            "Preuves de légitimité et confiance",
            "Appels à l’action (CTA)",
            "Optimisation du contenu pour le SEO",
          ],
        },
      ],
    },
    {
      title: "Développeur Full Stack Web & Responsable du Pilotage de Projets",
      company: "NEO START TECHNOLOGY",
      period: "2023 - Juin 2025",
      location: "Programme Schéma Directeur Départemental",
      description: "Pilotage et développement de projets stratégiques",
      projects: [
        {
          name: " Système informatisé de gestion du covoiturage - Église Impact Centre Chrétien (ICC)",
          achievements: [
            "Gestion complète des évènements et des activités",
            "Gestion des familles d'impacts et des départements",
            // "Génération de bulletins de paie avec QR code d'authentification",
            "Système de demande et validation des inscriptions",
            "Tableaux de bord et reporting analytique",
          ],
        },
        {
          name: "Système informatisé de ressources humaines - PHARMACOL",
          achievements: [
            "Gestion complète du personnel avec historique depuis l'embauche",
            "Calcul automatique des salaires et prélèvement IRPP",
            "Génération de bulletins de paie avec QR code d'authentification",
            "Système de demande et validation de congés",
            "Tableaux de bord et reporting analytique",
          ],
        },
        {
          name: "Site web ANGE-TOGO",
          achievements: [
            "Développement du site de l'Agence Nationale de Gestion de l'environnement",
            "Participation au colloque de digitalisation des certificats de conformité",
            "Collaboration avec ATD TOGO et SWITCH Maker",
            "Tableaux de bord et reporting analytique",
          ],
        },
        {
          name: "Plateforme académique IAI-TOGO",
          achievements: [
            "Portail de gestion académique complet",
            "Gestion des candidatures en ligne",
            "Système d'emploi du temps et gestion des notes",
            "Gestion de l'anonymat des évaluations",
            "Tableaux de bord et reporting analytique",
          ],
        },
      ],
    },
    {
      title: "Stagiaire Génie Logiciel",
      company: "PORT AUTONOME DE LOMÉ",
      period: "2022",
      location: "Centre Médicosocial",
      description: "Digitalisation des activités médicales",
      projects: [
        {
          name: "Système de gestion médicale",
          achievements: [
            "Gestion complète des données patients",
            "Système de rendez-vous avec notifications",
            "Traçabilité des diagnostics et traitements",
            "Génération de rapports médicaux complets",
            "Gestion des analyses médicales",
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".experience-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-slide-up");
              }, index * 300);
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
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 to-green-500/5"></div>

      <div ref={sectionRef} className="container mx-auto px-6 relative z-10">
        <h2 className="section-title text-center">
          Expérience Professionnelle
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card mb-12 last:mb-0">
              <div className="cyber-border p-8 rounded-lg">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gradient mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-primary mb-2">
                      <Building className="w-5 h-5 mr-2" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-foreground/70 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center text-foreground/70">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-foreground/80 mb-6 text-lg">
                  {exp.description}
                </p>

                <div className="space-y-6">
                  {exp.projects.map((project, projectIndex) => (
                    <div
                      key={projectIndex}
                      className="border-l-2 border-primary/30 pl-6"
                    >
                      <h4 className="text-xl font-semibold text-primary mb-4">
                        {project.name}
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {project.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/80 text-sm leading-relaxed">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
