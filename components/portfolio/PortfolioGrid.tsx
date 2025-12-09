"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioCard } from "./PortfolioCard";
import { portfolioItems } from "@/lib/portfolio-data";

const filters = [
  { id: "all", label: "todos" },
  { id: "social-media", label: "social media" },
  { id: "design", label: "design" },
  { id: "branding", label: "branding" },
];

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.serviceType === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-24 px-6 lg:px-12 bg-[var(--lusso-ivory)]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overline mb-6 text-center"
          >
            Trabalhos Selecionados
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-accent text-6xl lg:text-7xl tracking-tight text-[var(--lusso-charcoal)] leading-tight text-center mb-8"
          >
            nosso
            <br />
            <span className="serif-italic">portfólio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--lusso-stone)] text-lg leading-relaxed max-w-2xl mx-auto text-center mb-12"
          >
            Projetos que transformaram marcas em experiências memoráveis
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-[var(--lusso-charcoal)] text-[var(--lusso-ivory)]"
                    : "border border-[var(--lusso-taupe)]/30 text-[var(--lusso-charcoal)] hover:border-[var(--lusso-sage)]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6 lg:px-12 bg-[var(--lusso-warm-white)]">
        <div className="container mx-auto max-w-7xl">
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <PortfolioCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <p className="text-lg text-[var(--lusso-stone)]">
                Nenhum projeto encontrado para este filtro.
              </p>
            </motion.div>
          )}
        </div>
      </section>

    </div>
  );
}
