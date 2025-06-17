
import { useEffect, useRef } from 'react';
import { GraduationCap, Award, Globe } from 'lucide-react';

const EducationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const education = [
    {
      degree: "Licence en Génie Logiciel",
      institution: "Institut Africain d'Informatique-TOGO",
      period: "2019 - 2022",
      icon: GraduationCap
    },
    {
      degree: "Baccalauréat",
      institution: "Lycée René Martine (RM)",
      period: "2016 - 2019",
      icon: Award
    }
  ];

  const languages = [
    { name: "Français", level: "Langue officielle", proficiency: 100 },
    { name: "Anglais", level: "Moyen", proficiency: 60 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in-element');
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('animate-slide-up');
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
    <section ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education */}
          <div className="fade-in-element">
            <h2 className="text-3xl font-bold text-gradient mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 mr-3" />
              Formation
            </h2>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="cyber-border p-6 rounded-lg hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <edu.icon className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-foreground/70">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="fade-in-element">
            <h2 className="text-3xl font-bold text-gradient mb-8 flex items-center">
              <Globe className="w-8 h-8 mr-3" />
              Langues
            </h2>
            
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={index} className="cyber-border p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {lang.name}
                    </h3>
                    <span className="text-primary font-medium">
                      {lang.level}
                    </span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${lang.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
