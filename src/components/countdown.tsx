"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock } from "lucide-react"

const EVENT_DATE = new Date("2026-04-18T00:00:00-03:00")

function getTimeLeft() {
  const diff = EVENT_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(n: number) {
  return String(n).padStart(2, "0")
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: time.days, label: "Días" },
    { value: time.hours, label: "Horas" },
    { value: time.minutes, label: "Minutos" },
    { value: time.seconds, label: "Segundos" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 bg-secondary border-y border-border">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-primary" />
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-display font-semibold">
            Próximo Evento
          </p>
        </div>
        <h2 className="font-display font-extrabold text-foreground uppercase text-3xl sm:text-5xl tracking-tight mb-2">
          18 de Abril, 2026
        </h2>
        <p className="text-muted-foreground font-display text-sm mb-10 flex items-center justify-center gap-2">
          <Clock className="w-4 h-4 text-primary" />
          Reservá tu cupo antes de que se agoten los lugares
        </p>

        <div className="flex items-center justify-center gap-4 sm:gap-8">
          {units.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="bg-card border border-border w-20 sm:w-28 h-20 sm:h-28 flex items-center justify-center mb-2">
                <span className="font-display font-extrabold text-primary text-4xl sm:text-5xl leading-none tabular-nums">
                  {pad(value)}
                </span>
              </div>
              <span className="text-muted-foreground text-xs tracking-widest uppercase font-display">
                {label}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-sans font-medium transition-colors mt-10"
        >
          Reservar mi Cupo
        </a>
      </div>
    </section>
  )
}
