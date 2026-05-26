import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from '@/hooks/useTranslation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('skills'), href: '#skills' },
    { name: t('experience'), href: '#experience' },
    { name: t('projects'), href: '#projects' },
    { name: t('education'), href: '#education' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="editorial-wide flex h-16 items-center justify-between">
        <a
          href="#hero"
          className="font-display text-2xl font-semibold tracking-tight text-foreground"
          aria-label="Grace Félix BADJALIMBE — Accueil"
        >
          Grace<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/60 transition-colors hover:text-foreground"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((v) => !v)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-foreground"
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="editorial-wide py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/70 hover:text-foreground"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
