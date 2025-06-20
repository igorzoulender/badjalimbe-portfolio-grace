
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 border-t border-border py-12 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="lg"
            className="cyber-border hover:bg-primary/10"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
          
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold text-gradient mb-2">
              Grace Félix BADJALIMBE
            </div>
            <p className="text-foreground/70">
              Ingénieur Informatique | Analyste Programmeur
            </p>
          </div>
          
          <div className="text-sm text-foreground/50">
            © 2024 Grace Félix BADJALIMBE. Tous droits réservés.
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
