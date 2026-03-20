import SectionReveal from '@/components/ui/SectionReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { Medal, Star, Trophy, Award } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    year: '2023',
    title: '98% Pass Rate in Class 10',
    desc: 'Outstanding board exam results with multiple students scoring distinction.',
  },
  {
    icon: Medal,
    year: '2023',
    title: 'District Sports Champions',
    desc: 'Won the Ballari District inter-school kabaddi and athletics championship.',
  },
  {
    icon: Star,
    year: '2022',
    title: 'Best School Award',
    desc: 'Recognized as one of the best schools in Ballari District by the state government.',
  },
  {
    icon: Award,
    year: '2022',
    title: 'Science Exhibition Winners',
    desc: 'Students won first place at the district-level science exhibition.',
  },
]

export default function AchievementsSection() {
  return (
    <section className="section-padding bg-primary-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="container-custom relative">
        <SectionReveal>
          <SectionHeader
            label="Our Achievements"
            title="Proud Milestones & Recognition"
            subtitle="A legacy of excellence across academics, sports, and extracurricular activities."
            light
          />
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((a, i) => (
            <SectionReveal key={a.title} delay={i * 100}>
              <div className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center shrink-0 group-hover:bg-gold-500/30 transition-colors">
                  <a.icon size={20} className="text-gold-400" />
                </div>
                <div>
                  <span className="text-gold-500 text-xs font-bold tracking-wider">{a.year}</span>
                  <h3 className="font-serif font-semibold text-white text-lg mt-0.5 mb-2">{a.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
