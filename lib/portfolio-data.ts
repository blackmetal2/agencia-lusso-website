import { PortfolioItem, ServiceType } from "@/types/portfolio";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "richard-arraz",
    title: "Richard Arraz - Brand Support",
    client: "@richardarraz_",
    serviceType: "social-media",
    description:
      "Apoio estratégico na criação de conteúdo e posicionamento digital para influenciador.",
    thumbnail: "/images/portfolio/real/richardarraz.jpg",
    images: ["/images/portfolio/real/richardarraz.jpg"],
    year: 2024,
    featured: true,
  },
  {
    id: "lilia-coutinho-mediakit",
    title: "Lilia Coutinho - Media Kit",
    client: "@liliacoutinho__",
    serviceType: "design",
    description:
      "Produção fotográfica completa e design de mídia kit profissional para criadora de conteúdo.",
    thumbnail: "/images/portfolio/real/liliacoutinho-1.jpg",
    images: [
      "/images/portfolio/real/liliacoutinho-1.jpg",
      "/images/portfolio/real/liliacoutinho-2.jpg",
    ],
    year: 2024,
    featured: true,
  },
  {
    id: "janaina-tayeda",
    title: "Janaina Tayeda Hair Studio",
    client: "Janaina Tayeda",
    serviceType: "branding",
    description:
      "Identidade visual completa para estúdio de cabelo de luxo, incluindo logo, paleta de cores e material gráfico.",
    thumbnail: "/images/portfolio/janaina-tayeda/thumb.jpg",
    images: [
      "/images/portfolio/janaina-tayeda/1.jpg",
      "/images/portfolio/janaina-tayeda/2.jpg",
      "/images/portfolio/janaina-tayeda/3.jpg",
    ],
    behanceUrl: "https://www.behance.net/gallery/165582853/Hair-studio-Janaina-Tayeda",
    year: 2024,
    featured: true,
  },
  {
    id: "mova",
    title: "MOVA Sportswear",
    client: "MOVA",
    serviceType: "branding",
    description:
      "Marca de roupas esportivas com identidade forte e moderna, desenvolvida para o público fitness.",
    thumbnail: "/images/portfolio/mova/thumb.jpg",
    images: [
      "/images/portfolio/mova/1.jpg",
      "/images/portfolio/mova/2.jpg",
    ],
    behanceUrl: "https://www.behance.net/gallery/163883745/Sportswear-brand-visual-identity",
    year: 2024,
    featured: true,
  },
  {
    id: "crioexpress",
    title: "CrioExpress",
    client: "CrioExpress",
    serviceType: "branding",
    description:
      "Identidade visual para empresa de logística, com foco em modernidade e confiabilidade.",
    thumbnail: "/images/portfolio/crioexpress/thumb.jpg",
    images: ["/images/portfolio/crioexpress/1.jpg"],
    behanceUrl: "https://www.behance.net/gallery/160070363/Visual-identity-CrioExpress",
    year: 2024,
    featured: true,
  },
  {
    id: "smc-branding",
    title: "SMC Branding",
    client: "SMC",
    serviceType: "branding",
    description:
      "Desenvolvimento de marca com identidade visual única e memorável.",
    thumbnail: "/images/portfolio/smc/thumb.jpg",
    images: ["/images/portfolio/smc/1.jpg"],
    behanceUrl: "https://www.behance.net/gallery/159792847/Branding-SMC",
    year: 2024,
    featured: false,
  },
  {
    id: "thrift-store",
    title: "Brechó - Visual Identity",
    client: "Acervo & Moda",
    serviceType: "branding",
    description:
      "Identidade visual para brechó, com design autêntico e sustentável.",
    thumbnail: "/images/portfolio/thrift/thumb.jpg",
    images: ["/images/portfolio/thrift/1.jpg"],
    behanceUrl: "https://www.behance.net/gallery/126913831/Visual-identity-for-thrift-store",
    year: 2023,
    featured: false,
  },
  {
    id: "cosmetics-brand",
    title: "Cosmetics Brand",
    client: "Beauty Co.",
    serviceType: "branding",
    description:
      "Marca de cosméticos com identidade visual elegante e sofisticada.",
    thumbnail: "/images/portfolio/cosmetics/thumb.jpg",
    images: ["/images/portfolio/cosmetics/1.jpg"],
    behanceUrl: "https://www.behance.net/gallery/119298147/Visual-identity-cosmetics-brand",
    year: 2023,
    featured: false,
  },
];

// Helper functions
export function getFeaturedProjects(): PortfolioItem[] {
  return portfolioItems.filter((item) => item.featured);
}

export function getProjectsByService(serviceType: string): PortfolioItem[] {
  if (serviceType === "all") return portfolioItems;
  return portfolioItems.filter((item) => item.serviceType === serviceType);
}

export function getProjectById(id: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.id === id);
}
