'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight, ArrowLeft, Search, Filter } from 'lucide-react'
import type { NewsArticle } from '@/lib/types'

// Expanded mock data for the dedicated news page
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

// Extract unique categories from the data, plus an 'All' option
const categories = ['All', ...Array.from(new Set(newsData.map(item => item.category)))]

function CategoryBadge({ category }: { category: string }) {
  const categoryColors: Record<string, string> = {
    'Infrastructure': 'bg-blue-100 text-blue-700',
    'Community': 'bg-green-100 text-green-700',
    'Environment': 'bg-emerald-100 text-emerald-700',
    'Health': 'bg-red-100 text-red-700',
    'Education': 'bg-purple-100 text-purple-700',
  }
  
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[category] || 'bg-slate-100 text-slate-700'}`}>
      {category}
    </span>
  )
}

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  // Filter logic based on both search input and selected category
  const filteredNews = newsData.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Button */}
        <Link href="/" className="inline-flex items-center space-x-2 text-sm text-slate-500 hover:text-blue-700 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            News & Updates
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Stay informed with the latest announcements, projects, and events happening in our municipality.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 justify-between items-start lg:items-center bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-slate-200">
          
          {/* Search Bar */}
          <div className="relative w-full lg:w-96 flex-shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search news..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto w-full pb-2 lg:pb-0 scrollbar-hide">
            <div className="flex items-center text-slate-500 mr-2 flex-shrink-0">
              <Filter className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 rounded-full ${
                  activeCategory === category 
                    ? 'bg-blue-900 hover:bg-blue-800 text-white' 
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 text-sm text-slate-500">
          Showing {filteredNews.length} result{filteredNews.length !== 1 && 's'}
        </div>

        {/* News Grid */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article) => (
              <Card
                key={article.id}
                className="group flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-slate-200 overflow-hidden bg-white"
              >
                <div className="h-1.5 bg-gradient-to-r from-blue-900 to-green-700"></div>

                <CardContent className="pt-6 pb-6 px-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <CategoryBadge category={article.category} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 mb-6 flex-grow line-clamp-3 leading-relaxed">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>

                  <Link href={`/news/${article.slug}`} className="mt-auto">
                    <Button
                      variant="outline"
                      className="w-full text-blue-900 border-blue-200 hover:bg-blue-50 group-hover:border-blue-300 transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-white rounded-xl border border-slate-200 border-dashed">
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">No news found</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              We couldn't find any articles matching your search for "{searchQuery}" in the {activeCategory} category.
            </p>
            <Button 
              variant="outline" 
              className="mt-6 text-blue-700"
              onClick={() => {
                setSearchQuery('')
                setActiveCategory('All')
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

      </div>
    </div>
  )
}