"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/lib/portfolio-data";

export function PortfolioPreview() {
  const featuredProjects = getFeaturedProjects();

  // Define scattered layout positions and sizes for editorial aesthetic
  const layoutConfig = [
    { size: "large", aspect: "4/5", gridArea: "1 / 1 / 3 / 3" },
    { size: "medium", aspect: "3/4", gridArea: "1 / 3 / 2 / 4" },
    { size: "medium", aspect: "4/3", gridArea: "2 / 3 / 3 / 5" },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-[var(--lusso-warm-white)]">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header - Editorial Style */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overline mb-4"
          >
            Portfólio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-accent text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[var(--lusso-charcoal)] leading-tight mb-6"
          >
            Projetos em
            <br />
            <span className="serif-italic">Destaque</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--lusso-stone)] text-base sm:text-lg leading-relaxed"
          >
            Conheça alguns dos nossos trabalhos mais recentes
          </motion.p>
        </div>

        {/* Scattered Portfolio Grid - Editorial Layout */}
        <div className="space-y-8 lg:space-y-0">
          {/* Desktop: Scattered asymmetric grid */}
          <div className="hidden lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-8 mb-12">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                style={{ gridArea: layoutConfig[index]?.gridArea }}
                className="group relative overflow-hidden rounded-sm"
              >
                {/* Image Container */}
                <div className={`relative w-full overflow-hidden bg-[var(--lusso-taupe)]/10 aspect-[${layoutConfig[index]?.aspect || "4/5"}]`}>
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} - ${project.client}`}
                      fill
                      className="object-cover grayscale-[30%] contrast-110 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      sizes="(max-width: 1024px) 50vw, 40vw"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-[var(--lusso-sage)]/10 to-[var(--lusso-taupe)]/10">
                      <span className="font-accent text-5xl text-[var(--lusso-sage)]/20">
                        {project.client}
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay - Minimal & Refined */}
                  <div className="absolute inset-0 bg-[var(--lusso-charcoal)]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="text-[var(--lusso-ivory)]">
                      <div className="text-xs tracking-widest uppercase mb-3 text-[var(--lusso-sage)]">
                        {project.serviceType === "social-media" ? "Social Media" :
                         project.serviceType === "design" ? "Design" : "Branding"}
                      </div>
                      <h3 className="font-accent text-2xl lg:text-3xl mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[var(--lusso-taupe-light)] mb-4 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      {project.behanceUrl && (
                        <a
                          href={project.behanceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs tracking-wide uppercase text-[var(--lusso-ivory)] border-b border-[var(--lusso-ivory)]/50 hover:border-[var(--lusso-ivory)] transition-colors pb-1"
                        >
                          Ver Projeto
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Caption Below - Always Visible */}
                <div className="pt-4">
                  <h3 className="font-accent text-xl text-[var(--lusso-charcoal)] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--lusso-stone)]">
                    {project.client}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile/Tablet: Stacked vertical layout */}
          <div className="grid gap-8 sm:grid-cols-2 lg:hidden">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group relative overflow-hidden rounded-sm"
              >
                <div className="relative w-full overflow-hidden bg-[var(--lusso-taupe)]/10 aspect-[3/4]">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} - ${project.client}`}
                      fill
                      className="object-cover grayscale-[30%] contrast-110 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-[var(--lusso-sage)]/10 to-[var(--lusso-taupe)]/10">
                      <span className="font-accent text-5xl text-[var(--lusso-sage)]/20">
                        {project.client}
                      </span>
                    </div>
                  )}
                </div>

                <div className="pt-4">
                  <div className="text-xs tracking-widest uppercase mb-2 text-[var(--lusso-sage)]">
                    {project.serviceType === "social-media" ? "Social Media" :
                     project.serviceType === "design" ? "Design" : "Branding"}
                  </div>
                  <h3 className="font-accent text-xl text-[var(--lusso-charcoal)] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--lusso-stone)]">
                    {project.client}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Link - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 lg:mt-20"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 text-sm font-medium tracking-wide text-[var(--lusso-charcoal)] hover:text-[var(--lusso-sage)] transition-colors uppercase"
          >
            <span>Ver Todo o Portfólio</span>
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
