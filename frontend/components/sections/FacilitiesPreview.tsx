import Link from 'next/link'
import SectionReveal from '@/components/ui/SectionReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { BookOpen, Monitor, FlaskConical, Tv, Trees, Trophy } from 'lucide-react'

const facilities = [
  {
    icon: BookOpen,
    title: 'Library',
    desc: 'A well-stocked library with thousands of books, reference materials, and reading resources.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=70',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: Monitor,
    title: 'Computer Lab',
    desc: 'Modern computer lab with high-speed internet, enabling digital literacy for all students.',
    img: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=500&q=70',
    color: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: FlaskConical,
    title: 'Science Laboratory',
    desc: 'Fully equipped science labs for Biology, Chemistry, and Physics experiments.',
    img: 'https://images.unsplash.com/photo-1532094349884-543559ac08da?w=500&q=70',
    color: 'bg-purple-50 text-purple-700',
  },
  {
    icon: Tv,
    title: 'Smart Classrooms',
    desc: 'Interactive smart boards and digital learning tools in every classroom.',
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&q=70',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    icon: Trees,
    title: 'Playground',
    desc: 'Spacious grounds for outdoor activities, physical education, and free play.',
    img: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?w=500&q=70',
    color: 'bg-green-50 text-green-700',
  },
  {
    icon: Trophy,
    title: 'Sports Programs',
    desc: 'Cricket, kabaddi, athletics, and indoor games fostering sportsmanship.',
    img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&q=70',
    color: 'bg-red-50 text-red-700',
  },
]

export default function FacilitiesPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionReveal>
          <SectionHeader
            label="World-Class Facilities"
            title="Everything Your Child Needs to Thrive"
            subtitle="Our campus is designed to provide the best learning environment with modern infrastructure and resources."
          />
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f, i) => (
            <SectionReveal key={f.title} delay={i * 80}>
              <div className="card overflow-hidden group hover:-translate-y-1 transition-transform duration-300 h-full">
                <div className="h-48 overflow-hidden">
                  <img src={f.img} alt={f.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className={`inline-flex items-center gap-2 ${f.color} rounded-lg px-3 py-1.5 mb-3`}>
                    <f.icon size={15} />
                    <span className="text-xs font-bold">{f.title}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={200}>
          <div className="text-center mt-10">
            <Link href="/facilities"
              className="inline-flex items-center gap-2 border-2 border-primary-800 text-primary-800 px-8 py-3 rounded-xl font-semibold text-sm hover:bg-primary-800 hover:text-white transition-colors">
              View All Facilities
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
