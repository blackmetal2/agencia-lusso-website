"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative bg-[var(--lusso-ivory)] overflow-hidden pt-32 lg:pt-40 pb-16 lg:pb-24">
      {/* Asymmetric Layout Grid */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Column - Typography */}
          <div className="lg:col-span-7 space-y-8">
            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="overline"
            >
              Design × Branding × Estratégia
            </motion.div>

            {/* Main Headline - Asymmetric Typography */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-accent text-[clamp(3rem,10vw,8rem)] leading-[0.95] tracking-tight text-[var(--lusso-charcoal)]"
              >
                Transformamos
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-accent text-[clamp(3rem,10vw,8rem)] leading-[0.95] tracking-tight text-[var(--lusso-charcoal)] pl-12 lg:pl-20"
              >
                <span className="serif-italic">marcas</span> em
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-accent text-[clamp(3rem,10vw,8rem)] leading-[0.95] tracking-tight"
                style={{ color: 'var(--lusso-sage)' }}
              >
                experiências
              </motion.h1>
            </div>

            {/* Body Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md text-[var(--lusso-stone)] leading-relaxed text-base lg:text-lg pl-0 lg:pl-8"
            >
              Criamos identidades visuais que capturam a essência das marcas e conectam
              de forma autêntica com seu público através de design estratégico e narrativas visuais.
            </motion.p>

            {/* CTA Buttons - Refined */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 pt-4 lg:pl-8"
            >
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--lusso-charcoal)] text-[var(--lusso-ivory)] hover:bg-[var(--lusso-charcoal-soft)] transition-all duration-300"
              >
                <span className="font-medium tracking-wide">Ver Portfólio</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/contato"
                className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[var(--lusso-charcoal)] text-[var(--lusso-charcoal)] hover:bg-[var(--lusso-charcoal)] hover:text-[var(--lusso-ivory)] transition-all duration-300"
              >
                <span className="font-medium tracking-wide">Iniciar Projeto</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/hero/hero-bg-1.jpg"
                alt="Agência Lusso - Design & Branding"
                fill
                className="object-cover grayscale-[30%] contrast-110"
                priority
                quality={90}
              />

              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--lusso-charcoal)]/20 to-transparent" />
            </motion.div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-8 -left-8 w-48 h-48 bg-[var(--lusso-sage)] opacity-20 rounded-full blur-3xl -z-10"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-[var(--lusso-stone)]">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-[var(--lusso-stone)]/30"
          />
        </div>
      </motion.div>
    </section>
  );
}
