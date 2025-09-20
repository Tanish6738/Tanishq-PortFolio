import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
// import Slider from '../Elements/Slider'
// import XO from '../Elements/XO'
// import Loader1 from '../Elements/Loader1'

const Hero = () => {
  const navigate = useNavigate()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Tanish6738', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/tanishqChouhan', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/TChouhan90608', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/tanishq_chouhan.dev?igsh=MWZ6MmlmbzhnYWh5cg==', label: 'Instagram' },
    { icon: Mail, href: 'mailto:tanishq485@gmail.com', label: 'Email' }
  ]

  const navigationButtons = [
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ]

  const handleNavClick = (path) => {
    setTimeout(() => navigate(path), 160)
  }

  // Framer Motion variants for cleaner, coordinated animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.12 } }
  }

  const fadeSlideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 160, damping: 18 } }
  }

  const fadeSlideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 160, damping: 18 } }
  }

  const popIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 16 } }
  }

  const subtleUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className='relative overflow-hidden bg-black min-h-screen w-full flex flex-col md:flex-row items-center md:items-center justify-between px-6 sm:px-8 md:px-16 py-10 md:py-0'
    >
      {/* Ambient gradient overlay */}
  <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-neutral-900/90 via-black to-neutral-950' />

      {/* Social Icons (row on mobile, column on desktop) */}
      <motion.div
        variants={fadeSlideLeft}
        className='order-3 md:order-1 flex flex-row md:flex-col gap-4 md:gap-6 z-10 mt-10 md:mt-0'
      >
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon
          return (
            <motion.a
              key={social.label}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              variants={popIn}
              whileHover={{ scale: 1.15, rotate: 2 }}
              whileTap={{ scale: 0.88, rotate: -8 }}
              className='w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-neutral-700/60 bg-neutral-900/40 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-inner hover:shadow-[0_0_14px_-2px_rgba(249,115,22,0.45)] focus:outline-none focus:ring-2 focus:ring-orange-500/70'
              style={{ transitionDelay: `${index * 60}ms` }}
              aria-label={social.label}
            >
              <IconComponent size={20} className='transition-colors duration-300' />
            </motion.a>
          )
        })}
      </motion.div>

      {/* Main Center Content */}
      <motion.div
        variants={subtleUp}
        className='order-1 md:order-2 flex-1 flex flex-col items-center justify-center text-center z-10 max-w-2xl mx-auto'
      >
        <motion.h1
          variants={popIn}
          className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-white mb-3 tracking-tight px-2'
        >
          Hey, I am Tanishq
        </motion.h1>
        <motion.h2
          variants={popIn}
          className='text-[2.85rem] sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-orange-500 drop-shadow-[0_0_18px_rgba(249,115,22,0.4)] mb-5 leading-[0.9]'
        >
          Chouhan
        </motion.h2>
        <motion.p
          variants={subtleUp}
          className='text-base sm:text-lg md:text-xl text-gray-300 font-hero-subtitle tracking-wide max-w-xl px-4 sm:px-0'
        >
          Full Stack Developer & Creative Designer
        </motion.p>

        {/* Mobile navigation buttons inline */}
        <div className='mt-8 flex md:hidden flex-wrap justify-center gap-4 px-2'>
          {navigationButtons.map((nav, i) => (
            <motion.button
              key={nav.name}
              variants={popIn}
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => handleNavClick(nav.path)}
              className='relative px-6 py-2.5 rounded-md border border-neutral-700/60 text-gray-200 text-sm font-medium tracking-wide bg-neutral-900/40 hover:bg-neutral-800/70 backdrop-blur-sm transition-colors shadow-sm'
            >
              <span className='relative z-10'>{nav.name}</span>
              <span className='absolute inset-0 rounded-md bg-gradient-to-r from-orange-500/0 via-orange-400/0 to-amber-400/0 group-hover:from-orange-600/10 group-hover:to-amber-400/10 transition-all duration-500' />
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Desktop / large screen navigation buttons */}
      <motion.div
        variants={fadeSlideRight}
        className='order-2 md:order-3 hidden md:flex flex-col gap-4 z-10'
      >
        {navigationButtons.map((nav, index) => (
          <motion.button
            key={nav.name}
            variants={popIn}
            whileHover={{ scale: 1.05, x: -6 }}
            whileTap={{ scale: 0.87, rotate: -6, x: -3 }}
            onClick={() => handleNavClick(nav.path)}
            className='group relative px-8 py-3 border border-neutral-700/60 text-gray-200 font-light rounded-lg transition-colors duration-300 text-left min-w-[170px] backdrop-blur-sm overflow-hidden bg-neutral-900/30 hover:bg-neutral-800/60 focus:outline-none focus:ring-2 focus:ring-orange-500/60'
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <span className='inline-block relative'>
              <span className='relative z-10 transition-colors duration-300 group-hover:text-gray-100'>
                {nav.name}
              </span>
              <span className='absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 rounded group-hover:w-full transition-all duration-500' />
            </span>
            <span className='absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-600/10 via-orange-500/10 to-amber-400/10 transition-opacity duration-500' />
          </motion.button>
        ))}
      </motion.div>

      {/* Decorative placeholders (kept minimal on mobile) */}
  <div className='absolute -top-24 -right-24 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl pointer-events-none animate-pulse' />
  <div className='absolute bottom-0 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none' />
    </motion.section>
  )
}

export default Hero