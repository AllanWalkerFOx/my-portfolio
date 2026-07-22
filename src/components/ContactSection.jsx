import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, Sparkles } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-[#12141d] to-[#1a1d2b] border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
            <Sparkles size={14} /> Démarrons une collaboration
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Un projet web ou une idée d'automatisation ?
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Je suis disponible pour des opportunités de développement, des projets d'intégration d'API ou de la création d'applications web sur mesure.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="mailto:allan@example.com"
              className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center gap-3 transition-all shadow-xl shadow-indigo-600/20 hover:scale-105"
            >
              <Mail size={18} /> Envoyer un e-mail <Send size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}