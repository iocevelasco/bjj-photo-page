const stats = [
  { value: "+500", label: "Atletas Fotografiados" },
  { value: "+80", label: "Eventos Cubiertos" },
  { value: "+30", label: "Academias Clientes" },
  { value: "48hs", label: "Tiempo de Entrega" },
]

export default function StatsBanner() {
  return (
    <section className="bg-secondary border-y border-border py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display font-extrabold text-primary text-4xl sm:text-5xl tracking-tight leading-none">
                {value}
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm tracking-widest uppercase font-display mt-2">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
