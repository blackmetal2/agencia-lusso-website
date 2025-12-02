import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema, serviceTypeLabels } from "@/types/contact";

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate data with Zod
    const validatedData = contactFormSchema.parse(body);

    // Prepare email content
    const emailContent = `
Nova mensagem de contato do site Agência Lusso

Nome: ${validatedData.name}
Email: ${validatedData.email}
Telefone: ${validatedData.phone || "Não informado"}
Serviço: ${serviceTypeLabels[validatedData.serviceType]}

Mensagem:
${validatedData.message}
    `.trim();

    // Web3Forms integration
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!web3FormsKey) {
      console.error("WEB3FORMS_ACCESS_KEY not configured");
      // For development, just log and return success
      console.log("Contact form submission (dev mode):", validatedData);
      return NextResponse.json(
        { message: "Mensagem recebida (modo desenvolvimento)" },
        { status: 200 }
      );
    }

    // Submit to Web3Forms
    const web3FormsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: web3FormsKey,
        subject: `Novo contato: ${validatedData.name}`,
        from_name: "Agência Lusso Website",
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || "",
        message: emailContent,
      }),
    });

    if (!web3FormsResponse.ok) {
      throw new Error("Failed to submit to Web3Forms");
    }

    return NextResponse.json(
      { message: "Mensagem enviada com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Dados inválidos", details: error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Erro ao processar mensagem" },
      { status: 500 }
    );
  }
}
