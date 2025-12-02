"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";
import Image from "next/image";

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-[var(--lusso-ivory)]">
      {/* Split Layout */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Editorial Content & Image */}
        <div className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 px-6 lg:px-12 flex flex-col justify-center bg-[var(--lusso-warm-white)]">
          <div className="max-w-lg mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="overline">Vamos Conversar</div>

              <h1 className="font-accent text-6xl lg:text-7xl tracking-tight text-[var(--lusso-charcoal)] leading-tight">
                Entre em
                <br />
                <span className="serif-italic">Contato</span>
              </h1>

              <p className="text-[var(--lusso-stone)] text-lg leading-relaxed">
                Tem um projeto em mente? Vamos descobrir como podemos ajudar
                sua marca a crescer.
              </p>

              {/* Contact Info */}
              <div className="space-y-6 pt-8 border-t border-[var(--lusso-taupe)]/20">
                <div>
                  <div className="text-xs tracking-widest uppercase mb-2 text-[var(--lusso-sage)]">
                    Telefone
                  </div>
                  <a
                    href="tel:+5527998507890"
                    className="text-[var(--lusso-charcoal)] hover:text-[var(--lusso-sage)] transition-colors"
                  >
                    +55 27 99850-7890
                  </a>
                </div>

                <div>
                  <div className="text-xs tracking-widest uppercase mb-2 text-[var(--lusso-sage)]">
                    E-mail
                  </div>
                  <a
                    href="mailto:lussocontato@gmail.com"
                    className="text-[var(--lusso-charcoal)] hover:text-[var(--lusso-sage)] transition-colors"
                  >
                    lussocontato@gmail.com
                  </a>
                </div>

                <div>
                  <div className="text-xs tracking-widest uppercase mb-2 text-[var(--lusso-sage)]">
                    Instagram
                  </div>
                  <a
                    href="https://www.instagram.com/agencialusso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--lusso-charcoal)] hover:text-[var(--lusso-sage)] transition-colors"
                  >
                    @agencialusso
                  </a>
                </div>

                <div>
                  <div className="text-xs tracking-widest uppercase mb-2 text-[var(--lusso-sage)]">
                    Localização
                  </div>
                  <p className="text-[var(--lusso-stone)]">
                    Espírito Santo, Brasil
                  </p>
                </div>
              </div>

              {/* Horário */}
              <div className="pt-8 space-y-2 text-sm text-[var(--lusso-stone)]">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 13h</p>
              </div>
            </motion.div>
          </div>

          {/* Decorative gradient */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--lusso-sage)] opacity-5 rounded-full blur-3xl -z-10" />
        </div>

        {/* Right Side - Form */}
        <div className="py-20 lg:py-24 px-6 lg:px-12 flex flex-col justify-center bg-[var(--lusso-ivory)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-lg mx-auto w-full"
          >
            <h2 className="font-accent text-4xl lg:text-5xl text-[var(--lusso-charcoal)] tracking-tight mb-8">
              Envie sua <span className="serif-italic">mensagem</span>
            </h2>

            <ContactForm />

            <p className="text-xs text-[var(--lusso-stone)] mt-6 text-center">
              Respondemos todas as mensagens em até 24 horas
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
