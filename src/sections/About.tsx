import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  GraduationCap,
  Calendar,
  MapPin,
  User,
  Target,
  Lightbulb,
  Code2,
  Zap,
  Award,
  Briefcase,
  Rocket,
} from 'lucide-react';

const stats = [
  { label: 'Año de experiencia', value: '1', icon: Calendar },
  { label: 'Proyectos completados', value: '4', icon: Briefcase },
  { label: 'Tecnologías que uso', value: '8', icon: Code2 },
];

const education = [
  {
    school: 'ITCA FEPADE',
    location: 'San Miguel, El Salvador',
    degree: 'Técnico en Desarrollo de Software',
    period: '2022 - 2025',
    description: 'Formación técnica especializada en desarrollo de aplicaciones web y móvil.',
  },
];

const interests = [
  { icon: Target, label: 'Testing Exhaustivo', color: '#3B82F6' },
  { icon: Lightbulb, label: 'Solución de Bugs', color: '#F59E0B' },
  { icon: Code2, label: 'Scrum Master', color: '#10B981' },
  { icon: Rocket, label: 'Startups', color: '#EF4444' },
  { icon: Zap, label: 'Performance', color: '#8B5CF6' },
  { icon: Award, label: 'Calidad', color: '#EC4899' },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      className="py-24 sm:py-32 relative overflow-hidden bg-background"
    >
      {/* Luces de fondo dinámicas */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Encabezado Principal */}
        <div className={`text-center mb-24 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Badge variant="outline" className="mb-4 px-6 py-1.5 border-primary/30 text-primary bg-primary/5 rounded-full backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 mr-2 animate-bounce" />
            Obsesionado con el Código Limpio
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Más que un <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Programador</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            19 años de pasión por la tecnología en San Miguel. Mi meta no es solo que funcione, sino que sea <span className="text-foreground font-bold italic">irrompible</span>.
          </p>
        </div>

        {/* Stats Estilo Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`p-[1px] rounded-3xl bg-gradient-to-b from-primary/20 to-transparent transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Card className="bg-card/50 backdrop-blur-xl border-none p-8 rounded-[23px] text-center group hover:bg-card/80 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-4xl font-black mb-1 tracking-tighter">{stat.value}</div>
                <div className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">{stat.label}</div>
              </Card>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Columna Izquierda (Perfil y Liderazgo) - 7 columnas */}
          <div className={`lg:col-span-7 space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            
            {/* Tarjeta de Liderazgo (Scrum Master) */}
            <Card className="p-8 border-primary/10 bg-gradient-to-br from-card to-primary/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Rocket className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Code2 className="text-primary" /> Mentalidad de Liderazgo
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Como <span className="text-foreground font-semibold">Scrum Master</span>, he liderado equipos enfocándome en la arquitectura limpia y la delegación eficiente. Mi responsabilidad no termina en mi código; reviso y aseguro que cada commit de mi equipo cumpla con los estándares de calidad.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-primary font-bold">
                  <Target className="w-4 h-4" /> Testing Riguroso
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-400 font-bold">
                  <Zap className="w-4 h-4" /> Optimización Proactiva
                </div>
              </div>
            </Card>

            {/* Historia / Stack */}
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-6 border-white/5 bg-secondary/20">
                <h4 className="font-bold mb-3">Formación ITCA</h4>
                <p className="text-sm text-muted-foreground">San Miguel es mi centro de operaciones, donde me gradué como Técnico en Software, forjando las bases de lo que hoy construyo.</p>
              </Card>
              <Card className="p-6 border-white/5 bg-secondary/20">
                <h4 className="font-bold mb-3">Multidisciplinario</h4>
                <p className="text-sm text-muted-foreground">Desde Flutter para móviles hasta Laravel para robustos backends. Mi versatilidad es mi mayor ventaja competitiva.</p>
              </Card>
            </div>

            {/* Intereses como Tags Premium */}
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <div
                  key={interest.label}
                  className="px-4 py-2 rounded-full border border-primary/10 bg-primary/5 hover:bg-primary/10 transition-colors flex items-center gap-2 group cursor-default"
                >
                  <interest.icon className="w-3.5 h-3.5 transition-transform group-hover:rotate-12" style={{ color: interest.color }} />
                  <span className="text-xs font-bold tracking-wide uppercase">{interest.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha (Educación y Filosofía) - 5 columnas */}
          <div className={`lg:col-span-5 space-y-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            
            {/* Educación Estilo Línea de Tiempo */}
            <Card className="p-8 bg-card/40 border-primary/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <GraduationCap className="text-primary" /> Educación
              </h3>
              <div className="space-y-8">
                {education.map((edu, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                    <h4 className="font-bold text-lg leading-tight">{edu.school}</h4>
                    <p className="text-primary text-sm font-semibold mb-2">{edu.degree}</p>
                    <div className="flex items-center gap-4 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {edu.period}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {edu.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Filosofía / Quote - Diseño Minimalista */}
            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary/20 to-blue-500/20 border border-white/10 text-center group">
              <Award className="w-10 h-10 text-primary mx-auto mb-4 group-hover:rotate-12 transition-transform" />
              <p className="text-lg font-medium italic leading-relaxed text-foreground">
                "Un código que no está bien testeado es código que no está listo."
              </p>
              <div className="mt-4 h-[1px] w-12 bg-primary mx-auto opacity-50" />
              <p className="mt-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">Filosofía de Desarrollo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}