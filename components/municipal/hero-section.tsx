import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 text-white overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-balance">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Welcome to Our Municipality
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 font-light">
                Bangued, Abra
              </p>
            </div>

            <p className="text-lg text-blue-50 max-w-xl leading-relaxed">
              A dynamic community dedicated to progress, sustainability, and the well-being of our residents. 
              Discover the services, opportunities, and initiatives that make Bangued a vibrant place to live, work, and thrive.
            </p>

            {/* Action Buttons - Now wrapped in Links to make them functional */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="/#services" passHref>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white flex items-center justify-center space-x-2 transition-colors"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

              <Link href="/#locations" passHref>
                <Button
                  size="lg"
                  variant="outline"
                  // Fixed hover effect by forcing bg-transparent, hover:text-white, and hover:bg-white/20
                  className="w-full sm:w-auto border-white text-white bg-transparent hover:bg-white/20 hover:text-white flex items-center justify-center space-x-2 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Contact Us</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Stats or Image Placeholder */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '15K+', label: 'Residents' },
              { number: '50+', label: 'Services' },
              { number: '25', label: 'Years' },
              { number: '100%', label: 'Dedicated' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <p className="text-blue-100 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}