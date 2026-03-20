import Link from 'next/link'
import { MapPin, Phone, Mail, GraduationCap, Facebook, Youtube, Instagram, Twitter } from 'lucide-react'

const quickLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/academics', label: 'Academics' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/announcements', label: 'Announcements' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-primary-800 rounded-xl flex items-center justify-center">
                <GraduationCap className="text-gold-400" size={22} />
              </div>
              <div>
                <div className="font-serif font-bold text-white text-lg leading-tight">Krupa Nilaya</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">School, Sandur</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Shaping young minds for a brighter future since 1993. A premier co-educational institution 
              in Sandur, Ballari District, Karnataka.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Youtube, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} 
                   className="w-9 h-9 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-gold-500 transition-colors group">
                  <Icon size={16} className="text-slate-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-white text-lg mb-5 pb-2 border-b border-primary-800">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-slate-400 hover:text-gold-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="font-serif font-semibold text-white text-lg mb-5 pb-2 border-b border-primary-800">
              Academics
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {['Primary School (Class 1–5)', 'Middle School (Class 6–8)', 'High School (Class 9–10)',
                'Co-curricular Activities', 'Sports Programs', 'Science & Labs'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-slate-600 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-white text-lg mb-5 pb-2 border-b border-primary-800">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-gold-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  Krupa Nilaya School<br />
                  Sandur, Ballari District<br />
                  Karnataka – 583 119
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-gold-400 shrink-0" />
                <a href="tel:+919876543210" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-gold-400 shrink-0" />
                <a href="mailto:info@krupanilayaschool.in" className="text-slate-400 hover:text-gold-400 text-sm transition-colors break-all">
                  info@krupanilayaschool.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Krupa Nilaya School, Sandur. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Established 1993 · Co-educational · Class 1–10
          </p>
        </div>
      </div>
    </footer>
  )
}
