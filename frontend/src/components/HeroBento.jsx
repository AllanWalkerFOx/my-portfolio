import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import { Sparkles, Send, ShieldCheck, FileText, X, MailCheck, Code, Briefcase, GraduationCap, ExternalLink } from 'lucide-react'
import ContactModal from './ContactModal'

const SCENES = [
  { src: '/bg/bg-1.jpg', fallback: 'radial-gradient(circle at 20% 20%, #312e81 0%, #0b0c14 60%)' },
  { src: '/bg/bg-2.jpg', fallback: 'radial-gradient(circle at 80% 30%, #581c87 0%, #0b0c14 60%)' },
  { src: '/bg/bg-3.jpg', fallback: 'radial-gradient(circle at 30% 80%, #831843 0%, #0b0c14 60%)' },
  { src: '/bg/bg-4.jpg', fallback: 'radial-gradient(circle at 70% 70%, #064e3b 0%, #0b0c14 60%)' },
]

function BinaryRain() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let w, h, cols, drops, raf
    const size = 16
    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      cols = Math.floor(w / size)
      drops = Array.from({ length: cols }, () => Math.random() * -50)
    }
    resize()
    window.addEventListener('resize', resize)
    let last = 0
    const draw = (t) => {
      raf = requestAnimationFrame(draw)
      if (t - last < 60) return
      last = t
      ctx.fillStyle = 'rgba(11,12,20,0.14)'
      ctx.fillRect(0, 0, w, h)
      ctx.font = `${size}px monospace`
      for (let i = 0; i < cols; i++) {
        const bit = Math.random() > 0.5 ? '1' : '0'
        ctx.fillStyle = Math.random() > 0.96 ? 'rgba(244,114,182,0.9)' : 'rgba(129,140,248,0.55)'
        ctx.fillText(bit, i * size, drops[i] * size)
        if (drops[i] * size > h && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
    }
    raf = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={ref} className="absolute inset-0 w-full h-full opacity-40" />
}

function Scene({ scene, i, n, progress }) {
  const c = n === 1 ? 0 : i / (n - 1)
  const opacity = useTransform(progress, [c - 0.28, c, c + 0.28], [0, 1, 0])
  const scale = useTransform(progress, [c - 0.28, c + 0.28], [1, 1.35])
  const [broken, setBroken] = useState(false)
  return (
    <motion.div style={{ opacity, scale, background: scene.fallback }} className="absolute inset-0 will-change-transform">
      {!broken && (
        <img src={scene.src} alt="" onError={() => setBroken(true)} className="w-full h-full object-cover" />
      )}
    </motion.div>
  )
}

function BackgroundScenes() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 })
  return (
    <div className="fixed inset-0 -z-10 bg-[#0b0c14] overflow-hidden pointer-events-none">
      {SCENES.map((s, i) => (
        <Scene key={i} scene={s} i={i} n={SCENES.length} progress={progress} />
      ))}
      <BinaryRain />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c14]/80 via-[#0b0c14]/55 to-[#0b0c14]/85" />
    </div>
  )
}

function ScrollBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    />
  )
}

const TECHS = ['Laravel', 'Python', 'Odoo', 'PHP', 'JavaScript', 'React', 'TailwindCSS', 'MySQL', 'Git']

function Marquee() {
  const items = [...TECHS, ...TECHS]
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#12141d]/70 backdrop-blur-2xl py-5">
      <motion.div
        className="flex gap-12 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
      >
        {items.map((t, i) => (
          <span key={i} className="text-2xl sm:text-4xl font-black tracking-tight text-white/20 hover:text-white transition-colors whitespace-nowrap">
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default function HeroBento() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isCvOpen, setIsCvOpen] = useState(false)
  const [isLmOpen, setIsLmOpen] = useState(false)
  const [terminalText, setTerminalText] = useState('')
  
  const welcomeMessage = "Je suis Allan, quelqu'un de passioné par le développement web. Titulaire d'une Licence en informatique, je cherche à évoluer et offrir mes compétences dans le monde professionnel.\nJ'ai fait divers stages en tant que développeur back-end Laravel chez RandevTeam, stage d'intégration pour automatisation des flux chez Socobis,...\nVous trouverez ci-dessous mon CV ainsi que ma lettre de motivation. Cordialement."

  const lmContent = `Madame, Monsieur,

Récemment diplômé d'une Licence en Informatique, c'est avec un grand enthousiasme que je vous adresse ma candidature pour intégrer votre équipe en tant que Développeur Full-Stack / Back-End.

Passionné par la conception de solutions logicielles performantes et l'automatisation, j'ai pu acquérir une expérience pratique solide lors de mes précédents stages :
- Chez RandevTeam : Conception et développement back-end avec le framework Laravel.
- Chez Socobis : Stage d'intégration axé sur l'automatisation des flux de données.

Mon parcours académique et mes projets personnels m'ont permis de maîtriser des technologies variées telles que Python, PHP, JavaScript, React et Odoo. Rigoureux, curieux et autonome, je m'adapte rapidement aux nouveaux environnements techniques.

Je reste à votre entière disposition pour un entretien afin de vous exposer plus en détail mon parcours et mes motivations.

Cordialement,
Tonni-Allan RAKOTONDRAJAONA`

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < welcomeMessage.length) {
        setTerminalText((prev) => prev + welcomeMessage.charAt(index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 30)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="max-w-6xl mx-auto px-4 pt-8 pb-12 relative z-10 space-y-12">

      {/* NOUVEAU : fond dynamique + barre de progression */}
      <BackgroundScenes />
      <ScrollBar />
      
      {/* Modal Formulaire de Contact */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Modal Visualiseur de CV */}
      <AnimatePresence>
        {isCvOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#12141d] border border-white/10 rounded-3xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden shadow-2xl relative"
            >
              <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#0d0e15]">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <FileText className="text-indigo-400" size={18} />
                  <span>Curriculum Vitae - Allan</span>
                </div>
                <button
                  onClick={() => setIsCvOpen(false)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="flex-1 w-full h-full bg-gray-900">
                <iframe
                  src="/CV_allanpdf.pdf"
                  title="Mon CV"
                  className="w-full h-full border-none"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal Lettre de Motivation */}
      <AnimatePresence>
        {isLmOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#12141d] border border-white/10 rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl relative"
            >
              <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#0d0e15]">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <MailCheck className="text-purple-400" size={18} />
                  <span>Lettre de Motivation - Allan</span>
                </div>
                <button
                  onClick={() => setIsLmOpen(false)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-6 sm:p-8 overflow-y-auto text-gray-300 text-sm font-sans leading-relaxed whitespace-pre-line bg-[#0d0e15]/50">
                {lmContent}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Carte Principale Bento (Hero Section) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#12141d]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden flex flex-col justify-between shadow-2xl group min-h-[500px]"
      >
        {/* Lueur d'ambiance néon */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl group-hover:bg-indigo-500/25 transition-all duration-700 pointer-events-none" />

        <div className="relative z-10">
          {/* Badges d'en-tête */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Disponible de suite
            </span>

            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <ShieldCheck size={14} className="text-indigo-400" />
              <span>Développeur : Odoo, Python, PHP, JavaScript</span>
            </div>
          </div>

          {/* Section Titre + Photo plaquée/ancrée */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-6 mb-8 relative">
            
            {/* Titre */}
            <div className="md:col-span-7 lg:col-span-8 z-10 pb-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Bonjour ! <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  Je vous souhaite la Bienvenue.
                </span>
              </h1>
            </div>

            {/* Photo parfaitement ancrée et occupant la hauteur de la section */}
            <div className="md:col-span-5 lg:col-span-4 relative flex justify-end items-end h-full min-h-[220px] md:min-h-[280px]">
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/30 via-purple-500/10 to-transparent blur-3xl rounded-full pointer-events-none" />
              <img
                src="/IMG_5671-removebg-preview.png"
                alt="Allan RAKOTONDRAJAONA"
                className="w-full h-full max-h-[320px] md:max-h-[380px] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(79,70,229,0.45)] pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
              />
            </div>

          </div>

          {/* Zone de Description (Prend toute la largeur) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-4 my-6">
            <Sparkles size={20} className="text-amber-400 shrink-0 mt-1 animate-bounce" />
            <p className="text-xs sm:text-sm font-mono text-gray-300 leading-relaxed whitespace-pre-line w-full">
              {terminalText}
              <span className="animate-pulse font-bold text-indigo-400">|</span>
            </p>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="pt-6 flex flex-wrap items-center gap-3 border-t border-white/5 relative z-10">
          <button
            onClick={() => setIsContactOpen(true)}
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Send size={15} /> Me contacter
          </button>

          <button
            onClick={() => setIsCvOpen(true)}
            className="px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all hover:scale-[1.02]"
          >
            <FileText size={15} className="text-indigo-400" />
            Voir mon CV
          </button>

          <button
            onClick={() => setIsLmOpen(true)}
            className="px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all hover:scale-[1.02]"
          >
            <MailCheck size={15} className="text-purple-400" />
            Lettre de motivation
          </button>
        </div>
      </motion.div>

      {/* NOUVEAU : bandeau défilant des technologies */}
      <Marquee />

      {/* --- SUITE DE LA PAGE : NOUVELLES SECTIONS PORTFOLIO --- */}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* Section Expériences & Stages (8 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-8 bg-[#12141d]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-indigo-400" size={22} />
            <h2 className="text-xl font-bold text-white">Expériences Professionnelles</h2>
          </div>

          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-colors">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <h3 className="text-white font-semibold text-base">Développeur Back-End Laravel</h3>
                <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">RandevTeam</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Conception et maintenance d'architectures back-end robustes en Laravel, gestion des bases de données et création d'APIs RESTful pour diverses applications web.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-colors">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <h3 className="text-white font-semibold text-base">Stage d'Intégration & Automatisation</h3>
                <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">Socobis</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Mise en place de scripts d'automatisation des flux de données et intégration de processus internes pour optimiser la productivité des équipes.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section Compétences & Formation (4 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-4 bg-[#12141d]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-purple-400" size={22} />
              <h2 className="text-xl font-bold text-white">Formation</h2>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 mb-6">
              <h3 className="text-white font-semibold text-sm mb-1">Licence en Informatique</h3>
              <p className="text-xs text-gray-400">Option Risque et Décision (IRD)</p>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Code className="text-pink-400" size={22} />
              <h2 className="text-xl font-bold text-white">Technologies</h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Laravel', 'Python', 'Odoo', 'PHP', 'JavaScript', 'React', 'TailwindCSS', 'MySQL', 'Git'].map((tech) => (
                <span key={tech} className="text-xs font-mono bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-xl">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* NOUVEAU : section split — texte à gauche, photo à droite */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#12141d]/70 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.05] mb-6">
            Du code propre, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
              des flux qui tournent seuls.
            </span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md mb-8">
            Back-end Laravel, automatisation de flux, intégration Odoo : j'aime construire ce qui fait gagner du temps aux équipes, et le faire proprement.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-md">
            {[['2', 'stages réalisés'], ['9', 'technologies'], ['1', 'licence en informatique']].map(([n, l]) => (
              <div key={l} className="border-l border-white/15 pl-3">
                <div className="text-3xl font-black text-white">{n}</div>
                <div className="text-xs text-gray-400 leading-snug">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="absolute inset-6 bg-gradient-to-tr from-indigo-600/40 to-pink-500/30 blur-3xl rounded-full pointer-events-none" />
          <img
            src="/IMG_5671-removebg-preview.png"
            alt="Allan RAKOTONDRAJAONA"
            className="relative w-full max-w-sm max-h-[440px] object-contain drop-shadow-[0_25px_45px_rgba(79,70,229,0.5)]"
          />
        </motion.div>
      </section>

      {/* NOUVEAU : parcours en frise alternée (gauche / droite) */}
      <section className="relative">
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-10 text-center">Mon parcours</h2>
        <div className="absolute left-4 md:left-1/2 top-24 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-purple-500/40 to-transparent" />
        {[
          { t: 'Licence en Informatique', s: 'Option Risque et Décision (IRD)', d: 'Bases solides en algorithmique, bases de données et développement.', c: 'bg-indigo-400 ring-indigo-500/20' },
          { t: 'Stage : Développeur Back-End Laravel', s: 'RandevTeam', d: 'APIs RESTful, bases de données et architectures back-end.', c: 'bg-purple-400 ring-purple-500/20' },
          { t: "Stage : Intégration & Automatisation", s: 'Socobis', d: 'Automatisation des flux de données et intégration de processus internes.', c: 'bg-pink-400 ring-pink-500/20' },
        ].map((e, i) => (
          <motion.div
            key={e.t}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className={`relative pl-12 md:pl-0 mb-8 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}
          >
            <span className={`absolute left-[10px] md:left-auto ${i % 2 === 0 ? 'md:-right-[6px]' : 'md:-left-[6px]'} top-6 w-3 h-3 rounded-full ring-4 ${e.c}`} />
            <div className="bg-[#12141d]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 hover:border-white/25 transition-colors">
              <h3 className="text-white font-bold text-lg">{e.t}</h3>
              <p className="text-xs font-mono text-gray-400 mb-2">{e.s}</p>
              <p className="text-sm text-gray-400 leading-relaxed">{e.d}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* NOUVEAU : grand appel à l'action final */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center bg-[#12141d]/70 backdrop-blur-2xl border border-white/10 rounded-3xl px-6 py-16 sm:py-24"
      >
        <h2 className="text-4xl sm:text-7xl font-black text-white tracking-tight leading-none mb-8">
          Travaillons <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">ensemble.</span>
        </h2>
        <button
          onClick={() => setIsContactOpen(true)}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold flex items-center gap-2 mx-auto transition-all shadow-lg shadow-indigo-600/30 hover:scale-[1.03] active:scale-[0.98]"
        >
          <Send size={16} /> Me contacter <ExternalLink size={14} />
        </button>
      </motion.section>

    </header>
  )
}