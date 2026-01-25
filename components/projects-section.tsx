"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Smartphone, Monitor, Box, Database, FileText, Map, Lock, Github, ChevronDown } from "lucide-react"
import { useState } from "react"

const projectCategories = [
  {
    title: "Projets fonctionnels & conception SI",
    description: "Cœur de mon profil",
    projects: [
      {
  title: "Mémoire de fin d’études – Méthodologie d’intégration d’agents IA",
  description:
    "Élaboration d’une méthodologie d’ingénierie de projet pour le déploiement d’agents IA dans le secteur télécom, couvrant l’analyse des besoins, la gouvernance, le RACI, la roadmap, les risques et les KPIs. Le mémoire inclut la conception de l’architecture SI cible afin d’améliorer la lisibilité contractuelle et renforcer la fidélisation client.",
  icon: Brain,
  tags: [
    "Agents IA",
    "Analyse fonctionnelle",
    "Ingénierie de projet",
    "KPIs",
    "Conception SI",
    "Architecture cible",
    "Prévention du churn"
  ],
  year: "2024–2025",
  github: "https://github.com/Ranyamalek23/Memoire-MIAGE-RM/tree/main",
},


      {
  title: "Modélisation SI As-Is / To-Be – ArchiMate",
  description:
    "Analyse de l’existant et modélisation du système d’information As-Is et To-Be dans le cadre d’un projet d’intégration d’ERP. Le travail comprend l’analyse des besoins métiers, la modélisation des processus en BPMN, la conception des architectures métier, applicative et technique en ArchiMate, ainsi que la définition d’une roadmap et d’indicateurs de suivi.",
  icon: Box,
  tags: [
    "Analyse de l’existant",
    "Modélisation SI",
    "BPMN",
    "ArchiMate",
    "Intégration ERP",
    "Roadmap projet",
    "Indicateurs de suivi",
    "Urbanisation du SI"
  ],
  year: "2024–2025",
  github: "https://github.com/Ranyamalek23/Mod-SI-As-Is-To-Be-ArchiMate",
},

      {
  title: "Analyse de conformité ISO 27002 & MEHARI",
  description:
    "Réalisation d’une analyse de conformité sécurité selon les référentiels ISO 27002 et MEHARI, incluant l’identification des actifs critiques, l’évaluation et la cartographie des risques, les études d’impact et l’élaboration d’un plan d’actions pour renforcer la sécurité du système d’information.",
  icon: Lock,
  tags: [
    "Sécurité des SI",
    "Analyse de conformité",
    "ISO 27002",
    "MEHARI",
    "Analyse des risques",
    "Cartographie des risques",
    "Étude d’impact",
  ],
  year: "2024–2025",
  github: "https://github.com/Ranyamalek23/ISO-27002-MEHARI",
},
     {
  title: "Cahier des Charges Système RFID",
  description:
    "Réalisation d’un cahier des charges fonctionnel et technique pour un système de contrôle d’accès RFID, incluant l’analyse des besoins, la définition des exigences fonctionnelles et non fonctionnelles, la modélisation des cas d’utilisation, la conception de l’architecture globale et la planification du projet, avec un prototype conceptuel.",
  icon: Lock,
  tags: [
    "RFID",
    "Cahier des charges",
    "IoT",
    "Exigences fonctionnelles",
    "Cas d’utilisation",
    "GANT"
  ],
  year: "2024-2025",
  github: "https://github.com/Ranyamalek23/CC-RFID/tree/main",
},
{
  title: "Planification et pilotage de projet – Microsoft Project",
  description:
    "Réalisation d’un projet de planification et de pilotage à l’aide de Microsoft Project, incluant la décomposition du projet en tâches et sous-tâches, l’identification des dépendances, la définition des jalons, l’affectation des ressources et la construction d’un diagramme de Gantt pour le suivi et le contrôle de l’avancement.",
  icon: FileText,
  tags: [
    "Gestion de projet",
    "Planification",
    "MS Project",
    "Diagramme de Gantt",
    "Jalons "
  ],
  year: "2022–2023",
    github: "https://github.com/Ranyamalek23/GestionProjet-MSproject/tree/main",

},

       {
  title: "HelpDesk360 – IT Support Portal",
  description:
    "Cadrage et pilotage d’un projet de portail interne de support IT visant à centraliser la gestion des incidents et demandes. Le travail inclut la définition des objectifs et du périmètre, la structuration de la gouvernance projet, l’identification des parties prenantes, l’élaboration du planning, l’analyse des risques et la définition des critères de succès et KPIs.",
  icon: FileText,
  tags: [
    "Gestion de projet SI",
    "Cadrage projet",
    "ITIL",
    "Planning projet",
    "KPIs",
    "Support IT",
  ],
  year: "2025",
  github: "https://github.com/Ranyamalek23/HelpDesk360-IT-Support-Portal/tree/main",
},

      {
  title: "Smart Tourism & GIS",
  description:
    "Analyse du concept de Smart Tourism et du rôle des systèmes d’information géographique (GIS) dans la gestion des destinations touristiques. Le projet comprend une analyse métier, un état de l’art, l’identification des données et technologies GIS, l’étude de cas concrets et la formulation de recommandations pour une gestion intelligente et durable des flux touristiques.",
  icon: Map,
  tags: [
    "Analyse métier",
    "GIS",
    "Systèmes d’information géographique",
   
  ],
  year: "2024-2025",
  github: "https://github.com/Ranyamalek23/Smart-Tourism-GIS/",
},
 
    ],
  },
  {
    title: "Projets de développement & applications",
    description: "Réalisations techniques",
    projects: [
      {
        title: "Planche Parfaite – Détection de posture IA",
        description:
          "Application mobile de détection de planche correcte avec IA. Cahier des charges, prototypage fonctionnel, développement Kotlin et API NestJS.",
        icon: Smartphone,
        tags: ["Figma" , "MERISE" , "UML" , "Kotlin", "NestJS", "Machine Learning"],
        year: "2024-2025",
        github: "https://github.com/Ranyamalek23/planche-parfaite-RM",
      },
      {
  title: "OnSite – Gestion de salles et postes de travail",
  description:
    "Développement d’une application web de réservation de salles et de postes de travail destinée à optimiser l’organisation des espaces en entreprise. Le projet comprend l’analyse des besoins, la rédaction du cahier des charges, la définition des user stories, le prototypage des interfaces sur Figma, la modélisation UML et l’implémentation de la solution avec une architecture .NET / Angular et une base de données SQL Server.",
  icon: Monitor,
  tags: [
    "User stories",
    "Prototypage Figma",
    "UML",
    ".NET",
    "Angular",
    "SQL Server",
  ],
  year: "2023–2024",
  github: "https://github.com",
},

      {
  title: "Site web – Quiz Football",
  description:
    "Développement d’un site web dédié au football combinant actualités sportives et quiz interactifs. Le projet met l’accent sur l’ergonomie, une interface utilisateur moderne, une navigation fluide et l’utilisation de JavaScript pour la gestion des interactions et du contenu dynamique.",
  icon: Monitor,
  tags: [
    "HTML",
    "CSS",
    "JavaScript",
    "Développement web",
    "Interface utilisateur",
    "UX",
    "Site interactif",
    "Quiz" ,
    "Front-end"
  ],
  year: "Projet personnel",
  github: "https://github.com/Ranyamalek23/Site-web-Quiz-Football/tree/main",
},

      {
        title: "Application de réservation – Agence voyage",
        description:
        "Conception et développement d’une application web de réservation pour une agence de voyage, incluant la gestion des réservations et des profils utilisateurs. Le projet comprend l’analyse des besoins, la modélisation UML et l’implémentation de la solution en PHP/MySQL." ,
        icon: Monitor,
        tags: ["PHP", "MySQL", "UML"],
        year: "2021-2022",
        github: "https://github.com/Ranyamalek23/Application-de-reservation-Agence-voyage/tree/main",
      },
      {
  title: "Projet Bases de données – SQL",
  description:
    "Réalisation d’un projet de bases de données comprenant l’analyse du besoin, la modélisation relationnelle, la conception du schéma de données et l’implémentation de requêtes SQL avancées sous Oracle. Le projet inclut l’exploitation et l’analyse des résultats pour répondre aux problématiques fonctionnelles.",
  icon: Database,
  tags: [
    "Analyse des données",
    "Modélisation relationnelle",
    "SQL",
    "Oracle",
    "Conception de schéma",
  ],
  year: "2022–2023",
          github: "https://github.com/Ranyamalek23/Projet-Bases-de-donn-es-SQL/tree/main",

},
{
  title: "Gestion de produits – Java POO",
  description:
    "Conception et développement d’une application console en Java pour la gestion de produits, basée sur les principes de la programmation orientée objet. Le projet inclut la modélisation des classes, l’utilisation de l’héritage, la gestion d’une collection de produits et la mise en place d’un menu interactif permettant l’ajout, la modification, la suppression et l’affichage des produits.",
  icon: Monitor,
  tags: [
    "Java",
    "POO",
    "Héritage",
    "Objet",
    "ArrayList",
    "Application console"
  ],
  year: "2021–2022",
  github: "https://github.com/Ranyamalek23/Gestion-de-produits-Java-POO/tree/main"
},
{
  title: "Programmation système – Gestion de processus et signaux UNIX",
  description:
    "Développement d’un programme en C sous Linux mettant en œuvre la création de processus (père et fils) et la gestion des signaux UNIX. Le projet inclut l’utilisation de fork, la gestion de SIGINT, SIGTSTP et SIGALRM, la programmation d’alarmes pour le déclenchement de mesures temporisées et le contrôle du cycle d’exécution selon le rôle de chaque processus.",
  icon: Monitor,
  tags: [
    "Programmation système",
    "Langage C",
    "Processus",
    "fork",
    "Signaux UNIX",
    
  ],
  year: "2022–2023",
  github: "https://github.com/Ranyamalek23/Programmation-syst-me-Gestion-de-processus-et-signaux-UNIX",
},




    ],
  },
  {
    title: "Projets IA & Data",
    description: "Spécialisation",
    projects: [

{
  title: "Extraction et analyse de posologie médicale – TAL",
  description:
    "Développement  Python pour l’extraction automatique de substances actives et de posologies à partir de corpus médicaux. Le projet inclut le scraping de données depuis la base VIDAL, l’enrichissement de dictionnaires, l’analyse linguistique avec Unitex, la reconnaissance de patterns de dosage (mg, ml, µg) et le stockage des résultats dans une base de données.",
  icon: Brain,
  tags: [
    "Python",
    "Traitement Automatique du Langage",
    "Extraction d’information",   
    "Grammaires linguistiques",
    "SQLite",
    "Données médicales"
  ],
  year: "2022–2023",
  github: "https://github.com/Ranyamalek23/Extraction-et-analyse-de-posologie-medicale-TAL",
},
      {
  title: "Clustering de patients – Analyse non supervisée",
  description:
    "Réalisation d’un projet d’analyse de données médicales basé sur des techniques de clustering non supervisé. Le travail inclut le prétraitement des données, l’application d’algorithmes de clustering (K-Means et clustering hiérarchique) et l’analyse des profils de patients afin d’identifier des groupes homogènes et d’en extraire des insights.",
  icon: Brain,
  tags: [
    "Python",
    "Clustering",
    "K-Means",
    "Clustering hiérarchique",
    "Analyse de données",
    "Prétraitement des données",
    "Healthcare",
  ],
  year: "2023–2024",
  github: "https://github.com/Ranyamalek23/Clustering-de-patients-Analyse-non-supervisee",
},


{
  title: "Prédiction de la survie du Titanic – Machine Learning",
  description:
    "Réalisation d’un projet de data science visant à prédire la survie des passagers du Titanic. Le travail comprend l’analyse exploratoire des données, le prétraitement, la construction de modèles de machine learning en Python et l’évaluation des performances à l’aide de métriques adaptées.",
  icon: Brain,
  tags: [
    "Python",
    "Machine Learning",
    "Data Science",
    "Analyse exploratoire",
    "Modélisation prédictive",
    "Évaluation des performances"
  ],
  year: "2024–2025",
  github: "https://github.com/Ranyamalek23/Pr-diction-de-la-survie-du-Titanic-Machine-Learning",
},




    ],
  },
]
// </CHANGE>

export function ProjectsSection() {
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set())
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set())

  const toggleExpanded = (key: string) => {
    const newSet = new Set(expandedProjects)
    if (newSet.has(key)) {
      newSet.delete(key)
    } else {
      newSet.add(key)
    }
    setExpandedProjects(newSet)
  }

  const toggleCategoryExpanded = (categoryIndex: number) => {
    const newSet = new Set(expandedCategories)
    if (newSet.has(categoryIndex)) {
      newSet.delete(categoryIndex)
    } else {
      newSet.add(categoryIndex)
    }
    setExpandedCategories(newSet)
  }

  const isDescriptionLong = (text: string) => text.length > 140

  const truncateText = (text: string) => {
    if (text.length > 140) {
      return text.substring(0, 140) + "..."
    }
    return text
  }
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Projets & réalisations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Portfolio de projets combinant expertise fonctionnelle, conception SI et innovation technique
          </p>
        </div>

        <div className="space-y-16">
          {projectCategories.map((category, categoryIndex) => {
            const isCategoryExpanded = expandedCategories.has(categoryIndex)
            const projectsToShow = isCategoryExpanded ? category.projects : category.projects.slice(0, 6)
            const hasMoreProjects = category.projects.length > 6
            return (
            <div key={categoryIndex} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="text-center space-y-1">
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                  <p className="text-sm text-primary font-medium">{category.description}</p>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsToShow.map((project, projectIndex) => {
                  const Icon = project.icon
                  const projectKey = `${categoryIndex}-${projectIndex}`
                  const isExpanded = expandedProjects.has(projectKey)
                  const isLongDescription = isDescriptionLong(project.description)
                  return (
                    <Card
                      key={projectIndex}
                      className="group p-6 hover:shadow-2xl transition-all duration-300 relative overflow-hidden border-2 hover:border-primary/50"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                            {project.year}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors leading-snug">
                            {project.title}
                          </h4>
                          <div className="space-y-2">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {isExpanded ? project.description : truncateText(project.description)}
                            </p>
                            {isLongDescription && (
                              <button
                                onClick={() => toggleExpanded(projectKey)}
                                className="text-xs text-primary hover:text-primary/80 font-semibold flex items-center gap-1.5 transition-colors"
                              >
                                {isExpanded ? "Voir moins" : "Voir plus"}
                                <ChevronDown
                                  className={`h-3.5 w-3.5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                                />
                              </button>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all bg-transparent"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            Voir sur GitHub
                          </a>
                        </Button>
                      </div>
                    </Card>
                  )
                })}
              </div>

              {hasMoreProjects && (
                <div className="flex justify-center pt-4">
                  <Button
                    onClick={() => toggleCategoryExpanded(categoryIndex)}
                    className="gap-2 bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 border-2"
                    variant="outline"
                  >
                    {isCategoryExpanded ? (
                      <>
                        Voir moins
                        <ChevronDown className="h-4 w-4 rotate-180 transition-transform" />
                      </>
                    ) : (
                      <>
                        Voir plus ({category.projects.length - 6} autres)
                        <ChevronDown className="h-4 w-4 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
            )
          })}
        </div>
        {/* </CHANGE> */}
      </div>
    </section>
  )
}
