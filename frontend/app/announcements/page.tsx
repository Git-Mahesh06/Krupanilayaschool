'use client'
import { useEffect, useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import SectionReveal from '@/components/ui/SectionReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { Bell, AlertCircle, Calendar, BookOpen, Trophy, Sun } from 'lucide-react'

const fallback = [
  { _id: '1', title: 'Annual Day Celebration 2024', category: 'event', isImportant: true, date: '2024-12-15', content: 'We are pleased to announce our Annual Day celebration on December 15th, 2024. All parents are cordially invited to witness the cultural programs, prize distributions, and student performances.' },
  { _id: '2', title: 'Second Term Examination Schedule', category: 'exam', isImportant: true, date: '2024-11-20', content: 'Second term examinations for Classes 1–10 will commence from November 20th, 2024. Timetables will be distributed to students in class. Students are advised to prepare well in advance.' },
  { _id: '3', title: 'Diwali Holidays — School Closure', category: 'holiday', isImportant: false, date: '2024-10-31', content: 'The school will remain closed from October 31st to November 3rd, 2024 on account of the Diwali festival. School will reopen on November 4th, 2024.' },
  { _id: '4', title: 'Sports Day Registration Open', category: 'event', isImportant: false, date: '2024-10-25', content: 'Annual Sports Day registrations are now open for all students. Students interested in participating in track events, kabaddi, and other sports should register with their class teachers before October 25th.' },
  { _id: '5', title: 'Class 10 Board Exam Results 2024', category: 'achievement', isImportant: true, date: '2024-05-20', content: 'We are proud to announce that Krupa Nilaya School has achieved a 98% pass rate in the Class 10 Board Examinations 2024. 12 students scored distinction. Congratulations to all students and teachers!' },
  { _id: '6', title: 'Parent-Teacher Meeting — October', category: 'notice', isImportant: false, date: '2024-10-12', content: 'The Parent-Teacher Meeting (PTM) for Classes 6–10 will be held on October 12th from 9 AM to 1 PM. Parents are requested to collect progress reports and discuss their child\'s academic progress.' },
]

const categoryIcon: Record<string, any> = {
  exam: BookOpen, holiday: Sun, event: Calendar, notice: Bell, achievement: Trophy
}
const badgeClass: Record<string, string> = {
  exam: 'badge-exam', holiday: 'badge-holiday', event: 'badge-event',
  notice: 'badge-notice', achievement: 'badge-achievement'
}
const allCategories = ['All', 'exam', 'event', 'holiday', 'notice', 'achievement']

export default function AnnouncementsPage() {
  const [items, setItems] = useState(fallback)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/announcements?limit=20`)
      .then(r => r.json())
      .then(d => { if (d.success && d.data?.length) setItems(d.data) })
      .catch(() => {})
  }, [])

  const filtered = filter === 'All' ? items : items.filter(a => a.category === filter)

  return (
    <>
      <PageHero
        title="Announcements & Notices"
        subtitle="Stay up to date with the latest news, events, and important information from Krupa Nilaya School."
        breadcrumb="Announcements"
        bgImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionReveal>
            <SectionHeader label="Latest Updates" title="News & Notices" />
          </SectionReveal>

          {/* Filter */}
          <SectionReveal>
            <div className="flex flex-wrap gap-3 mb-10 justify-center">
              {allCategories.map(cat => (
                <button key={cat} onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all ${
                    filter === cat ? 'bg-primary-800 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          <div className="space-y-5">
            {filtered.map((a, i) => {
              const Icon = categoryIcon[a.category] || Bell
              return (
                <SectionReveal key={a._id} delay={i * 60}>
                  <div className={`card p-6 flex gap-5 hover:-translate-y-0.5 transition-transform ${a.isImportant ? 'border-l-4 border-red-500' : ''}`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${a.isImportant ? 'bg-red-50' : 'bg-primary-50'}`}>
                      {a.isImportant ? <AlertCircle size={20} className="text-red-500" /> : <Icon size={20} className="text-primary-600" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className={badgeClass[a.category] || 'badge-notice'}>
                          {a.category.charAt(0).toUpperCase() + a.category.slice(1)}
                        </span>
                        {a.isImportant && <span className="badge-exam">Important</span>}
                        <span className="text-slate-400 text-xs ml-auto">
                          {new Date(a.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                      </div>
                      <h3 className="font-serif font-bold text-primary-900 text-lg mb-2">{a.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{a.content}</p>
                    </div>
                  </div>
                </SectionReveal>
              )
            })}
            {filtered.length === 0 && (
              <div className="text-center py-16 text-slate-400">
                <Bell size={40} className="mx-auto mb-3 opacity-30" />
                <p>No announcements in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
