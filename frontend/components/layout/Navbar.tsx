'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, GraduationCap } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/academics', label: 'Academics' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/announcements', label: 'Announcements' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary-950 text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-slate-300">Welcome to Krupa Nilaya School, Sandur Est. 1993 </span>
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
              <Phone size={12} />
              <span>+91 98765 43210</span>
            </a>
            <Link href="/admissions" className="bg-gold-500 text-white px-4 py-1 rounded text-xs font-semibold hover:bg-gold-600 transition-colors">
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100' 
          : 'bg-white shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-900 rounded-xl flex items-center justify-center shadow-md group-hover:bg-primary-800 transition-colors">
                <GraduationCap className="text-gold-400" size={22} />
              </div>
              <div>
                <div className="font-serif font-bold text-primary-900 text-base md:text-lg leading-tight">
                  Krupa Nilaya
                </div>
                <div className="text-xs text-slate-500 font-medium tracking-wider uppercase">
                  School, Sandur
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    pathname === link.href 
                      ? 'text-primary-800 bg-primary-50' 
                      : 'text-slate-600 hover:text-primary-800 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link 
                href="/admissions" 
                className="hidden md:block bg-primary-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-900 transition-colors shadow-sm"
              >
                Admissions 2024-25
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white border-t border-slate-100 px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-primary-50 text-primary-800 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-primary-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admissions"
              className="block mt-3 bg-primary-800 text-white px-4 py-3 rounded-xl text-sm font-semibold text-center hover:bg-primary-900 transition-colors"
            >
              Apply for Admissions 2024-25
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
