'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaBoxes } from 'react-icons/fa'
import { PiPackage, PiSockBold, PiPaletteBold } from 'react-icons/pi'
import TagBar from './TagBar' // <-- Use TagBar, not TagbBar (match your component name!)

const tags = [
  "Product Design", "Brand Identity Design", "Branding", "Packaging Design", "Mockup Design"
]

const cards = [
  {
    title: "Brand Identity",
    icon: <PiPaletteBold size={32} />,
    desc: "Crafting unique, memorable brand identities that resonate with your audience — from logos to visual systems — ensuring every touchpoint reflects your brand’s essence.",
  },
  {
    title: "Brand Design",
    icon: <FaBoxes size={32} />,
    desc: "Designing sleek, impactful packaging that not only looks stunning but also connects with your ideal customers — turning first impressions into lasting brand loyalty.",
  },
  {
    title: "Package Design",
    icon: <PiPackage size={32} />,
    desc: "Bringing your brand to life through high-fidelity product mockups, giving you a clear, realistic preview of how your packaging and visuals will stand out in the real world.",
  },
  {
    title: "Mockup Design",
    icon: <PiSockBold size={32} />,
    desc: "Tailored design mockups that align perfectly with your brand’s aesthetic — because every detail matters when showcasing your product’s true potential.",
  },
]

export default function KontakSection() {
  return (
    <section className="w-full bg-black flex flex-col items-center py-0 min-h-[120vh]" id="contact">
      <div className="w-full max-w-[1600px] flex flex-col gap-16 px-4 sm:px-10 md:px-20">
        {/* --- Top Row --- */}
        <div className="flex flex-col md:flex-row gap-14 pt-16 pb-6">
          {/* Left Column */}
          <div className="flex-[1.4] min-w-[340px] flex flex-col justify-center">
            <h1 className="text-[64px] md:text-[88px] font-extrabold leading-tight text-white mb-7">Contact</h1>
            <p className="text-2xl text-white/90 mb-9 max-w-2xl font-light">
              Helping businesses standout with brand identity packaging that captivates and converts effectively.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {tags.map(tag => (
                <span key={tag} className="bg-[#191919] border border-[#353535] rounded-lg px-6 py-2 text-lg text-white font-medium">{tag}</span>
              ))}
            </div>
            <hr className="border-[#222] mb-10"/>
            {/* Buttons */}
            <div className="flex flex-row gap-8 mb-4">
              
              <Link href="#projects">
                <button className="px-8 py-3 rounded-full bg-white text-black font-bold text-xl shadow-lg transition-all hover:bg-white/90 hover:text-black relative"
                  style={{
                    boxShadow: '0 4px 18px 0 #fff3, 0 0px 24px #fff1'
                  }}
                >See Projects</button>
              </Link>
            </div>
          </div>
          {/* Right Column: Big Image */}
          <div className="flex-[1.15] flex items-start justify-end pt-2 md:pt-0">
            <motion.div
              className="rounded-xl overflow-hidden w-[420px] md:w-[520px] h-[420px] md:h-[520px] max-w-full shadow-2xl group relative"
              whileHover="hover"
            >
              <motion.img
                src="/images/Cue Card MC.png"
                alt="Contact Product"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                initial={{ filter: 'grayscale(1)' }}
                whileHover={{ filter: 'grayscale(0)' }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            </motion.div>
          </div>
        </div>
        {/* --- Card Grid --- */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-4 pb-12">
          {cards.map(card => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="bg-[#121212] rounded-2xl shadow-xl border border-[#242424] px-8 py-8 flex flex-col min-h-[180px] md:min-h-[200px] justify-center"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-white">{card.icon}</span>
                <span className="text-2xl font-semibold text-white">{card.title}</span>
              </div>
              <div className="text-lg text-white/80 font-light">
                {card.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* TagBar Carousel below (on its own row, full width) */}
      <div className="w-full mt-0">
        <TagBar />
      </div>
    </section>
  )
}
