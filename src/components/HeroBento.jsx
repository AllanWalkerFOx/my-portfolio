import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Sparkles, ArrowUpRight, Terminal, Mail, MapPin } from 'lucide-react'
import HeroCanvas3D from './HeroCanvas3D'

export default function HeroBento() {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-12 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Carte 1 : Présentation Personnel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 bg-[#12141d]/90 backdrop-blur-md border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-indigo-500/50 transition-all"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-0 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
                <Sparkles size={14} /> Développeur Web & Python Automation
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-medium">
                <MapPin size={12} className="text-indigo-400" /> Antananarivo, Madagascar
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Allan <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Walker</span>
              </h1>
              <p className="text-gray-300 text-sm sm:text-base max-w-lg font-normal leading-relaxed">
                Conception d'applications web modernes, d'outils d'automatisation IA et d'architectures logicielles performantes.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg shadow-indigo-500/25"
              >
                Explorer mes projets <ArrowUpRight size={16} />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs sm:text-sm transition-all flex items-center gap-2"
              >
                <Mail size={14} /> Me contacter
              </a>
            </div>
          </div>
        </motion.div>

        {/* Carte 2 : Canvas 3D */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#12141d]/90 backdrop-blur-md border border-white/10 rounded-3xl p-4 flex flex-col justify-between items-center relative overflow-hidden group hover:border-indigo-500/50 transition-all min-h-[280px]"
        >
          <div className="w-full h-full absolute inset-0">
            <HeroCanvas3D />
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-2xl flex items-center justify-between text-xs text-gray-300 pointer-events-none">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Visualisation 3D
            </span>
            <Code2 size={14} className="text-indigo-400" />
          </div>
        </motion.div>

        {/* Carte 3 : Micro-stack Terminal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#12141d]/90 backdrop-blur-md border border-white/10 rounded-3xl p-6 relative overflow-hidden group hover:border-indigo-500/50 transition-all"
        >
          <div className="flex items-center justify-between text-xs text-gray-400 mb-4 border-b border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-indigo-400" /> developer.config.json
            </div>
            <span className="text-[10px] text-emerald-400 font-mono">v2.4.0</span>
          </div>
          <div className="font-mono text-xs text-gray-300 space-y-2">
            <p><span className="text-purple-400">const</span> <span className="text-yellow-300">allan</span> = &#123;</p>
            <p className="pl-4"><span className="text-indigo-300">stack</span>: [<span className="text-emerald-300">'Python'</span>, <span className="text-emerald-300">'JS'</span>, <span className="text-emerald-300">'React'</span>],</p>
            <p className="pl-4"><span className="text-indigo-300">specialties</span>: [<span className="text-emerald-300">'Automation'</span>, <span className="text-emerald-300">'APIs'</span>],</p>
            <p className="pl-4"><span className="text-indigo-300">status</span>: <span className="text-emerald-300">'Ready for Projects'</span></p>
            <p>&#125;;</p>
          </div>
        </motion.div>

        {/* Carte 4 : Status & Liens Réseaux */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-2 bg-[#12141d]/90 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-wrap items-center justify-between gap-4 group hover:border-indigo-500/50 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Disponibilité</p>
              <p className="text-sm font-semibold text-white">Ouvert aux missions web & automatisation</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/allan-walker" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 rounded-2xl bg-white/5 hover:bg-indigo-600/20 border border-white/10 text-gray-300 hover:text-white transition-all hover:scale-105"
              title="Dépôt GitHub"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 rounded-2xl bg-white/5 hover:bg-indigo-600/20 border border-white/10 text-gray-300 hover:text-white transition-all hover:scale-105"
              title="Profil LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}