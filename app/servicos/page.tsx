"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "social-media",
    number: "01",
    title: "gestão de redes sociais",
    description:
      "Transformamos sua presença digital em resultados através de conteúdo estratégico e autêntico que conecta sua marca com o público certo.",
    features: [
      "Planejamento estratégico de conteúdo",
      "Criação de posts e stories personalizados",
      "Copywriting persuasivo e engajador",
      "Calendário editorial completo",
      "Análise de métricas e relatórios mensais",
      "Gestão de interações e comunidade",
      "Anúncios patrocinados (Meta Ads)",
    ],
    ideal: "Ideal para empresas que desejam crescer sua presença online de forma consistente e autêntica.",
  },
  {
    id: "design",
    number: "02",
    title: "design gráfico",
    description:
      "Desenvolvemos materiais visuais que comunicam a essência da sua marca com criatividade, profissionalismo e atenção aos detalhes.",
    features: [
      "Posts para redes sociais",
      "Stories e reels animados",
      "Materiais impressos (cartões, flyers, folders)",
      "Banners e outdoors",
      "Apresentações institucionais",
      "Cardápios e catálogos de produtos",
      "Materiais promocionais",
    ],
    ideal: "Ideal para marcas que valorizam design de qualidade e desejam se destacar da concorrência.",
  },
  {
    id: "branding",
    number: "03",
    title: "branding & identidade visual",
    description:
      "Construímos marcas memoráveis do zero ou revitalizamos identidades existentes com estratégia criativa e posicionamento claro.",
    features: [
      "Criação ou redesign de logotipo",
      "Manual de identidade visual completo",
      "Paleta de cores estratégica",
      "Tipografia personalizada",
      "Elementos gráficos e padrões",
      "Aplicações em diversos materiais",
      "Estratégia de posicionamento de marca",
    ],
    ideal: "Ideal para novos negócios ou empresas em rebranding que buscam uma identidade profissional e impactante.",
  },
];

export default function ServicosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-12 bg-[var(--lusso-ivory)]">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overline mb-4 sm:mb-6"
          >
            O Que Fazemos
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-accent text-4xl sm:text-5xl lg:text-7xl tracking-tight text-[var(--lusso-charcoal)] leading-tight mb-6 sm:mb-8"
          >
            nossos
            <br />
            <span className="serif-italic">serviços</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--lusso-stone)] text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Soluções completas de marketing, design e branding para elevar sua marca
            e gerar resultados reais.
          </motion.p>
        </div>
      </section>

      {/* Services - Alternating Layouts */}
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        const bgColor =
          index === 0
            ? "bg-[var(--lusso-warm-white)]"
            : index === 1
            ? "bg-[var(--lusso-sage)]/10"
            : "bg-[var(--lusso-charcoal)]";

        const textColor = index === 2 ? "text-[var(--lusso-ivory)]" : "text-[var(--lusso-charcoal)]";
        const accentColor = index === 2 ? "text-[var(--lusso-sage-muted)]" : "text-[var(--lusso-stone)]";

        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 ${bgColor}`}
          >
            <div className="container mx-auto max-w-7xl">
              <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-start">
                {/* Service Image - Left Column for odd indices, Right for even */}
                <div className={`lg:col-span-7 ${isEven ? "" : "lg:order-2"} order-first lg:order-none`}>
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-sm border border-[var(--lusso-taupe)]/20 shadow-lg group max-w-lg mx-auto lg:max-w-none">
                    <Image
                      src={
                        index === 0
                          ? "/images/services/social-media.jpg"
                          : index === 1
                          ? "/images/services/design-process.png"
                          : "/images/services/branding-work.jpg"
                      }
                      alt={`${service.title} - Agência Lusso`}
                      fill
                      className="object-cover grayscale-[30%] contrast-110 transition-all duration-500 group-hover:scale-105"
                      quality={90}
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 800px"
                    />
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--lusso-charcoal)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Service Content - Right Column for odd indices, Left for even */}
                <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                  <div>
                    <div
                      className={`text-6xl sm:text-7xl lg:text-9xl ${index === 2 ? "text-[var(--lusso-sage)]/20" : "text-[var(--lusso-sage)]/30"} mb-4 sm:mb-6 lg:mb-8`}
                      style={{ fontFamily: "'Helvetica Extra Compressed', 'Helvetica', sans-serif" }}
                    >
                      {service.number}
                    </div>

                    <h2 className={`font-accent text-3xl sm:text-4xl lg:text-5xl ${textColor} tracking-tight leading-tight mb-4 sm:mb-6`}>
                      {service.title}
                    </h2>

                    <p className={`${accentColor} text-base sm:text-lg leading-relaxed mb-6 sm:mb-8`}>
                      {service.description}
                    </p>

                    <p className={`text-xs sm:text-sm ${accentColor} italic mb-8 sm:mb-12`}>
                      {service.ideal}
                    </p>

                    <Link
                      href="/contato"
                      className={`inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base w-full sm:w-auto ${
                        index === 2
                          ? "bg-[var(--lusso-ivory)] text-[var(--lusso-charcoal)] hover:bg-[var(--lusso-sage)]"
                          : "bg-[var(--lusso-charcoal)] text-[var(--lusso-ivory)] hover:bg-[var(--lusso-sage)]"
                      } transition-all duration-300`}
                    >
                      <span className="font-medium tracking-wide">solicitar orçamento</span>
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

                    {/* Feature highlights - Condensed list */}
                    <div className="mt-8 sm:mt-12 space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <span className={`${index === 2 ? "text-[var(--lusso-sage)]" : "text-[var(--lusso-sage)]"} shrink-0 mt-1`}>
                            •
                          </span>
                          <span className={`${accentColor} text-xs sm:text-sm leading-relaxed`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <p className={`text-xs ${accentColor} italic mt-3 sm:mt-4`}>
                          + {service.features.length - 4} outros benefícios
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-[var(--lusso-ivory)]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="overline mb-3 sm:mb-4">nosso processo</div>
            <h2 className="font-accent text-3xl sm:text-4xl lg:text-6xl tracking-tight text-[var(--lusso-charcoal)] leading-tight">
              como
              <br />
              <span className="serif-italic">trabalhamos</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "descoberta",
                description: "Entendemos profundamente seu negócio, objetivos e público-alvo.",
              },
              {
                step: "02",
                title: "estratégia",
                description: "Criamos um plano personalizado alinhado com suas metas.",
              },
              {
                step: "03",
                title: "execução",
                description: "Desenvolvemos o projeto com excelência e atenção aos detalhes.",
              },
              {
                step: "04",
                title: "acompanhamento",
                description: "Monitoramos resultados e ajustamos conforme necessário.",
              },
            ].map((item, idx) => (
              <div
                key={item.step}
                className="space-y-3 sm:space-y-4"
              >
                <div
                  className="text-5xl sm:text-6xl text-[var(--lusso-sage)]/30"
                  style={{ fontFamily: "'Helvetica Extra Compressed', 'Helvetica', sans-serif" }}
                >
                  {item.step}
                </div>
                <h3 className="font-accent text-xl sm:text-2xl text-[var(--lusso-charcoal)]">
                  {item.title}
                </h3>
                <p className="text-[var(--lusso-stone)] leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
