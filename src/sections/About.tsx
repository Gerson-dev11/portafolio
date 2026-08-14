import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  GraduationCap,
  MapPin,
  Zap,
  Briefcase,
  Rocket,
  Cpu,
  Terminal,
  CheckCircle2,
  ShieldCheck,
  Building2,
} from 'lucide-react';

// Métricas clave de rendimiento y arquitectura
const stats = [
  { label: 'Firmado & Transmisión DTE', value: '90ms - 2s', detail: 'Sincronización síncrona en Node.js', icon: Zap },
  { label: 'Reducción Deuda Técnica', value: '-50%', detail: 'Reestructuración a Clean Architecture / MVVM', icon: Cpu },
  { label: 'Rendimiento en Carga', value: '+40%', detail: 'Optimización de consultas SQL y módulos UI', icon: Rocket },
];

const experiences = [
  {
    role: 'Desarrollador Full Stack',
    company: 'Librería Frenzos',
    period: 'Abr 2026 – Jun 2026',
    highlights: [
      'Arquitectura cloud desacoplada desplegada en DigitalOcean.',
      'Firmador DTE autónomo conectado al Ministerio de Hacienda.',
      'Sistema ERP/POS para 3 giros comerciales y exportación fiscal a Excel.',
    ],
    stack: ['Node.js', 'Flutter', 'PostgreSQL', 'DigitalOcean'],
  },
  {
    role: 'Full Stack & Scrum Master',
    company: 'ITCA-FEPADE',
    period: 'Mar 2025 – Ene 2026',
    highlights: [
      'Lideré equipo de desarrollo implementando marco de trabajo Scrum.',
      'Integración de asistentes inteligentes mediante API OpenAI/GPT.',
      'Arquitectura de datos híbrida (Firebase + Supabase + DB Local).',
    ],
    stack: ['Flutter', 'Node.js', 'OpenAI API', 'Docker'],
  },
  {
    role: 'Desarrollador Full Stack',
    company: 'Bazar Sandri',
    period: 'Ene 2026 – Feb 2026',
    highlights: [
      'Automatización del proceso de facturación de 5 minutos a segundos.',
      'Aplicación Flutter Desktop (MVVM) optimizada para punto de venta.',
    ],
    stack: ['Flutter Desktop', 'Node.js', 'MySQL', 'MVVM'],
  },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'exp' | 'edu'>('exp');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 sm:py-24 relative overflow-hidden bg-background/80 backdrop-blur-md border-y border-border/40 z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* ENCABEZADO (Desliza desde arriba) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-primary/20 bg-primary/10 text-primary text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>~/profile/about_me.sys</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
            Arquitectura Backend & <span className="text-primary">Ecosistema Multiplataforma</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
            Ingeniero en Software enfocado en construir servicios web robustos, sistemas con facturación electrónica <strong className="text-foreground">DTE</strong> y software desacoplado de alto rendimiento.
          </p>
        </motion.div>

        {/* BENTO GRID PRINCIPAL */}
        <div className="grid lg:grid-cols-12 gap-5 items-start">
          
          {/* COLUMNA IZQUIERDA: VIENE DE LA IZQUIERDA (x: -40) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 space-y-4"
          >
            {/* TERMINAL BENTO */}
            <Card className="p-5 bg-slate-950/90 border-slate-800 text-slate-200 font-mono text-xs rounded-xl shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-slate-400 ml-2 text-[11px]">gerson@dev-environment:~</span>
                </div>
                <Badge variant="outline" className="border-slate-700 text-slate-400 text-[10px]">
                  CUM: 9.4
                </Badge>
              </div>

              <div className="space-y-3 leading-relaxed">
                <p className="text-emerald-400">
                  <span className="text-slate-500">$</span> cat profile_summary.txt
                </p>
                <p className="text-slate-300 text-[11px]">
                  Especialista en desarrollo backend con <span className="text-blue-400">Node.js</span> y <span className="text-red-400">Laravel</span>. Experiencia implementando firmado digital DTE, transmisión en tiempo real con el Ministerio de Hacienda y arquitecturas distribuidas.
                </p>

                <p className="text-emerald-400 pt-1">
                  <span className="text-slate-500">$</span> list --core-competencies
                </p>
                <div className="grid sm:grid-cols-2 gap-2 text-[11px] text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" /> APIs REST & PostgreSQL (Views)
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" /> Multiplataforma (Flutter / Dart)
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" /> Clean Architecture & MVVM / MVC
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" /> Docker & VPS DigitalOcean
                  </div>
                </div>
              </div>
            </Card>

            {/* GRID DE MÉTRICAS RÁPIDAS (Aparecen con leve escalonamiento) */}
            <div className="grid sm:grid-cols-3 gap-3">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                >
                  <Card className="p-3.5 bg-card/30 border-border/50 backdrop-blur-sm rounded-xl hover:border-primary/40 transition-all flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-muted-foreground uppercase">{stat.label}</span>
                      <stat.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-xl font-black font-mono text-foreground tracking-tight mb-0.5">
                      {stat.value}
                    </div>
                    <p className="text-[10px] text-muted-foreground leading-tight">{stat.detail}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: VIENE DE LA DERECHA (x: 40) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <Card className="p-5 bg-card/30 border-border/50 rounded-xl backdrop-blur-sm flex flex-col justify-between">
              <div>
                {/* Tabs */}
                <div className="flex items-center gap-1 p-1 bg-secondary/40 rounded-lg mb-5 border border-border/40">
                  <button
                    onClick={() => setActiveTab('exp')}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'exp'
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Briefcase className="w-3.5 h-3.5" /> Experiencia
                  </button>
                  <button
                    onClick={() => setActiveTab('edu')}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'edu'
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <GraduationCap className="w-3.5 h-3.5" /> Educación
                  </button>
                </div>

                {/* TAB EXPERIENCIA */}
                {activeTab === 'exp' && (
                  <div className="space-y-4">
                    {experiences.map((exp, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="relative pl-4 border-l border-border/60 hover:border-primary/60 transition-colors"
                      >
                        <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                        <div className="flex items-center justify-between mb-0.5">
                          <h4 className="font-bold text-xs text-foreground">{exp.role}</h4>
                          <span className="text-[9px] font-mono text-muted-foreground">{exp.period}</span>
                        </div>
                        <p className="text-[11px] font-medium text-primary mb-1.5 flex items-center gap-1">
                          <Building2 className="w-3 h-3" /> {exp.company}
                        </p>
                        <ul className="space-y-1 mb-2">
                          {exp.highlights.map((item, i) => (
                            <li key={i} className="text-[11px] text-muted-foreground leading-snug flex items-start gap-1">
                              <span className="text-primary font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1">
                          {exp.stack.map((s, i) => (
                            <span key={i} className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-secondary/50 text-muted-foreground border border-border/30">
                              {s}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* TAB EDUCACIÓN */}
                {activeTab === 'edu' && (
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4 py-1"
                  >
                    <div className="p-3.5 rounded-lg bg-secondary/30 border border-border/40">
                      <div className="flex items-center justify-between mb-1.5">
                        <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[9px] font-mono">
                          Graduado CUM 9.4
                        </Badge>
                        <span className="text-[10px] font-mono text-muted-foreground">2024 - 2025</span>
                      </div>
                      <h4 className="font-bold text-xs text-foreground mb-0.5">
                        Téc. en Ingeniería en Desarrollo de Software
                      </h4>
                      <p className="text-[11px] text-primary font-medium mb-2 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> ITCA-FEPADE, San Miguel
                      </p>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        Especializado en arquitectura de software, desarrollo backend de alto rendimiento, APIs REST y clientes multiplataforma.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/20 flex items-center gap-3">
                      <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                      <div>
                        <h5 className="text-xs font-bold text-foreground">Enfoque de Ingeniería</h5>
                        <p className="text-[10px] text-muted-foreground">
                          Automatización de procesos complejos, optimización SQL y código desacoplado.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* FOOTER */}
              <div className="pt-4 mt-4 border-t border-border/30 flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1.5 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  San Miguel, El Salvador
                </span>
                <span className="font-mono text-[10px]">v2.0.26</span>
              </div>
            </Card>
          </motion.div>

        </div>

      </div>
    </section>
  );
}