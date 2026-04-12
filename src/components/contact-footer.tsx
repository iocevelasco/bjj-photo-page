import { Camera, Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react"

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@ioce.ph",
    href: "https://www.instagram.com/ioce.ph/",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    handle: "+54 9 11 2192-5253",
    href: "https://wa.me/5491121925253",
  },
]

const contactDetails = [
  { icon: MapPin, text: "Buenos Aires, Argentina" },
  { icon: Phone, text: "+54 9 11 2192-5253" },
  { icon: Mail, text: "iocevelasco@gmail.com" },
]

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      {/* Contact section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-display font-semibold mb-3">
            Contacto
          </p>
          <h2 className="font-display font-extrabold text-foreground uppercase text-4xl sm:text-6xl tracking-tight text-balance">
            Hablemos
          </h2>
          <div className="mt-4 w-16 h-1 bg-primary mx-auto" />
          <p className="text-muted-foreground mt-6 max-w-lg mx-auto leading-relaxed font-display text-base">
            ¿Tenés un torneo próximo? Reservá tu cupo o consultanos por coberturas especiales.
            Respondemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact details */}
          <div className="space-y-5">
            <h3 className="font-display font-bold text-foreground uppercase text-xl tracking-tight mb-6">
              Información de Contacto
            </h3>
            {contactDetails.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-secondary border border-border shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground font-display text-base">{text}</span>
              </div>
            ))}

            <a
              href="https://wa.me/5491100000000?text=Hola!%20Quiero%20consultar%20sobre%20fotografía%20de%20BJJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 text-sm tracking-widest uppercase font-sans font-medium transition-colors mt-4"
            >
              <MessageCircle className="w-4 h-4" />
              Escribir por WhatsApp
            </a>
          </div>

          {/* Social links */}
          <div>
            <h3 className="font-display font-bold text-foreground uppercase text-xl tracking-tight mb-6">
              Seguinos en Redes
            </h3>
            <div className="flex flex-col gap-4">
              {socialLinks.map(({ icon: Icon, label, handle, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 border border-border hover:border-primary p-4 transition-colors group"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-secondary border border-border group-hover:bg-primary/10 group-hover:border-primary transition-colors shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground text-sm uppercase tracking-wider group-hover:text-primary transition-colors">
                      {label}
                    </p>
                    <p className="text-muted-foreground text-sm font-display">{handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-7 h-7 bg-primary rounded-sm">
              <Camera className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-sans font-medium text-foreground text-sm tracking-widest uppercase">
              IOCE BJJ<span className="text-primary"> FOTOGRAFÍA</span>
            </span>
          </div>
          <p className="text-muted-foreground text-xs font-display tracking-wider text-center">
            &copy; {new Date().getFullYear()} IOCE BJJ Fotografía. Todos los derechos reservados. Buenos Aires, Argentina.
          </p>
          <p className="text-muted-foreground text-xs font-display tracking-wider">
            Fotografía de Competencia
          </p>
        </div>
      </div>
    </footer>
  )
}
