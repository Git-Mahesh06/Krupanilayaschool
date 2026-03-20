import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { Trophy, Users, GraduationCap, Star } from 'lucide-react'

const stats = [
  { icon: Trophy, end: 30, suffix: '+', label: 'Years of Excellence', color: 'from-amber-400 to-yellow-500' },
  { icon: Users, end: 800, suffix: '+', label: 'Students Enrolled', color: 'from-blue-500 to-primary-600' },
  { icon: GraduationCap, end: 45, suffix: '+', label: 'Experienced Teachers', color: 'from-emerald-400 to-green-600' },
  { icon: Star, end: 98, suffix: '%', label: 'Academic Pass Rate', color: 'from-purple-400 to-violet-600' },
]

export default function StatsSection() {
  return (
    <section className="bg-primary-900 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map(({ icon: Icon, end, suffix, label, color }) => (
            <div key={label}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                <Icon size={22} className="text-white" />
              </div>
              <div className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={end} suffix={suffix} />
              </div>
              <p className="text-slate-400 text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
