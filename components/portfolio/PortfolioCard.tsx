"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PortfolioItem } from "@/types/portfolio";

interface PortfolioCardProps {
  project: PortfolioItem;
}

const serviceLabels = {
  "social-media": "Social Media",
  design: "Design",
  branding: "Branding",
};

export function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--lusso-taupe)]/10">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={`${project.title} - ${project.client}`}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-[var(--lusso-sage)]/10 to-[var(--lusso-taupe)]/10">
            <span className="font-accent text-5xl text-[var(--lusso-sage)]/20">
              {project.client}
            </span>
          </div>
        )}

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-[var(--lusso-sage)]/90 p-8 flex flex-col justify-end"
        >
          <div className="text-[var(--lusso-ivory)]">
            <div className="text-xs tracking-widest uppercase mb-3 text-[var(--lusso-taupe-light)]">
              {serviceLabels[project.serviceType]}
            </div>
            <h3 className="font-accent text-3xl mb-2 leading-tight">
              {project.title}
            </h3>
            <p className="text-sm text-[var(--lusso-taupe-light)] mb-4 leading-relaxed">
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
                <svg
                  className="w-3 h-3"
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
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Project Info Below */}
      <div className="pt-4">
        <h3 className="font-accent text-xl text-[var(--lusso-charcoal)] mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--lusso-stone)]">
          {project.client}
        </p>
      </div>
    </motion.div>
  );
}
