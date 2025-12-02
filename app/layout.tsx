import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

// Display font - Refined editorial elegance
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Body font - Sophisticated readability
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agência Lusso | Marketing, Design e Branding",
  description: "Transformamos marcas em experiências inesquecíveis. Especialistas em gestão de redes sociais, design gráfico e branding.",
  keywords: ["marketing digital", "design gráfico", "branding", "identidade visual", "redes sociais", "agência de marketing"],
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { SmoothScroll } from "@/components/shared/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${cormorant.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <SmoothScroll />
        <CustomCursor />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
