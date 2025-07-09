'use client'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "Casestudy A",
    image: "/images/fotoa.jpg",
    link: "#",
  },
  {
    title: "Casestudy B",
    image: "/images/fotoa.jpg",
    link: "#",
  },
  {
    title: "Casestudy C",
    image: "/images/fotoa.jpg",
    link: "#",
  },
]

export default function ProjectGrid() {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-black min-h-[90vh]">
      {/* Meet Our Team Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-white text-4xl md:text-5xl font-bold mb-16 tracking-tight text-center"
      >
        Meet Our Team
      </motion.h2>

      <div className="w-full max-w-[1800px] flex justify-center">
        <div className="flex flex-col md:flex-row items-end justify-center gap-12 w-full">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className={
                "relative flex flex-col items-center " +
                (i === 1
                  ? "md:mb-10 z-20" // Middle card higher and above
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
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  whileHover={{ scale: 1.10 }}
                  transition={{
                    duration: 0.18,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
