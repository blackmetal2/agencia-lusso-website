import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[var(--lusso-taupe)]/20 bg-[var(--lusso-charcoal)] text-[var(--lusso-ivory)]">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-6">
            <div className="font-accent text-4xl tracking-tight text-[var(--lusso-ivory)]">
              LUSSO
            </div>
            <p className="text-[var(--lusso-taupe)] leading-relaxed max-w-md">
              Transformamos marcas em experiências inesquecíveis através de design,
              branding e estratégias visuais memoráveis.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <div className="overline !text-[var(--lusso-sage-muted)]">
              navegação
            </div>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-sm text-[var(--lusso-taupe)] hover:text-[var(--lusso-ivory)] transition-colors"
                style={{ fontFamily: "'Helvetica Roman', 'Helvetica', sans-serif" }}
              >
                home
              </Link>
              <Link
                href="/sobre"
                className="text-sm text-[var(--lusso-taupe)] hover:text-[var(--lusso-ivory)] transition-colors"
                style={{ fontFamily: "'Helvetica Roman', 'Helvetica', sans-serif" }}
              >
                sobre
              </Link>
              <Link
                href="/servicos"
                className="text-sm text-[var(--lusso-taupe)] hover:text-[var(--lusso-ivory)] transition-colors"
                style={{ fontFamily: "'Helvetica Roman', 'Helvetica', sans-serif" }}
              >
                serviços
              </Link>
              <Link
                href="/portfolio"
                className="text-sm text-[var(--lusso-taupe)] hover:text-[var(--lusso-ivory)] transition-colors"
                style={{ fontFamily: "'Helvetica Roman', 'Helvetica', sans-serif" }}
              >
                portfólio
              </Link>
              <Link
                href="/contato"
                className="text-sm text-[var(--lusso-taupe)] hover:text-[var(--lusso-ivory)] transition-colors"
                style={{ fontFamily: "'Helvetica Roman', 'Helvetica', sans-serif" }}
              >
                contato
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4 space-y-4">
            <div className="overline !text-[var(--lusso-sage-muted)]">
              contato
            </div>
            <div className="space-y-3">
              <a
                href="tel:+5527998507890"
                className="block text-sm text-[var(--lusso-taupe)] hover:text-[var(--lusso-ivory)] transition-colors"
              >
                +55 27 99850-7890
              </a>
              <a
                href="mailto:lussocontato@gmail.com"
                className="block text-sm text-[var(--lusso-taupe)] hover:text-[var(--lusso-ivory)] transition-colors"
              >
                lussocontato@gmail.com
              </a>
              <a
                href="https://www.instagram.com/agencialusso"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[var(--lusso-taupe)] hover:text-[var(--lusso-ivory)] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/90883279"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[var(--lusso-taupe)] hover:text-[var(--lusso-ivory)] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-[var(--lusso-taupe)]/10">
          <p className="text-xs text-[var(--lusso-stone)] tracking-wide">
            © {currentYear} Agência Lusso. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
