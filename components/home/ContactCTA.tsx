"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function ContactCTA() {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-12 bg-[var(--lusso-charcoal)]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overline !text-[var(--lusso-sage-muted)]"
          >
            Vamos Conversar
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-accent text-5xl lg:text-6xl text-[var(--lusso-ivory)] tracking-tight leading-tight"
          >
            Pronto para
            <br />
            <span className="serif-italic">elevar sua marca?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--lusso-taupe)] text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Vamos trabalhar juntos para transformar sua marca em uma experiência
            inesquecível. Entre em contato e descubra como podemos ajudar seu
            negócio a crescer.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Link
              href="/contato"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--lusso-ivory)] text-[var(--lusso-charcoal)] hover:bg-[var(--lusso-sage)] hover:text-[var(--lusso-ivory)] transition-all duration-300"
            >
              <span className="font-medium tracking-wide">Fale Conosco</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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

            <Link
              href="https://wa.me/5527998507890?text=Olá! Gostaria de saber mais sobre os serviços da Agência Lusso."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[var(--lusso-ivory)] text-[var(--lusso-ivory)] hover:bg-[var(--lusso-ivory)] hover:text-[var(--lusso-charcoal)] transition-all duration-300"
            >
              <span className="font-medium tracking-wide">WhatsApp</span>
            </Link>
          </motion.div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xs text-[var(--lusso-stone)] tracking-wide pt-4"
          >
            Respondemos todas as mensagens em até 24 horas
          </motion.p>
        </div>
      </div>
    </section>
  );
}
