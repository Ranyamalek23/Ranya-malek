import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Info } from "lucide-react"
import Image from "next/image"

const experiences = [
  {
    company: "Bouygues Telecom",
    logo: "/bouygues-telecom-logo.jpg",
    role: "Ingénieure Fonctionnelle SI – MOE",
    department: "Pôle Pilotage & Conception – DSI",
    period: "Mars 2025 – Sept. 2025 (7 mois)",
    location: "Meudon, Île-de-France · Sur site",
    context:
      "Intervention au sein de la DSI de Bouygues Telecom, côté MOE, sur le système d’information de provisioning mobile, avec un rôle en analyse fonctionnelle, conception et support fonctionnel.",
    missions: [
      {
        category: "Analyse fonctionnelle & conception SI",
        tasks: [
          "Analyse de l'existant et recueil des besoins métiers",
          "Structuration et formalisation des processus fonctionnels et interfaces IHM",
          "Rédaction et évolution des spécifications fonctionnelles",
          "Modélisation des processus métiers (UML / BPMN)",
        ],
      },
      {
        category: "Intégration & cohérence des services SI",
        tasks: [
          "Contribution aux évolutions du SI",
          "Lecture, compréhension et analyse des API REST",
          "Exploitation de la documentation Swagger",
          "Validation des services et des flux avec les équipes de développement",
        ],
      },
      {
        category: "Pilotage & gouvernance projet",
        tasks: [
          "Réalisation d'études d'impact",
          "Suivi opérationnel : planification, reporting, chiffrages",
          "Participation aux soutenances de sélection des solutions SI",
        ],
      },
    ],
    projects: [
      {
        title: "Refonte IHM Commande Cartes SIM Bytel",
        description: "Amélioration des parcours utilisateurs, correction des dysfonctionnements fonctionnels et optimisation de l'ergonomie d'un outil métier.",
      },
      {
        title: "Disaster Recovery",
        description: "Étude et conception d'un dispositif de reprise des données critiques du réseau mobile à partir des bases SI en cas de sinistre majeur.",
      },
      {
        title: "Refonte du SI de provisioning mobile",
        description: "Contribution à la définition de l'architecture fonctionnelle d'un nouveau système de provisioning.",
      },
    ],
    tools: [
      { category: "Contexte SI", items: ["SI Télécom · MOE"] },
      { category: "Modélisation & conception", items: ["UML", "BPMN", "PlantUML", "Visio", "Figma"] },
      { category: "Intégration & services", items: ["API REST", "Swagger"] },
      { category: "Bases de données", items: ["Oracle"] },
      { category: "Serveurs applicatifs", items: ["Java (Spring)"] },
      { category: "Systèmes d’exploitation", items: ["Solaris", "Linux", "Windows"] },
      { category: "Pilotage & collaboration", items: ["Jira", "Confluence", "Git"] },
      { category: "Chiffrage & suivi", items: ["Tool"] },
      { category: "Données & analyse", items: ["DBeaver"] },
      { category: "Méthodes", items: ["Méthodes agiles", "Reporting", "Coordination avec les équipes techniques"] },
    ],
    image: "/telecom-network-interface.jpg",
  },
  {
    company: "FREDON Île-de-France",
    logo: "/fredon-logo.jpg",
    role: "Cheffe de Projet – Transformation Digitale",
    period: "Avr. 2024 – Août 2024 (5 mois)",
    location: "Champlan, Île-de-France · Sur site",
    context:
      "Intervention sur un projet de transformation digitale visant le déploiement et l'intégration d'un ERP au sein de l'organisation.",
    missions: [
      {
        category: "Déploiement & intégration ERP",
        tasks: [
          "Déploiement ERP VSActivity : commercial, RH, recrutement, finance",
          "Intégration avec les outils informatiques existants",
          "Supervision de la reprise des données",
        ],
      },
      {
        category: "Pilotage fonctionnel & coordination",
        tasks: [
          "Interface entre l'éditeur et les utilisateurs",
          "Recueil des besoins métiers et ajustement fonctionnel",
          "Analyse des risques et actions d'atténuation",
        ],
      },
      {
        category: "Données, reporting & suivi",
        tasks: [
          "Analyse et préparation des données ERP",
          "Mise en place de reporting Power BI",
          "Formation des utilisateurs et accompagnement au changement",
        ],
      },
    ],
    projects: [
      {
        title: "Déploiement & intégration ERP – VSActivity",
        description: "Pilotage fonctionnel du déploiement d'un ERP, coordination entre l'éditeur et les utilisateurs, et sécurisation des données et des processus métiers.",
      },
      {
        title: "Signal-Espèces – Application mobile",
        description: "Projet dédié à la surveillance des espèces à enjeux en Île-de-France, incluant la participation à la rédaction du cahier des charges et un rôle de consulting fonctionnel.",
      },
      {
        title: "Outil de planification – FREDON Île-de-France",
        description: "Étude comparative des solutions du marché, analyse des coûts, des fonctionnalités et des contraintes, et contribution au choix de l'outil de planification le plus adapté.",
      },
    ],
    tools: [
      { category: "Systèmes & solutions", items: ["ERP", "CRM", "Environnement Microsoft"] },
      { category: "Pilotage & collaboration", items: ["Jira", "Confluence"] },
      { category: "Méthodes & gestion de projet", items: ["Méthodes agiles", "Diagrammes de Gantt", "Planification", "Reporting"] },
      { category: "Données & analyse", items: ["Power BI", "Analyse et préparation de données"] },
      { category: "Documentation & qualité", items: ["Documentation projet", "Plans de tests"] },
      { category: "Coordination & gouvernance", items: ["Coordination éditeur / métiers", "Accompagnement du changement"] },
    ],
    image: "/erp-dashboard-interface.jpg",
  },
  {
    company: "TM Academy",
    logo: "/tm-academy-logo.jpg",
    role: "Consultante Technico-Fonctionnelle",
    department: "Transformation Digitale ",
    period: "Mai 2023 – Août 2023 (4 mois)",
    location: "Algérie · Hybride",
    context:
      "Contribution à un projet de transformation digitale pour une école de formation souhaitant automatiser et digitaliser ses processus métiers (inscriptions, plannings, gestion des formations, suivi des apprenants/clients) via la conception et le développement d'une application web dédiée.",
    missions: [
      {
        category: "Analyse & cadrage fonctionnel",
        tasks: [
          "Identification et analyse des besoins métiers",
          "Formalisation des processus existants et identification des axes d'optimisation",
          "Rédaction du cahier des charges fonctionnel",
        ],
      },
      {
        category: "Conception & modélisation",
        tasks: [
          "Rédaction des spécifications fonctionnelles et techniques",
          "Modélisation des données et des processus (MERISE & UML) : modèles conceptuels et logiques de données, cas d'utilisation, diagrammes de classes et de séquence",
        ],
      },
      {
        category: "Conception IHM & UX",
        tasks: [
          "Conception de maquettes fonctionnelles et graphiques",
          "Définition des parcours utilisateurs et validation avant développement",
        ],
      },
      {
        category: "Développement & réalisation",
        tasks: [
          "Développement complet de l'application web",
          "Mise en place des modules : gestion des formations, inscriptions, utilisateurs, suivi des apprenants",
        ],
      },
      {
        category: "Méthodes & pilotage",
        tasks: [
          "Travail en binôme selon une approche Agile (sprints, points réguliers)",
          "Intégration des retours client et ajustements continus",
          "Suivi des livrables tout au long du projet",
        ],
      },
    ],
    projects: [
      {
        title: "Application web de gestion de formation",
        description: "Conception et développement d'une application web permettant de centraliser la gestion des formations, des inscriptions et des utilisateurs, tout en améliorant le suivi des apprenants et l'efficacité opérationnelle.",
      },
    ],
    tools: [
      { category: "Analyse & conception fonctionnelle", items: ["Cahier des charges", "Spécifications fonctionnelles et techniques"] },
      { category: "Modélisation", items: ["MERISE" , "UML (cas d'utilisation, classes, séquence)"] },
      { category: "UX/UI & conception IHM", items: ["Figma", "Maquettes fonctionnelles"] },
      { category: "Développement web", items: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"] },
      { category: "Méthodes & pilotage", items: ["Méthodologie Agile", "Suivi des livrables"] },
    ],
    hasVideo: true,
    videoUrl: "/academievd.mp4",
  },
  {
    company: "Endlessly",
    logo: "/wellness-logo.jpg",
    role: "Consultante en Transformation Digitale",
    department: "CMS & Identité de Marque",
    period: "Août 2022 – Août 2023 (1 an)",
    location: "Liège, Belgique · À distance",
    context: "Accompagnement d'un cabinet de bien-être dans la modernisation de sa présence digitale, à travers la conception et le déploiement d'un site web vitrine destiné à présenter les prestations, améliorer l'expérience client et renforcer la visibilité marketing. Endlessly propose des soins esthétiques et de bien-être (épilation laser, minceur, anti-âge, massages), du bien-être émotionnel (coaching, EFT), ainsi que la formation et l'équipement de professionnels avec des appareils médico-esthétiques.",
    missions: [
      {
        category: "Analyse & cadrage fonctionnel",
        tasks: [
          "Analyse des besoins métiers et des priorités du client",
          "Compréhension des processus métier et des parcours clients",
          "Rédaction du cahier des charges fonctionnel",
        ],
      },
      {
        category: "Conception & UX/UI",
        tasks: [
          "Conception de l'identité digitale",
          "Réalisation de prototypes UX/UI sur Figma",
          "Définition et validation des parcours utilisateurs",
        ],
      },
      {
        category: "Développement & déploiement",
        tasks: [
          "Création du site web sur WordPress (approche low-code)",
          "Intégration du design validé et des contenus",
          "Configuration des plugins (formulaires, newsletters, SEO, sécurité)",
          "Déploiement sur un environnement cloud sécurisé",
          "Mise en place de sauvegardes automatiques",
        ],
      },
      {
        category: "Tests & accompagnement",
        tasks: [
          "Réalisation de tests fonctionnels (compatibilité multi-supports, performances)",
          "Ajustements fonctionnels selon les retours du client",
          "Formation du client pour une gestion autonome du site",
          "Support technique et accompagnement post-déploiement",
        ],
      },
    ],
    projects: [
      {
        title: "Création du site web du cabinet Endlessly",
        description: "Conception et déploiement d'un site vitrine WordPress visant à présenter les prestations, automatiser certains échanges (formulaires, newsletters) et renforcer la visibilité digitale et l'expérience client.",
      },
    ],
    tools: [
      { category: "CMS & Web", items: ["WordPress"] },
      { category: "UX/UI & conception", items: ["Figma"] },
      { category: "Fonctionnel & pilotage", items: ["Cahier des charges", "Ateliers fonctionnels", "Parcours utilisateurs"] },
      { category: "Déploiement & exploitation", items: ["Cloud", "Sauvegardes", "Sécurité"] },
      { category: "Marketing & visibilité", items: ["SEO", "Automatisation des formulaires et newsletters"] },
    ],
    hasVideo: true,
    videoUrl: "/wordpress-website-fitness.mp4",
  },
]
// </CHANGE>

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Expériences professionnelles</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-primary/30 transition-all group">
              <div className="grid md:grid-cols-5 gap-6">
                {/* Left: Company info */}
                <div className="md:col-span-2 p-6 md:p-8 bg-gradient-to-br from-primary/5 to-chart-2/5 flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-background shadow-md flex items-center justify-center flex-shrink-0 border-2 border-primary/20">
                      <Image
                        src={exp.logo || "/placeholder.svg"}
                        alt={`${exp.company} logo`}
                        width={60}
                        height={60}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1 flex items-center gap-2">
                        <span className="truncate">{exp.company}</span>
                        {exp.company === "FREDON Île-de-France" && (
                          <Popover>
                            <PopoverTrigger asChild>
                              <button
                                type="button"
                                aria-label="À propos de FREDON Île-de-France"
                                className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                              >
                                <Info className="w-3.5 h-3.5" />
                              </button>
                            </PopoverTrigger>
                            <PopoverContent align="start" className="w-96 text-sm">
                              <p className="leading-relaxed">
                                FREDON Île-de-France est un organisme public à vocation sanitaire spécialisé dans la santé
                                des végétaux. Il surveille l’état des plantes, détecte les maladies et nuisibles, et
                                accompagne les collectivités et les professionnels des espaces verts dans la gestion
                                écologique et durable de leurs espaces.
                              </p>
                            </PopoverContent>
                          </Popover>
                        )}
                        {exp.company === "Bouygues Telecom" && (
                          <Popover>
                            <PopoverTrigger asChild>
                              <button
                                type="button"
                                aria-label="À propos de Bouygues Telecom"
                                className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                              >
                                <Info className="w-3.5 h-3.5" />
                              </button>
                            </PopoverTrigger>
                            <PopoverContent align="start" className="w-96 text-sm">
                              <p className="leading-relaxed">
                                Bouygues Telecom est un opérateur de télécommunications français qui fournit des services
                                de téléphonie mobile, internet et réseaux aux particuliers et aux entreprises.
                              </p>
                            </PopoverContent>
                          </Popover>
                        )}
                      </h3>
                      {exp.department && (
                        <p className="text-sm text-muted-foreground mb-2">{exp.department}</p>
                      )}
                      {exp.company === "Bouygues Telecom" && (
                        <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                          <span>SI provisioning mobile</span>
                          <Popover>
                            <PopoverTrigger asChild>
                              <button
                                type="button"
                                aria-label="Définition du SI de provisioning mobile"
                                className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                              >
                                <Info className="w-3.5 h-3.5" />
                              </button>
                            </PopoverTrigger>
                            <PopoverContent align="start" className="w-80 text-sm">
                              <p>
                                Le SI de provisioning mobile gère l’activation et l’évolution des services mobiles des
                                clients (ligne, carte SIM, accès internet, options, services réseau).
                              </p>
                            </PopoverContent>
                          </Popover>
                        </p>
                      )}
                      <p className="text-base font-semibold text-primary mb-2">{exp.role}</p>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">{exp.period}</p>
                        <p className="text-xs text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>
                  </div>

                  {exp.context && (
                    <div className="pt-4 border-t border-primary/20">
                      <p className="text-sm text-muted-foreground leading-relaxed">{exp.context}</p>
                    </div>
                  )}

                  {exp.hasVideo && exp.videoUrl ? (
                    <div className="mt-4 rounded-lg overflow-hidden border-2 border-primary/20 shadow-lg">
                      <video
                        src={exp.videoUrl}
                        controls
                        muted
                        playsInline
                        autoPlay
                        loop
                        preload="metadata"
                        poster={(() => {
                          try {
                            return exp.videoUrl.endsWith(".mp4")
                              ? exp.videoUrl.replace(/\.mp4$/i, ".jpg")
                              : undefined
                          } catch {
                            return undefined
                          }
                        })()}
                        className="w-full h-auto"
                      />
                    </div>
                  ) : (
                    exp.image && (
                      <div className="mt-4 rounded-lg overflow-hidden border-2 border-primary/20 shadow-lg">
                        <Image
                          src={exp.image || "/placeholder.svg"}
                          alt={`${exp.company} project`}
                          width={500}
                          height={300}
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )
                  )}
                </div>

                {/* Right: Missions and projects */}
                <div className="md:col-span-3 p-6 md:p-8 space-y-6">
                  {/* Video moved to left column in place of the photo */}

                  {/* Missions */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <span className="w-1 h-6 bg-primary rounded-full" />
                      Missions principales
                    </h4>
                    {exp.missions.map((mission, missionIndex) => (
                      <div key={missionIndex} className="space-y-2">
                        <p className="text-sm font-medium text-primary">{mission.category}</p>
                        <ul className="space-y-1.5 pl-4">
                          {mission.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 mr-3 flex-shrink-0" />
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>


                  {/* Projects */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div className="pt-4 border-t border-border space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <span className="w-1 h-6 bg-chart-2 rounded-full" />
                        Projets clés
                      </h4>
                      <div className="space-y-3">
                        {exp.projects.map((project, projectIndex) => (
                          <div key={projectIndex}>
                            {typeof project === "string" ? (
                              <Badge variant="secondary" className="text-xs py-1.5 px-3">
                                {project}
                              </Badge>
                            ) : (
                              <div className="space-y-1">
                                <p className="text-sm font-semibold text-chart-2">{project.title}</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* Environnement & outils (Bouygues Telecom & FREDON & Endlessly & TM Academy) */}
                  {(exp.company === "Bouygues Telecom" || exp.company === "FREDON Île-de-France" || exp.company === "Endlessly" || exp.company === "TM Academy") && exp.tools && (
                    <div className="pt-4 border-t border-border space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <span className="w-1 h-6 bg-chart-2 rounded-full" />
                        Environnement & outils
                      </h4>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="tools">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <AccordionTrigger className="text-sm">
                                <div className="flex flex-wrap items-center gap-2">
                                  {exp.tools.slice(0, 4).map((group, i) => (
                                    <Badge key={i} variant="secondary" className="text-xs py-1 px-2">
                                      {group.items[0]}
                                    </Badge>
                                  ))}
                                  <span className="text-xs text-muted-foreground hidden sm:inline">Voir les outils</span>
                                </div>
                              </AccordionTrigger>
                            </TooltipTrigger>
                            <TooltipContent sideOffset={6}>Cliquer pour ouvrir</TooltipContent>
                          </Tooltip>
                          <AccordionContent>
                            <div className="grid md:grid-cols-2 gap-4">
                              {exp.tools.map((group, i) => (
                                <div key={i} className="space-y-1">
                                  <p className="text-xs font-medium text-foreground/80">{group.category}</p>
                                  <p className="text-xs text-muted-foreground">
                                    {group.items.join(" · ")}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  )}
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
