import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
          À propos
        </h2>

        <Card className="p-8 md:p-12 border-2 hover:border-primary/30 transition-colors relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative space-y-6 text-lg leading-relaxed text-muted-foreground">
            
            <p>
              <span className="font-semibold text-foreground">
                Double diplômée
              </span>{" "}
              d’un{" "}
              <span className="font-semibold text-foreground">
                Master MIAGE – Ingénierie Logicielle pour le Web
              </span>{" "}
              et d’un{" "}
              <span className="font-semibold text-foreground">
                Master 2 complémentaire en Conduite de Projets Informatiques
              </span>
              , j’occupe actuellement un poste de{" "}
              <span className="font-semibold text-foreground">
                Chargée de projet SIRH – Data, Reporting & Pilotage de la performance
              </span>{" "}
              au sein du{" "}
              <span className="font-semibold text-foreground">
                Groupe La Poste
              </span>
              , dans le cadre d’un{" "}
              <span className="font-semibold text-foreground">
                CDD
              </span>
              .
            </p>

            <p>
              Mon parcours m’a permis de développer une{" "}
              <span className="font-semibold text-foreground">
                double compétence fonctionnelle et technique
              </span>
              , à travers l’
              <span className="font-semibold text-foreground">
                analyse des besoins métiers
              </span>
              , le{" "}
              <span className="font-semibold text-foreground">
                pilotage de projets SI/SIRH
              </span>
              , la{" "}
              <span className="font-semibold text-foreground">
                conception fonctionnelle
              </span>{" "}
              ainsi que le{" "}
              <span className="font-semibold text-foreground">
                reporting et l’analyse de données
              </span>
              , tout en consolidant ma compréhension des systèmes
              d’information, des bases de données et des architectures
              applicatives.
            </p>

            <p>
              Curieuse, rigoureuse et dotée d’un{" "}
              <span className="font-semibold text-foreground">
                bon esprit d’analyse
              </span>
              , je souhaite poursuivre mon parcours en{" "}
              <span className="font-semibold text-foreground">
                CDI
              </span>{" "}
              et contribuer à des projets de{" "}
              <span className="font-semibold text-foreground">
                transformation digitale
              </span>
              , à l’interface entre les{" "}
              <span className="font-semibold text-foreground">
                métiers, la data et les équipes IT
              </span>
              .
            </p>

          </div>
        </Card>
      </div>
    </section>
  )
}
