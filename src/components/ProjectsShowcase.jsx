import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react'

const projects = [
  {
    id: 'smartcontent-automator',
    title: 'SmartContent Automator',
    subtitle: 'IA & automatisation Python',
    badge: ':)',
    badgeColor: 'from-amber-500/20 to-orange-500/20 text-orange-400 border-orange-500/30',
    description: "Moteur d'automatisation intelligent exploitant l'API Gemini pour la génération, la structuration et la publication automatisée de contenus multicanaux.",
    highlights: [
      "Intégration directe avec l'API Google Gemini",
      'Pipeline de génération et formatage automatique',
      'Architecture modulaire'
    ],
    tags: ['Python', 'Gemini API', 'Automation', 'CLI', 'Git'],
    github: 'https://github.com/allan-walker/SmartContent-Automator',
    demo: '#',
    stats: { speed: '⚡ Instant', engine: 'Gemini 1.5 Pro' }
  },
  {
    id: 'portfolio-3d-bento',
    title: 'Interactive Bento Portfolio',
    subtitle: 'Frontend Ultra-Fluide & 3D',
    badge: ':(',
    badgeColor: 'from-indigo-500/20 to-purple-500/20 text-indigo-400 border-indigo-500/30',
    description: 'Interface portfolio nouvelle génération combinant la disposition Bento, un fond Canvas interactif temps réel et des composants React dynamiques.',
    highlights: [
      'Design système bento responsive & glassmorphism',
      'Animations 60fps avec Framer Motion',
      'Arrière-plan dynamique Matrix Canvas personnalisé'
    ],
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'JavaScript'],
    github: 'https://github.com/allan-walker',
    demo: '#',
    stats: { fps: '60 FPS', style: 'Bento Grid' }
  },
  {
    id: 'api-integration-suite',
    title: 'Web & API Services Suite',
    subtitle: 'Back-end & Microservices',
    badge: ':|',
    badgeColor: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30',
    description: "Ensemble de scripts et webhooks Node.js / Python conçus pour l'interconnexion de services tiers, le traitement de données et la gestion automatisée de tâches.",
    highlights: [
      'Endpoints REST ultra-rapides et sécurisés',
      'Traitements asynchrones (async/await)',
      "Gestion d'erreurs et journalisation automatique"
    ],
    tags: ['Node.js', 'Python', 'REST API', 'JSON', 'Webhooks'],
    github: 'https://github.com/allan-walker',
    demo: '#',
    stats: { uptime: '99.9%', latency: '<50ms' }
  }
]

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16 relative z-10">
      
      {/* En-tête de section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-3">
            <Sparkles size={14} /> Réalisations & Projets
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Mes projets professionnel <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">et personnel</span>.
          </h2>
        </div>
        <p className="text-gray-400 text-sm max-w-md">
          Un aperçu de mes développements les plus récents : scripts d'automatisation, intégrations d'IA et interfaces web modernes.
        </p>
      </div>

      {/* Grille de Projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -6 }}
            className="group relative bg-[#12141d]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col justify-between overflow-hidden hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
          >
            {/* Lueur d'arrière-plan au survol */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/0 group-hover:bg-indigo-500/10 rounded-full blur-3xl transition-all duration-500 pointer-events-none" />

            <div>
              {/* Badge et Index */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border bg-gradient-to-r ${project.badgeColor}`}>
                  {project.badge}
                </span>
                <span className="text-xs font-mono text-gray-500 group-hover:text-indigo-400 transition-colors">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center justify-between">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-indigo-400/80 mb-3">{project.subtitle}</p>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Highlights de fonctionnalités */}
              <div className="space-y-2 mb-6 bg-white/[0.03] p-3 rounded-2xl border border-white/5">
                <p className="text-[10px] text-gray-400 uppercase font-mono tracking-wider font-semibold mb-1">
                  Points forts :
                </p>
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                    <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pied de carte : Tags & Liens */}
            <div className="space-y-4 pt-2 border-t border-white/5">
              {/* Tags Tech */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-0.5 rounded-lg bg-white/5 text-[10px] font-mono text-gray-300 border border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Boutons d'action */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Code Source
                </a>
                <a
                  href={project.demo}
                  className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-lg shadow-indigo-600/20 hover:scale-110"
                  title="Voir la démo"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  )
}