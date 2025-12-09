"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  "/images/hero/hero-bg-1.jpg",
  "/images/hero/hero-bg-2.jpg",
  "/images/hero/hero-bg-3.jpg",
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative bg-[var(--lusso-ivory)] overflow-hidden pt-24 sm:pt-28 lg:pt-40 pb-12 sm:pb-16 lg:pb-24">
      {/* Asymmetric Layout Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center">

          {/* Left Column - Typography */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="overline"
            >
              design × branding × estratégia
            </motion.div>

            {/* Main Headline - Asymmetric Typography */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2.5rem,8vw,8rem)] leading-[0.95] text-[var(--lusso-charcoal)]"
                style={{ fontFamily: "'Helvetica Black', 'Helvetica', sans-serif" }}
              >
                transformamos
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2.5rem,8vw,8rem)] leading-[0.95] text-[var(--lusso-charcoal)] pl-6 sm:pl-12 lg:pl-20"
                style={{ fontFamily: "'Helvetica Black', 'Helvetica', sans-serif" }}
              >
                <span className="serif-italic font-accent">marcas</span> em
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2.5rem,8vw,8rem)] leading-[0.95]"
                style={{ fontFamily: "'Helvetica Black', 'Helvetica', sans-serif", color: '#510301' }}
              >
                experiências
              </motion.h1>
            </div>

            {/* Body Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md text-[var(--lusso-stone)] leading-relaxed text-sm sm:text-base lg:text-lg pl-0 sm:pl-0 lg:pl-8"
            >
              Criamos identidades visuais que capturam a essência das marcas e conectam
              de forma autêntica com seu público através de design estratégico e narrativas visuais.
            </motion.p>

            {/* CTA Buttons - Refined */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 lg:pl-8"
            >
              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[var(--lusso-charcoal)] text-[var(--lusso-ivory)] hover:bg-[var(--lusso-charcoal-soft)] transition-all duration-300 text-sm sm:text-base"
              >
                <span className="font-medium tracking-wide">ver portfólio</span>
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
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-[var(--lusso-charcoal)] text-[var(--lusso-charcoal)] hover:bg-[var(--lusso-charcoal)] hover:text-[var(--lusso-ivory)] transition-all duration-300 text-sm sm:text-base"
              >
                <span className="font-medium tracking-wide">iniciar projeto</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-sm overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Rotating Images */}
              <AnimatePresence mode="sync">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={heroImages[currentImageIndex]}
                    alt={`Agência Lusso - Design & Branding ${currentImageIndex + 1}`}
                    fill
                    className="object-cover grayscale-[30%] contrast-110"
                    priority={currentImageIndex === 0}
                    quality={90}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--lusso-charcoal)]/20 to-transparent z-10" />
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
          <span className="text-xs font-medium tracking-widest">scroll</span>
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
