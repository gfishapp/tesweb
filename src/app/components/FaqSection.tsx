'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Example FAQ Data
const faqs = [
  {
    question: "What services do you provide?",
    answer: "I specialize in brand identity and package design, with experience in web design, UI/UX, and to create brand experiences.",
  },
  {
    question: "How do I start working with you?",
    answer: "It starts with a free discovery call. We’ll discuss your goals, vision, and how I can bring your ideas to life.",
  },
  {
    question: "What design tools do you use?",
    answer: "Figma, Adobe Creative Suite (Illustrator, Photoshop, InDesign), Webflow, and more.",
  },
  {
    question: "How long does a project take?",
    answer: "Typically 2-6 weeks, depending on project scope and feedback turnaround.",
  },
  {
    question: "Do you provide revisions?",
    answer: "Yes! Each project includes revision rounds to make sure you love the result.",
  },
  {
    question: "What industries do you work with?",
    answer: "Startups, food & beverage, tech, retail, creative industries, and more.",
  },
  {
    question: "Do you offer development services?",
    answer: "Yes, I can help with frontend web development in addition to design.",
  },
  {
    question: "What is your pricing structure?",
    answer: "Fixed project fee, milestone payments, or retainer—let’s find what works best.",
  },
];

const tags = [
  "Product Design", "Brand Identity Design", "Branding"
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="w-full min-h-[80vh] bg-black flex flex-col items-center py-0">
      <div className="w-full max-w-[1600px] flex flex-col md:flex-row gap-16 px-8 md:px-20 pt-10 pb-16">
        {/* LEFT */}
        <div className="flex-[1.15] flex flex-col">
          <span className="mt-8 mb-5">
            <span className="inline-block px-4 py-2 bg-[#111] text-white/90 rounded-full text-xs font-semibold tracking-wide shadow-sm">FAQ’S</span>
          </span>
          <h1 className="text-[78px] md:text-[90px] font-extrabold leading-tight text-white mb-6">Answers</h1>
          <p className="text-2xl text-white/80 mb-8 max-w-2xl font-light">
            Find answers to common questions about my design process, services etc…
          </p>
          <div className="relative w-full aspect-[1.25] max-w-xl rounded-2xl overflow-hidden mb-8 border border-[#222] shadow-xl">
            <img
              src="/images/Cue Card MC.png"
              alt="FAQ Featured"
              className="w-full h-full object-cover grayscale transition-all duration-500"
              style={{}}
            />
          </div>
          {/* Tags */}
          <div className="flex gap-4 flex-wrap mt-2">
            {tags.map(tag => (
              <span key={tag} className="bg-[#191919] border border-[#353535] rounded-lg px-6 py-2 text-lg text-white font-medium">{tag}</span>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-[1.25] flex flex-col gap-3 mt-8 md:mt-0">
          {faqs.map((faq, idx) => {
            const open = openIdx === idx;
            return (
              <motion.div
                key={faq.question}
                layout
                className={`w-full bg-[#111] rounded-2xl px-8 py-6 cursor-pointer shadow border border-[#222]`}
                initial={false}
                onClick={() => setOpenIdx(open ? -1 : idx)}
                animate={{
                  boxShadow: open
                    ? "0 6px 32px #38b6ff22, 0 1px 8px #fff1"
                    : "0 1px 8px #0002"
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl md:text-2xl font-semibold text-white">{faq.question}</span>
                  <span className="ml-2 text-white/60">
                    {open ? <FaChevronUp size={20}/> : <FaChevronDown size={20}/>}
                  </span>
                </div>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.32, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 text-white/85 text-lg font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
