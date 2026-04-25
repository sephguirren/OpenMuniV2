import { Header } from '@/components/municipal/header'
import { HeroSection } from '@/components/municipal/hero-section'
import { NewsSection } from '@/components/municipal/news-section'
import { MediaGallery } from '@/components/municipal/media-gallery'
import { LocationDirectory } from '@/components/municipal/location-directory'
import { Footer } from '@/components/municipal/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <NewsSection />
      <MediaGallery />
      <LocationDirectory />
      <Footer />
    </div>
  )
}
