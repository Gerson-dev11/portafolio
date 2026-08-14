import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FaDocker, FaLaravel, FaFlutter, FaDartLang, FaDigitalOcean, FaGitAlt } from "react-icons/fa6";
import { SiPostman, SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNodejsLine, RiSupabaseLine } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

import {
  Smartphone,
  Code2,
  Server,
  Cloud,
  Database,
  Terminal,
  Activity,
  Boxes,
  ShieldCheck,
  Workflow,
  Clock,
  Gauge,
  CheckCircle,
  Zap,
} from 'lucide-react';

// Mapeo de Iconos
const TechIcons: Record<string, () => React.ReactElement> = {
  Flutter: () => <FaFlutter className='w-5 h-5 text-[#0075d5]' />,
  Dart: () => <FaDartLang className='w-5 h-5 text-[#0075d5]' />,
  Laravel: () => <FaLaravel className='w-5 h-5 text-[#ff634b]' />,
  'Node.js': () => <RiNodejsLine className='w-5 h-5 text-[#73d12b]' />,
  PostgreSQL: () => <BiLogoPostgresql className='w-5 h-5 text-[#728dd2]' />,
  MySQL: () => <SiMysql className="w-5 h-5 text-[#728dd2]" />,
  Postman: () => <SiPostman className="w-5 h-4 text-[#EF5B25]" />,
  Docker: () => <FaDocker className="w-5 h-5 text-[#2496ED]" />,
  Git: () => <FaGitAlt className='w-5 h-5 text-[#F1502F]' />,
  DigitalOcean: () => <FaDigitalOcean className='w-5 h-5 text-[#0075d5]' />,
  Supabase: () => <RiSupabaseLine className='w-5 h-5 text-[#3ECF8E]' />,
  Firebase: () => <IoLogoFirebase className='w-5 h-5 text-[#FFC400]' />,
};

interface SkillItem {
  name: string;
  category: 'backend' | 'mobile' | 'cloud' | 'db';
  role: string;
  architecture?: string;
  tags: string[];
}

const skillsMatrix: SkillItem[] = [
  { 
    name: 'Node.js', 
    category: 'backend', 
    role: 'APIs REST & Facturación Hacienda', 
    architecture: 'MVC',
    tags: ['Nodemailer', 'PDFKit', 'Schedules', 'DTE Hacienda'] 
  },
  { 
    name: 'Laravel', 
    category: 'backend', 
    role: 'APIs REST & Módulos de Seguridad', 
    architecture: 'Clean Arch / MVC',
    tags: ['Sanctum', 'Auth Security', 'API Endpoints', 'Docker Env'] 
  },
  { 
    name: 'Flutter', 
    category: 'mobile', 
    role: 'Diseño UI Multiplataforma & Layouts', 
    architecture: 'MVVM',
    tags: ['Custom UI', 'Cards & Feeds', 'Chat Interfaces', 'Desktop & Mobile'] 
  },
  { 
    name: 'Dart', 
    category: 'mobile', 
    role: 'Lógica de Negocio & Programación Reactiva', 
    architecture: 'Clean Architecture',
    tags: ['POO', 'State Management', 'Clean Code', 'Desacoplado'] 
  },
  { 
    name: 'PostgreSQL', 
    category: 'db', 
    role: 'Modelado Relacional Avanzado', 
    tags: ['Vistas (Views)', 'Consultas Complejas', 'Triggers', 'Creación DDL'] 
  },
  { 
    name: 'MySQL', 
    category: 'db', 
    role: 'Gestión de Bases de Datos POS / ERP', 
    tags: ['Consultas SQL', 'Optimización', 'Relaciones', 'Integración API'] 
  },
  { 
    name: 'DigitalOcean', 
    category: 'cloud', 
    role: 'Infraestructura Cloud & Despliegue', 
    tags: ['VPS Droplets', 'Deploy Prod', 'Nginx Config', 'Hosting'] 
  },
  { 
    name: 'Docker', 
    category: 'cloud', 
    role: 'Contenedores y Entornos de Dev', 
    tags: ['Manejo de Imágenes', 'Laravel Docker', 'Entornos Aislados'] 
  },
  { 
    name: 'Git', 
    category: 'cloud', 
    role: 'Control de Versiones & Trabajo en Equipo', 
    tags: ['GitFlow', 'Manejo de Ramas', 'Commits Estructurados'] 
  },
  { 
    name: 'Postman', 
    category: 'backend', 
    role: 'Pruebas de Integración y Documentación', 
    tags: ['API Testing', 'Colecciones', 'Enviroments', 'Pruebas Endpoint'] 
  },
  { 
    name: 'Supabase', 
    category: 'db', 
    role: 'Backend as a Service (Plus)', 
    tags: ['Realtime DB', 'Auth', 'PostgreSQL Cloud'] 
  },
  { 
    name: 'Firebase', 
    category: 'db', 
    role: 'Servicios en la Nube (Plus)', 
    tags: ['Firestore', 'Authentication', 'Cloud Messaging'] 
  },
];

const categoriesFilter = [
  { id: 'all', label: 'Todo el Stack', icon: Boxes },
  { id: 'backend', label: 'Backend & APIs', icon: Server },
  { id: 'mobile', label: 'Multiplataforma', icon: Smartphone },
  { id: 'db', label: 'Bases de Datos', icon: Database },
  { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud },
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredSkills = filter === 'all'
    ? skillsMatrix
    : skillsMatrix.filter((s) => s.category === filter);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-16 sm:py-24 relative bg-transparent overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Encabezado Principal (Entra desde arriba) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-primary/20 bg-primary/10 text-primary text-xs font-mono mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>sys.capabilities --active</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
              Stack Técnico <span className="text-primary">& Herramientas</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-xs sm:text-sm max-w-md leading-relaxed">
            Ecosistema de tecnologías aplicadas en entornos reales: librerías, integración de APIs, bases de datos y arquitectura de software.
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center gap-2 mb-6 pb-3 border-b border-border/40"
        >
          {categoriesFilter.map((cat) => {
            const Icon = cat.icon;
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-500 ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105'
                    : 'bg-card/40 text-muted-foreground hover:bg-card hover:text-foreground border border-border/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* BENTO GRID COMPACTO */}
        <div className="grid lg:grid-cols-12 gap-5 items-start">

          {/* COLUMNA IZQUIERDA: VIENE DE LA IZQUIERDA (x: -40) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-8 grid sm:grid-cols-2 md:grid-cols-3 gap-3"
          >
            {filteredSkills.map((skill, idx) => {
              const IconComponent = TechIcons[skill.name] || Code2;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.35 + idx * 0.04 }}
                >
                  <Card className="p-3 bg-card/30 border-border/50 hover:border-primary/50 transition-all duration-500 backdrop-blur-sm rounded-xl relative overflow-hidden group flex flex-col justify-between hover:shadow-lg hover:shadow-primary/5 h-full">
                    <div className="space-y-2">
                      {/* Header de Card */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-md bg-secondary/50 border border-border/40 group-hover:scale-105 transition-transform shrink-0">
                            <IconComponent />
                          </div>
                          <h3 className="font-bold text-xs text-foreground">{skill.name}</h3>
                        </div>

                        {skill.architecture && (
                          <Badge variant="outline" className="text-[9px] font-mono border-primary/20 text-primary px-1.5 py-0 shrink-0">
                            {skill.architecture}
                          </Badge>
                        )}
                      </div>

                      {/* Rol / Uso principal */}
                      <p className="text-[11px] text-muted-foreground leading-snug line-clamp-2">
                        {skill.role}
                      </p>

                      {/* Chips de Librerías / Sub-skills */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-1.5 py-0.5 rounded-md text-[9px] font-mono bg-secondary/40 text-muted-foreground border border-border/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* COLUMNA DERECHA: VIENE DE LA DERECHA (x: 40) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-4 space-y-3"
          >

            {/* Live Monitor Log */}
            <Card className="p-4 bg-slate-950/90 border-slate-800 text-slate-300 rounded-xl relative overflow-hidden shadow-xl">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-primary animate-pulse" />
                  <span className="text-slate-200 font-bold">Producción Live Status</span>
                </div>
                <span className="text-slate-500 text-[10px]">PROD_SYS</span>
              </div>

              <div className="space-y-2 font-mono text-[11px]">
                <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start gap-2">
                  <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-200 font-semibold text-[11px]">Facturación Hacienda DTE</div>
                    <p className="text-[10px] text-slate-400">Node.js, PDFKit, Mailer & Firmado.</p>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start gap-2">
                  <Workflow className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-200 font-semibold text-[11px]">Deploy & Contenedores</div>
                    <p className="text-[10px] text-slate-400">DigitalOcean VPS + Docker imágenes.</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Métricas / Patrones */}
            <div className="grid grid-cols-2 gap-2">
              <Card className="p-3 bg-card/30 border-border/50 rounded-xl flex flex-col justify-between">
                <div className="flex items-center justify-between text-muted-foreground mb-1">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[9px] font-mono">Mobile & Web</span>
                </div>
                <div className="text-sm font-bold text-foreground">Flutter / Dart</div>
                <p className="text-[10px] text-muted-foreground">MVVM & Clean Arch</p>
              </Card>

              <Card className="p-3 bg-card/30 border-border/50 rounded-xl flex flex-col justify-between">
                <div className="flex items-center justify-between text-muted-foreground mb-1">
                  <Gauge className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-[9px] font-mono">Backend API</span>
                </div>
                <div className="text-sm font-bold text-foreground">Node / Laravel</div>
                <p className="text-[10px] text-muted-foreground">MVC & Clean Arch</p>
              </Card>
            </div>

            {/* Estándares de Arquitectura */}
            <Card className="p-3.5 bg-card/30 border-border/50 rounded-xl space-y-2">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Flujo & Arquitectura
              </h4>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-[11px]">Patrones Clean Arch, MVVM y MVC</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-[11px]">Diseño SQL en Postgres (Views) & MySQL</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-[11px]">Testing con Postman & GitFlow</span>
                </div>
              </div>
            </Card>

          </motion.div>

        </div>

      </div>
    </section>
  );
}