'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-dark/90 backdrop-blur border-b border-[#20232a]"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-2xl font-extrabold tracking-widest text-white select-none">FGI</span>
        <ul className="flex space-x-10">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link href={link.href} >
                <motion.a
                  className="text-lg font-semibold text-white hover:text-accent transition-colors duration-200 px-2 py-1 rounded"
                  whileHover={{ color: "#38B6FF" }}
                  transition={{ duration: 0.24 }}
                  style={{ cursor: "pointer" }}
                >
                  {link.name}
                </motion.a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
