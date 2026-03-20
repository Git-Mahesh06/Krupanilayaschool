import Link from 'next/link'
import SectionReveal from '@/components/ui/SectionReveal'
import SectionHeader from '@/components/ui/SectionHeader'

const photos = [
  { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=70', label: 'Annual Day', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=70', label: 'Sports Day' },
  { src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=70', label: 'Science Fair' },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=70', label: 'Cultural Program' },
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=70', label: 'Classroom' },
]

export default function GalleryPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionReveal>
          <SectionHeader
            label="School Gallery"
            title="Moments That Matter"
            subtitle="A glimpse into the vibrant life at Krupa Nilaya School."
          />
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-[420px] md:h-[480px]">
            {photos.map((p, i) => (
              <div key={i}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer ${p.span || ''}`}>
                <img src={p.src} alt={p.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold text-sm">{p.label}</span>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={150}>
          <div className="text-center mt-8">
            <Link href="/gallery"
              className="inline-flex items-center gap-2 border-2 border-primary-800 text-primary-800 px-8 py-3 rounded-xl font-semibold text-sm hover:bg-primary-800 hover:text-white transition-colors">
              View Full Gallery
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
