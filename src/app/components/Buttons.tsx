'use client'
import { motion, useAnimation } from 'framer-motion'
import { useRef } from 'react'

export default function ShineButton({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const controls = useAnimation()
  const ref = useRef<HTMLButtonElement>(null)

  const startShine = async () => {
    await controls.start({ x: ['-110%', '120%'] })
    controls.set({ x: '-110%' })
  }

  return (
    <button
      ref={ref}
      className="shine-btn"
      {...props}
      onMouseEnter={startShine}
    >
      <span className="shine-btn-text">{children}</span>
      {/* Shine effect */}
      <motion.span
        className="shine"
        initial={{ x: '-110%' }}
        animate={controls}
        transition={{
          duration: 1.2,
          ease: [0.4, 0.2, 0.2, 1],
        }}
      />
      <style jsx>{`
        .shine-btn {
          position: relative;
          display: inline-block;
          overflow: hidden;
          border: 2px solid #fff;
          border-radius: 14px;
          background: rgba(18,18,18,0.6);
          box-shadow: 0 0 24px #fff3, 0 0 80px #fff2;
          padding: 0.7rem 2rem;
          color: #fff;
          font-size: 1.4rem;
          font-weight: 600;
          cursor: pointer;
          z-index: 1;
          transition: background 0.18s;
          outline: none;
        }
        .shine-btn:active {
          background: #232323;
        }
        .shine-btn-text {
          position: relative;
          z-index: 2;
        }
        .shine {
          position: absolute;
          top: -80%;
          left: 0;
          width: 80%;
          height: 300%;
          pointer-events: none;
          z-index: 3;
          background: linear-gradient(
            120deg,
            rgba(255,255,255,0) 65%,
            rgba(255,255,255,0.55) 78%,
            rgba(255,255,255,0.88) 82%,
            rgba(255,255,255,0) 93%
          );
          filter: blur(0.5px);
          opacity: 0.95;
        }
        .shine-btn:hover .shine {
          opacity: 1;
        }
      `}</style>
    </button>
  )
}
