import Link from 'next/link' // Import Link from Next.js
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import type { NewsArticle } from '@/lib/types'

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
]

function CategoryBadge({ category }: { category: string }) {
  const categoryColors: Record<string, string> = {
    'Infrastructure': 'bg-blue-100 text-blue-700',
    'Community': 'bg-green-100 text-green-700',
    'Environment': 'bg-emerald-100 text-emerald-700',
    'Health': 'bg-red-100 text-red-700',
  }
  
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[category] || 'bg-slate-100 text-slate-700'}`}>
      {category}
    </span>
  )
}

export function NewsSection() {
  return (
    <section id="news" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Latest News
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stay informed about what&apos;s happening in our municipality.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsData.map((article) => (
            <Card
              key={article.id}
              className="group flex flex-col hover:shadow-lg hover:border-blue-200 transition-all duration-300 border-slate-200 overflow-hidden"
            >
              {/* Colored Header Bar */}
              <div className="h-1 bg-gradient-to-r from-blue-900 to-green-700"></div>

              <CardContent className="pt-6 pb-6 px-6 flex flex-col flex-grow">
                {/* Category Badge */}
                <div className="mb-4">
                  <CategoryBadge category={article.category} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-900 transition-colors">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-4 flex-grow line-clamp-2">
                  {article.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>

                {/* Read More Link (Now acts like View All News) */}
                {/* We wrap the Button in a Next.js Link component */}
                <Link href="/news" passHref>
                  <Button
                    variant="ghost"
                    className="text-blue-900 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-medium flex items-center space-x-1 w-fit"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          {/* We wrap the Button in a Next.js Link component */}
          <Link href="/news" passHref>
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white">
              View All News
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}