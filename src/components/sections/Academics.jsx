import { useEffect, useState } from 'react'
import Reveal from '../animation/Reveal'
import academicsLight from '../../assets/academics-light.jpg'
import academicsDark from '../../assets/academics-dark.jpg'

function Academics() {
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

  const academicsImage = isDark ? academicsDark : academicsLight

  return (
    <section
      id="academics"
      className="bg-white px-6 py-24 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal direction="up">
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600 dark:text-amber-300">
              Academics
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Learning designed to build confident thinkers.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
              TIS combines academic learning with opportunities that encourage
              curiosity, creativity, communication, and independent thinking.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-3">
          <Reveal direction="left" delay={0.1}>
            <div
              data-cursor="view"
              className="group relative h-full overflow-hidden rounded-[2rem] bg-slate-200 dark:bg-slate-800"
            >
              <img
                src={academicsImage}
                alt={
                  isDark
                    ? 'Students learning at Tulas International School'
                    : 'Students studying at Tulas International School'
                }
                className="h-full min-h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
                  Academic excellence
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Strong foundations.
                </h3>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg font-bold text-white dark:bg-white dark:text-slate-950">
                01
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Future-ready learning
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                Students develop the knowledge and skills needed to approach
                new challenges with confidence and curiosity.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.3}>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-lg font-bold text-slate-950">
                02
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Beyond textbooks
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                Learning extends beyond classrooms through activities,
                collaboration, sports, and experiences across campus life.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Academics