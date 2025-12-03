"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ContactFormData, contactFormSchema, serviceTypeLabels } from "@/types/contact";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: undefined,
      message: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar mensagem");
      }

      setSubmitStatus("success");
      form.reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        "Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp."
      );
    }
  }

  return (
    <div className="relative">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[var(--lusso-charcoal)] font-medium">
                  Nome completo *
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Seu nome"
                    {...field}
                    className="border-[var(--lusso-taupe)]/30 focus:border-[var(--lusso-sage)] bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[var(--lusso-charcoal)] font-medium">
                  E-mail *
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    {...field}
                    className="border-[var(--lusso-taupe)]/30 focus:border-[var(--lusso-sage)] bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Field */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[var(--lusso-charcoal)] font-medium">
                  Telefone
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="(27) 99999-9999"
                    {...field}
                    className="border-[var(--lusso-taupe)]/30 focus:border-[var(--lusso-sage)] bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Service Type Select */}
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[var(--lusso-charcoal)] font-medium">
                  Tipo de serviço *
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="border-[var(--lusso-taupe)]/30 focus:border-[var(--lusso-sage)] bg-white">
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="!bg-white border-[var(--lusso-taupe)]/30 shadow-lg">
                    {Object.entries(serviceTypeLabels).map(([value, label]) => (
                      <SelectItem
                        key={value}
                        value={value}
                        className="hover:bg-[var(--lusso-sage)]/10 bg-white cursor-pointer"
                      >
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[var(--lusso-charcoal)] font-medium">
                  Mensagem *
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Conte-nos sobre seu projeto..."
                    className="min-h-[150px] border-[var(--lusso-taupe)]/30 focus:border-[var(--lusso-sage)] bg-white"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={submitStatus === "loading" || submitStatus === "success"}
            className="w-full bg-[var(--lusso-charcoal)] text-[var(--lusso-ivory)] hover:bg-[var(--lusso-charcoal-soft)] disabled:opacity-50 transition-colors duration-300"
          >
            {submitStatus === "loading" ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Enviando...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Enviar mensagem
                <Send className="h-4 w-4" />
              </span>
            )}
          </Button>
        </form>
      </Form>

      {/* Success/Error Messages */}
      <AnimatePresence>
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 p-4 text-green-800"
          >
            <CheckCircle2 className="h-5 w-5" />
            <p className="text-sm font-medium">
              Mensagem enviada com sucesso! Retornaremos em breve.
            </p>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 p-4 text-red-800"
          >
            <AlertCircle className="h-5 w-5" />
            <p className="text-sm font-medium">{errorMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
