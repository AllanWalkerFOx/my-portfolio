import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, X, ArrowUpRight, CheckCircle2, ExternalLink } from 'lucide-react'
import SpotlightCard from './SpotlightCard'

const projects = [
  {
    id: 'smartcontent-automator',
    title: 'SmartContent-Automator',
    category: 'IA & Python Automation',
    description: 'Pipeline automatisé d\'acquisition et de traitement de contenus exploitant les API Gemini pour orchestrer le déploiement continu.',
    tags: ['Python', 'Gemini API', 'Git', 'CLI', 'Automation'],
    featured: true,
    metrics: [
      { label: 'Exécution', value: '< 1.2s' },
      { label: 'Précision', value: '99.4%' },
      { label: 'Dépôt', value: 'Public' }
    ],
    highlights: [
      'Orchestration dynamique de prompts via l\'API Gemini',
      'Architecture modulaire en Python orientée haute performance',
      'Intégration Git & Workflows de déploiement automatisés'
    ],
    github: 'https://github.com/allan-walker/SmartContent-Automator'
  },
  {
    id: 'carnivore-app',
    title: 'Le Carnivore Web App',
    category: 'Full-Stack Application',
    description: 'Plateforme web moderne pour restaurant & lounge avec réservation dynamique, menu interactif Supabase et authentification OAuth.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Supabase'],
    featured: false,
    metrics: [
      { label: 'Auth', value: 'Google OAuth' },
      { label: 'UI/UX', value: 'Responsive' }
    ],
    highlights: [
      'Gestion complète de session utilisateur sécurisée',
      'Base de données en temps réel pour la carte des menus'
    ],
    github: 'https://github.com/allan-walker'
  },
  {
    id: 'bento-portfolio',
    title: 'Interactive Bento Portfolio',
    category: 'Modern Web Architecture',
    description: 'Portfolio d\'ingénierie web conçu avec Vite, Three.js 3D Canvas, effets Spotlight et fond Matrix dynamique.',
    tags: ['React', 'Vite', 'Three.js', 'Framer Motion'],
    featured: false,
    metrics: [
      { label: 'Score Lighthouse', value: '98/100' },
      { label: 'Animation', value: '60 FPS' }
    ],
    highlights: [
      'Moteur de rendu 3D interactif au survol',
      'Design Responsive en grille Bento réutilisable'
    ],
    github: 'https://github.com/allan-walker'
  }
]

export default function ProjectsBento() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20 space-y-12 relative z-10">
      
      {/* En-tête de section */}
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8"
      >
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
            <Cpu size={14} /> Réalisations Majeures
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Projets & Applications
          </h2>
        </div>
        <p className="text-gray-400 text-sm max-w-md leading-relaxed">
          Focus sur la qualité du code, l'optimisation des requêtes et des interfaces modernes.
        </p>
      </motion.div>

      {/* Grille Bento des projets avec animation d'aspiration */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
            className={project.featured ? 'md:col-span-2' : ''}
          >
            <SpotlightCard
              className="cursor-pointer group flex flex-col justify-between h-full bg-[#11131c]/80 backdrop-blur-xl border border-white/10 hover:border-indigo-500/60 transition-all rounded-3xl p-7 shadow-2xl"
              spotlightColor={project.featured ? 'rgba(99, 102, 241, 0.25)' : 'rgba(168, 85, 247, 0.2)'}
            >
              <div className="space-y-5" onClick={() => setSelectedProject(project)}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-indigo-400 font-semibold tracking-wider uppercase">
                    {project.category}
                  </span>
                  <span className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:text-white group-hover:bg-indigo-600 transition-all">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <div>
                  <h3 className={`font-bold text-white group-hover:text-indigo-300 transition-colors ${
                    project.featured ? 'text-2xl sm:text-3xl' : 'text-xl'
                  }`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Métriques / Badges */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="bg-white/5 p-2.5 rounded-2xl border border-white/5 text-center">
                      <p className="text-[10px] text-gray-400 uppercase font-mono">{m.label}</p>
                      <p className="text-xs font-bold text-indigo-300 mt-0.5">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & GitHub */}
              <div className="pt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 mt-6">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[11px] font-medium text-indigo-300"
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
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-all"
                  title="Code source"
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

      {/* Pop-up Modale Projet */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="bg-[#121522] border border-white/20 rounded-3xl max-w-2xl w-full p-8 relative space-y-6 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              <div>
                <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl font-extrabold text-white mt-1">{selectedProject.title}</h3>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Architecture & Fonctionnalités</h4>
                <div className="space-y-2">
                  {selectedProject.highlights?.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs text-gray-200">
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
                  className="flex-1 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/30"
                >
                  Consulter le dépôt GitHub <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  )
}