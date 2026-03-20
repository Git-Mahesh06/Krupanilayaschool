import SectionReveal from '@/components/ui/SectionReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Parent of Class 8 Student',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=70',
    quote: 'Krupa Nilaya School has been exceptional for my daughter. The teachers are dedicated and the environment is nurturing. We have seen tremendous growth in her confidence and academics.',
    rating: 5,
  },
  {
    name: 'Sunita Devi',
    role: 'Parent of Class 5 Student',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=70',
    quote: 'The school provides a perfect balance of academics and extracurricular activities. My son loves going to school every day. The faculty truly cares about each child\'s development.',
    rating: 5,
  },
  {
    name: 'Priya Nayak',
    role: 'Class 10 Alumna',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=70',
    quote: 'My years at Krupa Nilaya shaped who I am today. The values instilled here — discipline, curiosity, and kindness — have guided me throughout my higher education.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="container-custom">
        <SectionReveal>
          <SectionHeader
            label="Testimonials"
            title="What Our Community Says"
            subtitle="Hear from parents, students, and alumni about their Krupa Nilaya experience."
          />
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <SectionReveal key={t.name} delay={i * 100}>
              <div className="card p-7 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} className="text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <Quote size={28} className="text-primary-200 mb-3" />
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <img src={t.img} alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-primary-100" />
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">{t.name}</div>
                    <div className="text-slate-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
