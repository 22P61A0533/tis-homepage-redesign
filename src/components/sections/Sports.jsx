import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Reveal from '../animation/Reveal'
import sportsLight from '../../assets/sports-light.jpg'
import sportsDark from '../../assets/sports-dark.jpg'

const sports = [
  'Football',
  'Basketball',
  'Cricket',
  'Swimming',
  'Athletics',
  'Tennis',
]

function Sports() {
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

  const sportsImage = isDark ? sportsDark : sportsLight

  return (
    <section
      id="sports"
      className="bg-slate-100 px-6 py-24 text-slate-950 transition-colors duration-500 dark:bg-slate-900 dark:text-white sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <Reveal direction="left">
          <div
            data-cursor="view"
            className="group relative overflow-hidden rounded-[2rem] bg-slate-200 dark:bg-slate-800"
          >
            <motion.img
              src={sportsImage}
              alt="Students participating in sports at Tulas International School"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.06 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="aspect-[4/3] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
                16+ Olympic sports
              </p>

              <p className="mt-2 text-2xl font-bold">
                Move. Compete. Grow.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.15}>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600 dark:text-amber-300">
              Sports & activities
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Discover your potential beyond academics.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
              Sport at TIS is about more than competition. Students build
              discipline, teamwork, resilience, confidence, and leadership
              through an active campus environment.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {sports.map((sport, index) => (
                <motion.div
                  key={sport}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center text-sm font-semibold shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-950"
                >
                  {sport}
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Sports