import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Phone, MessageSquare, Send, Check, Copy, Sparkles, User, MessageCircle, Tag, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function ContactModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sentSuccess, setSentSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  // Tes coordonnées exactes
  const emailAddress = "rakotondrajaonatonniallan@gmail.com"
  const phoneNumber = "+261 38 39 641 26"
  const whatsappNumber = "261383964126"
  const linkedinUrl = "https://www.linkedin.com/in/allan-rakotondrajaona-081730357"

  // Bloquer le défilement du fond à l'ouverture
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')

    if (!formData.email || !formData.message) return

    setLoading(true)

    const EMAILJS_SERVICE_ID = "service_hry2loa"  
    const EMAILJS_TEMPLATE_ID = "template_h1z257t" 
    const EMAILJS_PUBLIC_KEY = "s9emruLsUJ5Q-2b0I"  

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name || 'Visiteur Portfolio',
          reply_to: formData.email,
          subject: formData.subject || 'Nouveau message du Portfolio',
          message: formData.message,
          to_email: emailAddress
        },
        EMAILJS_PUBLIC_KEY
      )

      setSentSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSentSuccess(false), 6000)
    } catch (error) {
      console.error("Erreur d'envoi EmailJS :", error)
      setErrorMessage("Une erreur s'est produite lors de l'envoi. Vérifiez la configuration EmailJS.")
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 select-text">
          
          {/* Overlay arrière-plan opaque */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#070913]/95 backdrop-blur-2xl z-[100000]"
          />

          {/* Wrapper Modale */}
          <div className="relative z-[100001] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl my-auto">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full bg-[#111425] border border-indigo-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-indigo-950/80 text-white"
            >
              <button
                type="button"
                onClick={onClose}
                className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors z-50 cursor-pointer"
                aria-label="Fermer"
              >
                <X size={18} />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-semibold mb-2">
                    <Sparkles size={13} /> Contact Direct
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">Discutons de ton projet</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    Écris-moi directement via le formulaire ci-dessous ou rejoins-moi sur mes réseaux.
                  </p>
                </div>

                {/* Liens rapides */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="p-2.5 rounded-xl bg-indigo-600/30 text-indigo-400 shrink-0">
                        <Mail size={18} />
                      </div>
                      <div className="truncate">
                        <p className="text-[10px] text-gray-400 uppercase font-mono">Email</p>
                        <p className="text-xs font-semibold text-white truncate" title={emailAddress}>{emailAddress}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                      title="Copier l'email"
                    >
                      {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                  </div>

                  <a
                    href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                    className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/40 transition-all flex items-center gap-3 group"
                  >
                    <div className="p-2.5 rounded-xl bg-emerald-600/30 text-emerald-400 shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-mono">Téléphone</p>
                      <p className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors">{phoneNumber}</p>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all flex items-center gap-3 group"
                  >
                    <div className="p-2.5 rounded-xl bg-emerald-500/30 text-emerald-400 shrink-0">
                      <MessageCircle size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-mono">WhatsApp Direct</p>
                      <p className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors">Discuter sur WhatsApp</p>
                    </div>
                  </a>

                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all flex items-center gap-3 group"
                  >
                    <div className="p-2.5 rounded-xl bg-blue-600/30 text-blue-400 shrink-0">
                      <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-mono">LinkedIn</p>
                      <p className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">Voir mon profil</p>
                    </div>
                  </a>
                </div>

                {/* Formulaire */}
                <div className="pt-4 border-t border-white/10">
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <MessageSquare size={16} className="text-indigo-400" /> Écris-moi un message
                    </h4>
                  </div>

                  {sentSuccess && (
                    <div className="p-3 mb-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 font-medium">
                      <CheckCircle2 size={16} /> Ton message a été envoyé directement sur ma boîte Gmail !
                    </div>
                  )}

                  {errorMessage && (
                    <div className="p-3 mb-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2 font-medium">
                      <AlertCircle size={16} /> {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="relative">
                        <User size={14} className="absolute left-3.5 top-3.5 text-gray-400 pointer-events-none" />
                        <input
                          type="text"
                          placeholder="Votre nom"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-indigo-400 focus:bg-white/15 transition-all"
                        />
                      </div>

                      <div className="relative">
                        <Mail size={14} className="absolute left-3.5 top-3.5 text-gray-400 pointer-events-none" />
                        <input
                          type="email"
                          required
                          placeholder="Votre adresse email *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-indigo-400 focus:bg-white/15 transition-all"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <Tag size={14} className="absolute left-3.5 top-3.5 text-gray-400 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Objet de votre message"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-indigo-400 focus:bg-white/15 transition-all"
                      />
                    </div>

                    <textarea
                      rows={3}
                      required
                      placeholder="Écrivez votre message ici... *"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-indigo-400 focus:bg-white/15 transition-all resize-none"
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 active:scale-[0.99] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/40 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send size={15} /> Envoyer le message
                        </>
                      )}
                    </button>
                  </form>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}