"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: "about", label: "À propos" },
    { id: "skills", label: "Compétences" },
    { id: "experience", label: "Expériences" },
    { id: "projects", label: "Projets" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/60 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button onClick={() => scrollToSection("hero")} className="relative group text-lg lg:text-xl font-bold">
            <span className="bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent">
              Ranya Malek
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-500 group-hover:w-full transition-all duration-300" />
          </button>

          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
                <span className="absolute inset-0 rounded-full border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}

            <Button
              variant="default"
              size="sm"
              className="ml-2 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
              asChild
            >
              <a href="/CV-CDI-ING-RM.pdf" download="CV-CDI-ING-RM.pdf">
                <Download className="h-4 w-4 mr-2" />
                CV
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            {isMobileMenuOpen ? <X className="h-5 w-5 relative z-10" /> : <Menu className="h-5 w-5 relative z-10" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-300">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-lg transition-all duration-200 border border-transparent hover:border-primary/20"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="default"
              size="sm"
              className="w-full mt-2 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white"
              asChild
            >
              <a href="/CV-CDI-ING-RM.pdf" download="CV-CDI-ING-RM.pdf">
                <Download className="h-4 w-4 mr-2" />
                Télécharger CV
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
