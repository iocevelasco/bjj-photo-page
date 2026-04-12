import { ImageIcon, Info, Clock } from "lucide-react"

export default function IndividualSales() {
  return (
    <section id="individual-sales" className="py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="border border-primary/30 bg-card relative overflow-hidden">
          {/* Decorative red accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />

          <div className="p-8 sm:p-12 pl-10 sm:pl-16 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
            {/* Icon block */}
            <div className="flex items-center justify-center w-20 h-20 bg-primary/10 border border-primary/30 shrink-0">
              <ImageIcon className="w-10 h-10 text-primary" />
            </div>

            {/* Text content */}
            <div className="flex-1">
              <p className="text-primary text-xs tracking-[0.4em] uppercase font-display font-semibold mb-2">
                Venta Individual
              </p>
              <h2 className="font-display font-extrabold text-foreground uppercase text-3xl sm:text-4xl tracking-tight text-balance mb-3">
                Adquirí tus fotos por unidad
              </h2>
              <p className="text-muted-foreground leading-relaxed font-display text-base max-w-xl">
                Si no reservaste un pack, buscá tu foto en la galería del evento y adquirila de forma individual. Sin compromiso, sin pack mínimo.
              </p>
              <div className="flex items-center gap-2 mt-4 text-muted-foreground text-sm font-display">
                <Info className="w-4 h-4 text-primary shrink-0" />
                <span>
                  Disponible después de cada evento. Las fotos se publican dentro de las{" "}
                  <strong className="text-foreground">48 horas</strong> de finalizado el torneo.
                </span>
              </div>
            </div>

            {/* Price + CTA */}
            <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
              <div className="text-right">
                <p className="text-muted-foreground text-xs tracking-widest uppercase font-display mb-1">
                  Precio por foto
                </p>
                <p className="font-display font-extrabold text-primary text-5xl tracking-tight leading-none">
                  $5.000
                </p>
                <p className="text-muted-foreground text-xs font-display mt-1 tracking-wider">
                  ARS — Pesos Argentinos
                </p>
              </div>
              <div className="flex flex-col items-center gap-1 border border-primary/40 bg-primary/5 px-6 py-4 w-full md:w-auto">
                <div className="flex items-center gap-2 text-primary">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs tracking-widest uppercase font-sans font-semibold">Próximamente</span>
                </div>
                <span className="font-display font-bold text-foreground text-lg tracking-tight">19 / 04 / 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
