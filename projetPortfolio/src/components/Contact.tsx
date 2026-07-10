import { motion } from 'motion/react'
import { FiHome, FiPhone, FiMail } from 'react-icons/fi'

const contacts = [
  {
    icon: FiHome,
    titre: 'Où me trouver ?',
    texte: (
      <>
        Basé à <span className="text-accent">Libreville</span>, disponible pour des missions en remote partout dans le monde.
      </>
    ),
  },
  {
    icon: FiPhone,
    titre: 'Appelez moi',
    texte: (
      <>
        Disponible du lundi au vendredi pour échanger sur vos projets.
        <br />
        <span className="text-accent">+241 77 47 86 46</span>
        <br />
        <span className="text-accent">+241 66 79 27 95</span>
      </>
    ),
  },
  {
    icon: FiMail,
    titre: 'Ecrivez moi',
    texte: (
      <>
        La meilleure façon de me contacter, je réponds sous 24-48h.
        <br />
        <span className="text-accent">wenetchou330@gmail.com</span>
      </>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contacts" className="flex flex-col m-7 rounded-2xl overflow-hidden">

        {/* Image de fond avec le titre */}
        <div
            className="relative flex items-center justify-center h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(/Images/Libreville.jpg)` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />
            
            {/* Titre au-dessus de l'overlay */}
            <motion.h1
                className="relative z-10 text-accent font-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Contacts
            </motion.h1>
        </div>

      {/* Bloc blanc avec les 3 contacts */}
      <div className="bg-white px-6 py-16">
        <div className="flex flex-col md:flex-row gap-8 justify-center text-center">
          {contacts.map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.div
                key={contact.titre}
                className="flex flex-col items-center gap-2 flex-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Icon size={32} className="text-accent" />
                <h2 className="text-navy">{contact.titre}</h2>
                <p className="text-gray-500 text-sm">{contact.texte}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}