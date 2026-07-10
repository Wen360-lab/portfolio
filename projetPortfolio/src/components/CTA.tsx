import {motion} from 'motion/react'
import Button from './Button'

export default function CTA() {
    return (
        <section className='w-full flex flex-col md:flex-row gap-10 justify-center items-center bg-navy p-6'>
             {/* La section de droite : Photode profil */}
            <motion.div 
                className="bg-accent md:w-auto rounded-2xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                <img src="/Images/wen.png" alt="Profil tof" className="h- w-auto" />
            </motion.div>

            <div className='flex flex-col gap-4 items-center'>
                <h2 className='text-white font-hearling'>Téléchargez mon CV</h2>
                <p className='font-nav text-sm text-justify pt-6 text-white/80'>Toutes les infos essentielles sur mon profil,<br /> en un document.</p>

                {/* Le bouton Télécharger mon CV */}
                <Button href="/cv.pdf" download>Téléchargez mon cv</Button>
            </div>
        </section>
    )
}