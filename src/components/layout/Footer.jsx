import { ArrowUp, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Campus Life', href: '#campus' },
  { label: 'Sports', href: '#sports' },
  { label: 'Admissions', href: '#admissions' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-bold tracking-tight">TULAS</p>

            <p className="mt-4 max-w-md leading-7 text-slate-400">
              A modern learning environment where students discover their
              strengths, build confidence, and prepare for what comes next.
            </p>

            <motion.a
              href="mailto:admissions@tis.edu.in"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email TIS"
              className="mt-6 flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 text-slate-300 transition-colors hover:border-amber-400 hover:text-amber-400"
            >
              <Mail size={17} />
            </motion.a>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Explore
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              TIS
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Tulas International School
              <br />
              Dehradun, Uttarakhand
              <br />
              India
            </p>

            <motion.a
              href="#admissions"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400"
            >
              Enquire Now
            </motion.a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Tulas International School. All rights reserved.
          </p>

          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex w-fit items-center gap-2 text-slate-300 transition-colors hover:text-amber-400"
          >
            Back to top
            <ArrowUp size={16} />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
