import { motion } from 'motion/react'

interface ButtonProps {
  href: string
  children: string
  external?: boolean
}

export default function Buttonspecial({ href, children, external = false }: ButtonProps) {
  return (
    <div className="flex pt-2">
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="inline-block rounded-xl px-5 py-3 text-sm font-nav font-semibold text-white bg-teal shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    </div>
  )
}