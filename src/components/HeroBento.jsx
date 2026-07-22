import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Code2, Sparkles, Copy, Check, Send, ArrowRight, Activity, ShieldCheck } from 'lucide-react'
import ContactModal from './ContactModal'

export default function HeroBento() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [terminalText, setTerminalText] = useState('')
  
  const welcomeMessage = "Je vous souhaite une excellente visite sur mon portfolio."

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < welcomeMessage.length) {
        setTerminalText((prev) => prev + welcomeMessage.charAt(index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 40)
    return () => clearInterval(timer)
  }, [])

  const copyConfig = () => {
    const configStr = `const allan = {\n  stack: ['Python', 'JS', 'React'],\n  specialties: ['Automation', 'APIs'],\n  status: 'Ready for Projects'\n};`
    navigator.clipboard.writeText(configStr)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <header className="max-w-6xl mx-auto px-4 pt-8 pb-12 relative z-10">
      
      {/* Modal Contact */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Grille Bento */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

        {/* 1. Carte Principale : Présentation & Bienvenue (8 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-8 bg-[#12141d]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-2xl group"
        >
          {/* Lueur d'ambiance néon */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl group-hover:bg-indigo-500/25 transition-all duration-700 pointer-events-none" />

          <div>
            {/* Header / Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for hire
              </span>

              <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                <ShieldCheck size={14} className="text-indigo-400" />
                <span>Full-Stack & Automation</span>
              </div>
            </div>

            {/* Titre Impactant */}
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Bonjour !  <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Je vous souhaite la Bienvenue.
              </span>
            </h1>

            {/* Zone de message de bienvenue */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3 my-4">
              <Sparkles size={18} className="text-amber-400 shrink-0 mt-0.5 animate-bounce" />
              <p className="text-xs sm:text-sm font-mono text-gray-300">
                {terminalText}
                <span className="animate-pulse font-bold text-indigo-400">|</span>
              </p>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="pt-6 flex flex-wrap items-center gap-4 border-t border-white/5">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send size={15} /> Me contacter
            </button>

            <a
              href="#projects"
              className="px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all hover:scale-[1.02]"
            >
              Explorer les projets <ArrowRight size={15} />
            </a>
          </div>
        </motion.div>

        {/* 2. Carte Terminal JSON : Remplacement de la sphère 3D (4 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-4 bg-[#0d0e15]/90 backdrop-blur-2xl border border-indigo-500/20 rounded-3xl p-5 flex flex-col justify-between shadow-2xl relative overflow-hidden group"
        >
          {/* Entête du Terminal */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] font-mono text-gray-400 ml-2">developer.config.json</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold">
              v2.4.0
            </span>
          </div>

          {/* Block Code Formaté */}
          <div className="font-mono text-xs sm:text-[13px] leading-relaxed my-2 space-y-1">
            <p className="text-purple-400">
              <span className="text-pink-400">const</span> allan <span className="text-white">=</span> &#123;
            </p>
            <p className="pl-4 text-gray-300">
              <span className="text-indigo-300">stack</span>: [<span className="text-emerald-300">'Python'</span>, <span className="text-emerald-300">'JS'</span>, <span className="text-emerald-300">'React'</span>],
            </p>
            <p className="pl-4 text-gray-300">
              <span className="text-indigo-300">specialties</span>: [<span className="text-emerald-300">'Automation'</span>, <span className="text-emerald-300">'APIs'</span>],
            </p>
            <p className="pl-4 text-gray-300">
              <span className="text-indigo-300">status</span>: <span className="text-emerald-300">'Ready for Projects'</span>
            </p>
            <p className="text-purple-400">&#125;;</p>
          </div>

          {/* Actions & Statut Terminal */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity size={13} className="text-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono text-gray-400">System Active</span>
            </div>

            <button
              onClick={copyConfig}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 text-[11px] font-mono"
              title="Copier la config"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-400" /> Copié
                </>
              ) : (
                <>
                  <Copy size={13} /> Copy
                </>
              )}
            </button>
          </div>

        </motion.div>

      </div>
    </header>
  )
}