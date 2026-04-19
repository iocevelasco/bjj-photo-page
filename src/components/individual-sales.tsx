import { Copy, CheckCheck, ExternalLink, FolderOpen, Instagram, Mail } from "lucide-react"
import { useState } from "react"

export const GALLERY_HREF = "https://drive.google.com/drive/folders/1IJ5BMY_zTqGYUIYN6lOD_pHrYxoVqJ92?usp=drive_link"
const INSTAGRAM_HREF = "https://www.instagram.com/ioce.ph/"

const PAYMENT = {
  alias: "Fotos.ioce",
  cvu: "0000003100018597716893",
  nombre: "Micaela Quimey Bibiloni",
}

const STEPS = [
  {
    num: "01",
    icon: FolderOpen,
    title: "Revisá la carpeta",
    desc: "Abrí la galería del evento ADCC en Google Drive y anotá los códigos de las fotos que querés.",
    cta: { label: "Ver galería", href: GALLERY_HREF },
  },
  {
    num: "02",
    icon: Instagram,
    title: "Envianos los códigos",
    desc: "Transferí el monto por alias o CVU y mandanos por Instagram (@ioce.ph) los códigos de las fotos junto con el comprobante de pago.",
    cta: { label: "Ir a Instagram", href: INSTAGRAM_HREF },
  },
  {
    num: "03",
    icon: Mail,
    title: "Recibí tus fotos",
    desc: "Te enviamos las fotos en alta resolución directamente a tu email. Sin demoras.",
    cta: null,
  },
]

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="flex flex-col gap-1">
      <p className="text-muted-foreground text-xs tracking-widest uppercase font-display">{label}</p>
      <div className="flex items-center gap-3 bg-secondary border border-border px-4 py-3">
        <span className="font-display font-bold text-foreground text-base flex-1 select-all">{value}</span>
        <button
          onClick={handleCopy}
          className="text-muted-foreground hover:text-primary transition-colors shrink-0"
          aria-label={`Copiar ${label}`}
        >
          {copied ? <CheckCheck className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
  )
}

export default function IndividualSales() {
  return (
    <section id="individual-sales" className="py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center">
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-display font-semibold mb-3">
            Venta Individual
          </p>
          <h2 className="font-display font-extrabold text-foreground uppercase text-4xl sm:text-6xl tracking-tight text-balance">
            Comprá tus Fotos
          </h2>
          <div className="mt-4 w-16 h-1 bg-primary mx-auto" />
          <p className="text-muted-foreground mt-6 max-w-lg mx-auto leading-relaxed font-display text-base">
            El torneo ya fue. Las fotos están disponibles para compra individual — sin pack mínimo.
          </p>
          <div className="mt-8">
            <a
              href={GALLERY_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-sans font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Ver galería de fotos
            </a>
          </div>
        </div>

        {/* Price badge */}
        <div className="flex justify-center">
          <div className="border border-primary/30 bg-card px-10 py-6 text-center">
            <p className="text-muted-foreground text-xs tracking-widest uppercase font-display mb-1">Precio por foto</p>
            <p className="font-display font-extrabold text-primary text-6xl tracking-tight leading-none">$5.000</p>
            <p className="text-muted-foreground text-xs font-display mt-1 tracking-wider">ARS — Pesos Argentinos</p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step) => {
            const StepIcon = step.icon
            return (
              <div key={step.num} className="border border-border bg-card p-6 relative flex flex-col">
                <span className="font-display font-extrabold text-primary/20 text-6xl leading-none absolute top-4 right-6 select-none">
                  {step.num}
                </span>
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/30 mb-4">
                  <StepIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground uppercase text-lg tracking-tight mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-display flex-1">{step.desc}</p>
                {step.cta && (
                  <a
                    href={step.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-primary text-xs tracking-widest uppercase font-sans font-medium hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {step.cta.label}
                  </a>
                )}
              </div>
            )
          })}
        </div>

        {/* Payment info */}
        <div className="border border-primary/30 bg-card relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
          <div className="p-8 sm:p-10 pl-10 sm:pl-14">
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-display font-semibold mb-4">
              Datos de Pago — Transferencia Bancaria
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <CopyField label="Alias" value={PAYMENT.alias} />
              <CopyField label="CVU" value={PAYMENT.cvu} />
              <CopyField label="Titular" value={PAYMENT.nombre} />
            </div>
            <a
              href="https://www.instagram.com/ioce.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 text-sm tracking-widest uppercase font-sans font-medium transition-colors"
            >
              <Instagram className="w-4 h-4" />
              Enviar comprobante por Instagram
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
