import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import SectionReveal from '@/components/ui/SectionReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { Eye, Target, Heart, BookOpen, Users, Award } from 'lucide-react'

export const metadata: Metadata = { title: 'About Us' }

const values = [
  { icon: BookOpen, title: 'Academic Excellence', desc: 'We set high academic standards and provide the resources and support to achieve them.' },
  { icon: Heart, title: 'Character Development', desc: 'Building integrity, empathy, and ethical values in every student we serve.' },
  { icon: Users, title: 'Inclusive Community', desc: 'Welcoming every child regardless of background, celebrating diversity and unity.' },
  { icon: Award, title: 'Holistic Growth', desc: 'Nurturing physical, intellectual, emotional and social development equally.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Krupa Nilaya School"
        subtitle="Over three decades of building futures, one student at a time."
        breadcrumb="About"
        bgImage="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600&q=80"
      />

      {/* History */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <SectionReveal>
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700">Our History</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-6 leading-tight">
                  A Journey of Excellence Since 1993
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>Krupa Nilaya School was founded in 1993 with a simple yet profound vision: to provide quality education to the children of Sandur and the surrounding communities in Ballari District, Karnataka.</p>
                  <p>Starting with a modest number of students and a small but passionate group of teachers, the school has grown over three decades into a respected educational institution serving hundreds of students across Classes 1 through 10.</p>
                  <p>Through the years, we have invested continuously in infrastructure, teacher training, and curriculum development to ensure our students receive an education that prepares them for the challenges and opportunities of the modern world.</p>
                  <p>Today, Krupa Nilaya stands as a symbol of educational excellence in Sandur — a place where every child is known by name, where teachers inspire by example, and where the community comes together in support of the next generation.</p>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=80"
                  alt="School campus"
                  className="rounded-3xl shadow-2xl w-full h-[420px] object-cover"
                />
                <div className="absolute -bottom-5 -left-5 bg-gold-500 text-white rounded-2xl p-5 shadow-xl">
                  <div className="font-serif text-3xl font-bold">30+</div>
                  <div className="text-xs text-yellow-100 mt-0.5">Years of Service</div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionReveal>
            <SectionHeader label="Our Purpose" title="Vision, Mission & Philosophy" />
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                title: 'Our Vision',
                color: 'bg-blue-600',
                content: 'To be the most trusted educational institution in Ballari District — one that produces confident, compassionate, and capable citizens who contribute positively to society and the nation.'
              },
              {
                icon: Target,
                title: 'Our Mission',
                color: 'bg-gold-500',
                content: 'To deliver holistic education through innovative teaching, experienced educators, and a supportive environment that nurtures every child\'s unique potential — academically, creatively, and morally.'
              },
              {
                icon: Heart,
                title: 'Our Philosophy',
                color: 'bg-emerald-600',
                content: 'We believe education is a partnership between school, family, and community. Every interaction is an opportunity to inspire. Every child deserves to be seen, heard, and believed in.'
              },
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 100}>
                <div className="card p-8 h-full text-center hover:-translate-y-1 transition-transform">
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.content}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionReveal>
            <SectionHeader label="Core Values" title="What We Stand For" subtitle="The principles that guide every decision we make at Krupa Nilaya School." />
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 80}>
                <div className="card p-7 flex gap-5 hover:-translate-y-0.5 transition-transform">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                    <v.icon size={22} className="text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-primary-900 text-lg mb-2">{v.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
