import { Code2, Heart, ArrowUp, Github, Linkedin, Instagram, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/GersonWil', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/gerson-franco', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/gerson.franco', label: 'Instagram' },
  { icon: Mail, href: 'mailto:gamewil50@gmail.com', label: 'Email' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border/40 relative overflow-hidden bg-background">
      {/* Glow sutil de fondo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-24 bg-primary/5 blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="flex flex-col items-center gap-8">
          
          {/* Brand Logo Simple */}
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="text-center">
              <span className="font-black text-xl tracking-tighter italic">
                GERSON<span className="text-primary NOT-italic">.DEV</span>
              </span>
            </div>
          </div>

          {/* Social Icons Refinados */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Divider Minimalista */}
          <div className="w-24 h-px bg-primary/20" />

          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 pt-4">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
                © {new Date().getFullYear()} Gerson Wilfredo Franco.
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 flex items-center gap-1">
                Full Stack & Mobile <Heart className="w-3 h-3 text-red-500/60 fill-red-500/40 animate-pulse" /> San Miguel, ES
              </p>
            </div>

            {/* Back to Top - Diseño más compacto */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm active:scale-95"
            >
              <span className="text-xs font-bold uppercase tracking-widest">Arriba</span>
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}