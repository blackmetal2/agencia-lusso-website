"use client";

import { Button } from "@/components/ui/button";

interface PortfolioFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { value: "all", label: "Todos" },
  { value: "social-media", label: "Social Media" },
  { value: "design", label: "Design" },
  { value: "branding", label: "Branding" },
];

export function PortfolioFilter({
  activeFilter,
  onFilterChange,
}: PortfolioFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          variant={activeFilter === filter.value ? "default" : "outline"}
          className={`transition-all duration-300 ${
            activeFilter === filter.value
              ? "bg-[var(--lusso-burgundy)] text-white hover:bg-[var(--lusso-burgundy-dark)]"
              : "border-[var(--lusso-burgundy)] text-[var(--lusso-burgundy)] hover:bg-[var(--lusso-burgundy)] hover:text-white"
          }`}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}
