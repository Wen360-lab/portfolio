import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-teal px-6 py-12 rounded-2xl m-7">
      <div className="flex flex-col md:flex-row gap-10 justify-between text-left">
        {/* Logo + tagline */}
        <div className="md:w-1/4">
          <img src="/Assets/icones/Logo.svg" alt="Logo PW" className="h-10 mb-4" />
          <p className="text-white/80 text-sm">
            Des interfaces propres, intuitives et fonctionnelles.
          </p>
        </div>

        {/* Liens utiles */}
        <div>
          <h2 className="text-white mb-4">Liens utiles</h2>
          <ul className="flex flex-col gap-2 text-white/80 text-sm">
            <li><a href="/cv.pdf" download>Télécharger cv</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        </div>

        {/* Réseaux */}
        <div>
          <h2 className="text-white mb-4">Réseaux</h2>
          <ul className="flex flex-col gap-3 text-white text-xl">
            <li><a href="https://wa.me/24177478646" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a></li>
            <li><a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
            <li><a href="https://github.com/ton-profil" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
          </ul>
        </div>

        {/* Légal */}
        <div>
          <h2 className="text-white mb-4">Légal</h2>
          <ul className="flex flex-col gap-2 text-white/80 text-sm">
            <li><a href="#mentions">Mentions légales</a></li>
            <li><a href="#confidentialite">Politique de confidentialité</a></li>
            <li><a href="#cgu">CGU</a></li>
          </ul>
        </div>
      </div>

      {/* Séparateur */}
      <div className="border-t border-white/20 my-8" />

      {/* Copyright */}
      <p className="text-white/70 text-sm text-center">
        ©2026 Portfolio MAKANAGA-ETCHOU Wen-Joanel
      </p>
    </footer>
  )
}