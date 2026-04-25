'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Phone, Clock, Badge } from 'lucide-react'
import type { LocationData } from '@/lib/types'

// Added real Google Maps embed URLs for Bangued/Abra locations
const locationData: LocationData[] = [
  {
    id: '1',
    icon: 'building',
    name: 'Municipal Hall',
    address: 'Capitol, Rizal St, Bangued, Abra',
    phone: '+63 (0) 74-555-0123',
    hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
    tags: ['Administration', 'Services', 'Permits'],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.0628689048303!2d120.61929577321357!3d17.599749245630637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e5c00c019a20d%3A0xbab39189bc059383!2sHJW9%2BRCP%20Abra%20Provincial%20Capitol%2C%20Rizal%20St%2C%20Bangued%2C%20Abra!5e0!3m2!1sen!2sph!4v1777037917143!5m2!1sen!2sph',
  },
  {
    id: '2',
    icon: 'landmark',
    name: 'Bangued Plaza',
    address: 'Modesto Bringas Memorial, Bangued, Abra',
    phone: '+63 (0) 74-555-0124',
    hours: 'Daily: 6:00 AM - 10:00 PM',
    tags: ['Events', 'Gatherings', 'Recreation'],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.126664698862!2d120.61599495664562!3d17.596719088058684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e5d0005366223%3A0x77d59c15d8b5c7fc!2sBangued%20Plaza%20Stage!5e0!3m2!1sen!2sph!4v1777036889342!5m2!1sen!2sph',
  },
  {
    id: '3',
    icon: 'sports',
    name: 'Oval Gymnasium',
    address: 'JJ38+26H Track, Bangued, Abra',
    phone: '+63 (0) 74-555-0125',
    hours: 'Mon - Sun: 6:00 AM - 9:00 PM',
    tags: ['Sports', 'Fitness', 'Training'],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.003482935169!2d120.61561240413148!3d17.602569492458773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e5eaa3e5a131f%3A0x5d9eb142bec65eb9!2sAbra%20Oval%20Gymnasium!5e0!3m2!1sen!2sph!4v1777092260577!5m2!1sen!2sph'
  },
]

export function LocationDirectory() {
  // State to track the currently clicked location. Defaults to the first item.
  const [activeLocation, setActiveLocation] = useState<LocationData>(locationData[0])

  return (
    <section id="locations" className="py-16 sm:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find our key locations and contact information. Select a card below to view it on the map.
          </p>
        </div>

        {/* Main Layout: Map Placeholder + Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Map Section */}
          <div className="bg-slate-200 rounded-xl overflow-hidden h-96 lg:h-full min-h-[500px] relative shadow-md border border-slate-200 lg:sticky lg:top-24">
            <iframe 
              // Source dynamically updates based on the active location
              src={activeLocation.mapUrl}
              className="absolute inset-0 w-full h-full transition-opacity duration-300"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${activeLocation.name}`}
            ></iframe>
          </div>

          {/* Locations List */}
          <div className="space-y-4">
            {locationData.map((location) => {
              const isActive = activeLocation.id === location.id;

              return (
                <Card
                  key={location.id} 
                  onClick={() => setActiveLocation(location)}
                  // Added cursor-pointer and dynamic classes to highlight the active card
                  className={`group cursor-pointer transition-all duration-300 overflow-hidden ${
                    isActive 
                      ? 'ring-2 ring-blue-600 shadow-md bg-white border-transparent' 
                      : 'hover:shadow-lg hover:border-blue-200 border-slate-200 bg-white/60 hover:bg-white'
                  }`}
                >
                  {/* Color indicator changes when active */}
                  <div className={`h-1 transition-colors duration-300 ${
                    isActive ? 'bg-blue-600' : 'bg-gradient-to-r from-blue-900 to-green-700'
                  }`}></div>

                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className={`text-xl font-bold mb-1 transition-colors ${
                          isActive ? 'text-blue-700' : 'text-slate-900 group-hover:text-blue-900'
                        }`}>
                          {location.name}
                        </h3>
                        <p className="text-sm text-slate-500">Location</p>
                      </div>
                      <MapPin className={`w-6 h-6 flex-shrink-0 transition-colors ${
                        isActive ? 'text-blue-600' : 'text-green-600'
                      }`} />
                    </div>

                    {/* Address */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{location.address}</span>
                      </div>

                      {/* Phone */}
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        <a
                          href={`tel:${location.phone}`}
                          // Prevent clicking the phone link from triggering the card click twice
                          onClick={(e) => e.stopPropagation()}
                          className="text-sm text-blue-900 hover:underline font-medium"
                        >
                          {location.phone}
                        </a>
                      </div>

                      {/* Hours */}
                      <div className="flex items-center space-x-3">
                        <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{location.hours}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                      {location.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-flex items-center space-x-1 px-2.5 py-1 text-xs font-medium rounded-full transition-colors ${
                            isActive ? 'bg-blue-100 text-blue-800' : 'bg-blue-50 text-blue-700'
                          }`}
                        >
                          <Badge className="w-3 h-3" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}