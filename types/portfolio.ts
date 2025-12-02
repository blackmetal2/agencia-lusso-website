export type ServiceType = "social-media" | "design" | "branding";

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  serviceType: ServiceType;
  description: string;
  thumbnail: string;
  images: string[];
  behanceUrl?: string;
  instagramUrl?: string;
  year: number;
  featured: boolean;
}
