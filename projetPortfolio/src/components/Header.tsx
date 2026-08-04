import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const BASE = import.meta.env.BASE_URL

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-md border-b border-white/20 w-full shadow">

      {/* Logo */}
      <img src={`${BASE}/static/icones/Logo.svg`} alt="Logo PW" className="h-15 w-40" />

      {/* Navigation - cachée sur mobile, visible à partir de md */}
      <nav className="hidden lg:block">
        <ul className="flex gap-6 text-sm font-medium font-nav text-text-dark">
          <li className="hover:text-teal duration-300"><a href="#accueil">Accueil</a></li>
          <li className="hover:text-teal duration-300"><a href="#apropos">À propos</a></li>
          <li className="hover:text-teal duration-300"><a href="#competences">Compétences</a></li>
          <li className="hover:text-teal duration-300"><a href="#projets">Projets</a></li>
          <li className="hover:text-teal duration-300"><a href="#contacts">Contacts</a></li>
        </ul>
      </nav>

      {/* CTA - caché sur mobile */}
      
        <a href="/cv.pdf"
        download
        className="hidden lg:inline-block rounded-xl px-5 py-3 text-sm font-semibold font-nav text-white border-2 opacity-100 bg-accent shadow hover:opacity-70 transition-opacity duration-300 border-yellow"
      >
        Téléchargez mon CV
      </a>

      {/* Bouton burger - visible uniquement sur mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-orange"
        aria-label="Menu"
      >
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Menu mobile déroulant */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow lg:hidden">
          <ul className="flex flex-col gap-4 p-6 text-sm font-medium font-nav text-text-dark">
            <li className="hover:text-teal duration-300"><a href="#accueil" onClick={() => setIsOpen(false)}>Accueil</a></li>
            <li className="hover:text-teal duration-300"><a href="#apropos" onClick={() => setIsOpen(false)}>À propos</a></li>
            <li className="hover:text-teal duration-300"><a href="#competences" onClick={() => setIsOpen(false)}>Compétences</a></li>
            <li className="hover:text-teal duration-300"><a href="#projets" onClick={() => setIsOpen(false)}>Projets</a></li>
            <li className="hover:text-teal duration-300"><a href="#contacts" onClick={() => setIsOpen(false)}>Contacts</a></li>
            <li>
              
                <a href="./cv.pdf"
                download
                className="inline-block rounded-xl px-5 py-3 text-sm font-semibold text-white bg-accent shadow"
              >
                Téléchargez mon CV
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}