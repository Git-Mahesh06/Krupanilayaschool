import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import SectionReveal from '@/components/ui/SectionReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { BookOpen, Monitor, FlaskConical, Tv, Trees, Trophy, Utensils, Heart } from 'lucide-react'

export const metadata: Metadata = { title: 'Facilities' }

const facilities = [
  {
    icon: BookOpen,
    title: 'School Library',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80',
    color: 'text-blue-600 bg-blue-50',
    desc: 'Our well-stocked library houses thousands of books across genres — fiction, reference, science, history, and more. It serves as a quiet sanctuary for reading, research, and self-guided learning. The library also provides access to educational magazines and periodicals.',
    features: ['5,000+ books', 'Reference section', 'Reading room', 'Educational magazines'],
  },
  {
    icon: Monitor,
    title: 'Computer Laboratory',
    img: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=700&q=80',
    color: 'text-emerald-600 bg-emerald-50',
    desc: 'A modern computer lab equipped with high-speed internet and updated software. Students from Class 3 onward receive structured computer science education. The lab is used for research, digital literacy, and skill-building in the digital age.',
    features: ['30+ computers', 'High-speed internet', 'Projector & smart board', 'Latest software'],
  },
  {
    icon: FlaskConical,
    title: 'Science Laboratory',
    img: 'https://images.unsplash.com/photo-1532094349884-543559ac08da?w=700&q=80',
    color: 'text-purple-600 bg-purple-50',
    desc: 'Fully equipped science laboratories for Physics, Chemistry, and Biology experiments. Students perform hands-on experiments that reinforce classroom learning and prepare them for board practical examinations.',
    features: ['Physics lab', 'Chemistry lab', 'Biology lab', 'Safety equipment'],
  },
  {
    icon: Tv,
    title: 'Smart Classrooms',
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=80',
    color: 'text-amber-600 bg-amber-50',
    desc: 'All classrooms are equipped with interactive smart boards that make lessons visual, engaging, and interactive. Digital learning tools help teachers present complex concepts clearly and allow students to engage actively with lesson content.',
    features: ['Interactive smart boards', 'Digital projectors', 'Audio systems', 'E-learning resources'],
  },
  {
    icon: Trees,
    title: 'Playground & Grounds',
    img: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?w=700&q=80',
    color: 'text-green-600 bg-green-50',
    desc: 'Spacious outdoor grounds and playgrounds designed for physical education, sports training, and free play. Regular outdoor activity is encouraged as an essential component of holistic student development.',
    features: ['Cricket ground', 'Outdoor courts', 'Track & field area', 'Junior play area'],
  },
  {
    icon: Trophy,
    title: 'Sports Programs',
    img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=700&q=80',
    color: 'text-red-600 bg-red-50',
    desc: 'Structured sports programs in cricket, kabaddi, athletics, volleyball, and indoor games. Our trained sports faculty organizes inter-school competitions, encouraging teamwork, discipline, and a spirit of healthy competition.',
    features: ['Kabaddi & cricket', 'Athletics training', 'Indoor games room', 'Annual Sports Day'],
  },
  {
    icon: Utensils,
    title: 'Canteen',
    img: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=700&q=80',
    color: 'text-orange-600 bg-orange-50',
    desc: 'A clean, hygienic canteen serving nutritious and affordable meals and snacks for students and staff. Food is prepared fresh daily with an emphasis on health and balanced nutrition.',
    features: ['Hygienic kitchen', 'Nutritious meals', 'Affordable pricing', 'Supervised facility'],
  },
  {
    icon: Heart,
    title: 'Medical Room',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80',
    color: 'text-pink-600 bg-pink-50',
    desc: 'A dedicated medical room staffed with a trained health professional provides first aid and basic medical assistance. The safety and health of every student is our highest priority.',
    features: ['First aid facilities', 'Trained staff', 'Emergency protocols', 'Health records'],
  },
]

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        title="World-Class Facilities"
        subtitle="Infrastructure and resources designed to support every dimension of student growth."
        breadcrumb="Facilities"
        bgImage="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionReveal>
            <SectionHeader
              label="Our Infrastructure"
              title="Every Resource, Every Need"
              subtitle="From modern classrooms to playgrounds, we have everything your child needs to learn, grow, and excel."
            />
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((f, i) => (
              <SectionReveal key={f.title} delay={i * 70}>
                <div className="card overflow-hidden hover:-translate-y-1 transition-transform duration-300 group">
                  <div className="h-52 overflow-hidden relative">
                    <img src={f.img} alt={f.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center gap-2 ${f.color} px-3 py-1.5 rounded-full text-xs font-bold shadow-sm backdrop-blur-sm bg-opacity-90`}>
                        <f.icon size={13} />
                        {f.title}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{f.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {f.features.map((feat) => (
                        <span key={feat} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">
                          ✓ {feat}
                        </span>
                      ))}
                    </div>
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
