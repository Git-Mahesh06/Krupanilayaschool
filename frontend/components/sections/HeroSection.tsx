import Link from 'next/link'
import { ChevronRight, Award, Users, BookOpen } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80"
          alt="School building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-28 md:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Admissions Open 2024–25</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Shaping Young Minds
            <span className="block text-gold-400 font-display italic font-normal mt-1">
              for a Brighter Future
            </span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            A premier co-educational institution in Sandur, Ballari District, 
            nurturing excellence in academics, sports, and character since 1993.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <Link href="/admissions"
              className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
              Apply for Admission
              <ChevronRight size={18} />
            </Link>
            <Link href="/academics"
              className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center gap-2">
              Explore Academics
              <ChevronRight size={18} />
            </Link>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 md:gap-10">
            {[
              { icon: Award, label: '30+ Years', sub: 'of Excellence' },
              { icon: Users, label: '800+ Students', sub: 'Enrolled' },
              { icon: BookOpen, label: 'Class 1–10', sub: 'All Grades' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Icon size={18} className="text-gold-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{label}</div>
                  <div className="text-white/60 text-xs">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-0.5 h-10 bg-gradient-to-b from-white/60 to-transparent" />
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  )
}
