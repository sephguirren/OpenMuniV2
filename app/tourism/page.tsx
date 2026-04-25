import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Map, Camera, Compass, Sun, Bus, MapPin, ArrowLeft, Tent } from 'lucide-react'

// Mock data for top destinations (using the same structure as your officials)
const destinations = [
  {
    id: 1,
    name: 'Casamata Hill National Park',
    category: 'Nature & Park',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Bangued Cathedral',
    category: 'Historical Site',
    image: 'https://images.unsplash.com/photo-1548625361-ec846e4933dd?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Abra River Viewpoint',
    category: 'Nature & Adventure',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Traditional Loom Weaving',
    category: 'Cultural Heritage',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&h=400&fit=crop',
  },
]

export default function TourismPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Navigation */}
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 text-sm font-medium text-slate-500 hover:text-blue-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Explore Bangued
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Immerse yourself in the breathtaking landscapes, vibrant local culture, and historic landmarks of the Gateway to the Cordilleras.
          </p>
        </div>

        {/* Tourism Highlights Section (Mirrors Mission/Vision from About Page) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-2 bg-blue-700 w-full rounded-t-xl"></div>
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Tent className="w-6 h-6 text-blue-700" />
              </div>
              <CardTitle className="text-2xl text-slate-900">Natural Wonders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                From the sweeping curves of the Abra River to the lush, rolling hills of Victoria National Park, our municipality offers endless outdoor adventures for nature lovers and thrill-seekers alike.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-2 bg-green-600 w-full rounded-t-xl"></div>
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Map className="w-6 h-6 text-green-700" />
              </div>
              <CardTitle className="text-2xl text-slate-900">Cultural Heritage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                Step back in time through our centuries-old Spanish colonial churches, witness the intricate art of traditional loom weaving, and celebrate with us during our vibrant local festivals.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Travel Guide Section (Mirrors History from About Page) */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-64 lg:h-full min-h-[400px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
                alt="Travel and exploring"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
                <p className="text-white font-medium text-lg">Your adventure starts here.</p>
              </div>
            </div>
            
            {/* Text Side */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center space-x-2 mb-6">
                <Compass className="w-6 h-6 text-blue-700" />
                <h2 className="text-3xl font-bold text-slate-900">Traveler's Guide</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
                <p>
                  Planning a trip to Bangued? As the capital of Abra, getting here is an adventure in itself. The municipality serves as the main commercial hub and the perfect jump-off point for exploring the rest of the province.
                </p>
                <p>
                  Whether you are looking for a peaceful retreat in nature, a deep dive into northern Philippine history, or a taste of authentic local cuisine, our doors are always open to welcome you.
                </p>
              </div>

              {/* Quick Facts Grid */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                <div>
                  <div className="flex items-center space-x-2 text-slate-900 font-bold mb-1">
                    <Sun className="w-4 h-4 text-green-600" />
                    <span>Best Time to Visit</span>
                  </div>
                  <p className="text-slate-500 text-sm">November to April (Dry Season)</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 text-slate-900 font-bold mb-1">
                    <Bus className="w-4 h-4 text-green-600" />
                    <span>How to Get Here</span>
                  </div>
                  <p className="text-slate-500 text-sm">Direct buses from Metro Manila</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 text-slate-900 font-bold mb-1">
                    <MapPin className="w-4 h-4 text-green-600" />
                    <span>Getting Around</span>
                  </div>
                  <p className="text-slate-500 text-sm">Tricycles and Jeepneys</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Destinations Section (Mirrors Local Officials from About Page) */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Must-Visit Destinations</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Add these iconic landmarks and breathtaking spots to your travel itinerary.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((spot) => (
              <div key={spot.id} className="group flex flex-col items-center text-center">
                {/* Made this slightly wider (w-full) than the official portraits for landscape pictures */}
                <div className="relative w-full aspect-[4/3] mb-6 rounded-xl overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 bg-slate-200">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                  {spot.name}
                </h3>
                <p className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full flex items-center space-x-1 mt-1">
                  <Camera className="w-3 h-3" />
                  <span>{spot.category}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}