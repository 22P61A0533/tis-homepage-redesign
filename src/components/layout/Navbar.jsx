import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import useTheme from '../../hooks/useTheme'

const navItems = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Stats', href: '#stats', id: 'stats' },
  { label: 'Academics', href: '#academics', id: 'academics' },
  { label: 'Sports', href: '#sports', id: 'sports' },
  { label: 'Campus Life', href: '#campus', id: 'campus' },
  { label: 'Admissions', href: '#admissions', id: 'admissions' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/90 px-6 py-3 shadow-lg backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-900/90">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          TULAS
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#admissions"
            className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105 dark:bg-white dark:text-slate-950 md:block"
          >
            Enquire Now
          </a>

          <motion.button
            type="button"
            onClick={toggleTheme}
            aria-label={
              isDark ? 'Switch to light mode' : 'Switch to dark mode'
            }
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.08 }}
            className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-900 transition-colors dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isDark ? 'sun' : 'moon'}
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <motion.button
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen((current) => !current)}
            whileTap={{ scale: 0.9 }}
            className="rounded-full p-2 text-slate-900 transition-colors dark:text-white md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isMenuOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-4 mt-2 rounded-3xl border border-white/20 bg-white/95 p-5 shadow-xl backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-900/95 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.05,
                    }}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                        : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                )
              })}

              <motion.a
                href="#admissions"
                onClick={closeMenu}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.25,
                  delay: navItems.length * 0.05,
                }}
                className="mt-2 rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
              >
                Enquire Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
