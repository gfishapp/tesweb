'use client'
import { useState } from "react"
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"
import Link from 'next/link'

export default function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  // Opens user's mail client with filled info
  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent("Contact from Portfolio – " + form.name)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(`mailto:fortitudegeniusindonesia@gmail.com?subject=${subject}&body=${body}`)
  }

  return (
    <footer className="w-full bg-[#10141a] text-white/90 py-12 flex flex-col items-center border-t border-black mt-16">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-center">Genius starts with us.</h2>
        <p className="mb-2 text-white/70 text-center text-base">
          Send us an Email
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col gap-4 mb-6 mt-2">
          <div className="flex gap-3">
            <input
              required
              className="flex-1 px-4 py-2 rounded bg-[#151a22] border border-[#222] text-white/90 placeholder:text-white/40"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            />
            <input
              required
              className="flex-1 px-4 py-2 rounded bg-[#151a22] border border-[#222] text-white/90 placeholder:text-white/40"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            />
          </div>
          <textarea
            required
            className="px-4 py-2 rounded bg-[#151a22] border border-[#222] text-white/90 placeholder:text-white/40 min-h-[90px]"
            placeholder="Your Message"
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-8 py-2 rounded-full bg-white/10 border border-white/30 font-semibold text-white hover:bg-white/20 transition shadow mt-2"
          >
            <FaEnvelope className="text-lg" />
            Send Email
          </button>
        </form>

        {/* Social Links */}
        <div className="flex gap-4 mb-2">
          <Link href="https://linkedin.com" target="_blank" rel="noopener" className="hover:text-white">
            <FaLinkedin className="text-2xl" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener" className="hover:text-white">
            <FaTwitter className="text-2xl" />
          </Link>
        </div>

        <div className="text-xs text-white/40 mt-2 text-center">
          © {new Date().getFullYear()} Fortitude Genius Indonesia
        </div>
      </div>
    </footer>
  )
}
