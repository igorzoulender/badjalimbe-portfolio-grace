
import { useEffect, useRef } from 'react';
import { Code, Database, Globe, Settings, Users, Zap } from 'lucide-react';

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Gestion de Projet (IT)",
      icon: Settings,
      color: "text-blue-400",
      skills: [
        "Méthodologies AGILE",
        "MS Project, Project Monitor",
        "Planification de projets",
        "Suivi et évaluation",
        "Cartographie des échéances",
        "Évaluation des risques",
        "Gestion du budget",
        "Communication parties prenantes"
      ]
    },
    {
      title: "Génie Logiciel",
      icon: Code,
      color: "text-purple-400",
      skills: [
        "PHP",
        "React",
        "Nuxt.js",
        "Architecture logiciel",
        "Développement d'API",
        "Test et Débogage",
        "Intégration continue"
      ]
    },
    {
      title: "Développement Web",
      icon: Globe,
      color: "text-green-400",
      skills: [
        "Laravel Framework",
        "JavaScript",
        "Tailwind CSS",
        "Nuxt.js",
        "Hébergement Web",
        "Maintenance de sites",
        "Responsive Design"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.skill-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-up');
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
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5"></div>
      
      <div ref={sectionRef} className="container mx-auto px-6 relative z-10">
        <h2 className="section-title text-center">Compétences</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-card cyber-border p-6 rounded-lg hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <category.icon className={`w-8 h-8 ${category.color} mr-3`} />
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-tag group cursor-pointer"
                  >
                    <span className="group-hover:animate-pulse">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Projets Réalisés", value: "15+", icon: Zap },
            { label: "Technologies", value: "10+", icon: Code },
            { label: "Clients Satisfaits", value: "8+", icon: Users },
            { label: "Années d'Expérience", value: "3+", icon: Database }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 cyber-border rounded-lg">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
