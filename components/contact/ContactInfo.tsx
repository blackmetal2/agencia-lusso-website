"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp } from "@/lib/animations";

const contactDetails = [
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 27 99850-7890",
    href: "tel:+5527998507890",
    description: "Ligue ou envie um WhatsApp",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "lussocontato@gmail.com",
    href: "mailto:lussocontato@gmail.com",
    description: "Envie-nos um e-mail",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@agencialusso",
    href: "https://www.instagram.com/agencialusso",
    description: "Siga-nos nas redes sociais",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Espírito Santo, Brasil",
    href: null,
    description: "Atendemos todo o Brasil",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="space-y-4"
      >
        <h2 className="font-heading text-3xl font-bold text-[var(--lusso-burgundy)] md:text-4xl">
          Vamos Conversar?
        </h2>
        <p className="text-lg text-muted-foreground">
          Tem um projeto em mente? Quer saber mais sobre nossos serviços? Entre
          em contato e vamos descobrir como podemos ajudar sua marca a crescer.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2">
        {contactDetails.map((detail, index) => {
          const Icon = detail.icon;
          const content = (
            <Card
              className={`transition-all duration-300 ${
                detail.href
                  ? "cursor-pointer hover:border-[var(--lusso-burgundy)] hover:shadow-lg"
                  : ""
              }`}
            >
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--lusso-burgundy)]/10">
                  <Icon className="h-6 w-6 text-[var(--lusso-burgundy)]" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    {detail.label}
                  </p>
                  <p className="font-semibold text-[var(--lusso-burgundy)]">
                    {detail.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {detail.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );

          return (
            <motion.div
              key={detail.label}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              {detail.href ? (
                <Link
                  href={detail.href}
                  target={detail.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    detail.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block"
                >
                  {content}
                </Link>
              ) : (
                content
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ delay: 0.6 }}
        className="rounded-lg bg-[var(--lusso-cream)]/50 p-6"
      >
        <h3 className="mb-2 font-heading text-xl font-bold text-[var(--lusso-burgundy)]">
          Horário de Atendimento
        </h3>
        <p className="text-muted-foreground">
          Segunda a Sexta: 9h às 18h
          <br />
          Sábado: 9h às 13h
          <br />
          Respondemos mensagens de WhatsApp e e-mail em até 24 horas.
        </p>
      </motion.div>
    </div>
  );
}
