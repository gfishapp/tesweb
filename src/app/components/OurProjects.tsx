'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
// Team Data
const teamProjects = [
  {
    title: "G-Fish",
    image: "/images/ENIUS fISH (2).png",
    link: "#",
  },
    {
        title: "Casestudy B",
        image: "/images/kamingsun.png",
        link: "#",
    },
]

// Projects Data (replace with your own!)

export default function OurProjects() {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-black min-h-[90vh]" id="projects">
      {/* Meet Our Team Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-white text-4xl md:text-5xl font-bold mb-16 tracking-tight text-center"
      >
        Our Projects
      </motion.h2>
      {/* Team Cards */}
      <CardRow cards={teamProjects} />
    </section>
  )
}

// CardRow component for DRY code
function CardRow({ cards }) {
  return (
    <div className="w-full max-w-[1800px] flex justify-center">
      <div className="flex flex-col md:flex-row items-end justify-center gap-12 w-full">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={
              "relative flex flex-col items-center " +
              (i === 1
                ? "md:mb-10 z-20"
                : "md:mb-0 z-10"
              )
            }
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="relative w-[94vw] max-w-[560px] aspect-[4/5] md:w-[520px] md:max-w-[520px] rounded-xl overflow-hidden shadow-2xl group">
              <motion.img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                whileHover={{ scale: 1.10 }}
                transition={{
                  duration: 0.18,
                  ease: [0.16, 1, 0.3, 1]
                }}
              />
              <Link
                href={card.link}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 rounded-xl bg-white/10 border border-white/30 backdrop-blur-md text-white text-lg font-medium shadow-lg flex items-center justify-center transition-all hover:bg-white hover:text-black focus:outline-none"
                style={{
                  boxShadow: '0 0 20px #fff2, 0 0px 28px #fff1'
                }}
              >
                {card.title === "Gay-Fish" || card.title === "Casestudy B" || card.title === "Casestudy C"
                  ? "View Casestudy"
                  : "View Projects"} <span className="ml-2">↗</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
