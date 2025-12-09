"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "gestão de redes sociais",
    description:
      "Criamos conteúdo estratégico e autêntico que conecta sua marca com o público certo.",
    href: "/servicos#social-media",
  },
  {
    number: "02",
    title: "design gráfico",
    description:
      "Desenvolvemos materiais visuais que comunicam a essência da sua marca.",
    href: "/servicos#design",
  },
  {
    number: "03",
    title: "branding & identidade visual",
    description:
      "Construímos marcas memoráveis do zero ou revitalizamos identidades existentes.",
    href: "/servicos#branding",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-12 bg-[var(--lusso-warm-white)]">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3 }}
            className="overline mb-4"
          >
            Serviços
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3 }}
            className="font-accent text-5xl lg:text-6xl tracking-tight text-[var(--lusso-charcoal)] leading-tight"
          >
            soluções que
            <br />
            <span className="serif-italic">elevam marcas</span>
          </motion.h2>
        </div>

        {/* Service Items */}
        <div className="space-y-2">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.25, delay: index * 0.03 }}
            >
              <Link
                href={service.href}
                className="group block border-t border-[var(--lusso-taupe)]/30 py-8 lg:py-12 transition-colors hover:border-[var(--lusso-sage)]"
              >
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                  {/* Number - Helvetica Extra Compressed */}
                  <div className="lg:col-span-2">
                    <span
                      className="text-6xl lg:text-7xl text-[var(--lusso-sage)]/30 group-hover:text-[var(--lusso-sage)] transition-colors"
                      style={{
                        fontFamily: "'Helvetica Extra Compressed', 'Helvetica', sans-serif",
                        letterSpacing: '0.05em',
                      }}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="lg:col-span-5">
                    <h3 className="font-accent text-3xl lg:text-4xl text-[var(--lusso-charcoal)] group-hover:text-[var(--lusso-sage)] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-4">
                    <p className="text-[var(--lusso-stone)] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="lg:col-span-1 flex justify-end">
                    <svg
                      className="w-6 h-6 text-[var(--lusso-stone)] group-hover:translate-x-2 group-hover:text-[var(--lusso-sage)] transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom border */}
        <div className="border-t border-[var(--lusso-taupe)]/30 mt-2" />

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <Link
            href="/servicos"
            className="inline-flex items-center gap-3 text-sm font-medium tracking-wide text-[var(--lusso-charcoal)] hover:text-[var(--lusso-sage)] transition-colors"
          >
            <span>ver todos os serviços</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
