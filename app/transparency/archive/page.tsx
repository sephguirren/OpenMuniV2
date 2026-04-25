'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  FileText, 
  Download, 
  Calendar 
} from 'lucide-react'

// Expanded mock data spanning multiple years
const archiveDocuments = [
  { id: 1, title: '2025 Annual Municipal Budget', category: 'Financial Report', year: '2025', date: 'Jan 15, 2025', size: '2.4 MB' },
  { id: 2, title: '2024 Annual Municipal Budget', category: 'Financial Report', year: '2024', date: 'Jan 12, 2024', size: '2.1 MB' },
  { id: 3, title: '2023 Annual Municipal Budget', category: 'Financial Report', year: '2023', date: 'Jan 14, 2023', size: '1.9 MB' },
  { id: 4, title: '2025 Annual Audit Report (COA)', category: 'Audit & Compliance', year: '2025', date: 'Dec 28, 2025', size: '5.6 MB' },
  { id: 5, title: '2024 Annual Audit Report (COA)', category: 'Audit & Compliance', year: '2024', date: 'Dec 27, 2024', size: '5.2 MB' },
  { id: 6, title: 'Approved Procurement Plan 2026', category: 'Bids & Awards', year: '2025', date: 'Dec 15, 2025', size: '3.2 MB' },
  { id: 7, title: 'Approved Procurement Plan 2025', category: 'Bids & Awards', year: '2024', date: 'Dec 10, 2024', size: '3.0 MB' },
  { id: 8, title: 'Q4 2025 Statement of Receipts', category: 'Revenue Report', year: '2025', date: 'Jan 10, 2026', size: '1.1 MB' },
  { id: 9, title: 'Q3 2025 Statement of Receipts', category: 'Revenue Report', year: '2025', date: 'Oct 10, 2025', size: '1.0 MB' },
  { id: 10, title: 'Municipal Resolution No. 45 s. 2024', category: 'Resolutions', year: '2024', date: 'Aug 22, 2024', size: '0.5 MB' },
]

// Extract unique categories and years for the filters
const categories = ['All', ...Array.from(new Set(archiveDocuments.map(item => item.category)))]
const years = ['All', ...Array.from(new Set(archiveDocuments.map(item => item.year))).sort((a, b) => Number(b) - Number(a))]

export default function ArchivePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeYear, setActiveYear] = useState('All')

  // Filter logic
  const filteredDocs = archiveDocuments.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === 'All' || doc.category === activeCategory
    const matchesYear = activeYear === 'All' || doc.year === activeYear
    return matchesSearch && matchesCategory && matchesYear
  })

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Navigation */}
        <Link 
          href="/transparency" 
          className="inline-flex items-center space-x-2 text-sm font-medium text-slate-500 hover:text-blue-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Transparency Board</span>
        </Link>

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Document Archive
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Search, filter, and download historical public records, financial statements, and municipal reports.
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8 space-y-6">
          
          {/* Search Bar */}
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by document title..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            {/* Year Filter */}
            <div className="flex-1 space-y-3">
              <div className="flex items-center text-slate-700 font-medium text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                Filter by Year
              </div>
              <div className="flex flex-wrap gap-2">
                {years.map((year) => (
                  <Button
                    key={year}
                    variant={activeYear === year ? 'default' : 'outline'}
                    onClick={() => setActiveYear(year)}
                    size="sm"
                    className={activeYear === year ? 'bg-blue-900 text-white' : 'text-slate-600'}
                  >
                    {year}
                  </Button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex-[2] space-y-3">
              <div className="flex items-center text-slate-700 font-medium text-sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter by Category
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? 'default' : 'outline'}
                    onClick={() => setActiveCategory(category)}
                    size="sm"
                    className={activeCategory === category ? 'bg-green-700 text-white' : 'text-slate-600'}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-4 text-sm font-medium text-slate-500 flex justify-between items-center">
          <span>Showing {filteredDocs.length} document{filteredDocs.length !== 1 && 's'}</span>
          {(searchQuery || activeCategory !== 'All' || activeYear !== 'All') && (
            <button 
              onClick={() => {
                setSearchQuery('')
                setActiveCategory('All')
                setActiveYear('All')
              }}
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Documents List */}
        {filteredDocs.length > 0 ? (
          <div className="space-y-3">
            {filteredDocs.map((doc) => (
              <Card key={doc.id} className="group hover:shadow-md hover:border-blue-200 transition-all duration-300 border-slate-200">
                <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  
                  {/* Icon & Title Group */}
                  <div className="flex items-start sm:items-center gap-4 flex-1">
                    <div className="w-12 h-12 flex-shrink-0 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <FileText className="w-6 h-6 text-slate-400 group-hover:text-blue-700 transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {doc.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-slate-500">
                        <span className="font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md text-xs">
                          {doc.category}
                        </span>
                        <span className="flex items-center"><Calendar className="w-3 h-3 mr-1"/> {doc.date}</span>
                        <span>•</span>
                        <span>{doc.size}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full sm:w-auto bg-slate-900 hover:bg-blue-700 text-white transition-colors flex-shrink-0">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-white rounded-xl border border-slate-200 border-dashed">
            <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">No documents found</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              We couldn't find any records matching your current filters. Try adjusting your search term, year, or category.
            </p>
          </div>
        )}

      </div>
    </div>
  )
}