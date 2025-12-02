"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { getFeaturedProjects } from "@/lib/portfolio-data";
import { AnimatedText } from "@/components/shared/AnimatedText";

export function PortfolioPreview() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="bg-[var(--lusso-cream)]/30 py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <AnimatedText className="text-center">
          <h2 className="font-heading text-3xl font-bold text-[var(--lusso-burgundy)] md:text-4xl lg:text-5xl">
            Projetos em Destaque
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Conheça alguns dos nossos trabalhos mais recentes
          </p>
        </AnimatedText>

        {/* Portfolio Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <AnimatedText
              key={project.id}
              animationType="fadeInUp"
              delay={index * 0.2}
            >
              <PortfolioCard project={project} />
            </AnimatedText>
          ))}
        </div>

        {/* View All Link */}
        <AnimatedText className="mt-12 text-center" delay={0.6}>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-lg font-medium text-[var(--lusso-burgundy)] transition-colors hover:text-[var(--lusso-gold)]"
          >
            Ver Todo o Portfólio
            <span className="text-2xl">→</span>
          </Link>
        </AnimatedText>
      </div>
    </section>
  );
}
