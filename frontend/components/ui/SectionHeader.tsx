interface Props {
  label?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export default function SectionHeader({ label, title, subtitle, center = true, light = false }: Props) {
  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      {label && (
        <span className={`inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 px-4 py-1.5 rounded-full ${
          light ? 'bg-white/10 text-gold-300' : 'bg-primary-50 text-primary-700'
        }`}>
          {label}
        </span>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${
        light ? 'text-white' : 'text-primary-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl leading-relaxed ${
          center ? 'mx-auto' : ''
        } ${light ? 'text-slate-300' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-5 ${center ? 'flex justify-center' : ''}`}>
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-gold-500 to-gold-300" />
      </div>
    </div>
  )
}
