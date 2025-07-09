'use client'
import { useEffect, useRef, useState } from "react"
import { motion, useAnimation } from "framer-motion"

const brands = [
  "Genius Fish","G-Express",
]

// Helper to duplicate brands for infinite loop effect
const loopedBrands = [...brands, ...brands, ...brands]

export default function BrandStrip() {
  const [width, setWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  // Measure container width for animation distance
  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 3) // 1 loop's width
    }
    // Start the infinite scroll animation
    controls.start({
      x: [-0, -width],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 18, // Duration for one full loop, adjust for speed
          ease: "linear"
        }
      }
    })
  }, [width, controls])

  return (
    <section className="relative py-16 bg-dark overflow-hidden flex flex-col items-center select-none">
      {/* Glassy spot overlay */}
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/40 to-black/80 rounded-bl-full blur-2xl opacity-90" />
      </div>

      <div className="relative z-10 w-full max-w-7xl overflow-x-hidden">
        <motion.div
          className="flex gap-24 items-center"
          ref={containerRef}
          animate={controls}
          initial={false}
        >
          {loopedBrands.map((name, i) => {
            // Highlight center logo: calculate mid-point
            // Adjust the center index for highlight
            let isCenter = (i % brands.length) === 2
            return (
              <div
                key={i}
                className={`flex flex-col items-center min-w-[160px] 
                  ${isCenter
                    ? "font-extrabold text-2xl text-white underline underline-offset-4"
                    : "font-semibold text-gray-400 text-xl opacity-70"
                  }
                  transition-all duration-300`}
                style={{
                  filter: isCenter ? "none" : "blur(0.3px)"
                }}
              >
                {name}
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
