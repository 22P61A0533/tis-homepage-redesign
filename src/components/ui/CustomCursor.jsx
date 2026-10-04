import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

function CustomCursor() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const [cursorType, setCursorType] = useState('default')

  const springX = useSpring(mouseX, {
    stiffness: 500,
    damping: 30,
  })

  const springY = useSpring(mouseY, {
    stiffness: 500,
    damping: 30,
  })

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
    }

    const handleMouseOver = (event) => {
      const target = event.target.closest(
        'a, button, [data-cursor="view"]'
      )

      if (!target) {
        setCursorType('default')
        return
      }

      const type = target.getAttribute('data-cursor')

      if (type === 'view') {
        setCursorType('view')
      } else {
        setCursorType('click')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY])

  const isInteractive = cursorType !== 'default'

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[200] hidden items-center justify-center rounded-full border-2 border-amber-400 md:flex"
      animate={{
        width: isInteractive ? 64 : 20,
        height: isInteractive ? 64 : 20,
        opacity: isInteractive ? 0.95 : 1,
      }}
      transition={{
        duration: 0.2,
      }}
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      {isInteractive && (
        <motion.span
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[9px] font-bold uppercase tracking-wider text-amber-400"
        >
          {cursorType === 'view' ? 'View' : 'Click'}
        </motion.span>
      )}
    </motion.div>
  )
}

export default CustomCursor