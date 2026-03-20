import Link from 'next/link'
import SectionReveal from '@/components/ui/SectionReveal'
import { CheckCircle, ChevronRight } from 'lucide-react'

const values = [
  'Academic excellence with holistic development',
  'Experienced and dedicated faculty',
  'Safe, nurturing learning environment',
  'Strong community values and ethics',
]

export default function AboutSnippet() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* Image side */}
          <SectionReveal>
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80"
                  alt="Students studying"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-primary-900 text-white rounded-2xl p-5 shadow-xl z-20 max-w-[180px]">
                <div className="font-serif text-3xl font-bold text-gold-400">1993</div>
                <div className="text-xs text-slate-300 mt-1 leading-snug">Year of Establishment in Sandur</div>
              </div>
              {/* Gold accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-500/20 rounded-2xl -z-10" />
            </div>
          </SectionReveal>

          {/* Text side */}
          <SectionReveal delay={150}>
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700">
                About Our School
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-5 leading-tight">
                More Than Three Decades of{' '}
                <span className="text-gold-600">Academic Excellence</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Krupa Nilaya School has been a cornerstone of quality education in Sandur, Ballari District 
                since 1993. We are a co-educational institution offering comprehensive education from Class 1 
                to Class 10, dedicated to nurturing the intellectual, physical, and moral development of 
                every student.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our school blends traditional values with modern teaching methodologies, creating an 
                environment where students thrive academically and grow as responsible citizens.
              </p>
              <ul className="space-y-3 mb-8">
                {values.map((v) => (
                  <li key={v} className="flex items-start gap-3 text-slate-700 text-sm">
                    <CheckCircle size={18} className="text-gold-500 mt-0.5 shrink-0" />
                    {v}
                  </li>
                ))}
              </ul>
              <Link href="/about"
                className="inline-flex items-center gap-2 bg-primary-800 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-primary-900 transition-colors shadow-md hover:shadow-lg">
                Learn More About Us
                <ChevronRight size={16} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
