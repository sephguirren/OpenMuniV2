'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Play, Calendar, MapPin, X, Info } from 'lucide-react'
import type { MediaItem } from '@/lib/types'

// 1. Updated data to include 'description' and 'location'
const mediaData: MediaItem[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    title: 'Municipal Council Meeting',
    date: '2024-04-20',
    type: 'Photo',
    location: 'Municipal Hall, Main Conference Room',
    description: 'The municipal council convenes for the monthly assembly to discuss upcoming infrastructure budgets and community welfare programs for the next quarter.',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop',
    title: 'Community Outreach Program',
    date: '2024-04-18',
    type: 'Photo',
    location: 'Barangay San Jose Plaza',
    description: 'Local volunteers and government officials distributing relief goods and providing free medical checkups to the residents of Barangay San Jose.',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1549887534-7e4d1f62f004?w=400&h=300&fit=crop',
    title: 'Public Forum Discussion',
    date: '2024-04-16',
    type: 'Video',
    duration: '5:42',
    location: 'Municipal Gymnasium',
    description: 'An open forum allowing citizens to voice their opinions, ask questions, and collaborate with local leaders on environmental sustainability initiatives.',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
    title: 'Infrastructure Development',
    date: '2024-04-14',
    type: 'Photo',
    location: 'Rizal Street Extension',
    description: 'Ongoing road widening and drainage improvement projects aimed at reducing traffic congestion and preventing floods during the rainy season.',
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    title: 'Community Gathering',
    date: '2024-04-12',
    type: 'Video',
    duration: '3:28',
    location: 'Town Plaza',
    description: 'Highlights from the annual town fiesta featuring local delicacies, cultural dances, and the crowning of this year\'s festival queen.',
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1552566617-c4be7dba675f?w=400&h=300&fit=crop',
    title: 'Youth Program Launch',
    date: '2024-04-10',
    type: 'Photo',
    location: 'Public Library & Youth Center',
    description: 'The official ribbon-cutting ceremony for the new youth tech hub, providing free computer access and coding workshops for students.',
  },
]

type FilterType = 'all' | 'photo' | 'video'

export function MediaGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  // 2. State to track the currently clicked media item for the modal
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)

  const filteredMedia = mediaData.filter((item) => {
    if (activeFilter === 'all') return true
    return item.type.toLowerCase() === activeFilter
  })

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedMedia) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [selectedMedia])

  return (
    <section id="media" className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Media Gallery
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore visual highlights from our recent municipal activities and events.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {(['all', 'photo', 'video'] as FilterType[]).map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              className={`capitalize ${
                activeFilter === filter
                  ? 'bg-blue-900 hover:bg-blue-800 text-white'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'all' ? 'All Media' : filter === 'photo' ? 'Photos' : 'Videos'}
            </Button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((media) => (
            <Card
              key={media.id}
              // Open modal on click
              onClick={() => setSelectedMedia(media)}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-slate-200"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full bg-slate-200 overflow-hidden">
                <Image
                  src={media.image}
                  alt={media.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Video Play Button Overlay */}
                {media.type === 'Video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors duration-300">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 shadow-lg transition-all duration-300">
                      <Play className="w-6 h-6 text-blue-900 ml-1" />
                    </div>
                  </div>
                )}

                {/* Type Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${
                    media.type === 'Video'
                      ? 'bg-red-500 text-white'
                      : 'bg-blue-600 text-white'
                  }`}>
                    {media.type}
                  </span>
                </div>

                {/* Duration Badge for Videos */}
                {media.duration && (
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-md">
                    {media.duration}
                  </div>
                )}
              </div>

              {/* Content */}
              <CardContent className="p-5">
                <h3 className="font-bold text-lg text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
                  {media.title}
                </h3>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center text-sm text-slate-500 space-x-2">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>{new Date(media.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-500 space-x-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{media.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 3. The Modal Overlay */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Dark Backdrop (Click to close) */}
          <div 
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedMedia(null)}
          ></div>

          {/* Modal Container */}
          <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 rounded-full shadow-sm transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Side: Big Media View */}
            <div className="relative w-full md:w-3/5 h-64 sm:h-80 md:h-[500px] bg-slate-100 flex items-center justify-center group">
              <Image
                src={selectedMedia.image}
                // Removing standard query params for a higher-res image if possible
                alt={selectedMedia.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
              
              {/* Play button overlay if it's a video */}
              {selectedMedia.type === 'Video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-white transition-all shadow-xl">
                    <Play className="w-8 h-8 text-blue-900 ml-2" />
                  </div>
                </div>
              )}
            </div>

            {/* Right Side: Media Details */}
            <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col bg-white overflow-y-auto max-h-[50vh] md:max-h-[500px]">
              
              {/* Type Badge */}
              <div className="mb-4">
                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${
                  selectedMedia.type === 'Video' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {selectedMedia.type} {selectedMedia.duration && `• ${selectedMedia.duration}`}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-tight">
                {selectedMedia.title}
              </h3>

              {/* Meta Info (Date & Location) */}
              <div className="space-y-4 mb-8 pb-8 border-b border-slate-100">
                <div className="flex items-start space-x-3 text-slate-600">
                  <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Date</p>
                    <p className="font-medium">{new Date(selectedMedia.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 text-slate-600">
                  <MapPin className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Location</p>
                    <p className="font-medium">{selectedMedia.location}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="flex-grow">
                <div className="flex items-center space-x-2 mb-3">
                  <Info className="w-5 h-5 text-slate-400" />
                  <h4 className="font-bold text-slate-900">About this {selectedMedia.type.toLowerCase()}</h4>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {selectedMedia.description}
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  )
}