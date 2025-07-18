'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Buttons from './Buttons'

const navLinks = [
  { name: 'Our Projects', href: '#projects' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* --- Smoke Video Background --- */}
      <video
        src="./images/gfish-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-cover object-cover scale-125 brightness-[0.9] z-0"
        style={{ filter: "blur(5px)" }}
      >
        <source src="./images/gfish-hero.mp4" type="video/mp4" />
      </video>

      {/* --- Content --- */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="mb-6"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white/90 font-medium backdrop-blur-lg mb-6">
            • Innovation and Technology
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-5 drop-shadow-[0_6px_22px_rgba(0,0,0,0.45)]">
            GENIUSES
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-200 mb-8 font-light">
            We transform ideas into impactful digital solutions by combining technology, creativity, and strategy to help businesses thrive in the modern era.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {navLinks.map(link => (
              <Link key={link.name} href={link.href}>
                <motion.a
                  className="px-8 py-3 rounded-full bg-white text-black font-bold text-lg shadow-lg transition-all hover:bg-white/90 hover:text-black relative"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    boxShadow: '0 4px 18px 0 #fff3, 0 0px 24px #fff1'
                  }}
                >
                  {link.name}
                </motion.a>
              </Link>
            ))}
          </div>
        </motion.div>
        {/* Scroll down */}
        <div className="flex items-center gap-2 mt-10 justify-center">
          <span className="text-white/60 text-sm">Scroll down</span>
          <span className="w-24 h-px bg-white/20 mx-2"></span>
          {/* Mouse Icon */}
          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <span className="block w-6 h-9 rounded-full border-2 border-white/60 relative">
              <span className="block absolute left-1/2 -translate-x-1/2 top-2 w-1 h-3 rounded bg-white/80 animate-bounce"></span>
            </span>
          </motion.div>
          <span className="w-24 h-px bg-white/20 mx-2"></span>
          <span className="text-white/60 text-sm">to see projects</span>
        </div>
      </div>
    </section>
  )
}
