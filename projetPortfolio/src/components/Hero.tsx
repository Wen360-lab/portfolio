import { motion } from 'motion/react'
const BASE = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section
      id="accueil" className="relative overflow-hidden px-6 py-6 md:py-24 text-center bg-cover bg-center m-8 rounded-2xl"
      style={{ backgroundImage: `url(${BASE}Images/BgHero.jpg)` }}
    >
      <div className="flex flex-col">
        <motion.h1
          className="text-white text-shadow-2xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          DES INTERFACES PENSÉES,<br /> PAS SEULEMENT CODÉES
        </motion.h1>

        <motion.p
          className="mt-4 text-2xl text-white/90 font-nav mx-auto md:px-60 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Créer des expériences web qui ont du mouvement est ma mission
        </motion.p>
      </div>
    </section>
  )
}