import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
  Copy,
  Check,
  MessageCircle,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'gamewil50@gmail.com',
    href: 'mailto:gamewil50@gmail.com',
    color: 'text-red-500',
    bg: 'bg-red-500/10',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+503 7081 4917',
    href: 'https://wa.me/50370814917',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'San Miguel, El Salvador',
    href: 'https://www.google.com/maps/search/San+Miguel,+El+Salvador',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
];

const socialLinks = [

  { icon: Github, href: "https://github.com/Gerso1212121" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/gerson-franco-854390356/" },
  { icon: Mail, href: "mailto:gamewil50@gmail.com" }
];

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const { toast } = useToast();

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

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    toast({
      title: "Copiado al portapapeles",
      description: `${label} copiado con éxito.`,
    });
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge variant="outline" className="mb-4 py-1 px-4 border-primary/30 text-primary bg-primary/5">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Disponible para colaborar
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            ¡Hablemos de tu <span className="text-primary">Proyecto</span>!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            No necesitas formularios. Contáctame directamente a través de cualquiera de estos medios y te responderé de inmediato.
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {contactMethods.map((method) => (
            <Card
              key={method.label}
              className="group p-6 bg-card/40 backdrop-blur-xl border-border/50 hover:border-primary/50 hover:bg-card/60 transition-all duration-500 relative overflow-hidden"
            >
              <div className={`w-14 h-14 rounded-2xl ${method.bg} ${method.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <method.icon className="w-7 h-7" />
              </div>

              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{method.label}</p>
              <p className="text-lg font-bold mb-6 break-all">{method.value}</p>

              <div className="flex gap-2">
                <Button
                  variant="default"
                  className="flex-1 rounded-xl shadow-lg shadow-primary/20"
                  asChild
                >
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ir
                  </a>
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-xl"
                  onClick={() => copyToClipboard(method.value, method.label)}
                >
                  {copied === method.label ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer de Contacto */}
        <div className={`mt-16 flex flex-col md:flex-row items-center justify-between p-8 rounded-3xl bg-secondary/30 border border-white/5 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Gerson Wilfredo Franco</h3>
            <p className="text-muted-foreground">Full Stack & Mobile Developer de San Miguel</p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1 shadow-sm"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}