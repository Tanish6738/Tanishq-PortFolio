import React, { useMemo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CircularGallery from '../Elements/CircularGallery'

// Source data for projects (extend as needed)
const projectData = [
  {
    title: 'Civi-Sathi/NigamAi',
    description: 'A Full-Stack Application for Citizens and Municipalities to have a proper communication and service platform.',
    image: './Images/NigamAI.png',
    video: './Videos/CivicSathi.mp4',
    link: 'https://civic-sathi-v2.vercel.app/',
    github: 'https://github.com/Tanish6738/Civic-Sathi'
  },
  {
    title: 'CodeArc',
    description: 'A Powerful Ai powered Snippets management tools for developers to manage their commonly used code-block and files at one place with online code editor , code-convertor , doc generation , project management and more.',
    image: './Images/CodeArc.png',
    video: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
    link: 'https://snippets-frontend-pearl.vercel.app/',
    github: 'https://github.com/Tanish6738/Snippets'
  },
  {
    title: 'Dhruv Ai',
    description: 'Lost & Found system built for crowded places like Maha Kumbh, malls, and stadiums.Users upload a photo of the missing person; the system matches it with found entries or stores it as missing. Automated email alerts are triggered for further updates. (Hackathon project, team-developed)',
    image: './Images/DhruvAi.png',
    video: 'https://storage.googleapis.com/coverr-main/mp4/Night_Street.mp4',
    link: 'https://dhruvai-2-0.vercel.app/',
    github: 'https://github.com/Tanish6738/Sashakt_LostAndFound_INNOTHON2.0'
  },
  {
    title: 'Securo',
    description: 'L: A Privacy Guard web app offering 12-year breach history of your email with AI-powered analysis and visual charts. Features include a private vault, temp mail generator, public repo scanning for exposed APIs, and more',
    image: './Images/Securo.png',
    video: './Videos/Securo.mp4',
    link: 'https://dhruvai-2-0.vercel.app/',
    github: 'https://github.com/Tanish6738/Sashakt_LostAndFound_INNOTHON2.0'
  },
  {
    title: 'Kai-APi',
    description: 'An Api which is especially developer of the users and developer who want to check whether there is a compromised files and apis keys on the public repo of the user on github. ',
    image: './Images/Kai-Api.png',
    video: 'https://storage.googleapis.com/coverr-main/mp4/Night_Street.mp4',
    link: 'https://kai-api-v0.onrender.com/',
    github: 'https://github.com/Tanish6738/Kai-Api-v0'
  },
  {
    title: 'DevStore',
    description: 'DevStore is a developer-friendly web application for bookmarking, organizing, and sharing development tools, APIs, SaaS products, and resources. Built with Next.js 15, MongoDB, and Clerk authentication, it offers a streamlined way for developers to create personal collections, discover curated tools, and collaborate.',
    image: './Images/DevStore.png',
    video: './Videos/DevStore.mp4',
    link: 'https://dev-store-v1.vercel.app/',
    github: 'https://github.com/Tanish6738/DevStore'
  },
]

const Projects = () => {
  // Map to gallery items shape consumed by CircularGallery (desktop only)
  const galleryItems = useMemo(() => projectData.map(p => ({
    image: p.image,
    text: p.title,
    description: p.description,
    video: p.video,
    link: p.link,
    github: p.github
  })), [])

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const update = () => setIsMobile(typeof window !== 'undefined' && window.innerWidth < 768)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Animation variants for mobile cards
  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 18 } }
  }

  return (
  <section id='projects' className='relative w-full min-h-screen flex flex-col bg-black text-white overflow-hidden'>
      {/* Background accents (mobile & desktop) */}
      <div className='pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(circle_at_center,white,transparent_70%)]'>
        <div className='absolute -top-32 -left-32 w-80 h-80 rounded-full bg-orange-600/30 blur-3xl animate-pulse' />
        <div className='absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-amber-500/20 blur-3xl animate-[pulse_9s_linear_infinite]' />
        <div className='absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-orange-500/20 blur-3xl animate-[pulse_11s_linear_infinite]' />
      </div>

      {/* Desktop view with circular gallery */}
      {!isMobile && (
        <>
          <header className='px-6 pt-10 pb-4 z-10'>
            <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-white'>Projects</h2>
            <p className='text-gray-400 mt-2 text-sm md:text-base'>Drag or scroll horizontally to explore.</p>
          </header>
          <div className='relative' style={{ height: '600px' }}>
            <CircularGallery
              items={galleryItems}
              bend={3}
              textColor='#ffffff'
              borderRadius={0.12}
              font='600 26px Figtree, sans-serif'
              scrollSpeed={2.2}
              scrollEase={0.07}
            />
          </div>
        </>
      )}

      {/* Mobile view (animated cards) */}
      {isMobile && (
        <div className='md:hidden w-full px-4 pb-20 pt-16 relative z-10'>
          <div className='mb-8'>
            <h2 className='text-3xl font-bold tracking-tight text-white'>Projects</h2>
            <p className='text-sm text-gray-400 mt-2'>Swipe down to explore what I have built.</p>
          </div>

          <motion.div
            variants={listVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
            className='flex flex-col gap-10'
          >
            {projectData.map((project, index) => (
              <motion.article
                key={project.title + index}
                variants={cardVariants}
                whileTap={{ scale: 0.97 }}
                className='relative group rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 via-white/[0.025] to-white/[0.015] backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)]'
              >
                {/* media */}
                <div className='relative h-56 w-full overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='h-full w-full object-cover scale-105 transition-transform duration-700 ease-out group-hover:scale-110'
                    loading='lazy'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent' />
                  <motion.span
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className='absolute bottom-3 left-4 text-xs tracking-wide uppercase font-medium text-orange-300/90 bg-orange-500/10 px-2 py-1 rounded-full backdrop-blur-md'
                  >Featured</motion.span>
                </div>

                {/* content */}
                <div className='p-5 flex flex-col gap-4'>
                  <h3 className='text-xl font-semibold leading-tight'>{project.title}</h3>
                  <p className='text-[13.5px] leading-relaxed text-gray-300 line-clamp-4'>{project.description}</p>
          <div className='flex gap-3 pt-1'>
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
            className='relative inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 px-4 py-2 text-sm font-medium text-white shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500/60 transition-all'
                    >
                      <span className='relative z-10'>Live Demo</span>
                    </a>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
            className='inline-flex items-center rounded-lg border border-orange-500/30 px-4 py-2 text-sm font-medium text-orange-300 hover:text-white hover:border-orange-400/60 backdrop-blur focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-colors'
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                {/* glow on hover (desktop ignored but fine) */}
                <div className='pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                  <div className='absolute -inset-px bg-gradient-to-br from-orange-600/30 via-amber-500/25 to-transparent blur-xl' />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default Projects