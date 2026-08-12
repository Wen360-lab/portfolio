import { motion } from 'motion/react'
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaFigma, FaGitAlt, FaGithub } from 'react-icons/fa'
import { RiTailwindCssFill, RiNextjsFill } from 'react-icons/ri'

const technos = [
  { name: 'Html', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'JavaScript', icon: FaJs },
  { name: 'Figma', icon: FaFigma },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Github', icon: FaGithub },
  { name: 'Reactjs', icon: FaReact },
  { name: 'Tailwindcss', icon: RiTailwindCssFill },
  { name: 'Nextjs', icon: RiNextjsFill },
]

export default function Technologies() {
  return (
    <section className="bg-blue-light px-6 py-16 text-center">
      <motion.h1
        className="text-white pb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Technologies et outils
      </motion.h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {technos.map((tech, index) => {
          const Icon = tech.icon
          return (
            <motion.div
              key={tech.name}
              className="bg-teal rounded-xl p-6 flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <Icon size={40} className="text-white" />
              <p className="text-white font-nav">{tech.name}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}