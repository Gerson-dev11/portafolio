import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FaDocker, FaLaravel, FaFlutter, FaDartLang, FaDigitalOcean, FaGitAlt } from "react-icons/fa6";
import { SiPostman, SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNodejsLine, RiSupabaseLine } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import {
  FolderGit2,
  Github,
  ChevronLeft,
  ChevronRight,
  Globe,
  Layers,
  Code,
  ShoppingCart,
  Users,
  Shield,
  Cloud,
  Car,
  Sparkles,
  Zap,
  Loader2,
  Cpu,
  Layout,
  ArrowRight,
  Check,
  Store,
  BookOpen,
  CheckCircle,
} from 'lucide-react';

// Mapeo de Íconos Técnicos usando las importaciones de React Icons
const TechIcons: Record<string, () => React.ReactElement> = {
  Flutter: () => <FaFlutter className="w-3.5 h-3.5 text-[#02569B]" />,
  Dart: () => <FaDartLang className="w-3.5 h-3.5 text-[#0175C2]" />,
  Laravel: () => <FaLaravel className="w-3.5 h-3.5 text-[#FF2D20]" />,
  'Node.js': () => <RiNodejsLine className="w-3.5 h-3.5 text-[#339933]" />,
  Express: () => <RiNodejsLine className="w-3.5 h-3.5 text-[#339933]" />,
  PostgreSQL: () => <BiLogoPostgresql className="w-3.5 h-3.5 text-[#336791]" />,
  PostgREST: () => <BiLogoPostgresql className="w-3.5 h-3.5 text-[#336791]" />,
  MySQL: () => <SiMysql className="w-3.5 h-3.5 text-[#4479A1]" />,
  Postman: () => <SiPostman className="w-3.5 h-3.5 text-[#EF5B25]" />,
  Docker: () => <FaDocker className="w-3.5 h-3.5 text-[#2496ED]" />,
  Git: () => <FaGitAlt className="w-3.5 h-3.5 text-[#F05032]" />,
  DigitalOcean: () => <FaDigitalOcean className="w-3.5 h-3.5 text-[#0080FF]" />,
  Supabase: () => <RiSupabaseLine className="w-3.5 h-3.5 text-[#3ECF8E]" />,
  Firebase: () => <IoLogoFirebase className="w-3.5 h-3.5 text-[#FFCA28]" />,
  React: () => <Layout className="w-3.5 h-3.5 text-[#61DAFB]" />,
  Sanctum: () => <Shield className="w-3.5 h-3.5 text-[#FF2D20]" />,
  JWT: () => <Shield className="w-3.5 h-3.5 text-[#FF6B00]" />,
  Java: () => <Cpu className="w-3.5 h-3.5 text-[#007396]" />,
  'Azure AI': () => <Globe className="w-3.5 h-3.5 text-[#0089D6]" />,
  AWS: () => <Cloud className="w-3.5 h-3.5 text-[#FF9900]" />,
  'Clean Architecture': () => <Layers className="w-3.5 h-3.5 text-[#6C5CE7]" />,
  Wompi: () => <ShoppingCart className="w-3.5 h-3.5 text-[#5A2D82]" />,
  Webhooks: () => <Zap className="w-3.5 h-3.5 text-[#FF6B00]" />,
  'Material Design': () => <Sparkles className="w-3.5 h-3.5 text-[#6200EE]" />,
  '2FA': () => <Shield className="w-3.5 h-3.5 text-[#00B894]" />,
  Render: () => <Cloud className="w-3.5 h-3.5 text-[#46E3B7]" />,
  PHP: () => <Cpu className="w-3.5 h-3.5 text-[#777BB4]" />,
  'Tailwind CSS': () => <Layout className="w-3.5 h-3.5 text-[#06B6D4]" />,
  'SaaS': () => <Cloud className="w-3.5 h-3.5 text-[#00B894]" />,
  'MVC': () => <Layers className="w-3.5 h-3.5 text-[#6C5CE7]" />,  
  'MVVM': () => <Layers className="w-3.5 h-3.5 text-[#6C5CE7]" />,
  'Offline-first': () => <Cloud className="w-3.5 h-3.5 text-[#00B894]" />,
  'REST API': () => <Globe className="w-3.5 h-3.5 text-[#0089D6]" />,
};

// Colección de Proyectos
const projects = [
  {
    id: 1,
    title: 'Bazar Sandri',
    description:
      'Sistema de facturación electrónica con consumidor final, crédito fiscal y notas de crédito.',
    longDescription:
      'Sistema de facturación desarrollado para el Bazar Sandri que permite facturación electrónica para consumidor final y crédito fiscal, con soporte para notas de crédito. La aplicación de escritorio fue desarrollada en Flutter y Node.js usando arquitectura MVC, garantizando rapidez y eficiencia. Hosting desplegado en DigitalOcean. Desarrollé integralmente el sistema Full Stack.',
    image: 'bazarsandri.png',
    category: 'fullstack',
    technologies: ['Flutter', 'Dart', 'Node.js', 'PostgreSQL', 'DigitalOcean', 'Express','MVVM', 'REST API'],
    features: [
      'Facturación electrónica consumidor final',
      'Facturación crédito fiscal',
      'Notas de crédito',
      'Arquitectura MVC',
      'Hosting en DigitalOcean',
    ],
    github: 'https://github.com',
    demo: null,
    icon: Store,
    color: '#02569B',
    isPrivate: true,
    isInProgress: false,
    role: 'Full Stack Developer',
  },
  {
    id: 2,
    title: 'Frenzo Librería',
    description:
      'Sistema de facturación electrónica para librería con gestión de inventario y clientes.',
    longDescription:
      'Sistema de facturación desarrollado para Frenzo Librería que permite facturación electrónica, gestión de inventario en tiempo real, control de clientes y generación de reportes. Desarrollado con Flutter, Node.js y PostgreSQL, con una arquitectura escalable y moderna.',
    image: 'frenzos.png',
    category: 'fullstack',
    technologies: ['Flutter', 'Dart', 'Node.js', 'PostgreSQL', 'Express', 'REST API', 'MVVM'],
    features: [
      'Facturación electrónica',
      'Gestión de inventario',
      'Control de clientes',
      'Reportes y estadísticas',
      'Arquitectura escalable',
    ],
    github: 'https://github.com',
    demo: null,
    icon: BookOpen,
    color: '#6C5CE7',
    isPrivate: true,
    isInProgress: false,
    role: 'Full Stack Developer',
  },
  {
    id: 3,
    title: 'EduEmotions IA - ITCA FEPADE',
    description:
      'Plataforma educativa con IA para psicología, app móvil para clientes y desktop para admins.',
    longDescription:
      'Plataforma educativa desarrollada para ITCA FEPADE que ayuda en el seguimiento psicológico de estudiantes. Incluye ejercicios interactivos, libro personal y monitoreo de estudiantes. Utiliza Firebase y Supabase como base de datos mixta (nube y local). Refactorización completa realizada para optimizar el rendimiento.',
    image: 'itca.png',
    category: 'fullstack',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Azure AI', 'Supabase', 'REST API', 'MVVM'],
    features: [
      'App móvil para clientes',
      'Desktop para administradores',
      'Seguimiento psicológico',
      'Ejercicios interactivos',
      'Libro personal digital',
      'Base de datos mixta (cloud/local)',
    ],
    github: 'https://github.com',
    demo: null,
    icon: Users,
    color: '#FF2D20',
    isPrivate: false,
    isInProgress: false,
    role: 'Full Stack (Refactor)',
  },
  {
    id: 4,
    title: 'RideAndBuy',
    description:
      'Plataforma de alquiler de vehículos con IA Azure, AWS, pagos Wompi y autenticación 2FA.',
    longDescription:
      'Aplicación móvil que permite a empresas de alquiler de vehículos gestionar su flota y a clientes realizar reservas. Implementa IA de Azure para validación de documentos de identidad, AWS S3 para almacenamiento de rostros y verificación biométrica, autenticación en 2 pasos, Clean Architecture, Material Design, y pagos con Wompi mediante webhooks. Backend desplegado en Render.',
    image: 'rideandbuy.jpeg',
    category: 'fullstack',
    technologies: [
      'Flutter', 'Dart', 'Azure AI', 'AWS', 'Wompi',
      'Webhooks', 'Clean Architecture', 'Material Design', '2FA', 'Render'
    ],
    features: [
      'IA Azure para documentos de identidad',
      'AWS S3 para validación facial',
      'Autenticación en 2 pasos',
      'Clean Architecture',
      'Material Design',
      'Pagos con Wompi (webhooks)',
      'Hosting en Render',
    ],
    github: 'https://github.com',
    demo: null,
    icon: Car,
    color: '#02569B',
    isPrivate: false,
    isInProgress: false,
    role: 'Full Stack Developer',
  },
];

const categories = [
  { id: 'all', label: 'Todos los Proyectos', count: projects.length },
  { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const projectsPerPage = 6;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const paginatedProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

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

  useEffect(() => {
    setCurrentPage(0);
  }, [selectedCategory]);

  const handleImageError = (projectId: number) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  const getImageUrl = (project: typeof projects[0]) => {
    if (imageErrors[project.id]) {
      return 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop';
    }
    return project.image;
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 sm:py-28 relative overflow-hidden bg-background/80 backdrop-blur-md border-y border-border/40 z-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >

        {/* Encabezado Animado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-primary/20 bg-primary/10 text-primary text-xs font-mono mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>sys.portfolio --production</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
              Proyectos <span className="text-primary">Destacados</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md leading-relaxed">
            Sistemas de software desplegados en entorno real: desde facturación electrónica DTE hasta arquitecturas multiplataforma con IA integrada.
          </p>
        </motion.div>

        {/* Filtro por Categoría con Animación de Clic/Hover */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex items-center gap-2 mb-8 pb-4 border-b border-border/40"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors duration-600 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                  : 'bg-card/40 text-muted-foreground hover:bg-card hover:text-foreground border border-border/40'
              }`}
            >
              <span>{category.label}</span>
              <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                selectedCategory === category.id
                  ? 'bg-primary-foreground/20 text-primary-foreground'
                  : 'bg-secondary text-muted-foreground'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de Proyectos con Animación de Entrada Escalonada & AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${currentPage}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.55 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8"
          >
            {paginatedProjects.map((project, index) => {
              const ProjectIcon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                >
                  <Sheet>
                    <SheetTrigger asChild>
                      <div className="group cursor-pointer h-full">
                        <Card className="h-full bg-card/30 border-border/50 hover:border-primary/50 transition-colors duration-500 backdrop-blur-sm rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5">
                          <div>
                            {/* Banner de Imagen Compacto */}
                            <div className="relative h-40 overflow-hidden bg-secondary/30">
                              <img
                                src={getImageUrl(project)}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                onError={() => handleImageError(project.id)}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                              {/* Badges Flotantes */}
                              <div className="absolute top-2.5 left-2.5 right-2.5 flex justify-between items-center">
                                <Badge variant="outline" className="text-[10px] bg-background/80 backdrop-blur-md border-border/60 text-foreground font-mono">
                                  {project.category === 'fullstack' ? 'Full Stack' : 'Mobile'}
                                </Badge>

                                <div className="flex gap-1">
                                  {project.isInProgress && (
                                    <Badge className="bg-amber-500/90 text-white text-[10px] font-mono flex items-center gap-1 py-0.5 px-2">
                                      <Loader2 className="w-3 h-3 animate-spin" /> Dev
                                    </Badge>
                                  )}
                                  {project.isPrivate && (
                                    <Badge className="bg-black/70 border border-white/10 text-white text-[10px] font-mono flex items-center gap-1 py-0.5 px-2">
                                      <Shield className="w-3 h-3" /> Privado
                                    </Badge>
                                  )}
                                </div>
                              </div>

                              <div className="absolute bottom-2.5 left-3 right-3 flex items-center gap-2">
                                <div className="w-7 h-7 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center backdrop-blur-md shrink-0">
                                  <ProjectIcon className="w-3.5 h-3.5 text-primary" />
                                </div>
                                <h3 className="text-base font-bold text-white line-clamp-1 drop-shadow">
                                  {project.title}
                                </h3>
                              </div>
                            </div>

                            {/* Contenido de Tarjeta */}
                            <div className="p-4 space-y-3">
                              <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                {project.description}
                              </p>

                              {/* Chips de Tecnologías en la Card */}
                              <div className="flex flex-wrap gap-1">
                                {project.technologies.slice(0, 4).map((tech) => {
                                  const IconComponent = TechIcons[tech];
                                  return (
                                    <span
                                      key={tech}
                                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-secondary/50 text-muted-foreground border border-border/30"
                                    >
                                      {IconComponent && <IconComponent />}
                                      <span>{tech}</span>
                                    </span>
                                  );
                                })}
                                {project.technologies.length > 4 && (
                                  <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-secondary/40 text-muted-foreground font-mono">
                                    +{project.technologies.length - 4}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Footer de Tarjeta */}
                          <div className="px-4 py-3 border-t border-border/30 flex items-center justify-between text-[11px] bg-card/20">
                            <span className="text-muted-foreground font-mono flex items-center gap-1">
                              <Code className="w-3 h-3 text-primary" />
                              {project.role}
                            </span>
                            <span className="text-primary font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                              Detalles <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        </Card>
                      </div>
                    </SheetTrigger>

                    {/* Bottom Sheet / Slider inferior */}
                    <SheetContent
                      side="bottom"
                      className="max-h-[88vh] h-auto rounded-t-3xl bg-background/95 border-t border-border/60 p-0 overflow-y-auto backdrop-blur-2xl shadow-2xl"
                    >
                      {/* Pila / Handle superior */}
                      <div className="w-12 h-1.5 bg-muted-foreground/30 rounded-full mx-auto my-3" />

                      <div className="max-w-4xl mx-auto pb-8">
                        {/* Banner e Imagen del Sheet */}
                        <div className="relative h-44 sm:h-56 bg-secondary/30 rounded-2xl mx-4 sm:mx-6 overflow-hidden mt-2">
                          <img
                            src={getImageUrl(project)}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            onError={() => handleImageError(project.id)}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                          <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center backdrop-blur-md">
                              <ProjectIcon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <SheetTitle className="text-xl sm:text-2xl font-bold text-white drop-shadow">
                                {project.title}
                              </SheetTitle>
                              <SheetDescription className="text-xs sm:text-sm text-slate-300">
                                {project.description}
                              </SheetDescription>
                            </div>
                          </div>
                        </div>

                        {/* Contenido Informativo */}
                        <div className="px-6 sm:px-8 pt-6 space-y-6">
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="px-3 py-1 text-xs border-primary/30 text-primary bg-primary/5">
                              <Code className="w-3.5 h-3.5 mr-1.5" />
                              {project.role}
                            </Badge>
                            {project.isPrivate && (
                              <Badge variant="outline" className="px-3 py-1 text-xs border-amber-500/30 text-amber-500 bg-amber-500/5">
                                <Shield className="w-3.5 h-3.5 mr-1.5" />
                                Proyecto Privado
                              </Badge>
                            )}
                          </div>

                          <div className="p-4 rounded-xl bg-card/50 border border-border/40">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-primary" />
                              Visión General
                            </h4>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {project.longDescription}
                            </p>
                          </div>

                          {/* Tecnologías en el Sheet */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 flex items-center gap-1.5">
                              <Cpu className="w-3.5 h-3.5 text-primary" />
                              Tecnologías Utilizadas
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {project.technologies.map((tech) => {
                                const IconComponent = TechIcons[tech];
                                return (
                                  <span
                                    key={tech}
                                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs bg-secondary/40 border border-border/40 text-foreground font-medium"
                                  >
                                    {IconComponent && <IconComponent />}
                                    {tech}
                                  </span>
                                );
                              })}
                            </div>
                          </div>

                          {/* Funcionalidades */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 flex items-center gap-1.5">
                              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                              Módulos & Funcionalidades
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-2">
                              {project.features.map((feature) => (
                                <div
                                  key={feature}
                                  className="flex items-center gap-2 p-2.5 rounded-lg bg-card/30 border border-border/30 text-xs text-muted-foreground"
                                >
                                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <Button
                            className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 text-xs h-10"
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              {project.isPrivate ? 'Ver Repositorio (Privado)' : 'Ver Código Fuente'}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Paginación Contenido */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="rounded-xl border-border/50 hover:bg-card w-8 h-8"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex gap-1.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`transition-all duration-550 rounded-full h-1.5 ${
                    currentPage === i
                      ? 'w-6 bg-primary'
                      : 'w-1.5 bg-border hover:bg-primary/50'
                  }`}
                />   
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="rounded-xl border-border/50 hover:bg-card w-8 h-8"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}

      </motion.div>
    </section>
  );
}