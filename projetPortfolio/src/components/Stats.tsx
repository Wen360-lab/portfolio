import { motion } from 'motion/react'

export default function Stats() {
  return (
    <div className="flex gap-10 justify-center py-10">
      {/* Projets réalisés */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-4xl md:text-6xl font-bold text-accent">2+</p>
        <p className="text-sm text-yellow">Projets réalisés</p>
      </motion.div>
      
      {/* Tecnos appris ou maîtrisées */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <p className="text-4xl md:text-6xl font-bold text-accent">8+</p>
        <p className="text-sm text-yellow">Technos maîtrisées</p>
      </motion.div>
      
      {/* Temps de formation */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-4xl md:text-6xl font-bold text-accent">6+</p>
        <p className="text-sm text-yellow">Mois d'expérience</p>
      </motion.div>
    </div>
  )
}