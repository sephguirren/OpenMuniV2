import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft, 
  FileText, 
  Scale, 
  Search, 
  Download, 
  CheckCircle, 
  Briefcase, 
  ShieldCheck 
} from 'lucide-react'

// Mock data for public documents and reports
const reports = [
  {
    id: 1,
    title: '2025 Annual Municipal Budget',
    category: 'Financial Report',
    date: 'January 15, 2026',
    fileSize: '2.4 MB',
  },
  {
    id: 2,
    title: 'Q4 2025 Statement of Receipts',
    category: 'Revenue Report',
    date: 'January 10, 2026',
    fileSize: '1.1 MB',
  },
  {
    id: 3,
    title: '2025 Annual Audit Report (COA)',
    category: 'Audit & Compliance',
    date: 'December 28, 2025',
    fileSize: '5.6 MB',
  },
  {
    id: 4,
    title: 'Approved Procurement Plan 2026',
    category: 'Bids & Awards',
    date: 'December 15, 2025',
    fileSize: '3.2 MB',
  },
]

export default function TransparencyPage() {
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
            Transparency Board
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We are committed to open governance. Access our financial records, audit reports, and public biddings to see how municipal funds are managed.
          </p>
        </div>

        {/* Key Pillars Section (Mirrors Mission/Vision from About Page) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-2 bg-blue-700 w-full rounded-t-xl"></div>
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-blue-700" />
              </div>
              <CardTitle className="text-2xl text-slate-900">Financial Accountability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                We ensure that every peso is accounted for. We regularly publish our statement of receipts, expenditures, and utilization funds in compliance with the Department of Interior and Local Government (DILG).
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-2 bg-green-600 w-full rounded-t-xl"></div>
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-green-700" />
              </div>
              <CardTitle className="text-2xl text-slate-900">Freedom of Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                Citizens have the right to know. We maintain an open-door policy for public records, allowing constituents to easily request and verify municipal projects, contracts, and internal policies.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Commitment to Open Governance Section (Mirrors History from About Page) */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-64 lg:h-full min-h-[400px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
                alt="Financial documents and accountability"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
                <p className="text-white font-medium text-lg">Building trust through full disclosure.</p>
              </div>
            </div>
            
            {/* Text Side */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center space-x-2 mb-6">
                <ShieldCheck className="w-6 h-6 text-blue-700" />
                <h2 className="text-3xl font-bold text-slate-900">Seal of Good Local Governance</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
                <p>
                  Bangued is a proud recipient of the Seal of Good Local Governance (SGLG), a testament to our continuous effort to maintain transparency, disaster preparedness, and social protectiveness.
                </p>
                <p>
                  Our Bids and Awards Committee (BAC) ensures that all procurement of goods, infrastructure projects, and consulting services are done through competitive bidding, giving fair opportunities to all suppliers.
                </p>
              </div>

              {/* Quick Facts Grid */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                <div>
                  <div className="flex items-center space-x-2 text-slate-900 font-bold mb-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>COA Compliance</span>
                  </div>
                  <p className="text-slate-500 text-sm">100% Unqualified Opinion</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 text-slate-900 font-bold mb-1">
                    <Briefcase className="w-4 h-4 text-green-600" />
                    <span>Public Biddings</span>
                  </div>
                  <p className="text-slate-500 text-sm">Updated weekly via PhilGEPS</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 text-slate-900 font-bold mb-1">
                    <FileText className="w-4 h-4 text-green-600" />
                    <span>Public Records</span>
                  </div>
                  <p className="text-slate-500 text-sm">Available via FOI Request</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Downloadable Documents Grid (Mirrors Officials grid, but for files) */}
        <div>
          <div className="text-center mb-12 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Latest Public Documents</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-6">
              Download and review our most recent financial statements, budget plans, and audit reports.
            </p>
            {/* View all button wrapped in a Link */}
            <Link href="/transparency/archive" passHref>
              <Button variant="outline" className="text-blue-700 border-blue-200 hover:bg-blue-50">
                View Document Archive
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reports.map((report) => (
              <Card key={report.id} className="group hover:shadow-lg hover:border-blue-200 transition-all duration-300 border-slate-200 flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow items-center text-center">
                  
                  {/* File Icon container */}
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                    <FileText className="w-8 h-8 text-slate-400 group-hover:text-blue-700 transition-colors" />
                  </div>
                  
                  {/* Document Info */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
                    {report.title}
                  </h3>
                  <div className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full mb-4">
                    {report.category}
                  </div>
                  
                  {/* Date & Size */}
                  <div className="mt-auto pt-4 w-full border-t border-slate-100 text-xs text-slate-500 flex justify-between items-center mb-4">
                    <span>{report.date}</span>
                    <span>{report.fileSize}</span>
                  </div>

                  {/* Download Button */}
                  <Button className="w-full bg-slate-900 hover:bg-blue-700 text-white transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}