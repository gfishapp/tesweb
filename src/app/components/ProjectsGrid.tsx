'use client'
import { motion } from 'framer-motion'
import BrandStrip from './BrandStrip'

const projects = [
  {
    title: "Chief Operating Officer (CEO) & Founder",
    name: "Muh. Habibi",
    image: "/images/fotoa.jpg",
    link: "#",
  },
  {
    title: "Chief Operating Officer (COO)",
    image: "/images/fotoa.jpg",
    name : "Andi Ahmad Raihan A. Lantara",
    link: "#",
  },
  {
    title: "Co-Founder",
    name : "Chairul Muluk",
    image: "/images/fotoa.jpg",
    link: "#",
  },
  {
    title: "Web Developer",
    name : "Muhammad Randey Giffary L.",
    image: "/images/fotoa.jpg",
    link: "#",
  },
  {
    title: "Head Of Marketing",
    name : "Andi Cici Amalia",
    image: "/images/fotoa.jpg",
    link: "#",
  },
  {
    title: "Staff Marketing",
    name : "Belmiro Nabil Shadd Faisal",
    image: "/images/fotoa.jpg",
    link: "#",
  },
  {
    title: "Staff Marketing",
    name : "Fidly Saputra Awal",
    image: "/images/fotoa.jpg",
    link: "#",
  },
  {
    title: "Head Of Finance",
    name : "Adi Sulaiman",
    image: "/images/fotoa.jpg",
    link: "#",
  },
  {
    title: "Administrator",
    name : "Intan Putri Nurashila T.",
    image: "/images/fotoa.jpg",
    link: "#",
  },
  {
    title: "Head of Legal",
    name : "Hafid",
    image: "/images/fotoa.jpg",
    link: "#",
  },
  {
    title : "Staff Legal",
    name : "Randy Bahar",
    image : "/images/fotoa.jpg",
    link: "#",
  }
]

export default function ProjectGrid() {
  return (
    
    <section className="w-full flex flex-col items-center py-16 bg-black min-h-[90vh]">
      <BrandStrip />
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full justify-items-center">
  {projects.map((project, i) => (
    <motion.div
      key={i}
      className={
        "relative flex flex-col items-center " +
        (i % 3 === 1
          ? "md:mb-10 z-20" // Middle card of each row
          : "md:mb-0 z-10"
        )
      }
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
    >
        <div className="mb-4 text-center">
        <h3 className="text-white text-2xl font-semibold drop-shadow">
          {project.name}
        </h3>
        <p className="text-white/80 text-lg font-normal mt-1">{project.title}</p>
      </div>
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
