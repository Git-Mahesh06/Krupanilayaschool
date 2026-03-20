interface Props {
  title: string
  subtitle?: string
  breadcrumb?: string
  bgImage?: string
}

export default function PageHero({ title, subtitle, breadcrumb, bgImage }: Props) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bgImage || 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80'}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/85 to-primary-800/70" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '36px 36px' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {breadcrumb && (
          <div className="text-slate-400 text-sm mb-4">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="text-gold-400">{breadcrumb}</span>
          </div>
        )}
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-slate-300 text-lg md:text-xl max-w-xl leading-relaxed">{subtitle}</p>
        )}
        <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-gold-500 to-gold-300" />
      </div>
    </section>
  )
}
