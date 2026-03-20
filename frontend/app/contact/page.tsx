'use client'
import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import SectionReveal from '@/components/ui/SectionReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
        toast.success(data.message)
      } else {
        toast.error(data.message || 'Something went wrong.')
      }
    } catch {
      toast.error('Unable to connect. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out to us for admissions, queries, or any information."
        breadcrumb="Contact"
        bgImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionReveal>
            <SectionHeader
              label="Get In Touch"
              title="We're Here to Help"
              subtitle="Have a question or want to visit us? Here's how you can reach the Krupa Nilaya School team."
            />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Contact Info */}
            <SectionReveal>
              <div className="space-y-5">
                {[
                  {
                    icon: MapPin,
                    title: 'School Address',
                    color: 'bg-blue-50 text-blue-700',
                    lines: ['Krupa Nilaya School', 'Sandur, Ballari District', 'Karnataka – 583 119', 'India'],
                  },
                  {
                    icon: Phone,
                    title: 'Phone Numbers',
                    color: 'bg-green-50 text-green-700',
                    lines: ['+91 98765 43210', '+91 98765 43211'],
                  },
                  {
                    icon: Mail,
                    title: 'Email Address',
                    color: 'bg-purple-50 text-purple-700',
                    lines: ['info@krupanilayaschool.in', 'admissions@krupanilayaschool.in'],
                  },
                  {
                    icon: Clock,
                    title: 'School Hours',
                    color: 'bg-amber-50 text-amber-700',
                    lines: ['Monday – Saturday', '8:00 AM – 4:00 PM', 'Office: 9:00 AM – 5:00 PM'],
                  },
                ].map((item) => (
                  <div key={item.title} className="card p-5 flex gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm mb-1.5">{item.title}</h4>
                      {item.lines.map((line, i) => (
                        <p key={i} className="text-slate-500 text-sm leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>

            {/* Contact Form */}
            <SectionReveal delay={100} className="lg:col-span-2">
              <div className="card p-8">
                <h3 className="font-serif font-bold text-primary-900 text-2xl mb-2">Send Us a Message</h3>
                <p className="text-slate-500 text-sm mb-7">Fill out the form and we'll get back to you as soon as possible.</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={30} className="text-green-600" />
                    </div>
                    <h4 className="font-serif font-bold text-xl text-slate-800 mb-2">Message Sent!</h4>
                    <p className="text-slate-500 text-sm">Thank you for contacting us. We will respond within 1–2 working days.</p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', message: '' }) }}
                      className="mt-6 text-primary-700 text-sm font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">Your Name *</label>
                        <input name="name" value={form.name} onChange={handleChange}
                          className="form-input" placeholder="Full name" required />
                      </div>
                      <div>
                        <label className="form-label">Phone Number *</label>
                        <input name="phone" value={form.phone} onChange={handleChange}
                          className="form-input" placeholder="10-digit mobile number" required type="tel" />
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input name="email" value={form.email} onChange={handleChange}
                        className="form-input" placeholder="your@email.com" required type="email" />
                    </div>
                    <div>
                      <label className="form-label">Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange}
                        className="form-input resize-none" rows={5}
                        placeholder="Write your message here..." required />
                    </div>
                    <button type="submit" disabled={loading}
                      className="w-full bg-primary-800 hover:bg-primary-900 text-white py-3.5 rounded-xl font-bold text-sm transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-70">
                      {loading
                        ? <><Loader2 size={18} className="animate-spin" /> Sending...</>
                        : <><Send size={16} /> Send Message</>}
                    </button>
                  </form>
                )}
              </div>
            </SectionReveal>
          </div>

          {/* Google Map */}
          <SectionReveal delay={150}>
            <div className="mt-14">
              <h3 className="font-serif font-bold text-primary-900 text-2xl mb-5 text-center">Find Us on the Map</h3>
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2!2d76.5412193!3d15.080607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb761533bf7e48d%3A0xf4938b7d0d6f9df2!2sKrupa%20Nilaya%20School!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Krupa Nilaya School Location - Sandur, Karnataka"
                />
              </div>
              <p className="text-center text-slate-400 text-xs mt-3">
                Krupa Nilaya School, Sandur, Ballari District, Karnataka – 583 119
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}