import { Calendar, CheckCircle, Image, ExternalLink } from "lucide-react"
import { GALLERY_HREF } from "@/components/individual-sales"

export default function Countdown() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-secondary border-y border-border">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-primary" />
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-display font-semibold">
            Evento Realizado
          </p>
        </div>
        <h2 className="font-display font-extrabold text-foreground uppercase text-3xl sm:text-5xl tracking-tight mb-2">
          ADCC — 18 de Abril, 2026
        </h2>
        <div className="flex items-center justify-center gap-2 mb-10">
          <CheckCircle className="w-4 h-4 text-primary" />
          <p className="text-muted-foreground font-display text-sm">
            El torneo ya ocurrió. Las fotos están disponibles para descarga.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={GALLERY_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-sans font-medium transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Ver galería de fotos
          </a>
          <a
            href="#individual-sales"
            className="inline-flex items-center gap-2 border border-border hover:border-primary text-foreground hover:text-primary px-8 py-4 text-sm tracking-widest uppercase font-sans font-medium transition-colors"
          >
            <Image className="w-4 h-4" />
            Cómo comprar
          </a>
        </div>
      </div>
    </section>
  )
}
