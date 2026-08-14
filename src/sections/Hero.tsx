import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FaLaravel, FaFlutter } from "react-icons/fa6";

import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Code2,
  Download,
  MapPin,
  Calendar,
  Terminal,
} from 'lucide-react';

// --- Componentes de Tecnologías usando React Icons ---
const FlutterIcon = () => (
  <FaFlutter className="w-5 h-5 text-[#02569B]" />
);

const LaravelIcon = () => (
  <FaLaravel className="w-5 h-5 text-[#FF2D20]" />
);

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 pb-16"
    >
      {/* CAPA 0: Fondo con cuadrícula */}
      <div 
        className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />

      {/* Glow de fondo */}
      <div
        className="fixed top-1/3 right-1/4 w-[450px] h-[450px] bg-primary/20 blur-[130px] rounded-full pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* CAPA 1: Columna de Texto con Animación de Entrada General */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
            style={{ transform: `translateY(${scrollY * 0.35}px)` }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Disponible para nuevos proyectos
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 leading-none">
              Gerson Franco
              <span className="block text-2xl sm:text-3xl font-semibold text-muted-foreground mt-3">
                Fullstack Developer & <span className="text-primary">QA Mindset</span>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl">
              Desarrollo de software enfocado en Flutter y Laravel. Apasionado por encontrar solución a bugs y liderar la calidad bajo metodologías Scrum.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary/70 text-xs font-medium border border-border/50">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                San Miguel, El Salvador
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary/70 text-xs font-medium border border-border/50">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                19 años
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary/70 text-xs font-medium border border-border/50">
                <Terminal className="w-3.5 h-3.5 text-primary" />
                Scrum Master Experience
              </span>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 shadow-md shadow-primary/20 transition-all hover:scale-[1.02]"
              >
                <Code2 className="w-4 h-4 mr-2" />
                Ver Proyectos
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-xl border-border hover:bg-secondary/80 font-medium px-6"
              >
                <a href="/Gerson-CV.pdf" download="CV-Gerson-Franco.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar CV
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-border/40 w-full">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-2">Redes:</span>
              {[
                { icon: Github, href: "https://github.com/Gerson-dev11" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/gerson-dev/" },
                { icon: Mail, href: "mailto:gamewil50@gmail.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all hover:-translate-y-0.5"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Columna Derecha */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-[460px] flex items-end justify-center">
              
              {/* CAPA 2: Tarjeta del fondo (Aparece temprano) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="absolute inset-x-4 bottom-0 h-[360px] rounded-3xl bg-gradient-to-b from-card/80 to-card border border-border/80 shadow-2xl backdrop-blur-md overflow-hidden"
                style={{ transform: `translateY(${scrollY * 0.25}px)` }}
              >
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                
                <div className="absolute top-12 left-5 right-5 bottom-0 bg-background/30 rounded-t-xl border-t border-x border-border/40 p-4 font-mono text-[11px] text-muted-foreground/60 select-none">
                  <p><span className="text-primary">const</span> dev = &#123;</p>
                  <p className="pl-4">name: <span className="text-emerald-400">'Gerson'</span>,</p>
                  <p className="pl-4">role: <span className="text-emerald-400">'Fullstack'</span>,</p>
                  <p className="pl-4">status: <span className="text-emerald-400">'Building...'</span></p>
                  <p>&#125;;</p>
                </div>
              </motion.div>

              {/* CAPA 3: Foto de Perfil (Con RETARDO y animación desde abajo) */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="relative z-10 w-full h-[420px] flex justify-center items-end pointer-events-none"
                style={{ transform: `translateY(${scrollY * 0.45}px)` }}
              >
                <img
                  src="gerson.jpg"
                  alt="Gerson Franco"
                  className="h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)]"
                />
              </motion.div>

              {/* CAPA 4: Floating Badges con Animación de rebote suave al final */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="absolute top-12 -left-2 z-20 p-3 rounded-2xl bg-card/90 border border-border shadow-xl backdrop-blur-md flex items-center gap-3"
                style={{ transform: `translateY(${scrollY * 0.6}px)` }}
              >
                <div className="p-2 rounded-xl bg-[#02569B]/10">
                  <FlutterIcon />
                </div>
                <div>
                  <p className="text-xs font-bold">Flutter Dev</p>
                  <p className="text-[10px] text-muted-foreground">Mobile & Desktop</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 1.1 }}
                className="absolute bottom-16 -right-2 z-20 p-3 rounded-2xl bg-card/90 border border-border shadow-xl backdrop-blur-md flex items-center gap-3"
                style={{ transform: `translateY(${scrollY * 0.55}px)` }}
              >
                <div className="p-2 rounded-xl bg-[#FF2D20]/10">
                  <LaravelIcon />
                </div>
                <div>
                  <p className="text-xs font-bold">Laravel</p>
                  <p className="text-[10px] text-muted-foreground">Backend API</p>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
        style={{ transform: `translate(-50%, ${scrollY * 0.8}px)` }}
      >
        <button
          onClick={() => scrollToSection('#about')}
          aria-label="Scroll down"
          className="p-2 rounded-full border border-border bg-card/40 backdrop-blur-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}