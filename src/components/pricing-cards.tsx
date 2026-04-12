import {
  User,
  Users,
  Star,
  Check,
  Camera,
  Trophy,
  Image,
  Video,
  Zap,
  Medal,
  Shield,
  BookOpen,
} from "lucide-react"

const packs = [
  {
    id: "individual",
    icon: User,
    tag: null,
    featured: false,
    title: "Individual Athlete",
    subtitle: "Seguimiento personalizado",
    description:
      "Desde la entrada al tatami hasta el podio. Tu historia completa en un solo pack.",
    price: "Referencia",
    priceSub: "Valor de inscripción",
    cta: "Reservar Cupo",
    items: [
      { icon: Image, text: "10 a 15 fotos editadas en alta resolución" },
      { icon: Camera, text: "Retratos de preparación antes de competir" },
      { icon: Shield, text: "Acción técnica: sumisiones y pasajes de guardia" },
      { icon: Trophy, text: "Foto de reacción final en el podio" },
    ],
  },
  {
    id: "academy",
    icon: Users,
    tag: "Más Popular",
    featured: true,
    title: "Academy / Team",
    subtitle: "Ideal para profesores y gimnasios",
    description:
      "Cobertura completa de todo tu equipo. Galería profesional para potenciar la imagen de tu academia.",
    price: "Consultar",
    priceSub: "Tarifa por academia",
    cta: "Reservar Cupo",
    items: [
      { icon: Image, text: "Galería completa +50 fotos con edición de color" },
      { icon: Users, text: "Fotos grupales con bandera de la academia" },
      { icon: BookOpen, text: "Momentos de coaching y dirección técnica" },
      { icon: Camera, text: "Acción de todos los alumnos en competencia" },
      { icon: Video, text: "Bonus: 3 videos cortos (reels) para redes sociales" },
    ],
  },
  {
    id: "premium",
    icon: Star,
    tag: null,
    featured: false,
    title: "Premium Social Media",
    subtitle: "Para atletas con marca personal",
    description:
      "Contenido de alta prioridad y entrega express. Ideal para atletas que gestionan su imagen digital.",
    price: "Individual",
    priceSub: "+ 30% Express",
    cta: "Reservar Cupo",
    items: [
      { icon: Zap, text: "5 fotos 'Express' el mismo día vía WhatsApp" },
      { icon: Image, text: "Resto de las fotos entregadas en 48 horas" },
      { icon: Star, text: "Enfoque en luchas estelares y momentos claves" },
      { icon: Medal, text: "Fotos destacadas con medalla o trofeo" },
    ],
  },
]

export default function PricingCards() {
  return (
    <section id="packs" className="py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-display font-semibold mb-3">
            Servicios & Precios
          </p>
          <h2 className="font-display font-extrabold text-foreground uppercase text-4xl sm:text-6xl tracking-tight text-balance">
            Elegí tu Pack
          </h2>
          <div className="mt-4 w-16 h-1 bg-primary mx-auto" />
          <p className="text-muted-foreground mt-6 max-w-lg mx-auto leading-relaxed font-display text-base">
            Cobertura profesional adaptada a tus necesidades, ya seas atleta individual, academia o figura del BJJ.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packs.map((pack) => {
            const PackIcon = pack.icon
            return (
              <article
                key={pack.id}
                className={`relative flex flex-col border transition-all duration-300 ${
                  pack.featured
                    ? "border-primary bg-card scale-100 md:scale-[1.03] shadow-[0_0_40px_rgba(0,0,0,0.6)] ring-1 ring-primary/30"
                    : "border-border bg-card hover:border-muted-foreground/40"
                }`}
              >
                {/* Featured tag */}
                {pack.tag && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-sans tracking-widest uppercase px-4 py-1.5">
                    {pack.tag}
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  {/* Icon + title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`flex items-center justify-center w-12 h-12 shrink-0 ${
                        pack.featured ? "bg-primary" : "bg-secondary"
                      }`}
                    >
                      <PackIcon
                        className={`w-6 h-6 ${pack.featured ? "text-primary-foreground" : "text-muted-foreground"}`}
                      />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground text-xl uppercase tracking-tight leading-none">
                        {pack.title}
                      </h3>
                      <p className="text-primary text-xs tracking-wider uppercase font-display mt-1">
                        {pack.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed font-display mb-8">
                    {pack.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8 border-t border-b border-border py-5">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`font-display font-extrabold text-3xl uppercase tracking-tight ${
                          pack.featured ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {pack.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-xs tracking-wider uppercase font-display mt-1">
                      {pack.priceSub}
                    </p>
                  </div>

                  {/* Feature list */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {pack.items.map((item, i) => {
                      const ItemIcon = item.icon
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <ItemIcon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm leading-relaxed font-display">
                            {item.text}
                          </span>
                        </li>
                      )
                    })}
                  </ul>

                  {/* CTA */}
                  <a
                    href="https://wa.me/5491100000000?text=Hola!%20Quiero%20reservar%20un%20cupo%20para%20el%20pack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-4 text-sm tracking-widest uppercase font-sans font-medium transition-colors ${
                      pack.featured
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "border border-border hover:border-primary text-foreground hover:text-primary"
                    }`}
                  >
                    {pack.cta}
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        {/* Checkmarks note */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-muted-foreground text-sm font-display">
          {[
            "Edición profesional incluida",
            "Entrega digital en alta resolución",
            "Uso libre en redes sociales",
          ].map((note) => (
            <span key={note} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              {note}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
