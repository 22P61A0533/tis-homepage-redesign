import { useEffect, useState } from 'react'
import Reveal from '../animation/Reveal'
import aboutLight from '../../assets/about-light.jpg'
import aboutDark from '../../assets/about-dark.jpg'

function About() {
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

  const aboutImage = isDark ? aboutDark : aboutLight

  return (
    <section
      id="about"
      className="bg-white px-6 py-24 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-white sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <Reveal direction="left">
          <div className="relative">
            <div
              data-cursor="view"
              className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-200 dark:bg-slate-800"
            >
              <img
                src={aboutImage}
                alt={
                  isDark
                    ? 'Tulas International School environment in the evening'
                    : 'Tulas International School environment during the day'
                }
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-slate-950 px-6 py-5 text-white shadow-xl dark:bg-white dark:text-slate-950 sm:-right-6">
              <p className="text-3xl font-bold">22+</p>

              <p className="mt-1 text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
                Acres of campus
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600 dark:text-amber-300">
              About TIS
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Education that goes beyond the classroom.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
              Tulas International School is a CBSE residential and day school
              located in Dehradun, India. The school focuses on academic
              excellence while providing opportunities for students to develop
              their creativity, character, confidence, and individual potential.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
              With a focus on holistic education, students experience a balance
              of academics, sports, activities, and life on campus.
            </p>

            <a
              href="#academics"
              className="mt-8 inline-flex items-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 dark:bg-white dark:text-slate-950"
            >
              Discover TIS
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About