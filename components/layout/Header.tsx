"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--lusso-ivory)]/95 backdrop-blur-sm border-b border-[var(--lusso-taupe)]/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center space-x-2 transition-opacity"
          >
            <div className="font-accent text-2xl lg:text-3xl tracking-tight text-[var(--lusso-charcoal)] group-hover:text-[var(--lusso-sage)] transition-colors duration-300">
              LUSSO
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-[var(--lusso-charcoal)]"
                    : "text-[var(--lusso-stone)] hover:text-[var(--lusso-charcoal)]"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[var(--lusso-sage)]" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[var(--lusso-charcoal)] hover:text-[var(--lusso-sage)] transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Solid background overlay */}
          <div
            className="md:hidden fixed left-0 right-0 bottom-0 z-[100]"
            style={{
              top: '80px',
              backgroundColor: '#FAF8F3',
              minHeight: '100vh',
            }}
          />
          {/* Menu content */}
          <nav
            className="md:hidden fixed left-0 right-0 z-[101] px-6 py-8 flex flex-col gap-4"
            style={{ top: '80px' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-accent transition-colors py-3 border-b border-[var(--lusso-taupe)]/20 ${
                  pathname === link.href
                    ? "text-[var(--lusso-sage)]"
                    : "text-[var(--lusso-charcoal)] hover:text-[var(--lusso-sage)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </>
      )}
    </header>
  );
}
