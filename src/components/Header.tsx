
import { useState, useEffect } from 'react';
import { Menu, X, User, Code, Briefcase, Mail, FolderOpen, GraduationCap } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from '@/hooks/useTranslation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('home'), href: '#hero', icon: User },
    { name: t('skills'), href: '#skills', icon: Code },
    { name: t('experience'), href: '#experience', icon: Briefcase },
    { name: t('projects'), href: '#projects', icon: FolderOpen },
    { name: t('education'), href: '#education', icon: GraduationCap },
    { name: t('contact'), href: '#contact', icon: Mail },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-orbitron font-bold text-gradient">
            GFB
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-foreground/70 hover:text-primary transition-colors duration-300 group"
              >
                <item.icon className="w-4 h-4 group-hover:animate-pulse" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Theme and Language Controls */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-card/90 backdrop-blur-lg rounded-lg border border-border">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 py-3 text-foreground/70 hover:text-primary transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </a>
            ))}
            
            {/* Mobile Theme and Language Controls */}
            <div className="flex items-center space-x-3 pt-4 mt-4 border-t border-border">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
