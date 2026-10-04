import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import heroLight from '../../assets/hero-light.jpg'
import heroDark from '../../assets/hero-dark.jpg'

function Hero() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  )

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  const heroImage = isDark ? heroDark : heroLight

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          key={heroImage}
          src={heroImage}
          alt={
            isDark
              ? 'Tulas International School campus in the evening'
              : 'Tulas International School campus during the day'
          }
          initial={{
            opacity: 0,
            scale: 1.15,
          }}
          animate={{
            opacity: 1,
            scale: [1.15, 1, 1.05],
          }}
          transition={{
            opacity: {
              duration: 0.8,
            },
            scale: {
              duration: 8,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            },
          }}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-32">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300"
          >
            Tulas International School
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl"
          >
            Where curiosity
            <span className="block text-amber-300">
              becomes possibility.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.55,
            }}
            className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg"
          >
            A modern CBSE residential and day school in Dehradun, creating
            an environment where students learn, explore, compete, and grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.7,
            }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <motion.a
              href="#admissions"
              whileHover={{
                scale: 1.05,
                x: 3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.35)]"
            >
              Explore Admissions
              <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/20"
            >
              Discover TIS
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1.2,
        }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
        aria-label="Scroll to About section"
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ArrowDown size={22} />
        </motion.div>
      </motion.a>
    </section>
  )
}

export default Hero
