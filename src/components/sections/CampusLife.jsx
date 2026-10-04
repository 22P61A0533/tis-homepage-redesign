import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Reveal from '../animation/Reveal'
import campusLight from '../../assets/campus-light.jpg'
import campusDark from '../../assets/campus-dark.jpg'

const features = [
  {
    number: '01',
    title: 'Life on campus',
    description:
      'A vibrant residential environment where students learn, connect, and grow together.',
  },
  {
    number: '02',
    title: 'Spaces to explore',
    description:
      'Purpose-built spaces encourage creativity, collaboration, relaxation, and discovery.',
  },
  {
    number: '03',
    title: 'A strong community',
    description:
      'Students build friendships, confidence, independence, and a sense of belonging.',
  },
]

function CampusLife() {
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

  const campusImage = isDark ? campusDark : campusLight

  return (
    <section
      id="campus"
      className="bg-white px-6 py-24 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal direction="up">
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600 dark:text-amber-300">
              Campus life
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              A place where school feels like a world of its own.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
              From classrooms to common spaces, campus life at TIS gives
              students room to discover new interests, build relationships,
              and become more independent.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal direction="left">
            <div
              data-cursor="view"
              className="group relative overflow-hidden rounded-[2rem] bg-slate-200 dark:bg-slate-800"
            >
              <motion.img
                src={campusImage}
                alt={
                  isDark
                    ? 'Tulas International School campus in the evening'
                    : 'Tulas International School campus during the day'
                }
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.06 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="aspect-[4/3] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
                  22+ acre campus
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Space to learn, play, and grow.
                </h3>
              </div>
            </div>
          </Reveal>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <Reveal
                key={feature.number}
                direction="right"
                delay={0.1 + index * 0.1}
              >
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="group rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-slate-950 dark:bg-white dark:text-slate-950">
                      {feature.number}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">
                        {feature.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CampusLife
