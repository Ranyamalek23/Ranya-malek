import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const education = [
  {
  degree: "Master MIAGE – Ingénierie Logicielle pour le Web",
  institution: "Université Paris-Saclay",
  period: "2023 – 2025",
  description:
    "Formation en Méthodes Informatiques Appliquées à la Gestion, orientée conception et urbanisation des systèmes d’information, analyse fonctionnelle, gestion de projets SI et développement d’applications web.",
},

  {
    degree: "Master Ingénierie du Logiciel",
    institution: "Université des Sciences et de la Technologie Houari Boumediene (USTHB)",
    period: "2021 - 2023",
    description: "Formation en génie logiciel, développement d'applications et gestion de projets",
  },
  {
  degree: "Licence Informatique",
  institution: "Université des Sciences et de la Technologie Houari Boumediene (USTHB)",
  period: "2019 – 2022",
  description:
    "Formation en informatique couvrant les fondamentaux du génie logiciel, de la programmation, des bases de données, des systèmes d’exploitation et réseaux informatiques.",
},

]
// </CHANGE>

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Formation</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 border-2 hover:border-primary/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <h3 className="font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-md self-start">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  {edu.description && <p className="text-sm text-muted-foreground pt-2">{edu.description}</p>}
                </div>
              </div>
            </Card>
          ))}
        </div>
        {/* </CHANGE> */}
      </div>
    </section>
  )
}
