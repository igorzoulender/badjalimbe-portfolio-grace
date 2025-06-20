
import { useEffect, useRef } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    // GSAP animations will be added here
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-30"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-20 w-12 h-12 bg-green-500/20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div
        ref={heroRef}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <div ref={textRef} className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 text-gradient">
            Grace Félix
            <span className="block">BADJALIMBE</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-light mb-8 text-foreground/80">
            {t('jobTitle')}
          </h2>

          <p className="text-xl md:text-2xl mb-12 text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            {t('specialization')}{" "}
            <span className="text-primary font-semibold">
              {t('projectManagement')}
            </span>
            ,
            <span className="text-purple-400 font-semibold">
              {" "}
              {t('softwareEngineering')}
            </span>{" "}
            et
            <span className="text-green-400 font-semibold">
              {" "}
              {t('webDevelopment')}
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex space-x-4">
              <a href="https://github.com/igorzoulender" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="cyber-border hover:bg-primary/10"
                >
                  <Github className="w-5 h-5" />
                </Button>
              </a>

              <a href="mailto:gracefelix.b@gmail.com">
                <Button
                  variant="outline"
                  size="lg"
                  className="cyber-border hover:bg-primary/10"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 mx-auto text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
