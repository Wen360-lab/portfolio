import { motion } from 'motion/react'

export default function Competences() {
  return (
    <section id="competences" className="bg-teal px-6 py-16 text-center">
        {/* Le titre de la section Compétences */}
        <motion.h1
            className="text-white font-healding pb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            Découvrez mes compétences
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-10 justify-center">
            {/* Colonne 1 : Compétences techniques */}
            <motion.div
                className="flex-1 text-justify md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2 className="text-yellow mb-4">Compétences techniques</h2>

                <p className="font-nav font-semibold text-white">Développement Front-end</p>
                <p className="text-white/80 mb-4">
                    Conception et intégration d'interfaces web modernes, responsives et animées.
                    Technologies maîtrisées : React • Next.js • TypeScript • Tailwind CSS
                </p>

                <br />
                <p className="font-nav font-semibold text-white">Outils de développement</p>
                <p className="text-white/80">
                    Utilisation de Git et GitHub pour le versioning, VS Code comme environnement
                    principal, et Figma pour la conception de maquettes.
                </p>
            </motion.div>

            {/* Colonne 2 : Compétences transversales */}
            <motion.div
                className="flex-1  text-justify md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
            >
                <h2 className="text-yellow mb-4">Compétences transversales et méthodologies</h2>

                <p className="font-nav font-semibold text-white">Veille technologique</p>
                <p className="text-white/80 mb-4">
                    Aptitude à apprendre en continu et à me tenir à jour sur les nouvelles
                    technologies front-end.
                </p>
                <br />

                <p className="font-nav font-semibold text-white">Gestion de projets</p>
                <p className="text-white/80 mb-4">
                    Rigoureux et méthodique, j'adopte les méthodologies agiles sur l'ensemble
                    de mes projets.
                </p>

                <br />
                <p className="font-nav font-semibold text-white">Accessibilité</p>
                <p className="text-white/80 mb-4">
                    Je conçois des sites performants et accessibles à tous, en respectant
                    les normes établies par le W3C.
                </p>
                <br />

                <p className="font-nav font-semibold text-white">Sécurité web</p>
                <p className="text-white/80">
                    La sécurité reste une priorité constante dans mes développements.
                </p>
            </motion.div>

            {/* Colonne 3 : Qualités personnelles */}
            <motion.div
                className="flex-1  text-justify md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <h2 className="text-yellow mb-4">Qualités personnelles</h2>

                <p className="font-nav font-semibold text-white">Résolution de problèmes</p>
                <p className="text-white/80 mb-4">
                    Bonne capacité d'analyse et de recherche de solutions.
                </p>
                <br />

                <p className="font-nav font-semibold text-white">Curiosité et adaptabilité</p>
                <p className="text-white/80 mb-4">
                    Un goût profond pour l'apprentissage de nouvelles technologies.
                </p>
                <br />

                <p className="font-nav font-semibold text-white">Communication et empathie</p>
                <p className="text-white/80">
                    J'aime travailler en équipe et être à l'écoute des besoins réels
                    de mes clients.
                </p>
            </motion.div>
        </div>
    </section>
  )
}