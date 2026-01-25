import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5 pointer-events-none" />

      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Contact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Disponible immédiatement pour un CDI – Ouverte aux opportunités
          </p>
        </div>

        <Card className="p-8 md:p-12 border-2 hover:border-primary/30 transition-colors shadow-xl">
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a
              href="mailto:raniamalek258@gmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="h-6 w-6" />
              </div>
              <span className="font-medium text-lg">raniamalek258@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ranya-malek22/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Linkedin className="h-6 w-6" />
              </div>
              <span className="font-medium text-lg">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Ranyamalek23"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Github className="h-6 w-6" />
              </div>
              <span className="font-medium text-lg">GitHub</span>
            </a>
          </div>
        </Card>
      </div>
    </section>
  )
}
