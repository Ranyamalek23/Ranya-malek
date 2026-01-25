import { Card } from "@/components/ui/card"
import { Database, GitBranch, Lightbulb, Settings, TrendingUp } from "lucide-react"

const skillCategories = [
  {
    title: "Analyse fonctionnelle & conception SI",
    icon: Settings,
    skills: [
      "Recueil et analyse des besoins métiers",
      "Cahiers des charges & spécifications fonctionnelles",
      "Modélisation : UML, BPMN, ArchiMate",
      "Cartographie fonctionnelle & applicative",
      "Outils : PlantUML, Visio, Draw.io",
    ],
  },
  {
    title: "Gestion de projet & méthodes",
    icon: TrendingUp,
    skills: [
      "Méthodes agiles : Scrum, Kanban",
      "User stories, backlog, rituels agiles",
      "Planification, reporting, coordination MOE / métiers",
      "Outils : Jira, Confluence, MS Project",
    ],
  },
  {
    title: "Architecture, intégration & SI",
    icon: Database,
    skills: [
      "Conception d'architectures fonctionnelles SI",
      "ERP, CRM",
      "API REST, Swagger",
      "Référentiels : TOGAF, TM Forum",
    ],
  },
  {
    title: "Développement & programmation",
    icon: GitBranch,
    skills: [
      "Java, Python, R, C, C#",
      "HTML, CSS, JavaScript, PHP",
      ".NET, Angular, Bootstrap, WordPress",
      "SQL : MySQL, SQL Server, Oracle",
      "NoSQL : MongoDB",
    ],
  },
  {
    title: "Systèmes, Cloud & ITSM",
    icon: Database,
    skills: ["Linux, Windows", "Microsoft Azure, AWS", "ITIL", "Git, Docker, Apache"],
  },
  {
    title: "Innovation & IA",
    icon: Lightbulb,
    skills: [
      "Agents intelligents",
      "Machine Learning",
      "Optimisation des parcours utilisateurs",
      "Google Colab, Dataiku",
    ],
  },
]
// </CHANGE>

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Compétences</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors pt-2">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 mr-2 flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            )
          })}
        </div>
        {/* </CHANGE> */}
      </div>
    </section>
  )
}
