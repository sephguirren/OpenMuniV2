'use client'

import React, { useState, use } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowLeft, Share2, Printer, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { NewsArticle } from '@/lib/types'

// Mock Data
const newsData: NewsArticle[] = [
  {
    id: '1',
    category: 'Infrastructure',
    readTime: '4 min read',
    title: 'New Municipal Hall Opens Today',
    description: 'The newly constructed Municipal Hall opens its doors to the public, featuring modern facilities and improved services for residents.',
    date: '2024-04-20',
    slug: 'new-municipal-hall',
  },
  {
    id: '2',
    category: 'Community',
    readTime: '5 min read',
    title: 'Spring Festival Celebration Announced',
    description: 'Mark your calendars! The annual Spring Festival will feature local crafts, food, music, and celebrations highlighting our community culture.',
    date: '2024-04-18',
    slug: 'spring-festival',
  },
  {
    id: '3',
    category: 'Environment',
    readTime: '3 min read',
    title: 'Tree Planting Drive Exceeds Goals',
    description: 'Residents planted over 5,000 trees in this month\'s environmental initiative, boosting our green spaces and community spirit.',
    date: '2024-04-15',
    slug: 'tree-planting',
  },
  {
    id: '4',
    category: 'Health',
    readTime: '6 min read',
    title: 'Free Health Screening Campaign Success',
    description: 'Over 1,000 residents participated in our monthly free health screening program, promoting wellness and preventive care across the municipality.',
    date: '2024-04-12',
    slug: 'health-screening',
  },
  {
    id: '5',
    category: 'Infrastructure',
    readTime: '2 min read',
    title: 'Road Widening Project on Rizal Street',
    description: 'Construction begins next week on Rizal street to ease traffic congestion. Expect minor delays during peak hours.',
    date: '2024-04-10',
    slug: 'road-widening-rizal',
  },
  {
    id: '6',
    category: 'Education',
    readTime: '4 min read',
    title: 'New Scholarship Program Launched',
    description: 'The Mayor\'s office has announced a new scholarship fund for deserving high school graduates pursuing tech and engineering degrees.',
    date: '2024-04-08',
    slug: 'new-scholarship-program',
  },
]

function CategoryBadge({ category }: { category: string }) {
  const categoryColors: Record<string, string> = {
    'Infrastructure': 'bg-blue-100 text-blue-700',
    'Community': 'bg-green-100 text-green-700',
    'Environment': 'bg-emerald-100 text-emerald-700',
    'Health': 'bg-red-100 text-red-700',
    'Education': 'bg-purple-100 text-purple-700',
  }
  
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[category] || 'bg-slate-100 text-slate-700'}`}>
      {category}
    </span>
  )
}

// 1. Added 'use client' at the top because we need interactivity (onClick)
export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  // 2. Use React's `use` hook to unwrap the params promise in a Client Component
  const resolvedParams = use(params)
  
  // State to manage the visual feedback when the "Share" button is clicked
  const [copied, setCopied] = useState(false)

  const article = newsData.find((a) => a.slug === resolvedParams.slug)

  if (!article) {
    notFound()
  }

  // Handle the Share (Copy Link) functionality
  const handleShare = async () => {
    try {
      // Get the current URL
      const currentUrl = window.location.href;
      // Use the Clipboard API to copy it
      await navigator.clipboard.writeText(currentUrl);
      
      // Briefly show a "Copied" checkmark state
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy link: ', err);
    }
  }

  // Handle the Print functionality
  const handlePrint = () => {
    window.print();
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Navigation */}
        <Link 
          href="/news" 
          className="inline-flex items-center space-x-2 text-sm font-medium text-slate-500 hover:text-blue-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All News</span>
        </Link>

        {/* We add an ID here so if you ever want to build a custom print stylesheet, 
          you can target `#printable-article` to hide navbars, footers, etc. 
        */}
        <article id="printable-article" className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Header Color Accent */}
          <div className="h-2 bg-gradient-to-r from-blue-900 to-green-700 w-full"></div>

          <div className="p-8 sm:p-12">
            {/* Article Meta / Header */}
            <header className="mb-10 pb-10 border-b border-slate-100">
              <div className="mb-6">
                <CategoryBadge category={article.category} />
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center justify-between gap-4 text-slate-500">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-blue-700" />
                    <span>{new Date(article.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-green-700" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Utility Buttons: Share & Print */}
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`rounded-full transition-colors ${copied ? 'text-green-600 bg-green-50' : 'text-slate-400 hover:text-blue-700 hover:bg-slate-100'}`}
                    onClick={handleShare}
                    title="Copy Link to Article"
                  >
                    {copied ? <Check className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-slate-400 hover:text-blue-700 hover:bg-slate-100 rounded-full transition-colors"
                    onClick={handlePrint}
                    title="Print Article"
                  >
                    <Printer className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg prose-slate max-w-none text-slate-700 space-y-6">
              <p className="text-xl leading-relaxed font-medium text-slate-900">
                {article.description}
              </p>
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 my-8">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Key Highlights:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Improved community access to vital services.</li>
                  <li>Commitment to transparent and open governance.</li>
                  <li>Sustainable development practices implemented.</li>
                </ul>
              </div>

              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p>
                For more information regarding this announcement, please contact the municipal public information office during standard working hours.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}