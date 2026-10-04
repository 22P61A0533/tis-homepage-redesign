import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import { useEffect, useRef } from 'react'

const stats = [
  {
    value: 22,
    suffix: '+',
    label: 'Acres of Campus',
  },
  {
    value: 16,
    suffix: '+',
    label: 'Olympic Sports',
  },
  {
    value: 24,
    suffix: '×7',
    label: 'Medical Assistance',
  },
  {
    value: 6,
    suffix: ':1',
    label: 'Student-Teacher Ratio',
  },
]

function AnimatedNumber({ value, suffix, isInView }) {
  const count = useMotionValue(0)

  const springCount = useSpring(count, {
    stiffness: 80,
    damping: 20,
  })

  const numberRef = useRef(null)

  useEffect(() => {
    if (isInView) {
      count.set(value)
    }
  }, [isInView, value, count])

  useEffect(() => {
    const unsubscribe = springCount.on('change', (latest) => {
      if (numberRef.current) {
        numberRef.current.textContent = Math.round(latest)
      }
    })

    return () => unsubscribe()
  }, [springCount])

  return (
    <div className="flex items-end justify-center">
      <span className="text-5xl font-bold tracking-tight sm:text-6xl">
        <span ref={numberRef}>0</span>
      </span>

      <span className="mb-1 text-2xl font-bold text-amber-500">
        {suffix}
      </span>
    </div>
  )
}

function Stats() {
  const sectionRef = useRef(null)

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  })

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="bg-slate-100 px-6 py-20 text-slate-950 transition-colors duration-500 dark:bg-slate-900 dark:text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{
            duration: 0.6,
          }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600 dark:text-amber-300">
            TIS at a glance
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            A campus built for possibilities.
          </h2>
        </motion.div>

        <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 30,
                    }
              }
              transition={{
                duration: 0.5,
                delay: 0.15 + index * 0.12,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group border-b border-slate-200 p-8 text-center transition-shadow duration-300 hover:shadow-xl last:border-b-0 dark:border-slate-800 sm:nth-[2]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <AnimatedNumber
                value={stat.value}
                suffix={stat.suffix}
                isInView={isInView}
              />

              <p className="mt-3 text-sm font-medium uppercase tracking-widest text-slate-500 transition-colors duration-300 group-hover:text-amber-600 dark:text-slate-400 dark:group-hover:text-amber-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats