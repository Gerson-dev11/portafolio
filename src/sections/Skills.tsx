import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Layers,
  Smartphone,
  Palette,
  Code2,
  GitBranch,
  Star,
  TrendingUp,
  Zap,
  Shield,
  Server,
  Cloud,
} from 'lucide-react';

// SVG Icons for technologies
const TechIcons: Record<string, () => React.ReactElement> = {
  // --- Tecnologías con archivos en /public ---
  Flutter: () => (
    <img src="flutter.png" alt="Flutter" className="w-8 h-8 object-contain" />
  ),
  Dart: () => (
    <img src="dart.png" alt="Dart" className="w-8 h-8 object-contain" />
  ),
  Laravel: () => (
    <img src="laravel.png" alt="Laravel" className="w-8 h-8 object-contain" />
  ),
  'Node.js': () => (
    <img src="node.png" alt="Node.js" className="w-8 h-8 object-contain" />
  ),
  PostgreSQL: () => (
    <img src="postgrest.png" alt="PostgreSQL" className="w-8 h-8 object-contain" />
  ),
  Postman: () => (
    <img src="postman.png" alt="Postman" className="w-8 h-8 object-contain" />
  ),
  Java: () => (
    <img src="java.png" alt="Java" className="w-9 h-9 object-contain" />
  ),
  React: () => (
    <img src="postman.png" alt="React" className="w-8 h-8 object-contain" />
  ),
 
  JavaScript: () => (
    <img src="javascript.png" alt="JavaScript" className="w-8 h-8 object-contain" />
  ),
  HTML5: () => (
    <img src="html5.png" alt="HTML5" className="w-8 h-8 object-contain" />
  ),
  CSS3: () => (
    <img src="css3.png" alt="CSS3" className="w-8 h-8 object-contain" />
  ),
  'Provider/BLoC': () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#3B82F6">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  ),
  Git: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#F05032">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.652 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.678-1.342-.396-2.009L7.611 3.527 4.645 6.491c-.603.605-.603 1.585 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l6.232-6.227c.605-.603.605-1.582 0-2.187z" />
    </svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#ffffff">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  ),
  DigitalOcean: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#0080FF">
      <path d="M12 0C5.372 0 0 5.372 0 12c0 6.628 5.372 12 12 12s12-5.372 12-12S18.628 0 12 0zm0 22.5c-5.799 0-10.5-4.701-10.5-10.5S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5z" />
      <path d="M12 6.75v5.25l4.5 2.25" stroke="white" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  Vercel: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#ffffff">
      <path d="M12 2L22 21H2L12 2z" />
    </svg>
  ),
  Netlify: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#00C7B7">
      <path d="M12 0L0 12l12 12 12-12L12 0z" />
    </svg>
  ),
};

// Componente de gráfico de pastel (Donut) con animación mejorada
const DonutChart = ({ percentage, color, size = 100, isAnimating }: { percentage: number; color: string; size?: number; isAnimating: boolean }) => {
  const radius = size * 0.4;
  const circumference = 2 * Math.PI * radius;
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    if (isAnimating) {
      // Animación progresiva del porcentaje
      let startTime: number;
      const duration = 1500;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(1, elapsed / duration);
        const easedProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease out
        setCurrentPercentage(percentage * easedProgress);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    } else {
      setCurrentPercentage(0);
    }
  }, [percentage, isAnimating]);

  const offset = circumference - (currentPercentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        {/* Círculo de fondo con animación de brillo */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="8"
        />
        {/* Círculo de progreso con animación de glow */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-200 ease-out"
          style={{
            filter: `drop-shadow(0 0 8px ${color}80)`,
          }}
        />
      </svg>
      {/* Animación de pulso en el borde */}
      <div 
        className="absolute inset-0 rounded-full animate-ping-slow pointer-events-none"
        style={{ 
          boxShadow: `0 0 20px ${color}40`,
          opacity: 0.3
        }}
      />
    </div>
  );
};

const skillCategories = [
  {
    id: 'mobile',
    label: 'Mobile Development',
    icon: Smartphone,
    color: '#02569B',
    description: 'Especialista en aplicaciones nativas y multiplataforma con alto rendimiento.',
    skills: [
      { name: 'Flutter', level: 85 },
      { name: 'Dart', level: 90 },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend Web',
    icon: Palette,
    color: '#61DAFB',
    description: 'Interfaces reactivas, modernas y optimizadas para la mejor experiencia de usuario.',
    skills: [
      { name: 'React', level: 70 },
      { name: 'JavaScript', level: 75 },
       { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 80 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Data',
    icon: Server,
    color: '#FF2D20',
    description: 'Arquitecturas robustas, APIs escalables y gestión eficiente de datos.',
    skills: [
      { name: 'Laravel', level: 65 },
      { name: 'Node.js', level: 85 },
      { name: 'PostgreSQL', level: 60 },
      { name: 'Java', level: 60 },
      { name: 'Postman', level: 85 },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: Cloud,
    color: '#007BFF',
    description: 'Despliegue continuo y gestión de servicios en la nube para alta disponibilidad.',
    skills: [
      { name: 'DigitalOcean', level: 75 },
      { name: 'Netlify', level: 60 },
      { name: 'Git', level: 75 },
      { name: 'GitHub', level: 75 },
    ],
  },
];

const technologies = [
  { name: 'Flutter', icon: TechIcons.Flutter, color: '#02569B' },
  { name: 'Dart', icon: TechIcons.Dart, color: '#0175C2' },
  { name: 'React', icon: TechIcons.React, color: '#61DAFB' },
   { name: 'JavaScript', icon: TechIcons.JavaScript, color: '#F7DF1E' },
  { name: 'Laravel', icon: TechIcons.Laravel, color: '#FF2D20' },
  { name: 'Node.js', icon: TechIcons['Node.js'], color: '#FF8C00' },
  { name: 'PostgreSQL', icon: TechIcons.PostgreSQL, color: '#336791' },
  { name: 'Java', icon: TechIcons.Java, color: '#007396' },
  { name: 'Git', icon: TechIcons.Git, color: '#F05032' },
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mobile');
  const [animateCharts, setAnimateCharts] = useState(false);
  const [tabChangeKey, setTabChangeKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setAnimateCharts(true);
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

  // Reiniciar animación cuando cambia la pestaña
  useEffect(() => {
    if (isVisible) {
      setAnimateCharts(false);
      setTimeout(() => {
        setAnimateCharts(true);
        setTabChangeKey(prev => prev + 1);
      }, 50);
    }
  }, [activeTab, isVisible]);

  // Agregar estilos de animación globales
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes shimmer {
        0% { transform: translateX(-200%); }
        100% { transform: translateX(200%); }
      }
      @keyframes ping-slow {
        0% { transform: scale(0.95); opacity: 0.5; }
        50% { transform: scale(1.05); opacity: 0.2; }
        100% { transform: scale(0.95); opacity: 0.5; }
      }
      @keyframes glow-pulse {
        0% { opacity: 0.3; filter: blur(4px); }
        50% { opacity: 0.6; filter: blur(8px); }
        100% { opacity: 0.3; filter: blur(4px); }
      }
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
        100% { transform: translateY(0px); }
      }
      @keyframes scale-in {
        0% { transform: scale(0.8); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
      .animate-ping-slow {
        animation: ping-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      .animate-glow-pulse {
        animation: glow-pulse 2s ease-in-out infinite;
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      .animate-scale-in {
        animation: scale-in 0.5s ease-out forwards;
      }
      .animate-shimmer {
        animation: shimmer 2s infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 sm:py-32 relative bg-secondary/30 overflow-hidden"
    >
      {/* Background Elements con animación */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 animate-glow-pulse" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 animate-glow-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 animate-float"
          >
            <Layers className="w-4 h-4 mr-2" />
            Stack Tecnológico
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Tecnologías</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Full Stack & Mobile Developer con experiencia en desarrollo, despliegue y arquitectura de software
          </p>
        </div>

        {/* Tech Cloud with Real Icons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={tech.name}
                className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-default animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'backwards' }}
              >
                <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent />
                </div>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Skills Tabs */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Tabs
            defaultValue="mobile"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            {/* TabsList con estilo flotante y Glassmorphism */}
            <TabsList className="flex h-auto p-5 bg-secondary/50 border border-border/10 rounded-2xl max-w-4xl mx-auto mb-12 backdrop-blur-md">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex-1 py-3 px-6 rounded-xl data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-lg data-[state=active]:shadow-primary/5 font-semibold transition-all duration-300 gap-2"
                >
                  <category.icon className={`w-4 h-4 transition-transform duration-300 ${activeTab === category.id ? 'scale-110' : 'opacity-70'}`} />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Contenido con gráficos de pastel animados */}
            {skillCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0 focus-visible:outline-none"
              >
                <Card className="overflow-hidden border-border/40 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl shadow-2xl shadow-primary/5">
                  <div className="p-8 sm:p-12">
                    {/* Header de la categoría */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-12 animate-scale-in">
                      <div
                        className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-inner relative group/icon"
                        style={{ backgroundColor: `${category.color}15` }}
                      >
                        <category.icon
                          className="w-10 h-10 transition-transform duration-500 group-hover/icon:rotate-12"
                          style={{ color: category.color }}
                        />
                        <div className="absolute inset-0 rounded-3xl blur-2xl opacity-20 animate-glow-pulse" style={{ backgroundColor: category.color }} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-extrabold tracking-tight">{category.label}</h3>
                        <p className="text-muted-foreground text-lg">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Grid de Habilidades con gráficos de pastel */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {category.skills.map((skill, index) => {
                        const IconComponent = TechIcons[skill.name] || Code2;
                        return (
                          <div
                            key={`${skill.name}-${tabChangeKey}`}
                            className="group relative p-6 rounded-2xl border border-white/5 bg-card/40 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden animate-scale-in"
                            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'backwards' }}
                          >
                            {/* Resplandor de fondo dinámico al hover */}
                            <div 
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                              style={{ background: `radial-gradient(circle at 50% 50%, ${category.color}20 0%, transparent 80%)` }} 
                            />

                            <div className="flex flex-col items-center text-center gap-4">
                              {/* Donut Chart con icono en el centro y animación mejorada */}
                              <div className="relative flex items-center justify-center">
                                <DonutChart
                                  percentage={skill.level}
                                  color={category.color}
                                  size={120}
                                  isAnimating={animateCharts}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-14 h-14 rounded-xl bg-secondary/50 flex items-center justify-center p-2.5 border border-white/10 group-hover:border-primary/50 transition-all duration-500 shadow-lg group-hover:scale-110 group-hover:rotate-6">
                                    {typeof IconComponent === 'function' ? (
                                      <IconComponent />
                                    ) : (
                                      <IconComponent className="w-8 h-8" />
                                    )}
                                  </div>
                                </div>
                              </div>

                              {/* Información de la habilidad */}
                              <div className="mt-2">
                                <h4 className="font-bold text-xl tracking-tight group-hover:text-primary transition-colors">
                                  {skill.name}
                                </h4>
                                <div className="flex items-center justify-center gap-2 mt-2">
                                  <span className="text-3xl font-mono font-black text-primary/90 transition-all duration-500 group-hover:scale-110 inline-block">
                                    {skill.level}%
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    dominio
                                  </span>
                                </div>
                              </div>

                              {/* Barra de progreso complementaria */}
                              <div className="w-full mt-2">
                                <div className="relative h-1.5 w-full bg-black/20 rounded-full overflow-hidden border border-white/5">
                                  <div
                                    className="h-full rounded-full transition-all duration-[1500ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] relative"
                                    style={{
                                      width: animateCharts ? `${skill.level}%` : '0%',
                                      backgroundColor: category.color,
                                      boxShadow: `0 0 10px ${category.color}50`,
                                      transitionDelay: `${index * 100 + 400}ms`,
                                    }}
                                  >
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-shimmer" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Additional Skills Cards */}
        <div
          className={`grid sm:grid-cols-3 gap-6 mt-12 transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { icon: Code2, title: 'Clean Code', desc: 'Código limpio, mantenible y bien documentado siguiendo las mejores prácticas' },
            { icon: GitBranch, title: 'Version Control', desc: 'Git y GitHub para control de versiones colaborativo y organizado' },
            { icon: Layers, title: 'Arquitectura', desc: 'Patrones MVC, MVVM y principios SOLID para código escalable' },
          ].map((item, index) => (
            <Card
              key={item.title}
              className="p-6 bg-gradient-card border-border/50 text-center group hover:border-primary/30 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'backwards' }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { icon: Star, label: 'Calidad', value: '100%' },
            { icon: TrendingUp, label: 'Aprendizaje', value: 'Continuo' },
            { icon: Zap, label: 'Performance', value: 'Óptima' },
            { icon: Shield, label: 'Seguridad', value: 'Prioridad' },
          ].map((item, index) => (
            <div
              key={item.label}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'backwards' }}
            >
              <item.icon className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-semibold">{item.value}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}