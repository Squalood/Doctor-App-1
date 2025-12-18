import { Button } from "@/components/ui/button";
import { Stethoscope, Syringe, Activity, Clock, ArrowRight } from "lucide-react";

interface ServicesProps {
  onBookingClick: () => void;
}

const services = [
  {
    icon: Stethoscope,
    title: "Consulta de valoración",
    price: "Desde $1,500 MXN",
    duration: "45-60 min",
    benefit: "Diagnóstico preciso con tecnología de imagen avanzada",
    color: "primary",
  },
  {
    icon: Syringe,
    title: "Infiltración columna",
    price: "Desde $8,000 MXN",
    duration: "~1 hora",
    benefit: "Procedimiento ambulatorio, misma día alta médica",
    color: "cta",
  },
  {
    icon: Activity,
    title: "Cirugía neuroquirúrgica",
    price: "Cotización personalizada",
    duration: "Variable",
    benefit: "Quirófanos prioritarios en Star Médica certificados",
    color: "accent",
  },
];

export const Services = ({ onBookingClick }: ServicesProps) => {
  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Servicios especializados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atención integral en neurocirugía con los más altos estándares de calidad
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              onBookingClick={onBookingClick}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  price: string;
  duration: string;
  benefit: string;
  color: string;
  onBookingClick: () => void;
  delay: number;
}

const ServiceCard = ({
  icon: Icon,
  title,
  price,
  duration,
  benefit,
  color,
  onBookingClick,
  delay,
}: ServiceCardProps) => {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    cta: "bg-cta/10 text-cta",
    accent: "bg-accent/10 text-accent",
  }[color] || "bg-primary/10 text-primary";

  return (
    <div
      className="card-elevated p-6 flex flex-col h-full animate-fade-in-up opacity-0"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl ${colorClasses} flex items-center justify-center mb-5`}>
        <Icon className="w-7 h-7" />
      </div>

      {/* Title */}
      <h3 className="font-heading text-xl font-bold text-foreground mb-2">{title}</h3>

      {/* Price & Duration */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-lg font-semibold text-foreground">{price}</span>
        <span className="flex items-center gap-1 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          {duration}
        </span>
      </div>

      {/* Benefit */}
      <p className="text-muted-foreground text-sm grow mb-6">{benefit}</p>

      {/* CTA */}
      <Button
        variant="outline"
        size="sm"
        className="w-full group"
        onClick={onBookingClick}
      >
        Reservar
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
};
