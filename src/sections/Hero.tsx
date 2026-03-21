
import React from 'react';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Code2,
  Sparkles,
  Download,
  MapPin,
  Calendar,
} from 'lucide-react';

// --- Iconos Mejorados con Gradientes y Sombras ---


const FlutterIcon = () => (
  <img
    src="flutter.png"
    alt="Flutter Logo"
    className="w-8 h-7 object-contain drop-shadow-md rounded-sm"
  />
);

const LaravelIcon = () => (
  <img
    src="laravel.png"
    alt="Flutter Logo"
    className="w-8 h-8 object-contain drop-shadow-md rounded-sm"
  />
);

const PHPIcon = () => (
  <img
    src="postgrest.png"
    alt="Flutter Logo"
    className="w-8 h-8 object-contain drop-shadow-md rounded-sm"
  />
);

const NodeIcon = () => (
  <img
    src="node.png"
    alt="Flutter Logo"
    className="w-8 h-8 object-contain drop-shadow-md rounded-sm"
  />
);

const ReactIcon = () => (
  <img
    src="postman.png"
    alt="Flutter Logo"
    className="w-8 h-8 object-contain drop-shadow-md rounded-sm"
  />
);

const JSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
    <path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
  </svg>
);

const DartIcon = () => (
  <img
    src="dart.png"
    alt="Flutter Logo"
    className="w-8 h-8 object-contain drop-shadow-md rounded-sm"
  />
);

const JavaIcon = () => (

  <img
    src="java.png"
    alt="Flutter Logo"
    className="w-9 h-9 object-contain drop-shadow-md rounded-sm"
  />
);

const techStack = [
  { name: 'Flutter', icon: FlutterIcon, color: '#02569B', glow: 'group-hover:shadow-[0_0_15px_rgba(2,86,155,0.4)]' },
  { name: 'Dart', icon: DartIcon, color: '#0175C2', glow: 'group-hover:shadow-[0_0_15px_rgba(1,117,194,0.4)]' },
  { name: 'Laravel', icon: LaravelIcon, color: '#FF2D20', glow: 'group-hover:shadow-[0_0_15px_rgba(255,45,32,0.4)]' },
  { name: 'Java', icon: JavaIcon, color: '#007396', glow: 'group-hover:shadow-[0_0_15px_rgba(0,115,150,0.4)]' },
  { name: 'PostgreSQL', icon: PHPIcon, color: '#336791', glow: 'group-hover:shadow-[0_0_15px_rgba(51,103,145,0.4)]' },
  { name: 'Node.js', icon: NodeIcon, color: '#E34F26', glow: 'group-hover:shadow-[0_0_15px_rgba(227,79,38,0.4)]' },
  { name: 'React', icon: ReactIcon, color: '#1572B6', glow: 'group-hover:shadow-[0_0_15px_rgba(21,114,182,0.4)]' },
  { name: 'JavaScript', icon: JSIcon, color: '#F7DF1E', glow: 'group-hover:shadow-[0_0_15px_rgba(247,223,30,0.4)]' },
];

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
    }> = [];

    const colors = ['#3B82F6', '#60A5FA', '#93C5FD', '#1E40AF', '#2563EB'];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1,
        alpha: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.alpha;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - distance / 180)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', resizeCanvas);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-50"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

      {/* Floating Code Elements */}
      <div className="absolute top-20 left-10 text-primary/10 text-6xl font-mono animate-float hidden lg:block">
        {'</>'}
      </div>
      <div className="absolute bottom-32 right-16 text-primary/10 text-4xl font-mono animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
        {'{ }'}
      </div>
      <div className="absolute top-1/3 right-20 text-primary/5 text-5xl font-mono animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
        {'[]'}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 animate-slide-up"
              style={{ animationDelay: '0.1s' }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Disponible para proyectos
            </Badge>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="text-foreground">Hola, soy </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Gerson</span>
            </h1>

            <p
              className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 animate-slide-up"
              style={{ animationDelay: '0.3s' }}
            >
              Desarrollador <span className="text-primary font-semibold italic">Fullstack</span>
            </p>

            <p
              className="max-w-xl text-base sm:text-lg text-muted-foreground/80 mb-6 animate-slide-up leading-relaxed"
              style={{ animationDelay: '0.4s' }}
            >
              Enfocado en testear código hasta encontrar y solucionar todos los bugs.
              Experiencia como Scrum Master asignando tareas y garantizando la calidad del software.
            </p>

            {/* Location & Age */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-slide-up"
              style={{ animationDelay: '0.5s' }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-sm font-medium text-muted-foreground border border-border/40 backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-primary" />
                San Miguel, El Salvador
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-sm font-medium text-muted-foreground border border-border/40 backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-primary" />
                19 años
              </span>
            </div>

            {/* Tech Stack con Iconos Mejorados */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 animate-slide-up"
              style={{ animationDelay: '0.6s' }}
            >
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-card border border-border/50 transition-all duration-300 cursor-default hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-1 ${tech.glow}`}
                  title={tech.name}
                >
                  <tech.icon />
                  <span className="text-sm font-semibold opacity-80 group-hover:opacity-100 hidden sm:inline">{tech.name}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 mb-10 animate-slide-up"
              style={{ animationDelay: '0.7s' }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
              >
                <Code2 className="w-5 h-5 mr-2" />
                Ver proyectos
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="rounded-full border-border hover:bg-secondary backdrop-blur-md px-8"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contactar
              </Button>
            </div>

            {/* Social Links */}
            <div
              className="flex items-center gap-4 animate-slide-up"
              style={{ animationDelay: '0.8s' }}
            >
              {[
                { icon: Github, href: "https://github.com/Gerso1212121" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/gerson-franco-854390356/" },
                { icon: Mail, href: "mailto:gamewil50@gmail.com" },
                {
                  icon: Download,
                  href: "/cv-Gerso.pdf", // Debe coincidir con el archivo real
                  download: "CV-Gerson-Franco.pdf" // Nombre con el que se descarga (limpio)
                }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-110 border border-border/40"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Photo Section */}
          <div
            className="flex justify-center lg:justify-end order-1 lg:order-2 animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/30 rounded-[3rem] blur-[100px] scale-110 animate-pulse" />

              {/* Photo Container */}
              <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem] rounded-[2.5rem] overflow-hidden border-2 border-primary/20 shadow-2xl backdrop-blur-sm">
                <img
                  src="gerson.jpg"
                  alt="Gerson Wilfredo Franco Gámez"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700 ease-in-out"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                {/* Info Card Badge */}
                <div className="absolute bottom-3 left-7 right-7">
                  <div className="px-4 py-4 rounded-2xl bg-background/40 backdrop-blur-2xl border border-white/10 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/40">
                        <Code2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold tracking-tight">Fullstack Developer</p>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Ing de Software</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons en la Foto */}
              <div className="absolute -top-1 -right-2 w-16 h-16 rounded-2xl bg-background/80 backdrop-blur-md border border-border shadow-2xl flex items-center justify-center animate-float group hover:border-primary/50 transition-colors">
                <FlutterIcon />
              </div>
              <div className="absolute bottom-1/4 -left-8 w-16 h-16 rounded-2xl bg-background/80 backdrop-blur-md border border-border shadow-2xl flex items-center justify-center animate-float group hover:border-primary/50 transition-colors" style={{ animationDelay: '1.2s' }}>
                <DartIcon />
              </div>
              <div className="absolute top-1/2 -right-8 w-14 h-14 rounded-2xl bg-background/80 backdrop-blur-md border border-border shadow-2xl flex items-center justify-center animate-float group hover:border-primary/50 transition-colors" style={{ animationDelay: '0.7s' }}>
                <LaravelIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-0 left-1/1 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('#about')}
          className="w-12 h-12 rounded-full bg-card border border-border/80 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-lg"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}