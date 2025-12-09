"use client";

import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "A Lusso transformou completamente nossa presença digital. O trabalho deles é impecável e superou todas as expectativas.",
      author: "Cliente 01",
      role: "Influenciador Digital",
      image: "/images/testimonials/client-01.jpg",
    },
    {
      quote:
        "Profissionalismo, criatividade e atenção aos detalhes em cada entrega. Recomendo de olhos fechados!",
      author: "Cliente 02",
      role: "Criadora de Conteúdo",
      image: "/images/testimonials/client-02.jpg",
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-[var(--lusso-ivory)]">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header - Refined Editorial Style */}
        <div className="max-w-2xl mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overline mb-4"
          >
            Depoimentos
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-accent text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[var(--lusso-charcoal)] leading-tight"
          >
            o que nossos
            <br />
            <span className="serif-italic">clientes dizem</span>
          </motion.h2>
        </div>

        {/* Testimonials - Editorial Magazine Layout */}
        <div className="space-y-24 lg:space-y-32">
          {testimonials.map((testimonial, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-start ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Quote Section - Large, Impactful */}
                <div className={`lg:col-span-8 ${isEven ? "" : "lg:col-start-5"}`}>
                  {/* Decorative Quote Mark */}
                  <div className="relative">
                    <svg
                      className="w-12 h-12 sm:w-16 sm:h-16 text-[var(--lusso-sage)]/20 mb-6"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
                    </svg>

                    {/* Main Quote */}
                    <blockquote className="relative">
                      <p className="font-accent text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-[var(--lusso-charcoal)] tracking-tight mb-8">
                        {testimonial.quote}
                      </p>
                    </blockquote>

                    {/* Decorative Line */}
                    <div className="w-16 h-px bg-[var(--lusso-sage)]/30 mb-6" />

                    {/* Author Attribution - Minimal & Elegant (No Photo) */}
                    <div>
                      <p className="font-medium text-base text-[var(--lusso-charcoal)]">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-[var(--lusso-stone)]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Large Number - Helvetica Extra Compressed */}
                <div className={`lg:col-span-4 ${isEven ? "lg:order-last" : "lg:col-start-1 lg:row-start-1"} hidden lg:flex items-start justify-center`}>
                  <div className="relative">
                    <span
                      className="text-[12rem] lg:text-[14rem] leading-none text-[var(--lusso-sage)]/10 select-none"
                      style={{
                        fontFamily: "'Helvetica Extra Compressed', 'Helvetica', sans-serif",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-[var(--lusso-sage)]/20 to-transparent mt-24 lg:mt-32 origin-center"
        />
      </div>
    </section>
  );
}
