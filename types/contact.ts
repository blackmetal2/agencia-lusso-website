import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido").optional(),
  serviceType: z.enum(["social-media", "design", "branding", "not-sure"], {
    required_error: "Selecione um tipo de serviço",
  }),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const serviceTypeLabels: Record<string, string> = {
  "social-media": "Gestão de Redes Sociais",
  design: "Design Gráfico",
  branding: "Branding & Identidade Visual",
  "not-sure": "Não sei ainda",
};
