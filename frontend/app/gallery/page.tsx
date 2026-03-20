'use client'
import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import SectionReveal from '@/components/ui/SectionReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = ['All', 'Annual Day', 'Sports Day', 'Cultural Programs', 'School Activities']

const photos = [
  { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80', category: 'Annual Day', caption: 'Annual Day 2023 Celebrations' },
  { src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80', category: 'Sports Day', caption: 'Athletics Competition 2023' },
  { src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80', category: 'School Activities', caption: 'Science Laboratory Session' },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80', category: 'Cultural Programs', caption: 'Cultural Dance Performance' },
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80', category: 'School Activities', caption: 'Smart Classroom in Action' },
  { src: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?w=800&q=80', category: 'Sports Day', caption: 'Kabaddi Championship' },
  { src: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80', category: 'School Activities', caption: 'Computer Lab Learning' },
  { src: 'https://images.unsplash.com/photo-1532094349884-543559ac08da?w=800&q=80', category: 'School Activities', caption: 'Science Experiment' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', category: 'School Activities', caption: 'Library Study Time' },
  { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80', category: 'Annual Day', caption: 'Prize Distribution Ceremony' },
  { src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80', category: 'Cultural Programs', caption: 'Music & Drama Festival' },
  { src: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=80', category: 'Sports Day', caption: 'Sports Day March Past' },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  const filtered = activeCategory === 'All' ? photos : photos.filter(p => p.category === activeCategory)

  const openLightbox = (idx: number) => setLightboxIdx(idx)
  const closeLightbox = () => setLightboxIdx(null)
  const prev = () => lightboxIdx !== null && setLightboxIdx((lightboxIdx - 1 + filtered.length) % filtered.length)
  const next = () => lightboxIdx !== null && setLightboxIdx((lightboxIdx + 1) % filtered.length)

  return (
    <>
      <PageHero
        title="School Gallery"
        subtitle="Celebrating moments of learning, achievement, and joy at Krupa Nilaya School."
        breadcrumb="Gallery"
        bgImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionReveal>
            <SectionHeader label="Photo Gallery" title="Moments That Matter" subtitle="Browse through our collection of cherished school memories." />
          </SectionReveal>

          {/* Category Filter */}
          <SectionReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-primary-800 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((photo, i) => (
              <SectionReveal key={i} delay={i * 40}>
                <div
                  className="relative overflow-hidden rounded-2xl cursor-pointer group aspect-square"
                  onClick={() => openLightbox(i)}
                >
                  <img src={photo.src} alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <span className="text-gold-400 text-xs font-semibold block">{photo.category}</span>
                      <span className="text-white text-sm font-medium">{photo.caption}</span>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
            <X size={20} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white/70 hover:text-white w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
            <ChevronLeft size={24} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightboxIdx].src}
              alt={filtered[lightboxIdx].caption}
              className="w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="text-center mt-4">
              <span className="text-gold-400 text-sm">{filtered[lightboxIdx].category}</span>
              <p className="text-white/80 text-sm mt-1">{filtered[lightboxIdx].caption}</p>
              <p className="text-white/40 text-xs mt-1">{lightboxIdx + 1} / {filtered.length}</p>
            </div>
          </div>
          <button onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white/70 hover:text-white w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  )
}
