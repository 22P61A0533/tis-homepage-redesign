import { useEffect, useState } from 'react'

function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => {
    setIsDark((current) => !current)
  }

  return {
    isDark,
    toggleTheme,
  }
}

export default useTheme