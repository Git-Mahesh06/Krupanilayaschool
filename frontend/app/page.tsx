import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import AboutSnippet from '@/components/sections/AboutSnippet'
import StatsSection from '@/components/sections/StatsSection'
import PrincipalMessage from '@/components/sections/PrincipalMessage'
import FacilitiesPreview from '@/components/sections/FacilitiesPreview'
import AchievementsSection from '@/components/sections/AchievementsSection'
import AnnouncementsPreview from '@/components/sections/AnnouncementsPreview'
import GalleryPreview from '@/components/sections/GalleryPreview'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Krupa Nilaya School | Shaping Young Minds for a Brighter Future',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSnippet />
      <StatsSection />
      <PrincipalMessage />
      <FacilitiesPreview />
      <AchievementsSection />
      <AnnouncementsPreview />
      <GalleryPreview />
      <TestimonialsSection />
      <CTABanner />
    </>
  )
}
