'use client'
import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import SectionReveal from '@/components/ui/SectionReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { CheckCircle, FileText, Send, Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'

const steps = [
  { num: '01', title: 'Submit Inquiry', desc: 'Fill out the online admission inquiry form on this page.' },
  { num: '02', title: 'School Contact', desc: 'Our admissions team will contact you within 2 working days.' },
  { num: '03', title: 'School Visit', desc: 'Visit the school campus and meet the principal.' },
  { num: '04', title: 'Document Submission', desc: 'Submit required documents for verification.' },
  { num: '05', title: 'Confirmation', desc: 'Receive your admission confirmation and welcome kit.' },
]

const documents = [
  'Birth Certificate (original + copy)',
  'Previous school Transfer Certificate (TC)',
  'Previous class Mark Sheet / Report Card',
  'Passport-size photographs (4 copies)',
  'Aadhaar Card (child + parent)',
  'Caste Certificate (if applicable)',
  'Address Proof (Voter ID / Ration Card / Utility Bill)',
]

const classes = ['Class 1','Class 2','Class 3','Class 4','Class 5','Class 6','Class 7','Class 8','Class 9','Class 10']

export default function AdmissionsPage() {
  const [form, setForm] = useState({ parentName: '', studentName: '', classApplyingFor: '', phone: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
        toast.success(data.message)
      } else {
        toast.error(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      toast.error('Unable to connect. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHero
        title="Admissions 2024–25"
        subtitle="Join the Krupa Nilaya family and give your child the education they deserve."
        breadcrumb="Admissions"
        bgImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80"
      />

      {/* Admission Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionReveal>
            <SectionHeader label="How to Apply" title="Simple Admission Process" subtitle="We've made the admission process as straightforward as possible." />
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <SectionReveal key={step.num} delay={i * 80}>
                <div className="text-center p-5">
                  <div className="w-14 h-14 bg-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-gold-400 font-bold font-serif text-lg">{step.num}</span>
                  </div>
                  <h3 className="font-semibold text-slate-800 text-sm mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Documents */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Documents */}
            <SectionReveal>
              <div className="space-y-6">
                <div className="card p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                      <FileText size={18} className="text-primary-700" />
                    </div>
                    <h3 className="font-serif font-bold text-primary-900 text-lg">Required Documents</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {documents.map((doc) => (
                      <li key={doc} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CheckCircle size={15} className="text-gold-500 mt-0.5 shrink-0" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card p-7 bg-primary-900 text-white">
                  <h3 className="font-serif font-bold text-lg mb-3">Eligibility Criteria</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Class 1: Age 5–6 years as of June 1st</li>
                    <li>• Classes 2–10: Passed previous class</li>
                    <li>• Valid TC from previous school required</li>
                    <li>• All castes and communities welcome</li>
                  </ul>
                </div>
              </div>
            </SectionReveal>

            {/* Form */}
            <SectionReveal delay={100} className="lg:col-span-2">
              <div className="card p-8">
                <h3 className="font-serif font-bold text-primary-900 text-2xl mb-2">Admission Inquiry Form</h3>
                <p className="text-slate-500 text-sm mb-7">Fill out the form below and we will reach out to you promptly.</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={30} className="text-green-600" />
                    </div>
                    <h4 className="font-serif font-bold text-xl text-slate-800 mb-2">Inquiry Submitted!</h4>
                    <p className="text-slate-500 text-sm">Thank you! Our admissions team will contact you within 2 working days.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">Parent / Guardian Name *</label>
                        <input name="parentName" value={form.parentName} onChange={handleChange}
                          className="form-input" placeholder="Your full name" required />
                      </div>
                      <div>
                        <label className="form-label">Student Name *</label>
                        <input name="studentName" value={form.studentName} onChange={handleChange}
                          className="form-input" placeholder="Student's full name" required />
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Class Applying For *</label>
                      <select name="classApplyingFor" value={form.classApplyingFor} onChange={handleChange}
                        className="form-input" required>
                        <option value="">Select Class</option>
                        {classes.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">Phone Number *</label>
                        <input name="phone" value={form.phone} onChange={handleChange}
                          className="form-input" placeholder="10-digit mobile number" required type="tel" />
                      </div>
                      <div>
                        <label className="form-label">Email Address *</label>
                        <input name="email" value={form.email} onChange={handleChange}
                          className="form-input" placeholder="your@email.com" required type="email" />
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Message / Any Questions</label>
                      <textarea name="message" value={form.message} onChange={handleChange}
                        className="form-input resize-none" rows={4}
                        placeholder="Any additional information or questions..." />
                    </div>
                    <button type="submit" disabled={loading}
                      className="w-full bg-primary-800 hover:bg-primary-900 text-white py-3.5 rounded-xl font-bold text-sm transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-70">
                      {loading ? <><Loader2 size={18} className="animate-spin" /> Submitting...</> : <><Send size={16} /> Submit Admission Inquiry</>}
                    </button>
                  </form>
                )}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  )
}
