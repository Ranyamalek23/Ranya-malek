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
                Ranya Malek, 25 ans
              </span>
              , diplômée d’un{" "}
              <span className="font-semibold text-foreground">
                Master MIAGE – parcours Ingénierie Logicielle
              </span>
              , je souhaite intégrer une entreprise innovante en{" "}
              <span className="font-semibold text-foreground">CDI</span> afin de
              contribuer activement à la{" "}
              <span className="font-semibold text-foreground">
                transformation digitale
              </span>{" "}
              et à la réussite de ses projets informatiques.
            </p>

            <p>
              Mon parcours m’a permis de développer une{" "}
              <span className="font-semibold text-foreground">
                double compétence métier et technique
              </span>
              , à travers des missions d’
              <span className="font-semibold text-foreground">
                analyse des besoins métiers
              </span>
              , de{" "}
              <span className="font-semibold text-foreground">
                pilotage de projets SI
              </span>{" "}
              et de{" "}
              <span className="font-semibold text-foreground">
                participation aux phases de conception
              </span>
              , tout en développant une{" "}
              <span className="font-semibold text-foreground">
                solide compréhension technique
              </span>{" "}
              des systèmes d’information, des bases de données et des
              architectures applicatives.
            </p>

            <p>
              Curieuse, rigoureuse et dotée d’un{" "}
              <span className="font-semibold text-foreground">
                bon sens de l’analyse
              </span>
              , je m’épanouis dans des environnements où la{" "}
              <span className="font-semibold text-foreground">
                collaboration
              </span>{" "}
              et l’
              <span className="font-semibold text-foreground">
                innovation
              </span>{" "}
              sont au cœur des enjeux numériques.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
