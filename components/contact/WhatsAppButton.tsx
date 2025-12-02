"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5527998507890";
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre os serviços da Agência Lusso.";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl md:h-16 md:w-16"
        aria-label="Enviar mensagem no WhatsApp"
      >
        <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />

        {/* Tooltip */}
        <span className="absolute bottom-full right-0 mb-2 hidden whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 md:block">
          Fale conosco no WhatsApp
          <span className="absolute right-6 top-full h-0 w-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900" />
        </span>

        {/* Pulse Animation */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-75" />
      </Link>
    </motion.div>
  );
}
