import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, ShieldCheck, Cpu, Rocket, Award, Layers, Database, Globe, ExternalLink } from 'lucide-react'

// Animation helpers
const fadeContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.16 } }
}
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }
}
const popCard = {
  hidden: { opacity: 0, scale: 0.9, y: 24 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 140, damping: 18 } }
}

const projectsByCategory = {
  'Full Stack': [
    {
      title: 'CodeArc',
      desc: 'AI powered snippet & asset workspace: unified code blocks, editor, converter, docs generator & lightweight project ops.',
      icon: Code2,
      accent: 'from-teal-400 via-cyan-400 to-teal-300',
      link: 'https://snippets-frontend-pearl.vercel.app/',
      github: 'https://github.com/Tanish6738/Snippets'
    },
    {
      title: 'Securo',
      desc: 'Privacy guard: 12‑year breach timeline, AI breach narratives, analytics, private vault, temp mail & repo key scanning.',
      icon: ShieldCheck,
      accent: 'from-indigo-400 via-fuchsia-400 to-pink-300',
      link: 'https://securo-app.vercel.app/',
      github: 'https://github.com/Tanish6738/Securo'
    },
    {
      title: 'Civi-Sathi',
      desc: 'Full-Stack platform for citizens and municipalities to have proper communication and service management.',
      icon: Globe,
      accent: 'from-blue-400 via-cyan-400 to-teal-300',
      link: 'https://civic-sathi-v2.vercel.app/',
      github: 'https://github.com/Tanish6738/Civic-Sathi'
    },
    {
      title: 'DevStore',
      desc: 'Developer-friendly web app for bookmarking, organizing, and sharing development tools, APIs, SaaS products, and resources.',
      icon: Layers,
      accent: 'from-purple-400 via-pink-400 to-rose-300',
      link: 'https://dev-store-v1.vercel.app/',
      github: 'https://github.com/Tanish6738/DevStore'
    }
  ],
  'AI Based': [
    {
      title: 'Dhruv AI',
      desc: 'Hackathon: crowd lost & found system performing face similarity matching & auto email alerting.',
      icon: Rocket,
      accent: 'from-emerald-400 via-teal-400 to-cyan-300',
      link: 'https://dhruvai-2-0.vercel.app/',
      github: 'https://github.com/Tanish6738/Sashakt_LostAndFound_INNOTHON2.0'
    },
    {
      title: 'WorkShop',
      desc: 'Collaborative workspace for prompt craftsmanship. Create, version, audit, and remix prompts with provenance.',
      icon: Code2,
      accent: 'from-violet-400 via-purple-400 to-fuchsia-300',
      link: 'https://workshop-app-v1-roan.vercel.app/',
      github: 'https://github.com/Tanish6738/workshop'
    }
  ],
  'Backend': [
    {
      title: 'Kai‑API',
      desc: 'Service scanning public GitHub repos for compromised files / leaked API keys with actionable insights.',
      icon: Database,
      accent: 'from-amber-400 via-orange-400 to-yellow-300',
      link: 'https://kai-api-v0.onrender.com/',
      github: 'https://github.com/Tanish6738/Kai-Api-v0'
    }
  ],
  'Frontend': [
    {
      title: 'Virtual Expo App V2',
      desc: "A demo Virtual Expo Landing Page to showcase products and services in a virtual environment.",
      icon: Globe,
      accent: 'from-blue-400 via-cyan-400 to-teal-300',
      link: 'https://virtualexpo-app-v2.netlify.app/'
    },
    {
      title: 'Client Portfolio Demo',
      desc: "A demo Portfolio for clients who want to showcase their creative work and projects.",
      icon: Layers,
      accent: 'from-purple-400 via-pink-400 to-rose-300',
      link: 'https://ayush-graphics.netlify.app/'
    },
    {
      title: 'Symbiomic Redesign',
      desc: "Redesigning the landing page of Symbiomic to improve user experience and visual appeal.",
      icon: Code2,
      accent: 'from-indigo-400 via-violet-400 to-purple-300',
      link: 'https://symbionic-landing-app.vercel.app/'
    },
    {
      title: 'Portfolio Design V1',
      desc: "Modern portfolio website design showcasing work and skills with interactive elements.",
      icon: Rocket,
      accent: 'from-cyan-400 via-blue-400 to-indigo-300',
      link: 'https://tanishqportfolio-one.vercel.app/portfolio'
    },
    {
      title: 'Retro Portfolio',
      desc: "Retro-themed portfolio website with nostalgic design aesthetics and smooth animations.",
      icon: Code2,
      accent: 'from-pink-400 via-rose-400 to-red-300',
      link: 'https://retro-portfolio-wine.vercel.app/'
    },
    {
      title: 'Pixel Studios Landing',
      desc: "Company landing page designed to enhance online presence and attract potential clients.",
      icon: Globe,
      accent: 'from-emerald-400 via-green-400 to-teal-300',
      link: 'https://pixel-studios-eight.vercel.app/'
    },
    {
      title: 'PDF Merger SaaS',
      desc: "SaaS application landing page for PDF tools, communicating value propositions effectively.",
      icon: Layers,
      accent: 'from-amber-400 via-yellow-400 to-orange-300',
      link: 'https://pdf-merger-green.vercel.app/'
    }
  ]
}

const achievements = [
  'Winner – Udaan Hackathon 2025',
  'Top 15 – Hackmivo National 2025',
  'Participant – Innothon 36h 2025',
  'Participant – Smart India Hackathon 2024',
  'Participant – Kavach Hackathon 2023'
]

const About = () => {
  const [selectedCategory, setSelectedCategory] = useState('Full Stack')
  const categories = Object.keys(projectsByCategory)

  return (
    <motion.section
      id="about"
      variants={fadeContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
  className="relative overflow-hidden min-h-screen w-full py-24 px-6 md:px-10 lg:px-14 bg-gradient-to-br from-black via-neutral-900 to-black text-gray-100"
    >
      {/* Ambient gradients */}
  <div className="pointer-events-none absolute -top-32 -right-32 w-80 h-80 rounded-full bg-orange-600/10 blur-3xl" />
  <div className="pointer-events-none absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full bg-orange-500/5 blur-3xl" />
  <div className="pointer-events-none absolute top-1/2 -left-32 w-72 h-72 rounded-full bg-orange-400/10 blur-3xl" />

      <motion.header variants={fadeUp} className="relative z-10 max-w-4xl">
  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">About Me</h2>
  <p className="mt-3 text-sm md:text-base font-medium tracking-wide text-orange-400/90 uppercase">Full Stack Developer • Builder • Problem Solver</p>
      </motion.header>

      <motion.div variants={fadeUp} className="relative z-10 mt-10 max-w-4xl space-y-6 text-base md:text-lg leading-relaxed text-gray-300">
        <p>
          I'm <span className="font-semibold text-white">Tanishq Chouhan</span>, a full stack developer from Indore focused on shipping robust, scalable and DX‑friendly web products. I own the journey end‑to‑end: data modeling, API layers, secure integration, interactive React UIs and iterative refinement with instrumentation.
        </p>
        <p>
          Recent work blends AI assistance for code generation, static analysis and breach detection—used intentionally to amplify velocity rather than bypass understanding. I value clarity, testability, and measurable impact over unnecessary complexity.
        </p>
      </motion.div>

      {/* Projects grid */}
      <motion.div variants={fadeUp} className="relative z-10 mt-16">
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-6 text-white">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-orange-500/10 ring-1 ring-orange-500/30 text-orange-400"><Code2 size={18} /></span>
          Selected Projects
        </h3>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${selectedCategory === category
                  ? 'bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-neutral-800/60 text-gray-300 hover:bg-neutral-700/70 border border-neutral-700/40'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 md:grid-cols-2"
          >
            {projectsByCategory[selectedCategory].map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.title}
                  variants={popCard}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -6, scale: 1.015 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative overflow-hidden rounded-xl border border-neutral-700/60 bg-neutral-900/40 backdrop-blur-sm p-5 shadow-sm transition-all duration-500"
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${p.accent} mix-blend-overlay`} />
                  <div className="relative flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-neutral-950/60 border border-neutral-700/60 text-orange-400 group-hover:text-white transition-colors">
                        <Icon size={22} />
                      </span>
                      <div className="space-y-2 flex-1">
                        <h4 className="text-base font-semibold tracking-wide text-white/95">{p.title}</h4>
                        <p className="text-xs md:text-sm leading-relaxed text-gray-300/90">{p.desc}</p>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-2">
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 hover:text-orange-300 text-xs font-medium transition-colors border border-orange-500/20"
                        >
                          <ExternalLink size={14} />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-800/60 hover:bg-neutral-700/70 text-gray-300 hover:text-white text-xs font-medium transition-colors border border-neutral-700/40"
                        >
                          <Code2 size={14} />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Achievements timeline */}
      <motion.div variants={fadeUp} className="relative z-10 mt-20 max-w-3xl">
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-6 text-white">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-orange-500/10 ring-1 ring-orange-500/30 text-orange-400"><Award size={18} /></span>
          Achievements
        </h3>
        <ol className="relative border-l border-gray-700/60 pl-6 space-y-6">
          {achievements.map((a, idx) => (
            <motion.li
              key={a}
              variants={popCard}
              className="relative"
            >
              <span className="absolute -left-3 top-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-orange-500 to-amber-300 ring-2 ring-black" />
              <p className="text-sm md:text-[0.92rem] text-gray-300">{a}</p>
            </motion.li>
          ))}
        </ol>
      </motion.div>

      {/* Contact */}
      <motion.div variants={fadeUp} className="relative z-10 mt-20 max-w-3xl">
        <h3 className="text-xl font-semibold mb-4">Contact</h3>
        <div className="text-sm md:text-base space-y-2 text-gray-300">
          <p>Email: <a href="mailto:Tanishq485@gmail.com" className="text-orange-400 hover:text-orange-300 underline decoration-orange-500/60 decoration-2 underline-offset-4">Tanishq485@gmail.com</a></p>
          <p>Mobile: <a href="tel:+918103942742" className="hover:text-orange-300">+91 81039 42742</a></p>
          <p>Location: Indore, India</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
          <a href="https://github.com/Tanish6738" target="_blank" rel="noopener noreferrer" className="group relative px-4 py-2 rounded-md border border-neutral-700/60 bg-neutral-900/40 hover:bg-neutral-800/70 transition-colors overflow-hidden">
            <span className="relative z-10">GitHub</span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-600/10 via-orange-500/10 to-amber-400/10 transition-opacity" />
          </a>
          <a href="https://tanishq-portfolio-v1.vercel.app/" target="_blank" rel="noopener noreferrer" className="group relative px-4 py-2 rounded-md border border-neutral-700/60 bg-neutral-900/40 hover:bg-neutral-800/70 transition-colors overflow-hidden">
            <span className="relative z-10">Portfolio</span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-600/10 via-orange-500/10 to-amber-400/10 transition-opacity" />
          </a>
          <a href="https://www.linkedin.com/in/tanishqchouhan/" target="_blank" rel="noopener noreferrer" className="group relative px-4 py-2 rounded-md border border-neutral-700/60 bg-neutral-900/40 hover:bg-neutral-800/70 transition-colors overflow-hidden">
            <span className="relative z-10">LinkedIn</span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-600/10 via-orange-500/10 to-amber-400/10 transition-opacity" />
          </a>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default About