"use client"

import { useState } from "react"
import { Camera, Menu, X, ExternalLink } from "lucide-react"
import { GALLERY_HREF } from "@/components/individual-sales"

const navLinks = [
  { label: "Packs", href: "#pricing" },
  { label: "Cómo Comprar", href: "#individual-sales" },
  { label: "Contacto", href: "#contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border overflow-hidden">
      {/* Background image with B&W filter + gradient */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/_MG_6022-2.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/60" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" aria-label="IOCE BJJ Fotografía — Inicio">
          <div className="flex items-center justify-center w-9 h-9 bg-primary rounded-sm">
            <Camera className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="leading-none">
            <span className="block text-foreground font-sans font-700 text-lg tracking-widest uppercase">
              IOCE BJJ<span className="text-primary"> FOTOGRAFÍA</span>
            </span>
            <span className="block text-muted-foreground text-[10px] tracking-[0.2em] uppercase font-display">
              Fotografía de Competencia
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-widest uppercase font-sans"
            >
              {link.label}
            </a>
          ))}
          <a
            href={GALLERY_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm tracking-widest uppercase font-sans transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Ver Fotos
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav
          className="md:hidden bg-card/95 border-t border-border px-4 py-6 flex flex-col gap-4"
          aria-label="Navegación móvil"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-primary transition-colors text-base tracking-widest uppercase font-sans py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href={GALLERY_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 text-sm tracking-widest uppercase font-sans transition-colors text-center mt-2"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Ver Fotos
          </a>
        </nav>
      )}
    </header>
  )
}
