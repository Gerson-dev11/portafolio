import { Code2, Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Gerson-dev11', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/gerson-dev/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:gamewil50@gmail.com', label: 'Email' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-border/40 bg-background/50 backdrop-blur-sm relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Contenedor Superior: Brand / Redes / Arriba */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/30">
          
          {/* Logo & Marca */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="font-bold tracking-tight text-lg">
              GERSON<span className="text-primary">.DEV</span>
            </span>
          </div>

          {/* Social Links Estilo Cápsula */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-secondary/30 border border-border/40">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-background transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Botón Volver Arriba */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors group"
          >
            <span>[VOLVER_ARRIBA]</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>

        </div>

        {/* Contenedor Inferior: Copyright & Location */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Gerson Wilfredo Franco.</p>
          <p className="flex items-center gap-1.5 font-mono text-[11px]">
            Full Stack & Mobile
            <Heart className="w-3 h-3 text-red-500 fill-red-500/80" />
            San Miguel, ES
          </p>
        </div>
      </div>
    </footer>
  );
}