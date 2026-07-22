import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, X, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import SpotlightCard from './SpotlightCard'

const projects = [
  {
    id: 'smartcontent-automator',
    title: 'SmartContent-Automator',
    subtitle: 'Pipeline d\'Automation IA & API Gemini',
    description: 'Application Python exploitant l\'API Gemini pour l\'orchestration, la structuration et la publication automatisée de contenus.',
    tags: ['Python', 'Gemini API', 'Git', 'Automation', 'CLI'],
    featured: true,
    stats: { speed: '< 1.2s', status: 'Actif', repo: 'Public' },
    highlights: [
      'Génération intelligente et orchestration de scripts via Gemini',
      'Architecture Python modulaire optimisée pour la gestion des clés API',
      'Versionné et structuré avec Git & GitHub'
    ],
    github: 'https://github.com/allan-walker/SmartContent-Automator'
  },
  {
    id: 'carnivore-app',
    title: 'Le Carnivore',
    subtitle: 'Plateforme Web Interactive',
    description: 'Interface web moderne pour restaurant/lounge intégrant une expérience fluide, un menu dynamique et une authentification OAuth.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Supabase'],
    featured: false,
    stats: { status: 'En Pause' },
    highlights: [
      'Authentification utilisateur fluide via Google OAuth',
      'Interface responsive avec gestion du menu dynamique',
      'Optimisation UX/UI moderne'
    ],
    github: 'https://github.com/allan-walker'
  },
  {
    id: 'portfolio-bento',
    title: 'Interactive Bento Portfolio',
    subtitle: 'Architecture Modern Web & 3D',
    description: 'Portfolio ultra-rapide construit avec Vite, React, Tailwind v4, Framer Motion et un canevas 3D réactif.',
    tags: ['React', 'Vite', 'Tailwind v4', 'Three.js'],
    featured: false,
    stats: { status: 'Production' },
    highlights: [
      'Effet Spotlight interactif et fond Matrix dynamique',
      'Composants Bento Card modulaires et réutilisables'
    ],
    github: 'https://github.com/allan-walker'
  }
]

export default function ProjectsBento() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16 space-y-10">
      {/* En-tête de section avec effet scroll reveal */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-8"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-3">
            <Cpu size={14} /> Réalisations Majeures
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projets & Code Sources
          </h2>
        </div>
        <p className="text-gray-400 text-sm max-w-md">
          Sélection de projets réels montrant mon savoir-faire en développement web, intégration d'API et automatisation.
        </p>
      </motion.div>

      {/* Grille Bento avec animation d'aspiration au scroll */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className={project.featured ? 'md:col-span-2' : ''}
          >
            <SpotlightCard
              className={`cursor-pointer group flex flex-col justify-between h-full ${
                project.featured ? 'min-h-[380px]' : 'min-h-[280px]'
              }`}
              spotlightColor={project.featured ? 'rgba(99, 102, 241, 0.25)' : 'rgba(236, 72, 153, 0.15)'}
            >
              <div className="space-y-4" onClick={() => setSelectedProject(project)}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
                    {project.subtitle}
                  </span>
                  <span className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 group-hover:text-white group-hover:bg-indigo-600 transition-all">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                <div>
                  <h3 className={`font-bold text-white group-hover:text-indigo-300 transition-colors ${
                    project.featured ? 'text-2xl sm:text-3xl' : 'text-xl'
                  }`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {project.featured && project.stats && (
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
                    <div className="bg-white/5 p-3 rounded-2xl border border-white/5">
                      <p className="text-[10px] text-gray-500 uppercase">Vitesse</p>
                      <p className="text-sm font-bold text-emerald-400">{project.stats.speed}</p>
                    </div>
                    <div className="bg-white/5 p-3 rounded-2xl border border-white/5">
                      <p className="text-[10px] text-gray-500 uppercase">Dépôt</p>
                      <p className="text-sm font-bold text-indigo-400">{project.stats.repo}</p>
                    </div>
                    <div className="bg-white/5 p-3 rounded-2xl border border-white/5">
                      <p className="text-[10px] text-gray-500 uppercase">Statut</p>
                      <p className="text-sm font-bold text-purple-400">{project.stats.status}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-6 flex flex-wrap items-center justify-between gap-2 border-t border-white/5 mt-6">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  title="Code source GitHub"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      {/* Modal Détails Projet */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#12141d] border border-white/20 rounded-3xl max-w-2xl w-full p-8 relative overflow-hidden space-y-6 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                  {selectedProject.subtitle}
                </span>
                <h3 className="text-3xl font-extrabold text-white">{selectedProject.title}</h3>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Points clés d'architecture</h4>
                <div className="space-y-2">
                  {selectedProject.highlights?.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Voir sur GitHub
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}