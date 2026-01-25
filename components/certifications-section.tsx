"use client"

import { X, Award, Eye } from "lucide-react"
import { useState } from "react"

const certifications = [
  {
    title: "Architecture logicielle",
    organization: "Linkedin Learning",
    date: "Octobre 2025",
    pdfUrl: "/archi.pdf",
  },
  {
    title: "Gestion de projet Agile",
    organization: "Project Management Institute",
    date: "Octobre 2025",
    pdfUrl: "/gestion.pdf",
  },
  {
    title: "Microsoft Dynamics 365",
    organization: "Linkedin Learning",
    date: "Novembre 2025",
    pdfUrl: "/dynamique.pdf",
  },

  {
    title: "ITIL® Pratique",
    organization: "Linkedin Learning",
    date: "Novembre 2025",
    pdfUrl: "/itil.pdf",
  },


  {
    title: "HubSpot CRM",
    organization: "Linkedin Learning",
    date: "Novembre 2025",
    pdfUrl: "/hubspot.pdf",
  },

  
]

export function CertificationsSection() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Certifications</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Certifications Professionnelles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Formation continue et validation de compétences
          </p>
        </div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1"
            >
              <div
                className="relative h-64 overflow-hidden bg-muted cursor-pointer"
                onClick={() => setSelectedPdf(cert.pdfUrl)}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <iframe
                    src={`${cert.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    className="w-full h-full pointer-events-none"
                    title={`${cert.title} preview`}
                  />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="p-4 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform inline-block">
                      <Eye className="h-8 w-8" />
                    </div>
                    <p className="text-white font-semibold text-lg mt-3">Voir en grand</p>
                  </div>
                </div>
              </div>

              {/* Certificate info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span>{cert.organization}</span>
                </div>
                <p className="text-sm text-muted-foreground">{cert.date}</p>
              </div>

              {/* Decorative border animation */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {selectedPdf && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPdf(null)}
        >
          <button
            onClick={() => setSelectedPdf(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Fermer"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <div
            className="w-full h-full max-w-6xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe src={selectedPdf} className="w-full h-full" title="Certificate viewer" />
          </div>
        </div>
      )}
    </section>
  )
}
