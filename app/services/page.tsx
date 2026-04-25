'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft, Search, ArrowRight, FileSignature, Briefcase, HardHat, 
  Stethoscope, HeartHandshake, Users, Tractor, Shield, BookOpen
} from 'lucide-react'

// 1. Added 'slug' to the mock data for routing
const servicesData = [
  { 
    id: 1, 
    slug: 'birth-certificate-registration',
    title: 'Birth Certificate Registration', 
    category: 'Civil Registry', 
    icon: FileSignature, 
    desc: 'Register a new birth or request certified true copies of birth certificates from the Local Civil Registrar.',
    location: 'Ground Floor, Main Building'
  },
  { 
    id: 2, 
    slug: 'business-permit-issuance',
    title: 'Business Permit Issuance', 
    category: 'Business & Licensing', 
    icon: Briefcase, 
    desc: 'Apply for a new business permit or renew an existing one through our streamlined Business One-Stop Shop (BOSS).',
    location: '2nd Floor, Licensing Office'
  },
  { 
    id: 3, 
    slug: 'building-construction-permit',
    title: 'Building & Construction Permit', 
    category: 'Business & Licensing', 
    icon: HardHat, 
    desc: 'Secure necessary engineering permits for new constructions, renovations, and building demolitions.',
    location: 'Engineering Department'
  },
  { 
    id: 4, 
    slug: 'health-consultations',
    title: 'Health Consultations', 
    category: 'Health & Welfare', 
    icon: Stethoscope, 
    desc: 'Avail of free medical consultations, maternal care, and basic medicines at the Municipal Health Office.',
    location: 'Municipal Health Center'
  },
  { 
    id: 5, 
    slug: 'senior-citizen-osca-id',
    title: 'Senior Citizen OSCA ID', 
    category: 'Health & Welfare', 
    icon: HeartHandshake, 
    desc: 'Apply for or renew OSCA IDs to avail of mandatory senior citizen benefits, discounts, and social pensions.',
    location: 'MSWDO Office'
  },
  { 
    id: 6, 
    slug: 'marriage-license',
    title: 'Marriage License', 
    category: 'Civil Registry', 
    icon: Users, 
    desc: 'Apply for a marriage license required before the wedding ceremony. Includes mandatory family planning seminars.',
    location: 'Ground Floor, Main Building'
  },
  { 
    id: 7, 
    slug: 'agricultural-assistance',
    title: 'Agricultural Assistance', 
    category: 'Agriculture', 
    icon: Tractor, 
    desc: 'Request subsidized seeds, fertilizers, crop insurance, and technical assistance for local farmers.',
    location: 'Municipal Agriculture Office'
  },
  { 
    id: 8, 
    slug: 'police-clearance',
    title: 'Police Clearance', 
    category: 'Public Safety', 
    icon: Shield, 
    desc: 'Secure a local police clearance required for local employment, firearms licensing, and other legal purposes.',
    location: 'Bangued Police Station'
  },
]

const categories = ['All', ...Array.from(new Set(servicesData.map(item => item.category)))]

const categoryColors: Record<string, string> = {
  'Civil Registry': 'bg-blue-600',
  'Business & Licensing': 'bg-emerald-600',
  'Health & Welfare': 'bg-red-500',
  'Agriculture': 'bg-amber-500',
  'Public Safety': 'bg-slate-700',
}

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredServices = servicesData.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.desc.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/" className="inline-flex items-center space-x-2 text-sm font-medium text-slate-500 hover:text-blue-700 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Municipal Services</h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            We are committed to delivering efficient, accessible, and transparent public services. Find the requirements and steps for your transactions below.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-12 space-y-6">
          <div className="relative w-full lg:max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search for a service..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full ${activeCategory === category ? 'bg-blue-900 text-white' : 'text-slate-600'}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {filteredServices.map((service) => {
              const Icon = service.icon
              const borderColor = categoryColors[service.category] || 'bg-slate-300'

              return (
                <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 border-slate-200 flex flex-col overflow-hidden">
                  <div className={`h-1.5 w-full ${borderColor}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-blue-50 transition-colors mb-4">
                        <Icon className="w-6 h-6 text-slate-700 group-hover:text-blue-700 transition-colors" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded">
                        {service.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-slate-900 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                    <div className="pt-4 border-t border-slate-100 mb-4">
                      <p className="text-xs text-slate-500 font-medium">
                        <span className="font-bold text-slate-700">Location:</span> {service.location}
                      </p>
                    </div>
                    {/* 2. Wrapped the Button in a Next.js Link pointing to the dynamic slug */}
                    <Link href={`/services/${service.slug}`} passHref className="mt-auto">
                      <Button variant="outline" className="w-full text-blue-700 border-blue-200 hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2">
                        <span>View Requirements</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-slate-200 border-dashed mb-20">
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">No services found</h3>
            <Button variant="outline" onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}>Clear Filters</Button>
          </div>
        )}

        <div className="bg-gradient-to-r from-blue-900 to-emerald-800 rounded-2xl overflow-hidden shadow-xl text-white">
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-2/3">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="w-8 h-8 text-emerald-400" />
                <h2 className="text-3xl font-bold">Citizen's Charter</h2>
              </div>
              <p className="text-blue-100 text-lg max-w-2xl leading-relaxed mb-8 lg:mb-0">
                In compliance with Republic Act No. 11032 (Ease of Doing Business Act), our comprehensive Citizen's Charter details all the steps, requirements, processing times, and fees for every municipal transaction.
              </p>
            </div>
            <div className="lg:w-1/3 flex lg:justify-end">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100 font-bold px-8 shadow-lg w-full sm:w-auto">
                Download Full PDF Handbook
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}