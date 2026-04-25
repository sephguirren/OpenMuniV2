import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Target, Eye, History, Users, MapPin, Landmark, ArrowLeft } from 'lucide-react'

// Mock data for municipal officials
const officials = [
  {
    id: 1,
    name: 'Hon. Roberto Dela Cruz',
    position: 'Municipal Mayor',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Hon. Maria Santos',
    position: 'Municipal Vice Mayor',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Hon. Juan Reyes',
    position: 'Sangguniang Bayan Member',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Hon. Elena Garcia',
    position: 'Sangguniang Bayan Member',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
  },
]

export default function AboutPage() {
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
            About Bangued
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Discover the rich heritage, vibrant culture, and dedicated leadership that make our municipality a thriving community in the heart of Abra.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-2 bg-blue-700 w-full rounded-t-xl"></div>
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-700" />
              </div>
              <CardTitle className="text-2xl text-slate-900">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                To provide transparent, effective, and inclusive governance that promotes sustainable development, empowers our citizens, and delivers essential public services to enhance the quality of life for every resident of Lagangilang.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-2 bg-green-600 w-full rounded-t-xl"></div>
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-green-700" />
              </div>
              <CardTitle className="text-2xl text-slate-900">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                We envision Lagangilang as a premier municipality in Abra—a peaceful, progressive, and ecologically balanced community where empowered citizens live in harmony and prosperity under God-centered leadership.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* History & Quick Facts Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-64 lg:h-full min-h-[400px] w-full">
              <Image
                src="/bangued.jpg"
                alt="Historical view of Bangued"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
                <p className="text-white font-medium text-lg">Preserving our past, building our future.</p>
              </div>
            </div>
            
            {/* Text Side */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center space-x-2 mb-6">
                <History className="w-6 h-6 text-blue-700" />
                <h2 className="text-3xl font-bold text-slate-900">Our History</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
                <p>
                  Established in the early 1900s, Bangued has grown from a quiet rural settlement into a dynamic municipality. Known for its rich agricultural lands and resilient people, the town has a storied past deeply rooted in the culture of the Cordilleras.
                </p>
                <p>
                  Today, Lagangilang stands as a testament to progress, balancing modern infrastructure development with the preservation of its natural environment and cultural heritage.
                </p>
              </div>

              {/* Quick Facts Grid */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                <div>
                  <div className="flex items-center space-x-2 text-slate-900 font-bold mb-1">
                    <Users className="w-4 h-4 text-green-600" />
                    <span>Population</span>
                  </div>
                  <p className="text-slate-500 text-sm">Over 14,000 residents</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 text-slate-900 font-bold mb-1">
                    <MapPin className="w-4 h-4 text-green-600" />
                    <span>Barangays</span>
                  </div>
                  <p className="text-slate-500 text-sm">31 Constituent Barangays</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 text-slate-900 font-bold mb-1">
                    <Landmark className="w-4 h-4 text-green-600" />
                    <span>Classification</span>
                  </div>
                  <p className="text-slate-500 text-sm">5th Class Municipality</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Local Officials Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Leaders</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Dedicated public servants working tirelessly to ensure the progress and prosperity of our municipality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {officials.map((official) => (
              <div key={official.id} className="group flex flex-col items-center text-center">
                {/* Changed rounded-full to rounded-xl here */}
                <div className="relative w-48 h-48 mb-6 rounded-xl overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <Image
                    src={official.image}
                    alt={official.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                  {official.name}
                </h3>
                <p className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  {official.position}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}