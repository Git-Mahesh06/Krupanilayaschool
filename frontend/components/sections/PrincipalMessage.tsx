import SectionReveal from '@/components/ui/SectionReveal'
import { Quote } from 'lucide-react'

export default function PrincipalMessage() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            
            {/* Image */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                    alt="School Principal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary-900 text-white rounded-2xl px-6 py-3 shadow-xl text-center whitespace-nowrap">
                  <div className="font-serif font-bold text-sm">Mr. [Principal Name]</div>
                  <div className="text-gold-400 text-xs">Principal</div>
                </div>
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gold-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Quote size={20} className="text-white" />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="lg:col-span-3">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700">
                Principal's Message
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-6 leading-tight">
                A Word From Our Leadership
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p className="text-lg italic font-display text-primary-800 border-l-4 border-gold-500 pl-5">
                  "Education is not merely about acquiring knowledge — it is about building character, 
                  fostering curiosity, and instilling values that last a lifetime."
                </p>
                <p>
                  Dear Parents and Students, welcome to Krupa Nilaya School. For over three decades, 
                  our institution has been committed to providing quality education that goes beyond 
                  textbooks. We believe every child is unique, and our dedicated faculty strives to 
                  bring out the best in each student.
                </p>
                <p>
                  Our school provides a safe, stimulating, and inclusive environment where students 
                  are encouraged to ask questions, explore ideas, and develop into confident individuals. 
                  We take pride in our academic achievements, sports programs, and cultural activities 
                  that shape well-rounded personalities.
                </p>
                <p>
                  We invite you to be a part of the Krupa Nilaya family — where your child's future 
                  begins today.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="font-serif font-bold text-primary-900">Mr. [Principal Name]</div>
                <div className="text-slate-500 text-sm">M.Ed, Principal — Krupa Nilaya School, Sandur</div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
