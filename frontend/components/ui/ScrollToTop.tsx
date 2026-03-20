'use client'
import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!visible) return null

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-primary-800 hover:bg-primary-900 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  )
}
