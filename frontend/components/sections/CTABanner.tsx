import Link from 'next/link'
import SectionReveal from '@/components/ui/SectionReveal'
import { ChevronRight, Phone } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80"
          alt="School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/88" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <SectionReveal>
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full bg-gold-500/20 text-gold-300">
            Admissions 2024–25
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Give Your Child the Best Start in Life
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Join the Krupa Nilaya family and set your child on a path of lifelong learning, 
            achievement, and excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions"
              className="bg-gold-500 hover:bg-gold-600 text-white px-9 py-4 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
              Apply for Admission <ChevronRight size={18} />
            </Link>
            <a href="tel:+919876543210"
              className="bg-white/10 border border-white/30 hover:bg-white/20 text-white px-9 py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2">
              <Phone size={16} /> Call Us Now
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
