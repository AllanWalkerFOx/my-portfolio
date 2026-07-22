import React from 'react'
import CodeBackground from './components/CodeBackground'
import HeroBento from './components/HeroBento'
import ProjectsShowcase from './components/ProjectsShowcase'
import ContactSection from './components/ContactSection'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-gray-100 font-sans selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      {/* Fond de Code Matrix animé */}
      <CodeBackground />

      {/* Luminescence d'arrière-plan */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <main className="space-y-12 pb-16 relative z-10">
        <HeroBento />
        <ProjectsShowcase />
        <ContactSection />
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-xs text-gray-500 relative z-10">
        <p>© 2026 Allan Walker. Tous droits réservés.</p>
      </footer>
    </div>
  )
}