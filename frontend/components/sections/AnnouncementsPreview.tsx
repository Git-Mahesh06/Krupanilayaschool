'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import SectionReveal from '@/components/ui/SectionReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { Bell, ChevronRight, AlertCircle } from 'lucide-react'

const fallbackAnnouncements = [
  { _id: '1', title: 'Annual Day Celebration 2024', category: 'event', isImportant: true, date: '2024-12-15', content: 'Annual Day on December 15th. All parents cordially invited.' },
  { _id: '2', title: 'Second Term Examination Schedule', category: 'exam', isImportant: true, date: '2024-11-20', content: 'Exams commence November 20th.' },
  { _id: '3', title: 'Diwali Holidays', category: 'holiday', isImportant: false, date: '2024-10-31', content: 'School closed Oct 31 – Nov 3 for Diwali.' },
  { _id: '4', title: 'Sports Day Registration Open', category: 'event', isImportant: false, date: '2024-10-25', content: 'Register with class teachers before Oct 25.' },
]

const badgeClass: Record<string, string> = {
  exam: 'badge-exam', holiday: 'badge-holiday', event: 'badge-event',
  notice: 'badge-notice', achievement: 'badge-achievement'
}

export default function AnnouncementsPreview() {
  const [announcements, setAnnouncements] = useState(fallbackAnnouncements)

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/announcements?limit=4`)
      .then(r => r.json())
      .then(d => { if (d.success && d.data?.length) setAnnouncements(d.data) })
      .catch(() => {})
  }, [])

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <SectionReveal>
          <SectionHeader
            label="Latest Updates"
            title="Announcements & Notices"
            subtitle="Stay informed with the latest news, events, and important notices from our school."
          />
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {announcements.map((a, i) => (
            <SectionReveal key={a._id} delay={i * 80}>
              <div className="card p-6 flex gap-4 hover:-translate-y-0.5 transition-transform">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  a.isImportant ? 'bg-red-50' : 'bg-primary-50'
                }`}>
                  {a.isImportant
                    ? <AlertCircle size={18} className="text-red-500" />
                    : <Bell size={18} className="text-primary-600" />
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className={badgeClass[a.category] || 'badge-notice'}>
                      {a.category.charAt(0).toUpperCase() + a.category.slice(1)}
                    </span>
                    <span className="text-slate-400 text-xs whitespace-nowrap">
                      {new Date(a.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="font-semibold text-slate-800 text-sm mb-1 leading-snug">{a.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{a.content}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <div className="text-center">
            <Link href="/announcements"
              className="inline-flex items-center gap-2 text-primary-700 font-semibold text-sm hover:text-primary-900 transition-colors">
              View All Announcements <ChevronRight size={16} />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
