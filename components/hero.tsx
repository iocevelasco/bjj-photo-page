import { ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bjj.jpg"
          alt="Competencia de Jiu-Jitsu Brasileño"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay with red tint at the bottom */}
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-primary text-sm sm:text-base tracking-[0.4em] uppercase font-display mb-4 font-semibold">
          Fotografía Profesional de Competencia
        </p>
        <h1 className="font-display font-extrabold text-foreground text-balance uppercase leading-none mb-6">
          <span className="block text-5xl sm:text-7xl lg:text-9xl tracking-tight">
            Cada Lucha,
          </span>
          <span className="block text-5xl sm:text-7xl lg:text-9xl tracking-tight text-primary">
            Cada Momento
          </span>
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10 font-display">
          Capturamos tu historia desde la entrada al tatami hasta el podio.
          Fotografía de alto impacto para atletas y academias de BJJ.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#packs"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-sans font-medium transition-colors"
          >
            Ver Packs y Precios
          </a>
          <a
            href="#individual"
            className="border border-border hover:border-primary text-foreground hover:text-primary px-8 py-4 text-sm tracking-widest uppercase font-sans font-medium transition-colors"
          >
            Buscar mis Fotos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#packs"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  )
}
