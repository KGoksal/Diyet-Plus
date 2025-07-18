"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container px-4 mx-auto">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">DiyetPlus</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => scrollToSection("calculators")}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Hesaplayıcı
            </button>
            <button
              onClick={() => scrollToSection("articles")}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Makaleler
            </button>
            <Button
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white bg-transparent"
            >
              İletişim
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                Ana Sayfa
              </button>
              <button
                onClick={() => scrollToSection("calculators")}
                className="text-left text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                Hesaplayıcı
              </button>
              <button
                onClick={() => scrollToSection("articles")}
                className="text-left text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                Makaleler
              </button>
              <Button
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white w-fit bg-transparent"
              >
                İletişim
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
