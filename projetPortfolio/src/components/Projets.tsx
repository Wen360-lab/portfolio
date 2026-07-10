import { motion } from 'motion/react'

const projects = [
  {
    titre: 'Tech Manager Dashboard',
    image: '/Images/tech-manager.png',
    description: "Dashboard de gestion d'équipements informatiques avec vue d'ensemble statistique. Interface comprenant une sidebar de navigation, des cartes de données et un tableau détaillé des appareils.",
  },
  {
    titre: 'Auto Ecole - Landing Page',
    image: '/Images/formation-web.png',
    description: "Landing page pour une auto-école présentant les programmes de formation. Design coloré avec sections Suivi personnalisé et Préparation à l'examen mises en avant visuellement.",
  },
  {
    titre: 'Bacho',
    image: '/Images/bacho.png',
    description: "Plateforme web pour aider les lycéens à préparer leur épreuve de gymnastique au baccalauréat. L'application permet de créer des fiches d'enchaînements en sélectionnant des figures depuis une interface interactive.",
  },
  {
    titre: "Page d'inscription",
    image: '/Images/front-end.png',
    description: "Landing page pour une auto-école présentant les programmes de formation. Design coloré avec sections Suivi personnalisé et Préparation à l'examen mises en avant visuellement.",
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
            Les projets réalisés
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
                
                    <a href="#"
                        className="inline-block rounded-xl px-5 py-2 mt-4 text-sm font-semibold text-white bg-accent"
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