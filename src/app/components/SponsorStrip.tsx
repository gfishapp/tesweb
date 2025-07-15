'use client';
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaRegCopy, FaRegImage } from "react-icons/fa";

const sponsor = [
  { label: "Sponsor 1", icon: <FaRegCopy size={15}/> },
  { label: "Sponsor 2", icon: <FaRegImage size={15}/> },
];

// Helper to duplicate tags for seamless loop
const loopedSponsor = Array(8).fill(sponsor).flat();

export default function SponsorStrip() {
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 3);
    }
    controls.start({
      x: [0, -width],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear"
        }
      }
    });
  }, [width, controls]);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-3 overflow-hidden">
      {/* Gradient overlays for fade-out at edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 z-10"
        style={{
          background: "linear-gradient(to right, #000 85%, transparent 100%)"
        }}
      />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 z-10"
        style={{
          background: "linear-gradient(to left, #000 85%, transparent 100%)"
        }}
      />
      <div className="relative z-10 w-full overflow-x-hidden px-2">
        <motion.div
          className="flex gap-3 items-center"
          ref={containerRef}
          animate={controls}
          initial={false}
        >
          {loopedSponsor.map((sponsor, idx) => (
            <button
              key={sponsor.label + idx}
              className="flex items-center gap-1 px-4 py-1.5 bg-[#181818] border border-[#272727] rounded-xl text-white/85 font-medium text-[15px] shadow transition-all whitespace-nowrap hover:bg-white hover:text-black duration-200"
              style={{
                minWidth: 120,
                height: 36
              }}
            >
              <span className="text-lg">{sponsor.icon}</span>
              <span>{sponsor.label}</span>
            </button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
