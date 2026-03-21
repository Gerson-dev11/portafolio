import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  FolderGit2,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Globe,
  Server,
  Layers,
  Star,
  Eye,
  Code,
  ArrowUpRight,
  ShoppingCart,
  Users,
  Shield,
  Cloud,
  Car,
  Building2,
  Sparkles,
  Zap,
  Clock,
  Loader2,
  Cpu,
  Database,
  Layout,
} from 'lucide-react';

// Tech Icons
const TechIcons: Record<string, () => React.ReactElement> = {
  Flutter: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#02569B">
      <path d="M14.314 0L2.3 12 6 15.7 21.684.012h-7.368zm.014 11.072l-6.3 6.3H6.3l6.3-6.3 1.728 1.729z" />
    </svg>
  ),
  Dart: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#0175C2">
      <path d="M12.71 0L1.27 11.44L0 12.71l1.27 1.27L12.71 24l1.27-1.27L2.54 12.71L12.71 2.54z" />
    </svg>
  ),
  'Node.js': () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#339933">
      <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.45 1.7.45 1.38 0 2.17-.84 2.17-2.3V8.03c0-.12-.1-.22-.22-.22H8.5c-.12 0-.22.1-.22.22v8.35c0 .65-.67 1.3-1.77.75L4.45 16c-.12-.07-.2-.2-.2-.34V7.08c0-.14.08-.27.2-.34l7.44-4.3c.12-.07.26-.07.38 0l7.44 4.3c.12.07.2.2.2.34v8.58c0 .14-.08.27-.2.34l-7.44 4.3c-.12.07-.26.07-.38 0l-1.9-1.1c-.1-.06-.22-.07-.33-.03-.9.38-1.1.45-1.96.28-.12-.03-.24-.12-.24-.26V14.2c0-.15.12-.27.27-.27h.88c.15 0 .27.12.27.27v1.95c0 .75.83 1.2 1.5.87l2.05-1.2c.47-.28.76-.79.76-1.35V7.08c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2z" />
    </svg>
  ),
  Express: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#ffffff">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" opacity="0.5" />
    </svg>
  ),
  PostgreSQL: () => (
    <img src="/postgrest.png" alt="PostgreSQL" className="w-4 h-4 object-contain" />
  ),
  'PostgREST': () => (
    <img src="/postgrest.png" alt="PostgREST" className="w-4 h-4 object-contain" />
  ),
  Firebase: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#FFCA28">
      <path d="M3.89 15.673L6.255.461A.542.542 0 0 1 7.27.289L11.213 6.5 3.89 15.673z" />
    </svg>
  ),
  Supabase: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#3ECF8E">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  ),
  Laravel: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#FF2D20">
      <path d="M23.642 5.42c-.025-.05-.067-.078-.117-.078-.025 0-.05.006-.075.02L17.78 8.63c-.1.05-.15.15-.125.25l1.55 6.8c.025.1.1.175.2.2.025 0 .05.006.075.006.075 0 .15-.025.2-.075l5.45-7.25c.05-.075.05-.175-.025-.25l-1.493-1.82z" />
    </svg>
  ),
  React: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#61DAFB">
      <path d="M12 0c-1.1 0-2.12.15-3.06.43-.94.27-1.8.68-2.57 1.2A8.08 8.08 0 0 0 3.63 3.63a8.08 8.08 0 0 0-2 2.74 8.46 8.46 0 0 0-.43 3.06c0 1.1.15 2.12.43 3.06.27.94.68 1.8 1.2 2.57a8.08 8.08 0 0 0 2.74 2 8.46 8.46 0 0 0 3.06.43c1.1 0 2.12-.15 3.06-.43.94-.27 1.8-.68 2.57-1.2a8.08 8.08 0 0 0 2-2.74c.27-.94.43-1.96.43-3.06 0-1.1-.15-2.12-.43-3.06a8.08 8.08 0 0 0-1.2-2.57 8.08 8.08 0 0 0-2.74-2A8.46 8.46 0 0 0 12 0z" />
    </svg>
  ),
  Sanctum: () => (
    <Shield className="w-4 h-4" />
  ),
  JWT: () => (
    <Shield className="w-4 h-4" />
  ),
  Java: () => (
    <img src="/java.png" alt="Java" className="w-4 h-4 object-contain" />
  ),
  'Azure AI': () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#0089D6">
      <path d="M22.379 2.414L12.414 12.379 2.449 2.414z" />
    </svg>
  ),
  AWS: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#FF9900">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  ),
  'Clean Architecture': () => (
    <Layers className="w-4 h-4" />
  ),
  Wompi: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#5A2D82">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  ),
  Webhooks: () => (
    <Zap className="w-4 h-4" />
  ),
  'Material Design': () => (
    <Sparkles className="w-4 h-4" />
  ),
  '2FA': () => (
    <Shield className="w-4 h-4" />
  ),
  Render: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#46E3B7">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0z" />
    </svg>
  ),
  'DigitalOcean': () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#0080FF">
      <path d="M12 0C5.372 0 0 5.372 0 12c0 6.628 5.372 12 12 12s12-5.372 12-12S18.628 0 12 0z" />
    </svg>
  ),
  'PHP': () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#777BB4">
      <path d="M7.01 10.71h1.89c.94 0 1.69.11 2.25.34.56.22.98.58 1.27 1.07.29.49.43 1.1.43 1.83 0 .7-.14 1.32-.43 1.86-.29.54-.73.95-1.31 1.23-.58.28-1.33.42-2.25.42H7.01v-6.75z" />
    </svg>
  ),
  'Tailwind CSS': () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#06B6D4">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z" />
    </svg>
  ),
  'PostgreSQL': () => (
    <Database className="w-4 h-4" />
  ),
  'SaaS': () => (
    <Cloud className="w-4 h-4" />
  ),
};

// Proyectos reales según descripción con imágenes personalizadas
const projects = [
  {
    id: 1,
    title: 'Bazar Sandri',
    description:
      'Sistema completo de facturación electrónica con consumidor final y crédito fiscal, incluyendo notas de crédito.',
    longDescription:
      'Sistema de facturación desarrollado para el Bazar Sandri que permite facturación electrónica para consumidor final y crédito fiscal, con soporte para notas de crédito. La aplicación de escritorio fue desarrollada en Flutter y Node.js usando arquitectura MVC, garantizando rapidez y eficiencia. Hosting desplegado en DigitalOcean. Mi rol fue Full Stack, desarrollando prácticamente todo el sistema.',
    image: 'bazarsandri.png',
    category: 'fullstack',
    technologies: ['Flutter', 'Dart', 'Node.js', 'PostgreSQL', 'DigitalOcean', 'MVC'],
    features: [
      'Facturación electrónica consumidor final',
      'Facturación crédito fiscal',
      'Notas de crédito',
      'Arquitectura MVC',
      'Hosting en DigitalOcean',
    ],
    github: 'https://github.com',
    demo: null,
    icon: ShoppingCart,
    color: '#02569B',
    stars: 0,
    views: 0,
    isPrivate: true,
    isInProgress: false,
    updatedAt: '2025-03-15',
    role: 'Full Stack Developer',
  },
  {
    id: 2,
    title: 'Plaza Merced - Vigilante App',
    description:
      'Aplicación móvil para gestión de parqueo con estrategia offline-first para manejo sin conexión.',
    longDescription:
      'Aplicación en desarrollo para el parqueo de Plaza Merced que utiliza estrategia offline-first para garantizar el funcionamiento sin conexión a internet. Desarrollada con Flutter, Node.js y PostgREST como base de datos. Mi rol fue Full Stack, implementando la sincronización y la lógica completa de la aplicación.',
    image: 'plazamerced.png',
    category: 'mobile',
    technologies: ['Flutter', 'Dart', 'Node.js', 'PostgREST', 'PostgreSQL', 'Offline-first'],
    features: [
      'Estrategia offline-first',
      'Sincronización automática',
      'Gestión de parqueo',
      'Registro de vehículos',
      'Cálculo de tarifas',
    ],
    github: 'https://github.com/Lessnd/plazaMerced-vigilanteApp',
    demo: null,
    icon: Car,
    color: '#02569B',
    stars: 0,
    views: 0,
    isPrivate: false,
    isInProgress: true,
    updatedAt: '2025-03-20',
    role: 'Full Stack Developer',
  },
  {
    id: 3,
    title: 'EduEmotions IA - ITCA FEPADE',
    description:
      'Plataforma educativa con IA para psicología, con app móvil para clientes y desktop para administradores.',
    longDescription:
      'Plataforma educativa desarrollada para ITCA FEPADE que ayuda en el seguimiento psicológico de estudiantes. Incluye ejercicios interactivos, libro personal y monitoreo de estudiantes. Utiliza Firebase y Supabase como base de datos mixta (nube y local). Mi rol fue Full Stack, realizando el refactor completo de la aplicación para optimizar su rendimiento.',
    image: 'itca.png',
    category: 'fullstack',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Supabase', 'REST API'],
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
    stars: 1,
    views: 0,
    isPrivate: false,
    isInProgress: false,
    updatedAt: '2025-01-19',
    role: 'Full Stack Developer (Refactor)',
  },
  {
    id: 4,
    title: 'Max Express',
    description:
      'Sistema de gestión de encomiendas que enseñó el manejo de APIs con Laravel, JWT y Sanctum.',
    longDescription:
      'Proyecto de encomiendas que, aunque no finalizó por problemas con el cliente, fue una experiencia fundamental para aprender el manejo de creación de APIs con Laravel, implementación de autenticación con JWT y Sanctum. Este proyecto sentó las bases para futuros desarrollos backend robustos.',
    image: 'max.png',
    category: 'backend',
    technologies: ['Laravel', 'PHP', 'JWT', 'Sanctum', 'MySQL', 'REST API'],
    features: [
      'API RESTful con Laravel',
      'Autenticación JWT',
      'Sanctum para tokens',
      'Gestión de encomiendas',
      'Estructura MVC',
    ],
    github: 'https://github.com',
    demo: null,
    icon: Server,
    color: '#FF2D20',
    stars: 1,
    views: 0,
    isPrivate: true,
    isInProgress: false,
    updatedAt: '2024-11-24',
    role: 'Backend Developer (Aprendizaje)',
  },
  {
    id: 5,
    title: 'RideAndBuy',
    description:
      'Plataforma de alquiler de vehículos con IA Azure, AWS, pagos Wompi y autenticación 2FA.',
    longDescription:
      'Aplicación móvil que permite a empresas de alquiler de vehículos gestionar su flota y a clientes realizar reservas. Implementa IA de Azure para validación de documentos de identidad, AWS S3 para almacenamiento de rostros y verificación biométrica, autenticación en 2 pasos, Clean Architecture, Material Design, y pagos con Wompi mediante webhooks. Backend desplegado en Render.',
    image: 'rideandbuy.png',
    category: 'fullstack',
    technologies: [
      'Flutter', 'Dart', 'Java', 'Azure AI', 'AWS', 'Wompi', 
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
    stars: 1,
    views: 0,
    isPrivate: false,
    isInProgress: false,
    updatedAt: '2024-11-11',
    role: 'Full Stack Developer',
  },
  {
    id: 6,
    title: 'FacturasV',
    description:
      'SaaS de facturación electrónica en desarrollo con Laravel, React y PostgREST.',
    longDescription:
      'SaaS de servicios de facturación electrónica actualmente en desarrollo. Estoy a cargo del diseño y backend del sistema, trabajando con un equipo de 3 compañeros más. El stack tecnológico incluye Laravel para el backend, React para el frontend, PostgREST como capa de API, y planeamos desplegar en DigitalOcean. Este proyecto representa un paso importante hacia soluciones empresariales escalables.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    category: 'fullstack',
    technologies: ['Laravel', 'React', 'PHP', 'PostgREST', 'PostgreSQL', 'Tailwind CSS', 'DigitalOcean', 'SaaS'],
    features: [
      'SaaS de facturación electrónica',
      'Diseño de arquitectura escalable',
      'Backend con Laravel',
      'Frontend con React',
      'API con PostgREST',
      'Hosting en DigitalOcean (planeado)',
      'Manejo de múltiples empresas',
    ],
    github: 'https://github.com/Daved-Main/facturasv',
    demo: null,
    icon: Building2,
    color: '#10B981',
    stars: 0,
    views: 0,
    isPrivate: true,
    isInProgress: true,
    updatedAt: '2025-03-20',
    role: 'Lead Designer & Backend Developer',
  },
];

const categories = [
  { id: 'all', label: 'Todos', count: projects.length },
  { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
  { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
  { id: 'fullstack', label: 'Fullstack', count: projects.filter(p => p.category === 'fullstack').length },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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
      // Fallback image if custom image fails to load
      return 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop';
    }
    return project.image;
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background Elements with animated glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-300"
          >
            <FolderGit2 className="w-4 h-4 mr-2" />
            Portafolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">proyectos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Una selección de proyectos que demuestran mis habilidades y experiencia como Full Stack Developer
          </p>
        </div>

        {/* Category Filter with improved design */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden group ${
                selectedCategory === category.id
                  ? 'text-primary-foreground'
                  : 'bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30'
              }`}
            >
              {selectedCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 animate-pulse-subtle" />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {category.label}
                <span className={`px-2 py-0.5 rounded-full text-xs transition-all ${
                  selectedCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-secondary group-hover:bg-primary/20'
                }`}>
                  {category.count}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid with enhanced hover effects */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {paginatedProjects.map((project, index) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <Card
                  className="group overflow-hidden bg-gradient-card border-border/50 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 relative"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Animated border gradient on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`} />
                  
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={getImageUrl(project)}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      onError={() => handleImageError(project.id)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    
                    {/* Category Badge with glow */}
                    <div className="absolute top-4 left-4">
                      <Badge
                        className="px-3 py-1 rounded-lg text-xs font-medium backdrop-blur-sm transition-all duration-300 group-hover:scale-105"
                        style={{ 
                          backgroundColor: `${project.color}30`, 
                          color: project.color, 
                          borderColor: `${project.color}50`,
                          boxShadow: hoveredCard === project.id ? `0 0 20px ${project.color}80` : 'none'
                        }}
                      >
                        <project.icon className="w-3 h-3 mr-1" />
                        {project.category === 'mobile' ? 'Mobile' : project.category === 'backend' ? 'Backend' : 'Full Stack'}
                      </Badge>
                    </div>

                    {/* Status Badges */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      {project.isInProgress && (
                        <Badge
                          className="px-2 py-1 rounded-lg text-xs bg-amber-500/90 backdrop-blur-sm border-none text-white flex items-center gap-1 animate-pulse"
                        >
                          <Loader2 className="w-3 h-3 animate-spin" />
                          En progreso
                        </Badge>
                      )}
                      {project.isPrivate && (
                        <Badge
                          variant="secondary"
                          className="px-2 py-1 rounded-lg text-xs bg-black/70 backdrop-blur-sm border-none"
                        >
                          <Shield className="w-3 h-3 mr-1" />
                          Privado
                        </Badge>
                      )}
                    </div>

                    {/* Title Overlay with gradient */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-white mb-1 line-clamp-1 group-hover:translate-x-1 transition-transform duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => {
                        const IconComponent = TechIcons[tech];
                        return (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs bg-secondary text-secondary-foreground transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary"
                          >
                            {IconComponent && <IconComponent />}
                            {tech}
                          </span>
                        );
                      })}
                      {project.technologies.length > 3 && (
                        <span className="px-2.5 py-1 rounded-lg text-xs bg-secondary text-secondary-foreground transition-all duration-300 group-hover:bg-primary/10">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Role Badge with animation */}
                    <div className="mt-3">
                      <Badge
                        variant="outline"
                        className="text-xs border-primary/30 text-primary transition-all duration-300 group-hover:bg-primary/10 group-hover:border-primary/50"
                      >
                        <Code className="w-3 h-3 mr-1" />
                        {project.role}
                      </Badge>
                    </div>
                  </div>

                  {/* Hover Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-purple-600/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                    <span className="flex items-center gap-2 text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-5 h-5" />
                      Ver detalles
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                  </div>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-card to-card/95 border-border/50 p-0 gap-0 rounded-2xl">
                {/* Header Image with enhanced gradient */}
                <div className="relative h-64">
                  <img
                    src={getImageUrl(project)}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(project.id)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
                        style={{ backgroundColor: `${project.color}30` }}
                      >
                        <project.icon className="w-6 h-6" style={{ color: project.color }} />
                      </div>
                      <div>
                        <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                          {project.title}
                        </DialogTitle>
                        <DialogDescription className="text-muted-foreground">
                          {project.description}
                        </DialogDescription>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Role & Status */}
                  <div className="flex gap-3 flex-wrap">
                    <Badge
                      className="px-4 py-2 rounded-xl text-sm"
                      style={{ backgroundColor: `${project.color}20`, color: project.color }}
                    >
                      <Code className="w-4 h-4 mr-1" />
                      {project.role}
                    </Badge>
                    {project.isInProgress && (
                      <Badge className="px-4 py-2 rounded-xl text-sm bg-amber-500/20 text-amber-500 border border-amber-500/30 flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        En desarrollo activo
                      </Badge>
                    )}
                    {project.isPrivate && (
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                        <Shield className="w-4 h-4" />
                        <span className="text-sm font-medium">Proyecto privado</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div className="p-4 rounded-xl bg-secondary/30 border border-border/30">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4 text-primary" />
                      Descripción del proyecto
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-primary" />
                      Stack tecnológico
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => {
                        const IconComponent = TechIcons[tech];
                        return (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:scale-105 hover:bg-primary/20"
                          >
                            {IconComponent && <IconComponent />}
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Características principales
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {project.features.map((feature, idx) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border/30 hover:border-primary/30 transition-all duration-300 group"
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300" />
                          <span className="text-sm group-hover:text-foreground transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      className="flex-1 rounded-xl h-12 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{ backgroundColor: project.color }}
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        {project.isPrivate ? 'Ver en GitHub (Privado)' : 'Ver código fuente'}
                      </a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Pagination with improved design */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="rounded-xl border-border hover:bg-primary/10 hover:border-primary/30 w-10 h-10 transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`transition-all duration-300 rounded-full ${
                    currentPage === i
                      ? 'w-8 h-2 bg-gradient-to-r from-primary to-purple-500'
                      : 'w-2 h-2 bg-secondary hover:bg-primary/50 hover:w-4'
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setCurrentPage((p) => Math.min(totalPages - 1, p + 1))
              }
              disabled={currentPage === totalPages - 1}
              className="rounded-xl border-border hover:bg-primary/10 hover:border-primary/30 w-10 h-10 transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Add custom animations */}
      <style>{`
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}