'use client'
import { useEffect, useRef, useState } from "react"
import { motion, useAnimation } from "framer-motion"

const brands = [
  "Genius Fish", "Global Exposure Community",
]

// Helper to duplicate brands for infinite loop effect
const loopedBrands = [...brands, ...brands, ...brands]

export default function BrandStrip() {
  const [width, setWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 3)
    }
    controls.start({
      x: [0, -width],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 8, // duration for loop
          ease: "linear"
        }
      }
    })
  }, [width, controls])

  return (
    <section className="relative py-2 bg-dark overflow-hidden flex flex-col items-center select-none mb-12">
      {/* Glassy spot overlay */}
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/40 to-black/80 rounded-bl-full blur-2xl opacity-90" />
      </div>

      <div className="relative z-10 w-full max-w-7xl overflow-x-hidden">
        <motion.div
          className="flex gap-32 items-center"
          ref={containerRef}
          animate={controls}
          initial={false}
        >
          {loopedBrands.map((name, i) => (
            <div
              key={i}
              className="flex flex-col items-center min-w-[240px] font-thin text-xl text-white whitespace-nowrap transition-all duration-300"
            >
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
