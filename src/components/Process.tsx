import { Calendar, ClipboardCheck, HeartPulse } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Reserva tu cita",
    description: "Agenda online en minutos. Elige modalidad presencial o telemedicina.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Valoración & estudios",
    description: "Diagnóstico completo con revisión de imagen y plan de tratamiento.",
  },
  {
    icon: HeartPulse,
    number: "03",
    title: "Tratamiento & seguimiento",
    description: "Procedimiento en Star Médica con acompañamiento de Medical Agent.",
  },
];

export const Process = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proceso claro en 3 pasos
          </h2>
          <p className="text-lg text-muted-foreground">
            Tu camino hacia una vida sin dolor
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-16 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-primary via-cta to-accent rounded-full" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step Card */}
                <div className="card-elevated p-6 text-center relative z-10">
                  {/* Icon Circle */}
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-cta flex items-center justify-center mb-6 shadow-lg">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>

                  {/* Step Number */}
                  <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm font-bold rounded-full mb-4">
                    Paso {step.number}
                  </span>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>

                {/* Mobile Connection Line */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-cta rounded-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
