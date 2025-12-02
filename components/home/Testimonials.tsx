"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { AnimatedText } from "@/components/shared/AnimatedText";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "A Lusso transformou completamente nossa presença digital. O trabalho deles é impecável e superou todas as expectativas.",
      author: "Richard Arraz",
      role: "Influenciador Digital",
      image: "/images/portfolio/real/richardarraz.jpg",
    },
    {
      quote:
        "Profissionalismo, criatividade e atenção aos detalhes em cada entrega. Recomendo de olhos fechados!",
      author: "Lilia Coutinho",
      role: "Criadora de Conteúdo",
      image: "/images/portfolio/real/liliacoutinho-1.jpg",
    },
  ];

  return (
    <section className="py-20 bg-[var(--lusso-cream)]/30">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedText className="text-center mb-16">
          <h2 className="font-accent text-5xl md:text-6xl font-bold text-[var(--lusso-burgundy)] mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="subtitle">Depoimentos</p>
        </AnimatedText>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedText key={index} delay={index * 0.2}>
              <Card className="p-8 border-2 border-border hover:border-[var(--lusso-burgundy)] transition-all duration-300 h-full">
                <blockquote className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--lusso-burgundy)]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
}
