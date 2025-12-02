"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "social-media",
    number: "01",
    title: "Gestão de Redes Sociais",
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
    title: "Design Gráfico",
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
    title: "Branding & Identidade Visual",
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
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-24 px-6 lg:px-12 bg-[var(--lusso-ivory)]">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overline mb-6"
          >
            O Que Fazemos
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-accent text-6xl lg:text-7xl tracking-tight text-[var(--lusso-charcoal)] leading-tight mb-8"
          >
            Nossos
            <br />
            <span className="serif-italic">Serviços</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--lusso-stone)] text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
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
            className={`py-20 lg:py-24 px-6 lg:px-12 ${bgColor}`}
          >
            <div className="container mx-auto max-w-7xl">
              <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
                {/* Service Number & Title */}
                <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-2"}`}>
                  <div>
                    <div className={`font-accent text-8xl lg:text-9xl ${index === 2 ? "text-[var(--lusso-sage)]/20" : "text-[var(--lusso-sage)]/30"} mb-8`}>
                      {service.number}
                    </div>

                    <h2 className={`font-accent text-4xl lg:text-5xl ${textColor} tracking-tight leading-tight mb-6`}>
                      {service.title}
                    </h2>

                    <p className={`${accentColor} text-lg leading-relaxed mb-8`}>
                      {service.description}
                    </p>

                    <p className={`text-sm ${accentColor} italic mb-12`}>
                      {service.ideal}
                    </p>

                    <Link
                      href="/contato"
                      className={`inline-flex items-center gap-3 px-8 py-4 ${
                        index === 2
                          ? "bg-[var(--lusso-ivory)] text-[var(--lusso-charcoal)] hover:bg-[var(--lusso-sage)]"
                          : "bg-[var(--lusso-charcoal)] text-[var(--lusso-ivory)] hover:bg-[var(--lusso-sage)]"
                      } transition-all duration-300`}
                    >
                      <span className="font-medium tracking-wide">Solicitar Orçamento</span>
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
                  </div>
                </div>

                {/* Features List */}
                <div className={`lg:col-span-7 ${isEven ? "" : "lg:order-1"}`}>
                  <div>
                    <div className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className={`py-4 border-b ${index === 2 ? "border-[var(--lusso-ivory)]/10" : "border-[var(--lusso-taupe)]/20"} last:border-0`}
                        >
                          <div className="flex items-start gap-4">
                            <span className={`font-accent text-2xl ${index === 2 ? "text-[var(--lusso-sage)]" : "text-[var(--lusso-sage)]"} shrink-0`}>
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            <span className={`${accentColor} text-base leading-relaxed pt-1`}>
                              {feature}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Process Section */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 bg-[var(--lusso-ivory)]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="overline mb-4">Nosso Processo</div>
            <h2 className="font-accent text-5xl lg:text-6xl tracking-tight text-[var(--lusso-charcoal)] leading-tight">
              Como
              <br />
              <span className="serif-italic">Trabalhamos</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Descoberta",
                description: "Entendemos profundamente seu negócio, objetivos e público-alvo.",
              },
              {
                step: "02",
                title: "Estratégia",
                description: "Criamos um plano personalizado alinhado com suas metas.",
              },
              {
                step: "03",
                title: "Execução",
                description: "Desenvolvemos o projeto com excelência e atenção aos detalhes.",
              },
              {
                step: "04",
                title: "Acompanhamento",
                description: "Monitoramos resultados e ajustamos conforme necessário.",
              },
            ].map((item, idx) => (
              <div
                key={item.step}
                className="space-y-4"
              >
                <div className="font-accent text-6xl text-[var(--lusso-sage)]/30">
                  {item.step}
                </div>
                <h3 className="font-accent text-2xl text-[var(--lusso-charcoal)]">
                  {item.title}
                </h3>
                <p className="text-[var(--lusso-stone)] leading-relaxed">
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
