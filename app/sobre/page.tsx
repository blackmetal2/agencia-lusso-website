"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SobrePage() {
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
            Quem Somos
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-accent text-6xl lg:text-7xl tracking-tight text-[var(--lusso-charcoal)] leading-tight mb-8"
          >
            Sobre a
            <br />
            <span className="serif-italic">Agência Lusso</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--lusso-stone)] text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Transformamos marcas em experiências inesquecíveis através de design,
            branding e estratégias visuais memoráveis.
          </motion.p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 bg-[var(--lusso-warm-white)]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
            <div className="lg:col-span-5">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3 }}
                className="font-accent text-5xl lg:text-6xl text-[var(--lusso-charcoal)] tracking-tight leading-tight mb-8"
              >
                Nossa
                <br />
                <span className="serif-italic">História</span>
              </motion.h2>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-[var(--lusso-stone)] leading-relaxed"
              >
                <p>
                  A Agência Lusso nasceu da paixão por criar marcas que realmente
                  conectam com as pessoas. Fundada no Espírito Santo, começamos com
                  um propósito claro: elevar negócios através de design excepcional
                  e estratégias de marketing autênticas.
                </p>
                <p>
                  Ao longo da nossa jornada, tivemos o privilégio de trabalhar com
                  diversos clientes, desde pequenos empreendedores até empresas
                  consolidadas, ajudando cada um a contar sua história de forma única
                  e memorável.
                </p>
                <p>
                  Hoje, somos especialistas em gestão de redes sociais, design gráfico
                  e branding, oferecendo soluções completas e personalizadas que geram
                  resultados reais para nossos clientes.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares - Numbered Sections */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 bg-[var(--lusso-charcoal)]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-accent text-5xl lg:text-6xl text-[var(--lusso-ivory)] tracking-tight text-center mb-20">
            Nossos <span className="serif-italic">Pilares</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                number: "01",
                title: "Missão",
                description:
                  "Transformar marcas em experiências inesquecíveis através de design excepcional, estratégias criativas e um atendimento próximo e personalizado.",
              },
              {
                number: "02",
                title: "Visão",
                description:
                  "Ser referência em marketing e design no Espírito Santo, reconhecida pela qualidade dos projetos e pelo impacto positivo que geramos.",
              },
              {
                number: "03",
                title: "Valores",
                description:
                  "Autenticidade • Excelência • Parceria verdadeira • Criatividade • Compromisso com resultados",
              },
            ].map((pillar, idx) => (
              <div
                key={pillar.number}
                className="space-y-4"
              >
                <div className="font-accent text-7xl text-[var(--lusso-sage)]/30">
                  {pillar.number}
                </div>
                <h3 className="font-accent text-3xl text-[var(--lusso-ivory)]">
                  {pillar.title}
                </h3>
                <p className="text-[var(--lusso-taupe)] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O Que Nos Move */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 bg-[var(--lusso-sage)]/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <h2 className="font-accent text-5xl lg:text-6xl text-[var(--lusso-charcoal)] tracking-tight leading-tight">
              O Que
              <br />
              <span className="serif-italic">Nos Move</span>
            </h2>

            <div className="space-y-6 text-[var(--lusso-stone)] text-lg leading-relaxed">
              <p>
                Acreditamos que cada marca tem uma história única para contar.
                Nosso trabalho vai além de criar logotipos bonitos ou posts para
                redes sociais – nós construímos identidades que ressoam com as
                pessoas.
              </p>
              <p>
                Nos movemos pela paixão de ver nossos clientes crescerem. Cada
                projeto concluído, cada meta alcançada e cada feedback positivo
                nos inspira a continuar elevando o padrão do nosso trabalho.
              </p>
              <p className="font-accent text-2xl serif-italic text-[var(--lusso-sage)]">
                Quando você escolhe a Lusso, ganha um parceiro dedicado ao sucesso
                da sua marca.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por Que Escolher */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 bg-[var(--lusso-ivory)]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-accent text-5xl lg:text-6xl text-[var(--lusso-charcoal)] tracking-tight mb-20">
            Por Que <span className="serif-italic">Escolher a Lusso?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {[
              {
                title: "Atendimento Personalizado",
                description:
                  "Cada cliente é único e merece atenção exclusiva. Trabalhamos de forma próxima para entender profundamente seu negócio e objetivos.",
              },
              {
                title: "Design de Excelência",
                description:
                  "Nosso portfólio fala por si. Criamos designs que não apenas impressionam visualmente, mas também comunicam com eficácia.",
              },
              {
                title: "Resultados Mensuráveis",
                description:
                  "Trabalhamos com métricas e dados para garantir que cada ação gere resultados concretos para o seu negócio.",
              },
              {
                title: "Agilidade e Compromisso",
                description:
                  "Cumprimos prazos, respondemos rápido e estamos sempre disponíveis para ajustar o que for necessário.",
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="border-l-2 border-[var(--lusso-sage)] pl-8 space-y-3"
              >
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
