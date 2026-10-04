import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Reveal from '../animation/Reveal'
import admissionsLight from '../../assets/admissions-light.jpg'
import admissionsDark from '../../assets/admissions-dark.jpg'

const steps = [
  'Explore the TIS experience',
  'Connect with the admissions team',
  'Begin your application journey',
]

function Admissions() {
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

  const admissionsImage = isDark ? admissionsDark : admissionsLight

  return (
    <section
      id="admissions"
      className="bg-slate-100 px-6 py-24 text-slate-950 transition-colors duration-500 dark:bg-slate-900 dark:text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 text-white dark:bg-slate-950">
          <div className="grid lg:grid-cols-2">
            <Reveal direction="left">
              <div className="relative h-full min-h-[420px] overflow-hidden">
                <motion.img
                  src={admissionsImage}
                  alt={
                    isDark
                      ? 'Tulas International School admissions experience'
                      : 'Students at Tulas International School'
                  }
                  initial={{ scale: 1.08 }}
                  whileHover={{ scale: 1.14 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 sm:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                    Admissions
                  </p>

                  <p className="mt-3 max-w-md text-2xl font-bold sm:text-3xl">
                    Start the next chapter of your child's journey.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <Reveal direction="right">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
                    Join TIS
                  </p>

                  <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                    Ready to discover what comes next?
                  </h2>

                  <p className="mt-6 leading-8 text-slate-300">
                    Take the first step towards an education that combines
                    academic excellence, sports, creativity, and meaningful
                    campus experiences.
                  </p>

                  <div className="mt-8 space-y-4">
                    {steps.map((step, index) => (
                      <motion.div
                        key={step}
                        initial={{
                          opacity: 0,
                          x: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.4,
                        }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.1,
                        }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2
                          size={20}
                          className="shrink-0 text-amber-400"
                        />

                        <span className="text-sm text-slate-200">
                          {step}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.a
                    href="https://tis.edu.in/"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      scale: 1.04,
                      x: 4,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="mt-10 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]"
                  >
                    Explore Admissions
                    <ArrowRight size={18} />
                  </motion.a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Admissions
