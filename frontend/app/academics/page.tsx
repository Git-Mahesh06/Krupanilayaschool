import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import SectionReveal from '@/components/ui/SectionReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { BookOpen, FlaskConical, Music, Trophy, GraduationCap, Star } from 'lucide-react'

export const metadata: Metadata = { title: 'Academics' }

const levels = [
  {
    label: 'Class 1 – 5',
    title: 'Primary School',
    color: 'border-blue-500 bg-blue-50',
    badge: 'bg-blue-500',
    subjects: ['English Language & Literature', 'Mathematics', 'Environmental Studies', 'Hindi', 'Kannada', 'Art & Craft', 'Physical Education'],
    desc: 'Our primary program builds a strong foundation in literacy, numeracy, and curiosity. We use activity-based and play-based learning to make education enjoyable and effective for young learners.',
  },
  {
    label: 'Class 6 – 8',
    title: 'Middle School',
    color: 'border-emerald-500 bg-emerald-50',
    badge: 'bg-emerald-500',
    subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi', 'Kannada', 'Computer Science', 'Arts & Crafts'],
    desc: 'The middle school phase deepens academic knowledge and encourages critical thinking. Students begin to explore subjects in depth and develop their individual strengths and interests.',
  },
  {
    label: 'Class 9 – 10',
    title: 'High School',
    color: 'border-gold-500 bg-amber-50',
    badge: 'bg-gold-500',
    subjects: ['English', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Science', 'Second Language (Hindi/Kannada)', 'Optional: Computer Science'],
    desc: 'Our high school prepares students for board examinations and beyond. With focused academic guidance, career counseling, and rigorous preparation, we ensure students are well-equipped for the future.',
  },
]

const coActivities = [
  { icon: Music, title: 'Cultural Arts', desc: 'Dance, music, drama, and fine arts programs that nurture creativity.' },
  { icon: Trophy, title: 'Sports & Games', desc: 'Cricket, kabaddi, athletics, indoor games, and physical education.' },
  { icon: FlaskConical, title: 'Science Club', desc: 'Hands-on experiments, exhibitions, and competitions fostering scientific thinking.' },
  { icon: BookOpen, title: 'Quiz & Debate', desc: 'Public speaking, quizzes, and debates that sharpen communication skills.' },
  { icon: Star, title: 'Student Council', desc: 'Leadership opportunities through student government and school events.' },
  { icon: GraduationCap, title: 'Scholarships', desc: 'Merit-based recognition and support for high-performing students.' },
]

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        title="Academics at Krupa Nilaya"
        subtitle="A rigorous, balanced curriculum from Class 1 to Class 10, designed to develop well-rounded individuals."
        breadcrumb="Academics"
        bgImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80"
      />

      {/* Academic Structure */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionReveal>
            <SectionHeader label="Academic Structure" title="Our Three-Tier Learning System" subtitle="Each stage is thoughtfully designed to meet students at their developmental level." />
          </SectionReveal>
          <div className="space-y-6">
            {levels.map((level, i) => (
              <SectionReveal key={level.title} delay={i * 100}>
                <div className={`card p-8 border-l-4 ${level.color}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-1">
                      <span className={`inline-block ${level.badge} text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3`}>
                        {level.label}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-primary-900 mb-3">{level.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{level.desc}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-slate-800 text-sm mb-3 uppercase tracking-wide">Subjects Offered</h4>
                      <div className="flex flex-wrap gap-2">
                        {level.subjects.map((s) => (
                          <span key={s} className="bg-white border border-slate-200 text-slate-700 px-4 py-1.5 rounded-full text-xs font-medium shadow-sm">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionReveal>
            <SectionHeader label="Teaching Approach" title="How We Teach" subtitle="Modern pedagogy blended with tried-and-true teaching practices." />
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Experiential Learning', desc: 'Learning by doing — lab work, projects, field trips, and hands-on activities.' },
              { title: 'Smart Classroom Technology', desc: 'Interactive digital boards and multimedia tools making concepts visual and engaging.' },
              { title: 'Individual Attention', desc: 'Small class sizes allow teachers to give each student personal guidance and feedback.' },
              { title: 'Remedial Support', desc: 'Extra help sessions for students who need additional academic support.' },
              { title: 'Regular Assessments', desc: 'Formative and summative tests, projects, and oral exams to track progress.' },
              { title: 'Parent Communication', desc: 'Regular PTMs and progress reports keep parents informed and involved.' },
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 70}>
                <div className="card p-6 hover:-translate-y-1 transition-transform h-full">
                  <div className="w-2 h-8 bg-gradient-to-b from-gold-500 to-gold-300 rounded-full mb-4" />
                  <h3 className="font-serif font-bold text-primary-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Co-curricular */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionReveal>
            <SectionHeader label="Beyond the Classroom" title="Co-Curricular Activities" subtitle="We believe in developing every dimension of a child — not just academics." />
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coActivities.map((a, i) => (
              <SectionReveal key={a.title} delay={i * 80}>
                <div className="card p-6 flex gap-4 hover:-translate-y-1 transition-transform">
                  <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                    <a.icon size={20} className="text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{a.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{a.desc}</p>
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
