'use client'
import { motion } from 'framer-motion'

const tags = [
  "Web Dev", "Front-end Engineering", "Back-end Engineering", "Database Engineering", "Graphic Desgining"
]

const experience = [
  { role: "Orang Jago", company: "FGI", year: "Currently" },
  { role: "Graphic Designer", company: "Disini", year: "2023-24" },
  { role: "Package Designer", company: "Greenix Studio", year: "2020-22" },
]

export default function AboutSection() {
  return (
    <section
      className="w-full bg-black flex justify-center items-center"
      style={{ minHeight: '120vh', padding: '0 0 64px 0' }} // EVEN TALLER than before!
    >
      <div className="w-full max-w-[1600px] flex flex-col md:flex-row items-start gap-24 md:gap-36 px-8 md:px-20">
        {/* --- Left: Text --- */}
        <div className="flex-[1.25] min-w-[380px] pr-2 flex flex-col justify-center" style={{ minHeight: '700px' }}>
          <h1 className="text-[104px] font-extrabold leading-none text-white mb-12">BLOG</h1>
          <p className="text-3xl text-white/90 mb-14 max-w-2xl font-light">
            I'm Deyran, a passionate Web Programmer &amp; Graphic Designer based in Indonesia. I specialize in making websites especially fullstack, blending creativity with strategy to elevate brands.
          </p>
          <div className="flex flex-wrap gap-5 mb-12">
            {tags.map(tag => (
              <span key={tag} className="bg-[#191919] border border-[#353535] rounded-lg px-7 py-3 text-2xl text-white font-medium">{tag}</span>
            ))}
          </div>
          <hr className="border-[#232323] mb-12"/>
          {/* --- Experience Table --- */}
          <div className="text-2xl">
            {experience.map((exp) => (
              <div key={exp.role} className="flex text-white/90 text-2xl mb-6">
                <div className="flex-1 font-normal">{exp.role}</div>
                <div className="flex-1 font-light">{exp.company}</div>
                <div className="w-40 text-right font-light">{exp.year}</div>
              </div>
            ))}
          </div>
        </div>
        {/* --- Right: Image --- */}
        <div className="flex-[1.1] flex items-start justify-end pt-6 md:pt-0">
          <motion.div
            className="rounded-xl overflow-hidden w-[700px] h-[700px] max-w-full shadow-2xl group relative"
            whileHover="hover"
          >
            <motion.img
              src="/images/Cue Card MC.png" // your image path
              alt="About Me"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              initial={{ filter: 'grayscale(1)' }}
              whileHover={{ filter: 'grayscale(0)' }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
