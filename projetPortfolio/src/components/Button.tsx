import { motion } from 'motion/react'

interface ButtonProps {
  href: string
  children: string
  download?: boolean
}

export default function Button({ href, children, download = false }: ButtonProps) {
  return (
    <div className="flex pt-2">
      <motion.a
        href={href}
        download={download}
        className="inline-block rounded-xl px-5 py-3 text-sm font-nav font-semibold text-white bg-accent shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    </div>
  )
}