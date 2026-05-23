"use client"

import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export function HeroSection() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("raniamalek258@gmail.com")
    } catch {
      // noop
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5 pointer-events-none" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl pointer-events-none" />
      {/* </CHANGE> */}

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-chart-2/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50 group-hover:opacity-100" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl group-hover:scale-105 transition-transform duration-500">
              <Image
                src="/professional-woman-engineer.png"
                alt="Photo professionnelle"
                width={400}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          {/* </CHANGE> */}

<div className="flex-1 space-y-6 text-center lg:text-left pt-8">
  <div className="space-y-4">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance leading-tight">
      Ingénieure technico-fonctionnelle
    </h1>

    <p className="max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
      Entre besoins métier, solutions SI et innovation.
    </p>
  </div>
</div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
              <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 group" onClick={() => {
                const element = document.getElementById("experience")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}>
                <ChevronDown className="h-4 w-4 group-hover:animate-bounce" />
                Mes expériences
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 hover:bg-primary/5 transition-all bg-transparent"
                onClick={() => setIsContactOpen(true)}
              >
                <Mail className="h-4 w-4" />
                Me contacter
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl border border-primary/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-foreground">Disponibilité:</span>
                <span className="text-sm text-muted-foreground">Immédiate</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl border border-primary/20 shadow-sm">
                <span className="text-sm font-medium text-foreground">Mobilité:</span>
                <span className="text-sm text-muted-foreground">France</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-110 bg-transparent"
                asChild
              >
                <a href="https://github.com/Ranyamalek23" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-110 bg-transparent"
                asChild
              >
                <a href="https://www.linkedin.com/in/ranya-malek22/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          {/* </CHANGE> */}
        </div>
      </div>
      {/* Contact Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="max-w-md border-2">
          <DialogHeader>
            <DialogTitle className="text-foreground">Me contacter</DialogTitle>
            <DialogDescription>Voici mon email. Vous pouvez copier ou ouvrir votre client mail.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold">raniamalek258@gmail.com</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2" onClick={copyEmail}>
                  Copier
                </Button>
                <Button size="sm" className="gap-2" asChild>
                  <a href="mailto:raniamalek258@gmail.com">Ouvrir Mail</a>
                </Button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Retrouvez également mes coordonnées dans la section Contact.</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
