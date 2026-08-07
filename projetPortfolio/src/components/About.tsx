
import { motion } from 'motion/react'
import Button from './Button'
import Stats from './Stats'

const BASE = import.meta.env.BASE_URL

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
                    À propos de moi
                </motion.p>

                {/* Mon nom complet */}
                <motion.p 
                    className="text-yellow text-3xl text-left font-nav mb-10 font-extrabold"
                    initial={{opacity:0, y:20}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{ once: true }}
                    transition={{duration: 0.7, delay: 0.5}}
                >
                    Je suis MAKANAGA ETCHOU WEN JOANEL <br />
                    <span className='font-medium'>Développeur Front-end</span>
                </motion.p>

                {/* La description */}
                <motion.p 
                    className='pt-2 pb-2 text-gray-500 text-left font-nav flex md:pt-7 md:pb-7'
                    initial={{opacity:0, y:20}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{ once: true }}
                    transition={{duration: 0.7, delay: 0.6}} 
                >
                   Passionné par la création d'interfaces claires, 
                   intuitives et performantes, j'aime relever de nouveaux défis, 
                   explorer de nouvelles technologies et transformer des idées en expériences web utiles.
                    Pour moi, un bon produit ne se limite pas à fonctionner : il doit être agréable à utiliser et conçu avec intention.

                </motion.p>

                {/* Le bouton Télécharger mon CV */}
                <Button href={`${BASE}cv.pdf`} download>Téléchargez mon cv</Button>

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
                <img src={`${BASE}Images/wen.png`} alt="Profil tof" className="h-auto w-auto" />
            </motion.div>


        </section>  
    )
};

