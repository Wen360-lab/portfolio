
import { motion } from 'motion/react'
import Button from './Button'
import Stats from './Stats'

export default function About() {
    return (
        <section id="apropos" className="flex flex-col-reverse md:flex-row items-center justify-center md:gap-35 bg-white px-6 py-6 w-full">
            {/* La section de gauche : Titre + Description + CTA */}
            <div className="flex flex-col w-full items-start md:w-1/2 h-full">

            {/* A propos de moi : le titre */}
                <motion.p 
                    className="text-blue-light text-4xl text-center pt-7 pb-12 md:text-left"
                    initial={{opacity:0, y:20}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{ once: true }}
                    transition={{duration: 0.5, delay: 0.4}}
                >
                    A propos de moi
                </motion.p>

                {/* Mon nom complet */}
                <motion.p 
                    className="text-yellow text-xl text-left font-nav mb-10"
                    initial={{opacity:0, y:20}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{ once: true }}
                    transition={{duration: 0.7, delay: 0.5}}
                >
                    Je suis MAKANAGA ETCHOU WEN JOANEL
                </motion.p>

                {/* La description */}
                <motion.p 
                    className='pt-2 pb-2 text-gray-500 text-left font-nav flex md:pt-7 md:pb-7'
                    initial={{opacity:0, y:20}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{ once: true }}
                    transition={{duration: 0.7, delay: 0.6}} 
                >
                    "Développeur web en formation, curieux de nature.
                    Entre projets d'école et collaborations en équipe,
                    je construis des interfaces fonctionnelles et soignées,
                    en apprenant continuellement de nouvelles façons de créer sur le web. 
                    Je code, mais je pense d'abord en expérience : chaque détail doit avoir un sens."
                </motion.p>

                {/* Le bouton Télécharger mon CV */}
                <Button href="/cv.pdf" download>Téléchargez mon cv</Button>

                {/* La ligne qui les séparent (BBouton et Stats) */}
                <hr className='border-gray-300 mt-10 w-full'/>

                {/* Le composant des statistiques */}
                <Stats/>

            </div>
            {/* La section de droite : Photode profil */}
            <motion.div 
                className="bg-accent md:w-auto rounded-2xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                <img src="/Images/wen.png" alt="Profil tof" className="h-auto w-auto" />
            </motion.div>


        </section>  
    )
};

