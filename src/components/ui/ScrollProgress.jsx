import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion'
import { useState } from 'react'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const [progress, setProgress] = useState(0)

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setProgress(Math.round(latest * 100))
  })

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[100] h-1 w-full origin-left bg-amber-400"
        style={{ scaleX }}
      />

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed bottom-6 right-6 z-[100] hidden h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-xs font-bold text-slate-950 shadow-lg backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/90 dark:text-white sm:flex"
      >
        {progress}%
      </motion.div>
    </>
  )
}

export default ScrollProgress