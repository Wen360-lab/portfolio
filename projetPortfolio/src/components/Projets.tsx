import { motion } from 'motion/react'

const BASE = import.meta.env.BASE_URL

const projects = [
  {
    titre: 'Présence - la clé du succès',
    image:  `${BASE}Images/presence.png`,
    description: "Présence est une application web de gestion de l'assiduité scolaire et universitaire. Elle possède une architechture simple avec des technologies modernes (Reactjs, Nextjs, Tailwindcss, Motion etc.). Son rôle : permettre un meilleur suivi de l'assiduité des apprenants.",
    link: "https://presence-coral.vercel.app/"
  },
  {
    titre: 'Portail Portfolio',
    image:  `${BASE}Images/portailPortfolio.png`,
    description: "Le Portail Portfolio est une plateforme web destinée à promouvoir les développeurs de la promo 14 de l'École 241 issue du programme D'Click initié par l'OIF. Il s'agit plus exactement d'un projet collaboratif dans lequel j'ai contribué.",
    link: "https://portail-portfolio-v3-deploy-1.vercel.app/"
  },
  {
    titre: 'Gestion Emprunt Ordinateurs',
    image:  `${BASE}Images/gestionOrdinateurs.png`,
    description: "Application web complète de gestion des emprunts d'ordinateurs pour l'École 241. Développée en équipe, elle permet d'assigner, suivre et gérer le parc informatique en temps réel.",
    link: "https://gestion-emprunt-ordi.vercel.app/"
  },
]

export default function Projets() {
  return (
    <section id="projets" className="bg-white px-6 py-16 text-center">
            
        <motion.h1
            className="text-teal pb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            Projets réalisés
        </motion.h1>

        <div className="flex flex-col gap-10 max-w-3xl mx-auto">
            {projects.map((project, index) => (
            <motion.div
                key={project.titre}
                className="flex flex-col md:flex-row gap-6 items-center text-left bg-blue-light rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                <img
                src={project.image}
                alt={project.titre}
                className="w-full md:w-1/2 h-auto object-cover p-6"
                />
                <div className="p-6 md:w-1/2">
                    <h2 className="text-navy mb-2">{project.titre}</h2>
                    <p className="text-navy/80 mb-4">{project.description}</p>
                
                    <a href={project.link} 
                        target="_blank" rel="noopener noreferrer"
                        className="inline-block rounded-xl px-5 py-2 mt-4 text-sm font-semibold shadow border-2 border-yellow text-white bg-accent hover:bg-yellow hover:border-orange"
                    >
                        Consulter
                    </a>
                </div>
            </motion.div>
            ))}
        </div>
    </section>
  )
}